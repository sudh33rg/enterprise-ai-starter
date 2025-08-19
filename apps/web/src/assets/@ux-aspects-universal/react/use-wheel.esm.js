import { useEffect } from 'react';

/**
 * React uses passive event listeners on scroll events by default (https://github.com/facebook/react/pull/19654).
 * This is problematic if we want to stopPropagation or preventDefault on the event as we cannot do that on passive
 * events.
 *
 * This hook provides a way to use a non-passive event listener on scroll events.
 */
function useWheel(ref, handler) {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }
    element.addEventListener('wheel', handler, {
      passive: false
    });
    return () => element.removeEventListener('wheel', handler);
  }, [ref, handler]);
}

export { useWheel as u };
