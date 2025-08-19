import { _ as __rest } from './_tslib.esm.js';
import { useIsSSR } from '@react-aria/ssr';
import { mergeProps, useResizeObserver } from '@react-aria/utils';
import { b as ActiveDescendantKeyManagerContext, f as focusWithModality, L as LegacyActiveDescendantKeyManager } from './focus-key-manager.esm.js';
import { useFocusRing } from '@react-aria/focus';
import { useInteractOutside } from '@react-aria/interactions';
import * as React from 'react';
import { createContext, useContext, useRef, useEffect, useState, useCallback, useMemo, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { u as useWrappedInputId } from './use-wrapped-input-id.esm.js';
import './reducer-provider.esm.js';
import { e as useFocusableControl } from './focusable-option.esm.js';
import { ao as CloseSmallIcon, ah as ChevronSmallDownIcon } from './zoom-out.esm2.js';
import PropTypes__default from 'prop-types';
import { createPortal } from 'react-dom';
import { UxaDefaultComboboxI18n, UxaDefaultSelectI18n } from '@ux-aspects-universal/core/i18n';
import { a as useChildrenOfType } from './use-children.esm.js';
import { e as emitChangeOnElement, u as useHiddenInputHtmlProps } from './use-hidden-input-html-props.esm.js';
import { aw as CloseSmallIcon$1, d as ChevronSmallDownIcon$1 } from './zoom-out.esm.js';
import { useOverlayTrigger, useOverlayPosition } from '@react-aria/overlays';
import { u as useControlled } from './use-controllable.esm.js';
import { u as useIsomorphicEffect } from './use-isomorphic-effect.esm.js';
import { u as useSlots } from './use-slots.esm.js';
import { u as useValidity } from './validity-provider.esm.js';
import { u as useLegacyActiveDescendantItem } from './use-active-descendant-item.esm.js';
import { u as useIntersectionObserver } from './use-intersection-observer.esm.js';
import { u as useUniqueId } from './use-unique-id.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';

const ComboboxI18nContext = createContext(new UxaDefaultComboboxI18n());
const defaultI18n$1 = new UxaDefaultComboboxI18n();
function useComboboxI18n() {
  var _a;
  // Use the default where none have been defined
  return (_a = useContext(ComboboxI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n$1;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectProvider = createContext({});
function useSelect$1() {
  return useContext(SelectProvider);
}

var css_248z$3 = "/**\n * Menus and Select components can have group headers.\n * The styling for these can be shared across components\n */\n.uxa-select-option,\n:host.uxa-select-option {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: var(--uxa-menu-item__border-radius);\n  height: var(--uxa-menu-item__height);\n  min-height: var(--uxa-menu-item__min-height);\n  padding-inline: var(--uxa-menu-item__padding-inline);\n  padding-block: var(--uxa-menu-item__padding-block);\n  background-color: var(--uxa-menu-item__background-color);\n  border: var(--uxa-menu-item__border);\n  color: var(--uxa-menu-item__color);\n  cursor: var(--uxa-menu-item__cursor);\n  font-family: var(--uxa-menu-item__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-menu-item__font-size);\n  font-weight: var(--uxa-menu-item__font-weight);\n  box-sizing: border-box;\n  white-space: var(--uxa-menu-item__white-space);\n  overflow: var(--uxa-menu-item__overflow);\n  text-overflow: var(--uxa-menu-item__text-overflow);\n  line-height: var(--uxa-menu-item__line-height);\n  -moz-column-gap: var(--uxa-menu-item__column-gap);\n       column-gap: var(--uxa-menu-item__column-gap);\n}\n.uxa-select-option > span,\n:host.uxa-select-option > span {\n  white-space: inherit;\n  overflow: inherit;\n  text-overflow: inherit;\n}\n.uxa-select-option.uxa-active, .uxa-select-option:hover:not(.uxa-disabled):not(.uxa-selected):not(.uxa-readonly):not(:active),\n:host.uxa-select-option.uxa-active,\n:host.uxa-select-option:hover:not(.uxa-disabled):not(.uxa-selected):not(.uxa-readonly):not(:active) {\n  background-color: var(--uxa-menu-item__background-color--hover);\n}\n.uxa-select-option:focus,\n:host.uxa-select-option:focus {\n  outline: none;\n  box-shadow: none;\n}\n.uxa-select-option:active:not(.uxa-disabled),\n:host.uxa-select-option:active:not(.uxa-disabled) {\n  background-color: var(--uxa-menu-item__background-color--active);\n}\n.uxa-select-option.uxa-focused,\n:host.uxa-select-option.uxa-focused {\n  box-shadow: var(--uxa-menu-item__box-shadow--focus);\n  background-color: var(--uxa-menu-item__background-color--focus);\n}\n.uxa-select-option.uxa-selected,\n:host.uxa-select-option.uxa-selected {\n  background-color: var(--uxa-menu-item__background-color--selected);\n  font-weight: var(--uxa-menu-item__font-weight--selected);\n  color: var(--uxa-menu-item__color--selected);\n}\n.uxa-select-option.uxa-disabled,\n:host.uxa-select-option.uxa-disabled {\n  color: var(--uxa-menu-item__color--disabled);\n  cursor: var(--uxa-menu-item__cursor--disabled);\n}\n.uxa-select-option.uxa-readonly, .uxa-select-option.uxa-readonly.uxa-active,\n:host.uxa-select-option.uxa-readonly,\n:host.uxa-select-option.uxa-readonly.uxa-active {\n  cursor: default;\n  background-color: transparent;\n}";
styleInject(css_248z$3);

function SelectOption(_a) {
  var {
      value,
      children
    } = _a,
    htmlProps = __rest(_a, ["value", "children"]);
  const ref = useRef(null);
  const select = useSelect$1();
  const isSelected = select.value === value;
  const id = useUniqueId('uxa-select-option');
  const {
    activeDescendantProps,
    activeDescendantOrigin
  } = useLegacyActiveDescendantItem(ref);
  const {
    activeDescendant,
    setActiveItem
  } = useContext(ActiveDescendantKeyManagerContext);
  const isInViewport = useIntersectionObserver(ref);
  useEffect(() => {
    if (isSelected && !(activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id) && id) {
      setActiveItem(ref, 'program');
      if (!isInViewport) {
        ref.current.scrollIntoView({
          block: 'nearest'
        });
      }
    }
  }, [activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id, id, isInViewport, isSelected, setActiveItem]);
  useEffect(() => {
    if (activeDescendant && id && (activeDescendant === null || activeDescendant === void 0 ? void 0 : activeDescendant.id) === id && !isInViewport && activeDescendantOrigin !== 'mouse') {
      ref.current.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [activeDescendant, activeDescendantOrigin, id, isInViewport]);
  return React.createElement("div", Object.assign({
    ref: ref,
    id: id
  }, mergeProps({
    role: 'option',
    'aria-selected': isSelected,
    className: clsx('uxa-select-option', {
      'uxa-selected': isSelected
    }),
    onClick: () => {
      var _a;
      return (_a = select.onSelect) === null || _a === void 0 ? void 0 : _a.call(select, value);
    },
    // prevent blur event from firing on the select and combobox component when we click an item.
    onMouseDown: event => event.preventDefault()
  }, activeDescendantProps, htmlProps)), children);
}
SelectOption.propTypes = {
  /** The value this option represents. */
  value: PropTypes__default.any,
  /** The disabled state of the item */
  isDisabled: PropTypes__default.bool
};

function useSelect({
  id,
  ariaLabelledBy,
  value,
  onValueChange,
  onChange,
  isOpen,
  onOpenChange,
  dropdownPlacement,
  isDisabled,
  onPress,
  onClose,
  onSelectOption,
  maxHeight,
  displayWith,
  controllerRef,
  defaultValue,
  children,
  clearable,
  panelWidth,
  onScrolledToEnd
}) {
  var _a;
  // if there is no value we use an internal value state
  [value, onValueChange] = useControlled(value, onValueChange, defaultValue);
  [isOpen, onOpenChange] = useControlled(isOpen, onOpenChange, false);
  // store the width of the dropdown
  const [width, setWidth] = useState(panelWidth !== null && panelWidth !== void 0 ? panelWidth : 0);
  // Dom References
  const triggerRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const activeDescendantRef = useRef(null);
  // store the list of open listeners (in a set to avoid duplicates)
  const openListeners = useRef(new Set());
  // determine if we have fired the scrolled to end event
  const firedScrolledToEnd = useRef(false);
  // find all the options
  const [options] = useSlots(children, SelectOption);
  // if the number of options changes then we need to reset the scrolled to end flag
  useEffect(() => {
    firedScrolledToEnd.current = false;
  }, [options.length]);
  // whenever the open state changes we need to inform any listeners
  useEffect(() => {
    if (isOpen) {
      openListeners.current.forEach(listener => listener());
    }
  }, [isOpen]);
  const open = useCallback(() => onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true), [onOpenChange]);
  const close = useCallback(() => {
    if (!isOpen) {
      return;
    }
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
    onClose === null || onClose === void 0 ? void 0 : onClose();
    // focus the trigger when the dropdown closes
    if (triggerRef.current) {
      focusWithModality(triggerRef.current, 'keyboard');
    }
  }, [isOpen, onOpenChange, onClose]);
  const toggle = useCallback(() => isOpen ? close() : open(), [close, isOpen, open]);
  // Get validity from context
  const {
    isValid
  } = useValidity();
  useInteractOutside({
    ref: listBoxRef,
    isDisabled: !isOpen,
    onInteractOutside(e) {
      var _a;
      // if this is an outside click but not a click on the input or one of its children then close the dropdown
      // this is to prevent it from closing and opening again as the trigger onPress is also called
      if (e.target !== triggerRef.current && !((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
        close();
      }
    }
  });
  // Props to handle the state of the overlay
  const {
    triggerProps,
    overlayProps
  } = useOverlayTrigger({
    type: 'listbox'
  }, {
    isOpen: isOpen,
    open,
    close,
    toggle,
    setOpen(isOverlayOpen) {
      isOverlayOpen ? open() : close();
    }
  }, triggerRef);
  // remove the onPress prop from triggerProps as we don't use it, it is a react-aria thing
  delete triggerProps.onPress;
  useEffect(() => {
    // warn if the user is providing a string value for maxHeight as newer versions of react-aria no longer support this
    if (typeof maxHeight === 'string') {
      console.warn('The maxHeight prop on the Select component should be a number. String values are no longer supported and will be removed in the next major release.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const overlayPlacement = dropdownPlacement === 'top' ? 'top start' : 'bottom start';
  // Props to handle the position of the overlay
  const {
    overlayProps: positionProps,
    updatePosition
  } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: listBoxRef,
    scrollRef: listBoxRef,
    placement: overlayPlacement,
    containerPadding: 0,
    shouldFlip: dropdownPlacement === 'auto',
    isOpen,
    // react-aria no longer supports a string value in newer versions.
    // This will fix the issue for most cases if they are using a number and that latest version of react-aria
    maxHeight: (_a = maxHeight) !== null && _a !== void 0 ? _a : 256,
    // we use a noop here to prevent the overlay closing unexpectedly on pages with a scrollbar
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: () => {}
  });
  const getValueAsString = useCallback(option => {
    if (option === undefined || option === null) {
      return '';
    }
    if (displayWith) {
      return displayWith(option);
    }
    if (typeof option === 'string') {
      return option;
    }
    // we can safely convert numbers to strings and they will still be serializable - even the odd cases like NaN and Infinity
    if (typeof option === 'number') {
      return option.toString();
    }
    // this is here we cannot automatically convert non-string types safely, as it may be an object that may contain values that are not serializable
    throw new Error("If options are not strings a 'displayWith' function must be provided.");
  }, [displayWith]);
  const valueId = useMemo(() => `${id}-value`, [id]);
  const onResize = useCallback(() => {
    var _a, _b;
    setWidth((_b = panelWidth !== null && panelWidth !== void 0 ? panelWidth : (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 0);
    updatePosition();
  }, [panelWidth, updatePosition]);
  const onKeyDown = useCallback(event => {
    // Prevent handled key actions from performing default behavior
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End' || event.key === 'Enter') {
      event.preventDefault();
    }
    if (!isOpen && ((dropdownPlacement === 'bottom' || dropdownPlacement === 'auto') && event.key === 'ArrowDown' || dropdownPlacement === 'top' && event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ')) {
      open();
    }
    if (event.key === 'Escape') {
      close();
    }
  }, [close, dropdownPlacement, isOpen, open]);
  // Props to handle opening the select via the trigger
  const buttonProps = {
    onKeyDown: e => {
      if (isDisabled) {
        return;
      }
      onPress === null || onPress === void 0 ? void 0 : onPress(inputRef);
      onKeyDown(e);
    },
    onClick: () => {
      if (isDisabled) {
        return;
      }
      onPress === null || onPress === void 0 ? void 0 : onPress(inputRef);
      toggle();
    }
  };
  const listboxStyle = Object.assign(Object.assign({}, positionProps.style), {
    width,
    maxHeight: maxHeight !== null && maxHeight !== void 0 ? maxHeight : undefined
  });
  // Workaround - storybook doesn't destroy component fully when switching stories
  // which leaves behind a empty list, so visibly hide it
  if (width === 0) {
    listboxStyle.display = 'none';
  }
  const {
    isFocused,
    focusProps
  } = useFocusRing();
  useResizeObserver({
    ref: triggerRef,
    onResize: onResize
  });
  // this is required, otherwise if the dropdown is defaulted to open it
  // will appear misaligned. This fixes the issue.
  useIsomorphicEffect(onResize, [onResize]);
  const onSelect = useCallback(option => {
    if (option !== undefined && option !== null) {
      close();
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(option);
      onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option, inputRef);
      // Emit the onChange event
      if (onChange && inputRef.current) {
        emitChangeOnElement(inputRef.current, getValueAsString === null || getValueAsString === void 0 ? void 0 : getValueAsString(option));
      }
    }
  }, [close, onValueChange, onSelectOption, onChange, getValueAsString]);
  const clear = useCallback(event => {
    // stop the event from propagating so it doesn't trigger the dropdown open
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(undefined);
    onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(undefined, inputRef);
    // Emit the onChange event
    if (onChange && inputRef.current) {
      emitChangeOnElement(inputRef.current, '');
    }
    // focus the trigger if this was a keyboard event
    if (inputRef.current && (event === null || event === void 0 ? void 0 : event.type) === 'keydown') {
      focusWithModality(inputRef.current, 'keyboard');
    } else if (triggerRef.current && (event === null || event === void 0 ? void 0 : event.type) === 'keydown') {
      focusWithModality(triggerRef.current, 'keyboard');
    }
  }, [onValueChange, onSelectOption, onChange]);
  // whenever the children change we need to ensure there is an active descendant
  useEffect(() => {
    var _a;
    (_a = activeDescendantRef.current) === null || _a === void 0 ? void 0 : _a.ensureActiveItem();
  }, [children, activeDescendantRef]);
  useImperativeHandle(controllerRef, () => ({
    activeDecendantRef: activeDescendantRef,
    addOpenListener(callback) {
      openListeners.current.add(callback);
    },
    removeOpenListener(callback) {
      openListeners.current.delete(callback);
    },
    onKeyDown: event => {
      var _a;
      return (_a = activeDescendantRef.current) === null || _a === void 0 ? void 0 : _a.onKeyDown(event);
    },
    focus: () => {
      if (triggerRef.current) {
        focusWithModality(triggerRef.current, 'keyboard');
      }
    }
  }), []);
  const onScroll = useCallback(event => {
    if (!onScrolledToEnd || firedScrolledToEnd.current) {
      return;
    }
    // check if the user has scrolled to the bottom of the list
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      firedScrolledToEnd.current = true;
      onScrolledToEnd === null || onScrolledToEnd === void 0 ? void 0 : onScrolledToEnd();
    }
  }, [onScrolledToEnd]);
  return {
    activeDescendantRef,
    triggerProps: Object.assign(Object.assign({
      ref: triggerRef,
      className: clsx({
        'uxa-disabled': isDisabled,
        'uxa-expanded': isOpen,
        'uxa-invalid': isValid === false
      }),
      'aria-labelledby': clsx(ariaLabelledBy, {
        [valueId]: !!value
      }) || undefined
    }, triggerProps), focusProps),
    inputProps: {
      ref: inputRef,
      type: 'text',
      onChange,
      onKeyDown
    },
    buttonProps,
    listboxProps: Object.assign(Object.assign({
      ref: listBoxRef,
      role: 'listbox',
      'data-overlay': true,
      className: 'uxa-select-option-panel'
    }, mergeProps(overlayProps, positionProps)), {
      style: listboxStyle,
      onKeyDown,
      onScroll
    }),
    valueProps: {
      id: valueId,
      className: 'uxa-select-value'
    },
    clear,
    selectValue: value,
    open,
    isDropdownOpen: isOpen,
    close,
    onSelect,
    isFocused,
    getValueAsString,
    showClearButton: value !== undefined && isDisabled !== true && clearable === true
  };
}

var css_248z$2 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n.uxa-select,\n:host.uxa-select,\n.uxa-combobox,\n:host.uxa-combobox {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  height: var(--uxa-select__height);\n  border-style: var(--uxa-select__border-style);\n  border-width: var(--uxa-select__border-width);\n  border-color: var(--uxa-select__border-color);\n  border-radius: var(--uxa-select__border-radius);\n  padding-inline: var(--uxa-select__padding-inline);\n  background-color: var(--uxa-select__background-color);\n  font-family: var(--uxa-select__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-select__font-size);\n  width: var(--uxa-select__width, 100%);\n  -moz-column-gap: var(--uxa-select__column-gap);\n       column-gap: var(--uxa-select__column-gap);\n}\n.uxa-select.uxa-small,\n:host.uxa-select.uxa-small,\n.uxa-combobox.uxa-small,\n:host.uxa-combobox.uxa-small {\n  height: var(--uxa-select__height--small);\n  padding-inline: var(--uxa-select__padding-inline--small);\n  border-radius: var(--uxa-select__border-radius--small);\n}\n.uxa-select.uxa-large,\n:host.uxa-select.uxa-large,\n.uxa-combobox.uxa-large,\n:host.uxa-combobox.uxa-large {\n  height: var(--uxa-select__height--large);\n}\n.uxa-select:focus:not(.uxa-disabled), .uxa-select:focus-within:not(.uxa-disabled),\n:host.uxa-select:focus:not(.uxa-disabled),\n:host.uxa-select:focus-within:not(.uxa-disabled),\n.uxa-combobox:focus:not(.uxa-disabled),\n.uxa-combobox:focus-within:not(.uxa-disabled),\n:host.uxa-combobox:focus:not(.uxa-disabled),\n:host.uxa-combobox:focus-within:not(.uxa-disabled) {\n  outline: none;\n  border-color: var(--uxa-select__border-color--focused);\n  box-shadow: var(--uxa-select__box-shadow--focused);\n}\n.uxa-select.uxa-focused,\n:host.uxa-select.uxa-focused,\n.uxa-combobox.uxa-focused,\n:host.uxa-combobox.uxa-focused {\n  border-color: var(--uxa-select__border-color--focused);\n}\n.uxa-select:hover:not(.uxa-disabled),\n:host.uxa-select:hover:not(.uxa-disabled),\n.uxa-combobox:hover:not(.uxa-disabled),\n:host.uxa-combobox:hover:not(.uxa-disabled) {\n  border-color: var(--uxa-select__border-color--hover);\n  background-color: var(--uxa-select__background-color--hover);\n  box-shadow: var(--uxa-select__box-shadow--hover);\n}\n.uxa-select:hover:not(.uxa-disabled) .uxa-select-value,\n:host.uxa-select:hover:not(.uxa-disabled) .uxa-select-value,\n.uxa-combobox:hover:not(.uxa-disabled) .uxa-select-value,\n:host.uxa-combobox:hover:not(.uxa-disabled) .uxa-select-value {\n  color: var(--uxa-select-value__color--hover);\n}\n.uxa-select:hover:not(.uxa-disabled) .uxa-select-arrow,\n:host.uxa-select:hover:not(.uxa-disabled) .uxa-select-arrow,\n.uxa-combobox:hover:not(.uxa-disabled) .uxa-select-arrow,\n:host.uxa-combobox:hover:not(.uxa-disabled) .uxa-select-arrow {\n  color: var(--uxa-select-arrow__color--hover);\n}\n.uxa-select:active:not(.uxa-disabled),\n:host.uxa-select:active:not(.uxa-disabled),\n.uxa-combobox:active:not(.uxa-disabled),\n:host.uxa-combobox:active:not(.uxa-disabled) {\n  background-color: var(--uxa-select__background-color--active);\n  border-color: var(--uxa-select__border-color--active);\n}\n.uxa-select:active:not(.uxa-disabled) .uxa-select-value,\n:host.uxa-select:active:not(.uxa-disabled) .uxa-select-value,\n.uxa-combobox:active:not(.uxa-disabled) .uxa-select-value,\n:host.uxa-combobox:active:not(.uxa-disabled) .uxa-select-value {\n  color: var(--uxa-select-value__color--active);\n}\n.uxa-select:active:not(.uxa-disabled) .uxa-select-arrow,\n:host.uxa-select:active:not(.uxa-disabled) .uxa-select-arrow,\n.uxa-combobox:active:not(.uxa-disabled) .uxa-select-arrow,\n:host.uxa-combobox:active:not(.uxa-disabled) .uxa-select-arrow {\n  color: var(--uxa-select-arrow__color--active);\n}\n.uxa-select.uxa-invalid,\n:host.uxa-select.uxa-invalid,\n.uxa-combobox.uxa-invalid,\n:host.uxa-combobox.uxa-invalid {\n  border-color: var(--uxa-select__border-color--invalid);\n  background-color: var(--uxa-select__background-color--invalid);\n}\n.uxa-select.uxa-invalid:hover:not(.uxa-disabled),\n:host.uxa-select.uxa-invalid:hover:not(.uxa-disabled),\n.uxa-combobox.uxa-invalid:hover:not(.uxa-disabled),\n:host.uxa-combobox.uxa-invalid:hover:not(.uxa-disabled) {\n  background-color: var(--uxa-select__background-color--hover-invalid);\n  box-shadow: var(--uxa-select__box-shadow--hover-invalid);\n  border-color: var(--uxa-select__border-color--hover-invalid);\n}\n.uxa-select.uxa-expanded,\n:host.uxa-select.uxa-expanded,\n.uxa-combobox.uxa-expanded,\n:host.uxa-combobox.uxa-expanded {\n  border-color: var(--uxa-select__border-color--expanded);\n  box-shadow: var(--uxa-select__box-shadow--expanded);\n}\n.uxa-select.uxa-disabled,\n:host.uxa-select.uxa-disabled,\n.uxa-combobox.uxa-disabled,\n:host.uxa-combobox.uxa-disabled {\n  border-color: var(--uxa-select__border-color--disabled);\n  background-color: var(--uxa-select__background-color--disabled);\n  cursor: default;\n}\n.uxa-select.uxa-disabled .uxa-select-placeholder,\n:host.uxa-select.uxa-disabled .uxa-select-placeholder,\n.uxa-combobox.uxa-disabled .uxa-select-placeholder,\n:host.uxa-combobox.uxa-disabled .uxa-select-placeholder {\n  color: var(--uxa-select-placeholder__color--disabled);\n}\n.uxa-select.uxa-disabled .uxa-select-value,\n:host.uxa-select.uxa-disabled .uxa-select-value,\n.uxa-combobox.uxa-disabled .uxa-select-value,\n:host.uxa-combobox.uxa-disabled .uxa-select-value {\n  color: var(--uxa-select-value__color--disabled);\n}\n.uxa-select.uxa-disabled .uxa-select-arrow,\n:host.uxa-select.uxa-disabled .uxa-select-arrow,\n.uxa-combobox.uxa-disabled .uxa-select-arrow,\n:host.uxa-combobox.uxa-disabled .uxa-select-arrow {\n  color: var(--uxa-select-arrow__color--disabled);\n}\n\n.uxa-select input[type=text],\n:host.uxa-select input[type=text] {\n  display: none;\n}\n\n.uxa-select-placeholder {\n  flex: 1;\n  color: var(--uxa-select-placeholder__color);\n}\n\n.uxa-select-value {\n  flex: 1;\n  font-size: var(--uxa-select-value__font-size, inherit);\n  font-weight: var(--uxa-select-value__font-weight, inherit);\n  color: var(--uxa-select-value__color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.uxa-select-arrow {\n  min-width: var(--uxa-select-arrow__min-width);\n  font-size: var(--uxa-select-arrow__font-size, inherit);\n  color: var(--uxa-select-arrow__color);\n  box-sizing: border-box;\n}\n\n.uxa-select-option-panel {\n  display: flex;\n  flex-direction: column;\n  max-height: var(--uxa-select-option-panel__max-height);\n  margin-inline: var(--uxa-select-option-panel__margin-inline);\n  margin-block: var(--uxa-select-option-panel__margin-block);\n  box-shadow: var(--uxa-select-option-panel__box-shadow);\n  border: var(--uxa-select-option-panel__border);\n  border-radius: var(--uxa-select-option-panel__border-radius);\n  background-color: var(--uxa-select-option-panel__background-color);\n  padding-inline: var(--uxa-select-option-panel__padding-inline);\n  padding-block: var(--uxa-select-option-panel__padding-block);\n  gap: var(--uxa-select-option-panel__gap);\n  overflow-y: auto;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.uxa-combobox,\n:host.uxa-combobox {\n  display: inline-flex;\n  box-sizing: border-box;\n  padding-inline: 0;\n  padding-block: 0;\n  --uxa-text-input__border: none;\n  --uxa-text-input__height: 100%;\n  --uxa-text-input__border--disabled: none;\n  --uxa-text-input__border--focused: none;\n  --uxa-text-input__border--hover: none;\n  --uxa-text-input__background-color: transparent;\n  --uxa-text-input__background-color--disabled: transparent;\n  --uxa-text-input__background-color--hover: transparent;\n  --uxa-text-input__box-shadow--hover: none;\n}\n.uxa-combobox .uxa-combobox-text-input,\n:host.uxa-combobox .uxa-combobox-text-input {\n  font-family: var(--uxa-text-input__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-text-input__font-weight);\n  font-size: var(--uxa-text-input__font-size);\n  color: var(--uxa-text-input__color);\n  background-color: var(--uxa-text-input__background-color);\n  padding-inline: var(--uxa-text-input__padding-inline);\n  padding-block-start: var(--uxa-text-input__padding-block-start);\n  padding-block-end: var(--uxa-text-input__padding-block-end);\n  height: var(--uxa-text-input__height);\n  width: var(--uxa-text-input__width);\n  border-style: var(--uxa-text-input__border-style);\n  border-width: var(--uxa-text-input__border-width);\n  border-color: var(--uxa-text-input__border-color);\n  border-radius: var(--uxa-text-input__border-radius);\n  box-sizing: border-box;\n  border: none;\n}\n.uxa-combobox .uxa-combobox-text-input::-moz-placeholder, :host.uxa-combobox .uxa-combobox-text-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-combobox .uxa-combobox-text-input::placeholder,\n:host.uxa-combobox .uxa-combobox-text-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n.uxa-combobox .uxa-combobox-text-input:focus,\n:host.uxa-combobox .uxa-combobox-text-input:focus {\n  outline: none;\n  border-color: var(--uxa-text-input__border-color--focused);\n  box-shadow: var(--uxa-text-input__box-shadow--focused);\n}\n.uxa-combobox .uxa-combobox-text-input:hover:not(:disabled),\n:host.uxa-combobox .uxa-combobox-text-input:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover);\n  background-color: var(--uxa-text-input__background-color--hover);\n  box-shadow: var(--uxa-text-input__box-shadow--hover);\n}\n.uxa-combobox .uxa-combobox-text-input.uxa-invalid,\n:host.uxa-combobox .uxa-combobox-text-input.uxa-invalid {\n  border-color: var(--uxa-text-input__border-color--invalid);\n  background-color: var(--uxa-text-input__background-color--invalid);\n  box-shadow: none;\n}\n.uxa-combobox .uxa-combobox-text-input.uxa-invalid:hover:not(:disabled),\n:host.uxa-combobox .uxa-combobox-text-input.uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover-invalid);\n  background-color: var(--uxa-text-input__background-color--hover-invalid);\n  box-shadow: var(--uxa-text-input__box-shadow--hover-invalid);\n}\n.uxa-combobox.uxa-disabled .uxa-combobox-text-input,\n:host.uxa-combobox.uxa-disabled .uxa-combobox-text-input {\n  cursor: var(--uxa-text-input__cursor--disabled);\n  color: var(--uxa-text-input__color--disabled);\n  border-color: var(--uxa-text-input__border-color--disabled);\n  background-color: var(--uxa-text-input__background-color--disabled);\n}\n.uxa-combobox.uxa-disabled .uxa-combobox-text-input::-moz-placeholder, :host.uxa-combobox.uxa-disabled .uxa-combobox-text-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-combobox.uxa-disabled .uxa-combobox-text-input::placeholder,\n:host.uxa-combobox.uxa-disabled .uxa-combobox-text-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n.uxa-combobox .uxa-combobox-trailing-addon,\n:host.uxa-combobox .uxa-combobox-trailing-addon {\n  padding-inline: var(--uxa-select__padding-inline);\n}\n.uxa-combobox.uxa-small,\n:host.uxa-combobox.uxa-small {\n  padding-inline: 0;\n}\n.uxa-combobox.uxa-small .uxa-combobox-trailing-addon,\n:host.uxa-combobox.uxa-small .uxa-combobox-trailing-addon {\n  padding-inline: var(--uxa-select__padding-inline--small);\n}\n.uxa-combobox .uxa-select-clear + .uxa-combobox-trailing-addon,\n:host.uxa-combobox .uxa-select-clear + .uxa-combobox-trailing-addon {\n  padding-inline-start: 0;\n}\n\n.uxa-select-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--uxa-select-clear-button__width);\n  height: var(--uxa-select-clear-button__height);\n  background-color: var(--uxa-select-clear-button__background-color, transparent);\n  border: var(--uxa-select-clear-button__border, none);\n  padding-inline: var(--uxa-select-clear-button__padding-inline);\n  padding-block: var(--uxa-select-clear-button__padding-block);\n  margin-inline-end: var(--uxa-select-clear-button__margin-inline-end);\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.uxa-select-clear:hover {\n  --uxa-select-clear-icon__background-color: var(\n    --uxa-select-clear-icon__background-color--hover\n  );\n}\n.uxa-select-clear:active {\n  --uxa-select-clear-icon__background-color: var(\n    --uxa-select-clear-icon__background-color--active\n  );\n}\n.uxa-select-clear.uxa-focused, .uxa-select-clear:focus-visible {\n  --uxa-select-clear-icon__background-color: var(\n    --uxa-select-clear-icon__background-color--focus\n  );\n  --uxa-select-clear-icon__box-shadow: var(--uxa-select-clear-icon__box-shadow--focus);\n}\n\n.uxa-select-clear-icon {\n  display: inline-flex;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--uxa-select-clear-icon__border-radius);\n  color: var(--uxa-select-clear-icon__color);\n  font-size: var(--uxa-select-clear-icon__font-size);\n  background-color: var(--uxa-select-clear-icon__background-color, transparent);\n  box-shadow: var(--uxa-select-clear-icon__box-shadow, none);\n}\n\n.uxa-leading-addon,\n.uxa-trailing-addon,\n:host.uxa-leading-addon,\n:host.uxa-trailing-addon {\n  display: flex;\n  align-items: center;\n  color: var(--uxa-input-group-addon-button__color, currentColor);\n  gap: var(--uxa-input-group-addon-button__gap);\n  --uxa-button__height: var(--uxa-input-group-addon-button__height);\n  --uxa-button__height--flat: var(--uxa-button__height);\n  --uxa-button__padding-inline: var(--uxa-input-group-addon-button__padding-inline);\n  --uxa-button__padding-block: var(--uxa-input-group-addon-button__padding-block);\n  --uxa-button__padding-inline--flat: var(--uxa-input-group-addon-button__padding-inline);\n  --uxa-button__padding-block--flat: var(--uxa-input-group-addon-button__padding-block);\n  --uxa-button__color--flat-secondary: var(--uxa-input-group-addon-button__color);\n  --uxa-button__border-color--flat-secondary: transparent;\n  --uxa-button__background-color--flat-secondary: transparent;\n  --uxa-button__border-color--flat-secondary-hover: transparent;\n  --uxa-button__border-color--flat-secondary-active: transparent;\n  --uxa-button__background-color--flat-secondary-active: var(\n    --uxa-input-group-addon-button__background-color--active\n  );\n  --uxa-icon-button__padding-inline: var(--uxa-button__padding-inline);\n  --uxa-icon-button__padding-block: var(--uxa-button__padding-block);\n  --uxa-icon-button-icon__size: 16px;\n}";
styleInject(css_248z$2);

function Combobox(_a) {
  var {
      placeholder,
      dropdownPlacement = 'auto',
      defaultValue,
      value,
      onValueChange,
      onChange,
      children,
      isOpen,
      onOpenChange,
      isDisabled,
      onFilterChange,
      displayWith,
      id,
      className,
      maxHeight,
      style,
      controllerRef,
      clearable,
      trigger = 'input',
      size,
      panelWidth,
      onScrolledToEnd
    } = _a,
    htmlProps = __rest(_a, ["placeholder", "dropdownPlacement", "defaultValue", "value", "onValueChange", "onChange", "children", "isOpen", "onOpenChange", "isDisabled", "onFilterChange", "displayWith", "id", "className", "maxHeight", "style", "controllerRef", "clearable", "trigger", "size", "panelWidth", "onScrolledToEnd"]);
  const {
    wrapperId,
    inputId
  } = useWrappedInputId(id, 'uxa-combobox');
  const i18n = useComboboxI18n();
  const isSSR = useIsSSR();
  // Focus search box
  const focusInput = useCallback(inputRef => {
    var _a;
    (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  }, []);
  // store the most recent change event on the input
  const [lastChangeEvent, setLastChangeEvent] = useState(null);
  const {
    triggerProps,
    inputProps,
    buttonProps,
    listboxProps,
    selectValue,
    open,
    isDropdownOpen,
    close,
    onSelect,
    isFocused,
    getValueAsString,
    activeDescendantRef,
    showClearButton,
    clear
  } = useSelect({
    id,
    value,
    onValueChange,
    onChange,
    isOpen,
    onOpenChange,
    dropdownPlacement,
    isDisabled,
    maxHeight,
    displayWith,
    children,
    controllerRef,
    clearable,
    panelWidth,
    onPress: focusInput,
    onSelectOption: (option, inputRef) => {
      var _a;
      setFilterValue(getValueAsString(option));
      if (option !== undefined) {
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      }
      // unset the most recent change event, since the value has been set programmatically
      setLastChangeEvent(null);
    },
    defaultValue,
    onScrolledToEnd
  });
  // Integrate with the Inline Edit component
  useFocusableControl({
    onFocus: () => {
      var _a, _b;
      return (_b = (_a = inputProps.ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
    }
  });
  // store the filter input text
  const [filterValue, setFilterValue] = useState(getValueAsString(selectValue));
  // if the selected value changes programmatically we need to update the filter value
  useEffect(() => {
    const filter = getValueAsString(selectValue);
    if (filter !== filterValue) {
      setFilterValue(filter);
      onFilterChange === null || onFilterChange === void 0 ? void 0 : onFilterChange(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValue]);
  const handleFilterChange = event => {
    if (!isDropdownOpen) {
      open();
    }
    setLastChangeEvent(event);
    onFilterChange === null || onFilterChange === void 0 ? void 0 : onFilterChange(event.currentTarget.value);
    setFilterValue(event.currentTarget.value);
  };
  // emit text value if no selection is made
  const emitFilterValue = useCallback(() => {
    if (lastChangeEvent) {
      onChange === null || onChange === void 0 ? void 0 : onChange(lastChangeEvent);
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(filterValue);
      setLastChangeEvent(null);
    }
    close();
  }, [close, filterValue, lastChangeEvent, onChange, onValueChange]);
  // get combobox wrapper props from triggerProps
  const wrapperTriggerProps = Object.fromEntries(['ref', 'onFocus', 'onBlur', 'className'].map(key => [key, triggerProps[key]]));
  // get combobox input aria props from triggerProps
  const inputTriggerProps = Object.fromEntries(['aria-controls', 'aria-expanded'].map(key => [key, triggerProps[key]]));
  const openOnFocus = trigger === 'focus' ? open : undefined;
  return React.createElement(SelectProvider.Provider, {
    value: {
      value: selectValue,
      onSelect
    }
  }, React.createElement(LegacyActiveDescendantKeyManager, {
    listRef: listboxProps.ref,
    isOpen: isDropdownOpen,
    ref: activeDescendantRef
  }, activeDescendantProps => React.createElement(React.Fragment, null, React.createElement("div", Object.assign({}, mergeProps(wrapperTriggerProps, {
    id: wrapperId,
    className: clsx('uxa-combobox', className, {
      'uxa-large': size === 'large',
      'uxa-small': size === 'small'
    }),
    style
  })), React.createElement("input", Object.assign({}, mergeProps(inputTriggerProps, activeDescendantProps, {
    id: inputId,
    role: 'combobox',
    className: 'uxa-combobox-text-input',
    disabled: isDisabled,
    value: filterValue,
    placeholder,
    autoFocus: isFocused,
    onChange: handleFilterChange,
    onClick: open,
    onFocus: openOnFocus,
    onBlur: emitFilterValue,
    autoComplete: 'off'
  }, inputProps, htmlProps))), showClearButton && filterValue && React.createElement("button", {
    type: "button",
    className: "uxa-select-clear",
    "aria-label": i18n.clearButtonAriaLabel,
    onClick: clear,
    onKeyDown: event => {
      if (event.key === 'Enter' || event.key === ' ') {
        clear(event);
      }
    }
  }, React.createElement("div", {
    className: "uxa-select-clear-icon"
  }, React.createElement(CloseSmallIcon, null))), React.createElement("div", Object.assign({
    className: "uxa-trailing-addon uxa-combobox-trailing-addon"
  }, buttonProps), React.createElement(ChevronSmallDownIcon, {
    className: "uxa-select-arrow"
  }))), isDropdownOpen && !isSSR && createPortal(React.createElement("div", Object.assign({}, listboxProps), children), document.body))));
}
/** Define the Prop Type information */
Combobox.propTypes = {
  /** Define the selected value. */
  value: PropTypes__default.any,
  /** Emits whenever the selected item changes. */
  onValueChange: PropTypes__default.func,
  /** Define the placeholder text to display when no value is selected/ */
  placeholder: PropTypes__default.string,
  /** Define if the dropdown should be placed above or below the select. */
  dropdownPlacement: PropTypes__default.oneOf(['top', 'bottom']),
  /** Define the open state of the dropdown. */
  isOpen: PropTypes__default.bool,
  /** Emits whenever the open state of the dropdown changes */
  onOpenChange: PropTypes__default.func,
  /** Disable the select component. */
  isDisabled: PropTypes__default.bool,
  /** Emits whenever the filter text changes. */
  onFilterChange: PropTypes__default.func,
  /** Function used to transform values to display strings. */
  displayWith: PropTypes__default.func,
  /** The max height of the option panel. Accepts a number of pixels, or any CSS value with units */
  maxHeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  /** The initial value of the component. */
  defaultValue: PropTypes__default.any,
  /** Whether the select should show a clear button. */
  clearable: PropTypes__default.bool,
  /** The trigger that will open the dropdown. */
  trigger: PropTypes__default.oneOf(['input', 'focus']),
  /** Emitted when the user scrolls to the end of the options list */
  onScrolledToEnd: PropTypes__default.func
};

const SelectI18nContext = createContext(new UxaDefaultSelectI18n());
const defaultI18n = new UxaDefaultSelectI18n();
function useSelectI18n() {
  var _a;
  // Use the default where none have been defined
  return (_a = useContext(SelectI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n;
}

function Select(_a) {
  var {
      placeholder,
      dropdownPlacement = 'auto',
      defaultValue,
      value,
      onValueChange,
      onChange,
      valueRender,
      children,
      isOpen,
      onOpenChange,
      isDisabled,
      id,
      className,
      style,
      ariaLabelledBy,
      maxHeight,
      displayWith,
      controllerRef,
      clearable,
      size,
      panelWidth,
      onScrolledToEnd
    } = _a,
    htmlProps = __rest(_a, ["placeholder", "dropdownPlacement", "defaultValue", "value", "onValueChange", "onChange", "valueRender", "children", "isOpen", "onOpenChange", "isDisabled", "id", "className", "style", "ariaLabelledBy", "maxHeight", "displayWith", "controllerRef", "clearable", "size", "panelWidth", "onScrolledToEnd"]);
  const {
    wrapperId,
    inputId
  } = useWrappedInputId(id, 'uxa-select');
  const i18n = useSelectI18n();
  const isSSR = useIsSSR();
  const {
    triggerProps,
    inputProps,
    buttonProps,
    listboxProps,
    valueProps,
    selectValue,
    isDropdownOpen,
    close,
    onSelect,
    getValueAsString,
    activeDescendantRef,
    showClearButton,
    clear
  } = useSelect({
    id: wrapperId,
    ariaLabelledBy,
    value,
    onValueChange,
    onChange,
    isOpen,
    onOpenChange,
    dropdownPlacement,
    isDisabled,
    maxHeight,
    displayWith,
    controllerRef,
    defaultValue,
    children,
    clearable,
    panelWidth,
    onScrolledToEnd
  });
  // Integrate with the Inline Edit component
  useFocusableControl({
    onFocus: () => {
      var _a, _b;
      return (_b = (_a = triggerProps.ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
    }
  });
  // store a map of the display names of all options in the list
  // this is a temporary workaround until we can make the displayWith function required.
  // previously we scanned the children to find the display name, but this caused issues when
  // adding filtering of options as the selected item may no longer be in the list to find the display name
  const displayNames = useRef(new Map());
  // Get an array of all select options. This includes options within groups.
  const selectOptions = useChildrenOfType(children, SelectOption);
  // update the display names when the options change
  useEffect(() => {
    selectOptions.forEach(option => displayNames.current.set(option.props.value, option.props.children));
  }, [selectOptions]);
  const {
    inputHtmlProps,
    wrapperHtmlProps
  } = useHiddenInputHtmlProps(htmlProps);
  return React.createElement(SelectProvider.Provider, {
    value: {
      value: selectValue,
      onSelect
    }
  }, React.createElement(LegacyActiveDescendantKeyManager, {
    listRef: listboxProps.ref,
    isOpen: isDropdownOpen,
    ref: activeDescendantRef
  }, activeDescendantProps => React.createElement(React.Fragment, null, React.createElement("div", Object.assign({}, mergeProps(triggerProps, buttonProps, {
    role: 'combobox',
    id: wrapperId,
    className: clsx('uxa-select', className, {
      'uxa-large': size === 'large',
      'uxa-small': size === 'small'
    }),
    style,
    tabIndex: isDisabled ? -1 : 0,
    onBlur: event => {
      var _a;
      // close on blur unless the focus is within the listbox, this is useful when there are focusable elements within the listbox
      // for example, a search input
      const listboxRef = listboxProps.ref;
      if (!((_a = listboxRef === null || listboxRef === void 0 ? void 0 : listboxRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
        close();
      }
    }
  }, activeDescendantProps, wrapperHtmlProps)), React.createElement("input", Object.assign({}, mergeProps({
    id: inputId,
    value: getValueAsString(selectValue),
    readOnly: true,
    tabIndex: '-1',
    'aria-hidden': 'true'
  }, inputProps, inputHtmlProps))), selectValue !== undefined ? React.createElement("div", Object.assign({}, valueProps), valueRender ? valueRender(selectValue) : displayNames.current.get(selectValue)) : React.createElement("div", {
    className: "uxa-select-placeholder"
  }, placeholder), showClearButton && React.createElement("button", {
    type: "button",
    className: "uxa-select-clear",
    "aria-label": i18n.clearButtonAriaLabel,
    onClick: clear,
    onKeyDown: event => {
      if (event.key === 'Enter' || event.key === ' ') {
        clear(event);
      }
    }
  }, React.createElement("div", {
    className: "uxa-select-clear-icon"
  }, React.createElement(CloseSmallIcon$1, null))), React.createElement(ChevronSmallDownIcon$1, {
    className: "uxa-select-arrow"
  })), isDropdownOpen && !isSSR && createPortal(React.createElement("div", Object.assign({}, listboxProps), children), document.body))));
}
/** Define the Prop Type information */
Select.propTypes = {
  /** Define the selected value. */
  value: PropTypes__default.any,
  /** Define the placeholder to display when no value is selected/ */
  placeholder: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
  /** Define if the dropdown should be placed above or below the select. */
  dropdownPlacement: PropTypes__default.oneOf(['top', 'bottom']),
  /** Define the open state of the dropdown. */
  isOpen: PropTypes__default.bool,
  /** Emits whenever the open state of the dropdown changes */
  onOpenChange: PropTypes__default.func,
  /** Render the selected value */
  valueRender: PropTypes__default.func,
  /** Disable the select component. */
  isDisabled: PropTypes__default.bool,
  /** Emits whenever the selected item changes. */
  onValueChange: PropTypes__default.func,
  /** The max height of the option panel. Accepts a number of pixels, or any CSS value with units */
  maxHeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  /** Function used to transform values to display strings. */
  displayWith: PropTypes__default.func,
  /** The initial value of the component. */
  defaultValue: PropTypes__default.any,
  /** Whether the select should show a clear button. */
  clearable: PropTypes__default.bool,
  /** Emitted when the user scrolls to the end of the options list */
  onScrolledToEnd: PropTypes__default.func
};

var css_248z$1 = ".uxa-select-feedback,\n:host.uxa-select-feedback {\n  color: var(--uxa-select-feedback__color);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: var(--uxa-menu-item__min-height);\n  padding-inline: var(--uxa-menu-item__padding-inline);\n  padding-block: var(--uxa-menu-item__padding-block);\n  box-sizing: border-box;\n}";
styleInject(css_248z$1);

var css_248z = "/**\n * Menus and Select components can have group headers.\n * The styling for these can be shared across components\n */\n.uxa-select-group-header,\n:host.uxa-select-group-header {\n  display: flex;\n  padding-inline: var(--uxa-menu-group-header__padding-inline);\n  padding-block: var(--uxa-menu-group-header__padding-block);\n  color: var(--uxa-menu-group-header__color);\n  font-family: var(--uxa-menu-group-header__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-menu-group-header__font-size);\n  font-weight: var(--uxa-menu-group-header__font-weight);\n  line-height: var(--uxa-menu-group-header__line-height);\n  cursor: var(--uxa-menu-group-header__cursor);\n}";
styleInject(css_248z);

export { Combobox as C, SelectI18nContext as S, ComboboxI18nContext as a, useSelectI18n as b, Select as c, SelectOption as d, useComboboxI18n as u };
