import { useEffect, useLayoutEffect } from "react";
/* eslint-disable react-hooks/rules-of-hooks */
function useIsomorphicEffect(effect, deps) {
    if (typeof window === "undefined") {
        useEffect(effect, deps);
    }
    else {
        // eslint-disable-next-line @nx/workspace-prefer-isomorphic-effect
        useLayoutEffect(effect, deps);
    }
}
export { useIsomorphicEffect as u };
