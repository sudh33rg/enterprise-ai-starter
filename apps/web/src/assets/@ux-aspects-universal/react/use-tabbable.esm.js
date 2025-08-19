import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { u as useDirection } from './direction.esm.js';
import { useContext, useMemo, useState, useEffect } from 'react';
import 'clsx';
import './_tslib.esm.js';
import { u as useUniqueId } from './use-unique-id.esm.js';
import './reducer-provider.esm.js';
import { F as FocusKeyManagerContext } from './focus-key-manager.esm.js';

function useFocusManager() {
  return useContext(FocusKeyManagerContext);
}

function useFocusableRef({
  id,
  disabled,
  ref,
  isFocused,
  value
}) {
  return useMemo(() => ({
    id,
    disabled,
    ref,
    isFocused,
    value
  }), [id, disabled, ref, isFocused, value]);
}

function useTabbable(ref, {
  id,
  isDisabled,
  value
} = {}) {
  const {
    addItem,
    removeItem,
    setActiveItem,
    focusFirst,
    focusLast,
    focusNext,
    focusPrevious,
    orientation,
    setDisabled,
    focusBelow,
    focusAbove,
    onFocusItemChange
  } = useFocusManager();
  id = useUniqueId('uxa-focusable-item', id);
  const direction = useDirection();
  const [tabIndex, setTabIndex] = useState(-1);
  const focusableRef = useFocusableRef({
    id,
    ref,
    value,
    disabled: isDisabled !== null && isDisabled !== void 0 ? isDisabled : false
  });
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  focusableRef.isFocused = isFocusVisible;
  // add and remove the item from the list of items
  useEffect(() => {
    addItem(focusableRef);
    return () => removeItem(focusableRef);
  }, [addItem, removeItem, focusableRef, focusPrevious]);
  // listen for changes to the active item
  useEffect(() => {
    return onFocusItemChange(activeItem => setTabIndex(focusableRef.ref === (activeItem === null || activeItem === void 0 ? void 0 : activeItem.ref) ? 0 : -1));
  }, [focusableRef.ref, onFocusItemChange]);
  // function to activate the current item
  const onFocus = () => setActiveItem(id);
  // handle keydown events
  const onKeyDown = event => {
    switch (event.key) {
      case 'ArrowDown':
        if (orientation === 'vertical') {
          focusNext();
          event.preventDefault();
        }
        if (orientation === 'grid') {
          focusBelow();
          event.preventDefault();
        }
        break;
      case 'ArrowRight':
        if (orientation === 'horizontal' || orientation === 'grid') {
          direction === 'ltr' ? focusNext() : focusPrevious();
        }
        break;
      case 'ArrowUp':
        if (orientation === 'vertical') {
          focusPrevious();
          event.preventDefault();
        }
        if (orientation === 'grid') {
          focusAbove();
          event.preventDefault();
        }
        break;
      case 'ArrowLeft':
        if (orientation === 'horizontal' || orientation === 'grid') {
          direction === 'ltr' ? focusPrevious() : focusNext();
        }
        break;
      case 'Home':
        focusFirst();
        event.preventDefault();
        break;
      case 'End':
        focusLast();
        event.preventDefault();
        break;
    }
  };
  // listen for events and update list accordingly
  const tabbableProps = mergeProps({
    onFocus,
    onKeyDown
  }, focusProps);
  // update the item disabled state
  setDisabled(focusableRef, isDisabled !== null && isDisabled !== void 0 ? isDisabled : false);
  return {
    tabIndex,
    setActive: onFocus,
    tabbableProps
  };
}

export { useFocusableRef as a, useTabbable as b, useFocusManager as u };
