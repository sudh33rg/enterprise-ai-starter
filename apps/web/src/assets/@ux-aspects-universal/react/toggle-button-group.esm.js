import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import * as React from 'react';
import { useMemo, useCallback } from 'react';
import clsx from 'clsx';
import { u as useSlots } from './use-slots.esm.js';
import './reducer-provider.esm.js';
import { u as useToggleButtonContext, B as Button, T as ToggleButtonProvider } from './split-button-group.esm.js';

function ToggleButton(_a) {
  var {
      value,
      isDisabled,
      ref
    } = _a,
    props = __rest(_a, ["value", "isDisabled", "ref"]);
  const {
    isChecked,
    select,
    isGroupDisabled
  } = useToggleButtonContext();
  return React.createElement(Button, Object.assign({
    ref: ref,
    type: "button",
    primary: false,
    isDisabled: isDisabled || isGroupDisabled
  }, mergeProps({
    'aria-pressed': isChecked(value),
    className: clsx('uxa-toggle-button', {
      'uxa-selected': isChecked(value)
    }),
    onClick: () => select(value)
  }, props)));
}

function ToggleButtonGroup(_a) {
  var {
      primary,
      secondary,
      isDisabled,
      selectionMode = 'single',
      onValueChange,
      children,
      value
    } = _a,
    props = __rest(_a, ["primary", "secondary", "isDisabled", "selectionMode", "onValueChange", "children", "value"]);
  // Access the child toggle buttons
  const [toggleButtons] = useSlots(children, ToggleButton);
  // Determine the appearance of the toggle buttons
  const type = useMemo(() => {
    if (selectionMode === 'multiple') {
      return 'multiple-select';
    }
    if (selectionMode === 'radio') {
      return 'radio-select';
    }
    return toggleButtons.length === 1 ? 'individual' : 'single-select';
  }, [selectionMode, toggleButtons]);
  // Determine if an item is checked
  const isChecked = useCallback(item => Array.isArray(value) ? value.includes(item) : value === item, [value]);
  const checkItem = useCallback(item => {
    // if the item is already checked do nothing
    if (isChecked(item)) {
      return;
    }
    if (selectionMode === 'multiple') {
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(Array.isArray(value) ? [...value, item] : value ? [value, item] : [item]);
      return;
    }
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(item);
  }, [value, isChecked, onValueChange, selectionMode]);
  const uncheckItem = useCallback(item => {
    var _a;
    // if the item is not checked do nothing
    if (!isChecked(item)) {
      return;
    }
    if (isChecked(item) && selectionMode === 'radio') {
      return;
    }
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(selectionMode === 'multiple' ? [...((_a = value) !== null && _a !== void 0 ? _a : [])].filter(itm => itm !== item) : undefined);
  }, [value, isChecked, selectionMode, onValueChange]);
  const select = useCallback(item => {
    isChecked(item) ? uncheckItem(item) : checkItem(item);
  }, [isChecked, uncheckItem, checkItem]);
  return React.createElement(ToggleButtonProvider, {
    isChecked: isChecked,
    select: select,
    isGroupDisabled: isDisabled
  }, React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-toggle-button-group', {
      'uxa-primary': primary || !secondary,
      'uxa-secondary': secondary,
      'uxa-disabled': isDisabled,
      'uxa-toggle-button-group-single': type === 'individual',
      'uxa-toggle-button-group-single-select': type === 'single-select',
      'uxa-toggle-button-group-multiple-select': type === 'multiple-select',
      'uxa-toggle-button-group-radio-select': type === 'radio-select'
    }),
    role: 'group'
  }, props)), children));
}

export { ToggleButton as T, ToggleButtonGroup as a };
