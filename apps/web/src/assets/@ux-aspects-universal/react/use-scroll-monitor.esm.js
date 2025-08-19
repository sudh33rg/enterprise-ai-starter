import { useState, useCallback } from 'react';
import { u as useEventListener } from './use-event-listener.esm.js';
import { u as useMutationObserver } from './use-mutation-observer.esm.js';
import { u as useResize } from './use-resize-observer.esm.js';

/* eslint-disable @typescript-eslint/naming-convention */
function useScrollMonitor({
  element,
  threshold = 0
}) {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const updateBoundaries = useCallback(() => {
    if (!element.current) {
      return;
    }
    // if the threshold is exceeded from the top, we are at the top
    setAtTop(element.current.scrollTop <= threshold);
    setAtBottom(element.current.scrollHeight - element.current.scrollTop - element.current.clientHeight <= threshold);
    setAtStart(element.current.scrollLeft <= threshold);
    setAtEnd(element.current.scrollWidth - element.current.scrollLeft - element.current.clientWidth <= threshold);
  }, [element, threshold]);
  useResize(element, updateBoundaries);
  useMutationObserver(element.current, {
    childList: true,
    subtree: true,
    characterData: true
  }, updateBoundaries);
  useEventListener(element, 'scroll', updateBoundaries);
  return {
    isOverflowing: !atTop || !atBottom || !atStart || !atEnd,
    scrollProps: {
      'data-scroll-top': atTop ? '' : undefined,
      'data-scroll-bottom': atBottom ? '' : undefined,
      'data-scroll-start': atStart ? '' : undefined,
      'data-scroll-end': atEnd ? '' : undefined
    }
  };
}

export { useScrollMonitor as u };
