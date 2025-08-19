import { useState, useEffect } from "react";
import "@react-aria/utils";
import "clsx";
import "./_tslib.esm.js";
import { u as useMutationObserver } from "./use-mutation-observer.esm.js";
import "./reducer-provider.esm.js";
/**
 * Get and watch the direction of a given element
 * @param element The element to watch
 */
function useDir(element) {
    const [direction, setDirection] = useState(element === null || element === void 0 ? void 0 : element.dir);
    useMutationObserver(element, {
        attributes: true,
        attributeFilter: ["dir"]
    }, () => {
        if ((element === null || element === void 0 ? void 0 : element.dir) !== direction) {
            setDirection(element === null || element === void 0 ? void 0 : element.dir);
        }
    });
    return direction;
}
/**
 * A utility hook to access the directionality of a specific element
 */
function useDirection() {
    let element;
    // document is not defined in SSR
    if (typeof window !== "undefined") {
        element = document;
    }
    const htmlDir = useDir(element === null || element === void 0 ? void 0 : element.documentElement);
    const bodyDir = useDir(element === null || element === void 0 ? void 0 : element.body);
    const [direction, setDirection] = useState("ltr");
    useEffect(() => {
        // the body takes precedence as it is lower down the dom tree
        const dir = bodyDir ? bodyDir : htmlDir;
        // determine the direction. this falls back to ltr in the case that 'auto' is used
        const newDirection = dir === "ltr" || dir === "rtl" ? dir : "ltr";
        if (newDirection !== direction) {
            setDirection(newDirection);
        }
    }, [htmlDir, bodyDir, direction]);
    return direction;
}
export { useDirection as u };
