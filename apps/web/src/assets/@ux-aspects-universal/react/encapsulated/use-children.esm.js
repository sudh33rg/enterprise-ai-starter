import * as React from "react";
import { useMemo } from "react";
import { i as isReactElement } from "./react-element.esm.js";
/**
 * Returns a flattened list of React children.
 * @param children - The React children to flatten.
 * @returns A flattened list of React children.
 */
function useChildren(children) {
    return useMemo(() => {
        const result = [];
        function flatten(child) {
            if (React.isValidElement(child)) {
                if (Array.isArray(child.props.children)) {
                    React.Children.forEach(child.props.children, flatten);
                }
                else {
                    result.push(child);
                }
            }
            else if (child !== null && child !== undefined && isReactElement(child)) {
                result.push(child);
            }
        }
        React.Children.forEach(children, flatten);
        return result;
    }, [children]);
}
/**
 * Returns an array of React children matching a specific type.
 * @param children - The React children to search through.
 * @param type - The component type to search for.
 * @returns An array of React children matching the specified type.
 */
function useChildrenOfType(children, type) {
    const flattenedChildren = useChildren(children);
    return useMemo(() => flattenedChildren.filter(child => child.type === type), [flattenedChildren, type]);
}
export { useChildrenOfType as a, useChildren as u };
