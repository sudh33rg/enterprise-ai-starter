import { UxaDefaultInlineEditI18n } from '@ux-aspects-universal/core/i18n';
import * as React from 'react';
import { createContext, useContext, forwardRef, useRef, useState, useCallback } from 'react';
import { _ as __rest } from './_tslib.esm.js';
import { useFocusRing, FocusScope } from '@react-aria/focus';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { d as detectModality, f as focusWithModality } from './focus-key-manager.esm.js';
import { S as Show } from './show.esm.js';
import { u as useControlled } from './use-controllable.esm.js';
import clsx from 'clsx';
import { u as useOnClickOutside } from './use-outside-click.esm.js';
import './reducer-provider.esm.js';
import { d as FocusableControlProvider } from './focusable-option.esm.js';
import { flushSync } from 'react-dom';
import { c as createContext$1 } from './context.esm.js';
import { I as IconButton } from './split-button-group.esm.js';
import { bu as EditSmIcon, bv as EditIcon, ao as CloseSmallIcon, ew as UndoIcon, a6 as CheckmarkIcon } from './zoom-out.esm2.js';
import { s as styleInject } from './style-inject.es.esm.js';
import './use-unique-id.esm.js';
import 'prop-types';
import '@react-aria/interactions';
import './validity-provider.esm.js';
import './prop-types.esm.js';
import './direction.esm.js';
import './use-mutation-observer.esm.js';

