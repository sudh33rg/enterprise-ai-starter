import { useRef, useEffect } from "react";
/**
 * A utility to watch for changes to a prop.
 * @param prop The props to watch for changes
 * @param callback The callback to call when the prop changes
 */
function usePropEffect(prop, callback) {
    const oldValue = useRef(undefined);
    useEffect(() => {
        if (prop !== oldValue.current) {
            callback(prop, oldValue.current);
            oldValue.current = prop;
        }
    }, [prop, callback]);
}
export { usePropEffect as u };
