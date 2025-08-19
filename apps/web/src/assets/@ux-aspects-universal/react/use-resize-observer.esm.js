import { useRef, useEffect } from 'react';

/**
 * A hook that uses the ResizeObserver API to observe changes to the size of an element.
 * React Aria does provide a useResizeObserver hook, but it is does not expose the ResizeObserverEntry.
 */
function useResizeObserver(ref, callback) {
  const resizeObserver = useRef(null);
  useEffect(() => {
    if (ref.current) {
      resizeObserver.current = new ResizeObserver(callback);
      resizeObserver.current.observe(ref.current);
    }
    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [ref, callback]);
}
/**
 * A resize observer that observes changes to the size of an element, and allows for a callback to be executed when the size changes.
 * Unlike the useResizeObserver hook, this hook allows a debounce and only emits when the dimensions change.
 */
function useResize(ref, callback, options = {
  debounce: 1
}) {
  const timeout = useRef(null);
  const previousDimensions = useRef({
    width: 0,
    height: 0
  });
  useResizeObserver(ref, ([entry]) => {
    // If the dimensions have changed, execute
    if (previousDimensions.current.width !== entry.contentRect.width || previousDimensions.current.height !== entry.contentRect.height) {
      // store the new dimensions
      previousDimensions.current = {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      // if there are any pending timeouts, clear them
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      // execute the callback
      timeout.current = window.setTimeout(() => {
        callback({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }, options.debounce);
    }
  });
}

export { useResizeObserver as a, useResize as u };
