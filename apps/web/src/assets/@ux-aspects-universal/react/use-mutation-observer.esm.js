import { useEffect } from 'react';

/**
 * A hook for watching mutations
 * @param element The element to observe
 * @param config The Mutation observer configurations
 * @param callback The function to call whenever a mutation occurs
 */
function useMutationObserver(element, config, callback) {
  // this must all be done in a useEffect to ensure that MutationObserver is defined
  // MutationObserver is not defined in SSR
  useEffect(() => {
    const observer = new MutationObserver(callback);
    if (element) {
      observer.observe(element, config);
    }
    return () => observer.disconnect();
  }, [element, config, callback]);
}

export { useMutationObserver as u };
