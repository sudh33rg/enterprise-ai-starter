import { useState, useEffect } from "react";
/**
 * A simple utility to ensure state an a prop stay in sync.
 */
function useStatefulProp(propValue) {
    const [value, setValue] = useState(propValue);
    useEffect(() => {
        if (value !== propValue) {
            setValue(propValue);
        }
        // we only want to re-trigger this effect when the external value (passed via the prop) has change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [propValue]);
    return [value, setValue];
}
export { useStatefulProp as u };
