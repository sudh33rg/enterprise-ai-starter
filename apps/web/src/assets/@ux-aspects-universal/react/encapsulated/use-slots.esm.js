import * as React from "react";
import { useMemo } from "react";
import { a as isReactElementType } from "./react-element.esm.js";
/**
 * This allows use to perform the equivalent of content projection in React
 */
function useSlots(children, ...targets) {
    return useMemo(() => {
        const output = [];
        // find all the matching slots
        for (const target of targets) {
            output.push(React.Children.toArray(children).filter(node => isReactElementType(node, target)));
        }
        // find any nodes that were not matched to a slot
        const remainingChildren = React.Children.toArray(children).filter(child => !targets.some(target => isReactElementType(child, target)));
        return [...output, remainingChildren];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, ...targets]);
}
export { useSlots as u };
