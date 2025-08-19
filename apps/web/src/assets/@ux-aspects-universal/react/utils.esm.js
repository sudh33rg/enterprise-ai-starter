export { S as Show } from './show.esm.js';
export { e as emitChangeOnElement, u as useHiddenInputHtmlProps } from './use-hidden-input-html-props.esm.js';
export { g as generateId, u as useUniqueId } from './use-unique-id.esm.js';
export { i as isReactElement, a as isReactElementType } from './react-element.esm.js';
export { u as useChildren, a as useChildrenOfType } from './use-children.esm.js';
export { u as useControlled, a as useUncontrolled } from './use-controllable.esm.js';
export { u as useDebounce } from './use-debounce.esm.js';
export { u as useElementDimensions, a as useElementRect } from './use-element-rect.esm.js';
export { u as useEventListener } from './use-event-listener.esm.js';
export { u as useIntersectionObserver } from './use-intersection-observer.esm.js';
export { u as useMutationObserver } from './use-mutation-observer.esm.js';
export { u as useOnClickOutside } from './use-outside-click.esm.js';
export { u as usePropEffect } from './use-prop-effect.esm.js';
export { u as useResize, a as useResizeObserver } from './use-resize-observer.esm.js';
export { u as useScrollMonitor } from './use-scroll-monitor.esm.js';
export { u as useSlots } from './use-slots.esm.js';
export { u as useStateRef } from './use-state-ref.esm.js';
export { u as useStatefulProp } from './use-stateful-prop.esm.js';
import { useState, useEffect, useContext } from 'react';
export { u as useWheel } from './use-wheel.esm.js';
export { u as useWrappedInputId } from './use-wrapped-input-id.esm.js';
import { R as ReducerContext } from './reducer-provider.esm.js';
export { a as Reducer } from './reducer-provider.esm.js';
export { c as createContext } from './context.esm.js';
import './_tslib.esm.js';
import 'clsx';
import './use-isomorphic-effect.esm.js';
import '@react-aria/utils';

/**
 * This is a utility hook that will get triggered whenever a value changes.
 * This is similar to useEffect, but useEffect gets triggered when any one
 * of it's dependencies changes which makes it impossible to know which
 * value changed that caused it to fire.
 *
 * @param value The current value
 * @param callback The callback that will be triggered when the value changes
 */
function useWatch(value, callback) {
  const [previousValue, setPreviousValue] = useState(value);
  useEffect(() => {
    if (value !== previousValue) {
      callback(value, previousValue);
      setPreviousValue(value);
    }
  }, [value, previousValue, callback, setPreviousValue]);
}

function useDispatch() {
  var _a;
  return (_a = useContext(ReducerContext)) === null || _a === void 0 ? void 0 : _a.dispatch;
}
function useSelector(selector) {
  var _a;
  const state = (_a = useContext(ReducerContext)) === null || _a === void 0 ? void 0 : _a.state;
  const [value, setValue] = useState(selector(state));
  useEffect(() => setValue(selector(state)), [state, selector]);
  return value;
}

export { ReducerContext, useDispatch, useSelector, useWatch };
