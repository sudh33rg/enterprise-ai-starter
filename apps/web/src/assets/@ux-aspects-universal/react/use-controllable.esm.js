import { useRef, useCallback, useState, useEffect } from 'react';

/**
 * Props are often used as the source of truth, however we want the component to function if
 * the prop and on change are not defined. This will provide default state an onChange handlers
 * if they are not provided
 * @param prop The prop value
 * @param onChange The onChange callback
 * @param defaultProp The default prop value if none is specified
 *
 */
function useControlled(prop, onChange, defaultProp) {
  // we store this in a ref so we can check if this was ever controlled, for example, a prop is provided
  // but at some point the value changes to undefined, we still want to assume the prop is controlled, just with an undefined value
  const isControlled = useRef(prop !== undefined);
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolled(defaultProp, onChange);
  // if the prop was previously uncontrolled (this would typically only happen if the prop had a value of undefined) and becomes controlled,
  // we want to store that for future reference. We will assume that a controlled prop will not become uncontrolled.
  if (isControlled.current === false && prop !== undefined) {
    isControlled.current = true;
  }
  const value = isControlled.current ? prop : uncontrolledProp;
  const setValue = useCallback(newValue => {
    if (isControlled.current) {
      if (newValue !== prop) {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
      }
    } else {
      setUncontrolledProp(newValue);
    }
  }, [onChange, setUncontrolledProp, prop]);
  return [value, setValue];
}
function useUncontrolled(defaultProp, onChange) {
  const [value, setValue] = useState(defaultProp);
  const previousValue = useRef(value);
  useEffect(() => {
    if (previousValue.current !== value) {
      onChange === null || onChange === void 0 ? void 0 : onChange(value);
      previousValue.current = value;
    }
  }, [value, previousValue, onChange]);
  return [value, setValue];
}

export { useUncontrolled as a, useControlled as u };
