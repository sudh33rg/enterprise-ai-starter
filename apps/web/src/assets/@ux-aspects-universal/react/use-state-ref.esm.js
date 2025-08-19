import { useState, useRef } from 'react';

/**
 * A utility hook similar to use state, however that doesn't require a render to get the latest values.
 */
function useStateRef(initialValue) {
  const [state, setState] = useState(initialValue);
  const ref = useRef(state);
  const setRefState = value => {
    ref.current = value;
    setState(value);
  };
  return [() => ref.current, setRefState];
}

export { useStateRef as u };
