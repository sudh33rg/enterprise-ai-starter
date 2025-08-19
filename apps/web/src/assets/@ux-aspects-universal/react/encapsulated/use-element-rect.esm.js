import "clsx";
import { useState, useCallback } from "react";
import { u as useIsomorphicEffect } from "./use-isomorphic-effect.esm.js";
import { useResizeObserver } from "@react-aria/utils";
function useElementDimensions(element, didResize) {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });
    const onResize = useCallback(() => {
        if (!element.current) {
            return;
        }
        else {
            const { width, height } = element.current.getBoundingClientRect();
            if ((width === dimensions.width || height === dimensions.height) && (width !== dimensions.width || height !== dimensions.height)) {
                setDimensions({
                    width,
                    height
                });
                didResize === null || didResize === void 0 ? void 0 : didResize();
            }
        }
    }, [element, didResize, dimensions]);
    // this is required, otherwise if the popover is defaulted to open
    // the arrow may appear misaligned. This fixes the issue.
    useIsomorphicEffect(onResize, [onResize]);
    useResizeObserver({
        ref: element,
        onResize: onResize
    });
    return dimensions;
}
function useElementRect(ref, callback) {
    const [rect, setRect] = useState({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 0,
        width: 0
    });
    const [shouldUpdate, setShouldUpdate] = useState(true);
    useIsomorphicEffect(() => {
        if (!ref.current || !shouldUpdate) {
            return;
        }
        const newRect = ref.current.getBoundingClientRect();
        // check if the rect has changed
        if (newRect.top !== rect.top || newRect.left !== rect.left || newRect.bottom !== rect.bottom || newRect.right !== rect.right || newRect.height !== rect.height || newRect.width !== rect.width) {
            setRect(newRect);
            callback === null || callback === void 0 ? void 0 : callback();
        }
        setShouldUpdate(false);
    }, [ref, ref.current, rect, shouldUpdate]);
    // manually trigger an update of the rect
    const update = useCallback(() => setShouldUpdate(true), []);
    // listen for the element to resize
    useElementDimensions(ref, () => update());
    return {
        rect,
        update
    };
}
export { useElementRect as a, useElementDimensions as u };
