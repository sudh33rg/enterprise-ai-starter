import { useEffect } from "react";
function useDebounce(callback, timeout, deps) {
    useEffect(() => {
        const timer = setTimeout(callback, timeout);
        return () => clearTimeout(timer);
    }, [callback, timeout, deps]);
}
export { useDebounce as u };
