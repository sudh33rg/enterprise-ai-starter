import * as React from 'react';
import { useMemo } from 'react';

// store all the used ids
const ids = new Map();
function generateId(prefix) {
  const index = ids.has(prefix) ? ids.get(prefix) + 1 : 0;
  ids.set(prefix, index);
  return `${prefix}-${index}`;
}

function useReactId(prefix, defaultId) {
  // this weird way of calling this hook is to prevent issues that can occur in webpack in older verisons of React.
  // this prevents it from being statically analyzed.
  const useId = 'useId';
  const id = React[useId]();
  return defaultId || `${prefix}-${id}`;
}
/**
 * Generate a unique Id that will remain fixed across component re-renders
 * @param prefix The unique id prefix
 * @param id Use this id instead of generating a new one if it is defined
 */
function useUniqueId(prefix, id) {
  // Use React.useId in React 18 if available, otherwise fall back to our old implementation.
  if ('useId' in React) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useReactId(prefix, id);
  }
  return useMemo(() => id !== null && id !== void 0 ? id : generateId(prefix), [id, prefix]);
}

export { generateId as g, useUniqueId as u };
