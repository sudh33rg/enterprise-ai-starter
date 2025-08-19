import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // if the element has a data-overlay attribute, or is within an element with a data-overlay attribute, do not close
      if (event.target && event.target instanceof HTMLElement && event.target.closest('[data-overlay]')) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

export { useOnClickOutside as u };
