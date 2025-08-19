import { useEffect } from "react";
/**
 * Allows us to add an event handler to an element that is not part of the components JSX
 */
function useEventListener(ref, type, listener) {
    useEffect(() => {
        var _a;
        // this function needs to be cast as any to support the various types of events otherwsie TS complains
        /* eslint-disable-next-line */
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener(type, listener);
        /* eslint-disable-next-line */
        return () => {
            var _a;
            return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(type, listener);
        };
    }, [ref, type, listener]);
}
export { useEventListener as u };