const InlineEditI18nContext = createContext(new UxaDefaultInlineEditI18n());
const defaultI18n = new UxaDefaultInlineEditI18n();
function useInlineEditI18n() {
  var _a;
  // Use the default where none have been defined
  return (_a = useContext(InlineEditI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n;
}

const [InlineEditContext, useInlineEditContext] = createContext$1();

const InlineEditBeginEditingButton = forwardRef((props, ref) => {
  const {
    size,
    editButtonAriaLabel,
    startEditing
  } = useInlineEditContext();
  return React.createElement(IconButton, Object.assign({
    ref: ref
  }, mergeProps({
    flat: true,
    secondary: true,
    size: size === 'small' ? 'extra-small' : 'small',
    icon: size === 'small' ? React.createElement(EditSmIcon, null) : React.createElement(EditIcon, null),
    onClick: startEditing,
    'aria-label': editButtonAriaLabel,
    tabIndex: -1
  }, props)));
});

const InlineEditCancelButton = forwardRef((props, ref) => {
  const {
    size,
    cancel,
    cancelButtonAriaLabel
  } = useInlineEditContext();
  return React.createElement(IconButton, Object.assign({
    ref: ref
  }, mergeProps({
    flat: true,
    secondary: true,
    size,
    icon: React.createElement(CloseSmallIcon, null),
    onClick: e => cancel(detectModality(e)),
    'aria-label': cancelButtonAriaLabel
  }, props)));
});

const InlineEditResetButton = forwardRef((props, ref) => {
  const {
    size,
    reset,
    canReset,
    resetButtonAriaLabel
  } = useInlineEditContext();
  return React.createElement(IconButton, Object.assign({
    ref: ref
  }, mergeProps({
    flat: true,
    secondary: true,
    size,
    icon: React.createElement(UndoIcon, null),
    onClick: e => reset(detectModality(e)),
    isDisabled: !canReset,
    'aria-label': resetButtonAriaLabel
  }, props)));
});

const InlineEditSaveButton = forwardRef((props, ref) => {
  const {
    size,
    save,
    canSave,
    hasChanged,
    saveButtonAriaLabel
  } = useInlineEditContext();
  return React.createElement(IconButton, Object.assign({
    ref: ref
  }, mergeProps({
    flat: true,
    secondary: true,
    size,
    icon: React.createElement(CheckmarkIcon, null),
    onClick: e => save(detectModality(e)),
    isDisabled: !canSave || !hasChanged,
    'aria-label': saveButtonAriaLabel
  }, props)));
});

var css_248z = ":host,\n.uxa-inline-edit {\n  display: flex;\n  gap: var(--uxa-inline-edit__gap);\n  position: relative;\n  box-sizing: border-box;\n}\n:host.uxa-small,\n.uxa-inline-edit.uxa-small {\n  --uxa-inline-edit-label-container__min-height: var(\n    --uxa-inline-edit-label-container__min-height--small\n  );\n  --uxa-inline-edit-label-container__padding-block: var(\n    --uxa-inline-edit-label-container__padding-block--small\n  );\n  --uxa-inline-edit-label__padding-block: var(--uxa-inline-edit-label__padding-block--small);\n}\n:host.uxa-medium,\n.uxa-inline-edit.uxa-medium {\n  --uxa-inline-edit-label-container__min-height: var(\n    --uxa-inline-edit-label-container__min-height--medium\n  );\n  --uxa-inline-edit-label-container__padding-block: var(\n    --uxa-inline-edit-label-container__padding-block--medium\n  );\n  --uxa-inline-edit-label__padding-block: var(--uxa-inline-edit-label__padding-block--medium);\n}\n:host.uxa-large,\n.uxa-inline-edit.uxa-large {\n  --uxa-inline-edit-label-container__min-height: var(\n    --uxa-inline-edit-label-container__min-height--large\n  );\n  --uxa-inline-edit-label-container__padding-block: var(\n    --uxa-inline-edit-label-container__padding-block--large\n  );\n  --uxa-inline-edit-label__padding-block: var(--uxa-inline-edit-label__padding-block--large);\n}\n\n.uxa-inline-edit-control {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.uxa-inline-edit-label-container {\n  transition: var(--uxa-inline-edit-label-container__transition);\n  transition-delay: var(--uxa-inline-edit-label-container__transition-delay);\n  cursor: var(--uxa-inline-edit-label-container__cursor);\n  border-radius: var(--uxa-inline-edit-label-container__border-radius);\n  display: inline-flex;\n  gap: var(--uxa-inline-edit-label-container__gap);\n  box-sizing: border-box;\n  min-height: var(--uxa-inline-edit-label-container__min-height);\n  padding-block: var(--uxa-inline-edit-label-container__padding-block);\n}\n.uxa-inline-edit-label-container:hover {\n  background: var(--uxa-inline-edit-label-container__background--hover);\n  padding-inline: var(--uxa-inline-edit-label-container__padding-inline--hover);\n  --uxa-inline-edit-actions__opacity: var(--uxa-inline-edit-actions__opacity--hover);\n}\n.uxa-inline-edit-label-container:has(.uxa-inline-edit-label.uxa-focused) {\n  --uxa-inline-edit-actions__opacity: var(--uxa-inline-edit-actions__opacity--focus);\n  --uxa-inline-edit-actions__transition: var(--uxa-inline-edit-actions__transition--focus);\n}\n\n.uxa-inline-edit-label {\n  font-size: var(--uxa-inline-edit-label__font-size);\n  line-height: var(--uxa-inline-edit-label__line-height);\n  margin-block-end: var(--uxa-inline-edit-label__margin-block-end);\n  color: var(--uxa-inline-edit-label__color);\n  cursor: var(--uxa-inline-edit-label__cursor);\n  border: none;\n  background: transparent;\n  border-radius: var(--uxa-inline-edit-label__border-radius);\n  overflow: hidden;\n  word-break: break-all;\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--uxa-inline-edit-label__row-gap);\n  box-sizing: border-box;\n  white-space: pre-wrap;\n  padding-inline: 0;\n  padding-block: var(--uxa-inline-edit-label__padding-block);\n  text-align: start;\n}\n.uxa-inline-edit-label:focus {\n  outline: none;\n}\n.uxa-inline-edit-label.uxa-focused {\n  outline: var(--uxa-focus-outline__width) var(--uxa-focus-outline__style) var(--uxa-focus-outline__color);\n  outline-offset: var(--uxa-focus-outline__offset);\n}\n\n.uxa-inline-edit-placeholder {\n  color: var(--uxa-inline-edit-placeholder__color);\n  font-weight: var(--uxa-inline-edit-placeholder__font-weight);\n}\n\n.uxa-inline-edit-actions {\n  display: flex;\n  gap: var(--uxa-inline-edit-actions__gap);\n  opacity: var(--uxa-inline-edit-actions__opacity);\n  transition: var(--uxa-inline-edit-actions__transition);\n  transition-delay: var(--uxa-inline-edit-actions__transition-delay);\n  box-sizing: border-box;\n}\n.uxa-inline-edit-actions:focus-within {\n  opacity: var(--uxa-inline-edit-actions__opacity--focus);\n}\n\n.uxa-inline-edit-editing-actions {\n  display: flex;\n  gap: var(--uxa-inline-edit-editing-actions__gap);\n  box-sizing: border-box;\n}";
styleInject(css_248z);

function InlineEditFn(_a, ref) {
  var {
      value,
      isEditing,
      canSave = true,
      canReset = false,
      size = 'medium',
      placeholder,
      formatter = defaultFormatter,
      editButtonAriaLabel,
      saveButtonAriaLabel,
      cancelButtonAriaLabel,
      resetButtonAriaLabel,
      onEditingChange,
      onReset,
      onSave,
      onCancel,
      children,
      saveButton = () => React.createElement(InlineEditSaveButton, null),
      cancelButton = () => React.createElement(InlineEditCancelButton, null),
      resetButton = () => React.createElement(InlineEditResetButton, null),
      editButton = () => React.createElement(InlineEditBeginEditingButton, null)
    } = _a,
    props = __rest(_a, ["value", "isEditing", "canSave", "canReset", "size", "placeholder", "formatter", "editButtonAriaLabel", "saveButtonAriaLabel", "cancelButtonAriaLabel", "resetButtonAriaLabel", "onEditingChange", "onReset", "onSave", "onCancel", "children", "saveButton", "cancelButton", "resetButton", "editButton"]);
  const i18n = useInlineEditI18n();
  const inlineEditRef = useRef(null);
  const [resetValue, setResetValue] = useState(undefined);
  const labelRef = useRef(null);
  const focusHandler = useRef();
  [isEditing, onEditingChange] = useControlled(isEditing, onEditingChange, false);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const hasChanged = resetValue !== value;
  // close the inline edit when clicking outside
  useOnClickOutside(inlineEditRef, () => save('pointer'));
  const displayValues = () => {
    if (value !== undefined && value !== null) {
      const formattedValue = formatter(value);
      if (formattedValue && formattedValue.length > 0) {
        return Array.isArray(formattedValue) ? formattedValue : [formattedValue];
      }
    }
    return [];
  };
  const startEditing = () => {
    var _a;
    if (isEditing) {
      return;
    }
    flushSync(() => onEditingChange(true));
    setResetValue(value);
    (_a = focusHandler.current) === null || _a === void 0 ? void 0 : _a.call(focusHandler);
  };
  const stopEditing = modality => {
    if (!isEditing) {
      return;
    }
    flushSync(() => onEditingChange(false));
    if (labelRef.current) {
      focusWithModality(labelRef.current, modality);
    }
  };
  const save = modality => {
    if (!hasChanged) {
      stopEditing(modality);
      return;
    }
    if (!isEditing || !canSave) {
      return;
    }
    onSave === null || onSave === void 0 ? void 0 : onSave();
    stopEditing(modality);
  };
  const cancel = modality => {
    if (!isEditing) {
      return;
    }
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(resetValue);
    setResetValue(undefined);
    stopEditing(modality);
  };
  const reset = modality => {
    onReset === null || onReset === void 0 ? void 0 : onReset();
    stopEditing(modality);
  };
  const setFocusHandler = useCallback(handler => {
    focusHandler.current = handler;
  }, []);
  return React.createElement(InlineEditContext, {
    size: size,
    save: save,
    cancel: cancel,
    reset: reset,
    startEditing: startEditing,
    canReset: canReset,
    canSave: canSave,
    hasChanged: hasChanged,
    saveButtonAriaLabel: saveButtonAriaLabel !== null && saveButtonAriaLabel !== void 0 ? saveButtonAriaLabel : i18n.saveButtonAriaLabel,
    editButtonAriaLabel: editButtonAriaLabel !== null && editButtonAriaLabel !== void 0 ? editButtonAriaLabel : i18n.editButtonAriaLabel,
    cancelButtonAriaLabel: cancelButtonAriaLabel !== null && cancelButtonAriaLabel !== void 0 ? cancelButtonAriaLabel : i18n.cancelButtonAriaLabel,
    resetButtonAriaLabel: resetButtonAriaLabel !== null && resetButtonAriaLabel !== void 0 ? resetButtonAriaLabel : i18n.resetButtonAriaLabel
  }, React.createElement(FocusableControlProvider, {
    setOnFocus: setFocusHandler
  }, React.createElement(FocusScope, {
    contain: isEditing
  }, React.createElement("div", Object.assign({
    ref: mergeRefs(inlineEditRef, ref)
  }, mergeProps({
    className: clsx('uxa-inline-edit', {
      'uxa-small': size === 'small',
      'uxa-medium': size === 'medium',
      'uxa-large': size === 'large'
    }),
    onKeyDown: e => {
      if (e.key === 'Escape') {
        cancel('keyboard');
      }
    }
  }, props)), React.createElement(Show, {
    when: isEditing
  }, React.createElement("div", {
    className: "uxa-inline-edit-control",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        // if the target is a text area then don't save the value as we may want to add a new line
        if (e.target instanceof HTMLTextAreaElement) {
          return;
        }
        save('keyboard');
        e.preventDefault();
      }
    }
  }, children), React.createElement("div", {
    className: "uxa-inline-edit-editing-actions"
  }, saveButton(), cancelButton())), React.createElement(Show, {
    when: !isEditing
  }, React.createElement("div", {
    className: "uxa-inline-edit-label-container"
  }, React.createElement("button", Object.assign({
    ref: labelRef,
    className: clsx('uxa-inline-edit-label', {
      'uxa-focused': isFocusVisible
    }),
    onClick: startEditing
  }, focusProps), React.createElement(Show, {
    when: displayValues().length > 0,
    fallback: React.createElement("span", {
      className: "uxa-inline-edit-placeholder"
    }, placeholder !== null && placeholder !== void 0 ? placeholder : i18n.placeholder)
  }, displayValues().map((displayValue, index) => React.createElement("span", {
    key: index
  }, displayValue)))), React.createElement("div", {
    className: "uxa-inline-edit-actions"
  }, editButton(), React.createElement(Show, {
    when: canReset && value !== undefined
  }, resetButton()))))))));
}
// We have to cast the return type to ReturnType<typeof InlineEditFn> because the forwardRef function
// does not allow generic types to be passed to the component.
const InlineEdit = forwardRef(InlineEditFn);
const defaultFormatter = value => {
  // if this is a string, number or boolean, return it as a string
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  }
  // if the value is an array of strings, join them with a new line
  if (Array.isArray(value)) {
    return value.map(defaultFormatter);
  }
  // otherwise throw an error
  throw new Error(`The inline edit component does not support values of type ${typeof value}. Please provide a custom format function.`);
};

export { InlineEdit, InlineEditBeginEditingButton, InlineEditCancelButton, InlineEditI18nContext, InlineEditResetButton, InlineEditSaveButton, useInlineEditI18n };
