import { _ as __rest } from './_tslib.esm.js';
import { useFocusRing, useFocusManager } from '@react-aria/focus';
import { useRadio, useRadioGroup } from '@react-aria/radio';
import { mergeProps } from '@react-aria/utils';
import * as React from 'react';
import { forwardRef, useRef } from 'react';
import clsx from 'clsx';
import { u as useWrappedInputId } from './use-wrapped-input-id.esm.js';
import './reducer-provider.esm.js';
import PropTypes__default from 'prop-types';
import { c as createContext } from './context.esm.js';
import { s as styleInject } from './style-inject.es.esm.js';
import { useRadioGroupState } from '@react-stately/radio';
import { e as useFocusableControl } from './focusable-option.esm.js';
import './use-unique-id.esm.js';
import './validity-provider.esm.js';

const [RadioProvider, useRadioContext] = createContext({
  state: {},
  isDisabled: false,
  isReadonly: false,
  onChange: () => {}
});

var css_248z$1 = "/* Add focus outline and offset to an element */\n.uxa-radio-button {\n  display: inline-flex;\n  align-items: var(--uxa-radio-button-container__align-items);\n  cursor: var(--uxa-radio-button-container__cursor);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  border-radius: var(--uxa-radio-button-container__border-radius);\n  height: var(--uxa-radio-button-container__height);\n  background: var(--uxa-radio-button-container__background-color);\n  padding-inline: var(--uxa-radio-button-container__padding-inline);\n  padding-block: var(--uxa-radio-button-container__padding-block);\n}\n.uxa-radio-button:hover:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-radio-button-container__background-color: var(\n    --uxa-radio-button-container__background-color--hover\n  );\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--hover\n  );\n  --uxa-radio-button-indicator__border-color: var(\n    --uxa-radio-button-indicator__border-color--hover\n  );\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--hover\n  );\n}\n.uxa-radio-button:hover:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--checked-hover\n  );\n  --uxa-radio-button-indicator__border-color: var(\n    --uxa-radio-button-indicator__border-color--checked-hover\n  );\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--checked-hover\n  );\n}\n.uxa-radio-button:active:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-radio-button-container__background-color: var(\n    --uxa-radio-button-container__background-color--active\n  );\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--active\n  );\n  --uxa-radio-button-indicator__border-color: var(\n    --uxa-radio-button-indicator__border-color--active\n  );\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--active\n  );\n}\n.uxa-radio-button:active:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--checked-active\n  );\n  --uxa-radio-button-indicator__border-color: var(\n    --uxa-radio-button-indicator__border-color--checked-active\n  );\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--checked-active\n  );\n}\n.uxa-radio-button.uxa-focused {\n  z-index: 1;\n  outline-offset: 1px;\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--focus\n  );\n}\n.uxa-radio-button.uxa-focused.uxa-checked {\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--checked-focus\n  );\n}\n.uxa-radio-button.uxa-checked {\n  --uxa-radio-button-indicator__background-color: var(\n    --uxa-radio-button-indicator__background-color--checked\n  );\n  --uxa-radio-button-indicator__border-color: var(\n    --uxa-radio-button-indicator__border-color--checked\n  );\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--checked\n  );\n  --uxa-radio-button-label__font-weight: var(--uxa-radio-button-label__font-weight--checked);\n}\n.uxa-radio-button.uxa-disabled {\n  cursor: var(--uxa-radio-button__cursor--disabled);\n  --uxa-radio-button-indicator__background-clip: var(\n    --uxa-radio-button-indicator__background-clip--disabled,\n    border-box\n  );\n}\n.uxa-radio-button.uxa-disabled .uxa-radio-button-indicator {\n  background-color: var(--uxa-radio-button-indicator__background-color--disabled);\n  border-color: var(--uxa-radio-button-indicator__border-color--disabled);\n}\n.uxa-radio-button.uxa-disabled .uxa-radio-button-label {\n  color: var(--uxa-radio-button-label__color--disabled);\n}\n.uxa-radio-button.uxa-disabled.uxa-checked {\n  --uxa-radio-button-indicator-inner__background-color: var(\n    --uxa-radio-button-indicator-inner__background-color--disabled-checked\n  );\n}\n.uxa-radio-button.uxa-disabled.uxa-checked .uxa-radio-button-indicator {\n  background-color: var(--uxa-radio-button-indicator__background-color--disabled-checked);\n  border-color: var(--uxa-radio-button-indicator__border-color--disabled-checked);\n}\n.uxa-radio-button.uxa-readonly {\n  cursor: var(--uxa-radio-button__cursor--readonly);\n}\n\n.uxa-radio-button-indicator {\n  display: inline-flex;\n  flex: none;\n  background-clip: var(--uxa-radio-button-indicator__background-clip, border-box);\n  width: var(--uxa-radio-button-indicator__size);\n  height: var(--uxa-radio-button-indicator__size);\n  border-style: var(--uxa-radio-button-indicator__border-style);\n  border-width: var(--uxa-radio-button-indicator__border-width);\n  border-color: var(--uxa-radio-button-indicator__border-color);\n  border-radius: var(--uxa-radio-button-indicator__border-radius);\n  background-color: var(--uxa-radio-button-indicator__background-color);\n  margin-block: var(--uxa-radio-button-indicator__margin-block);\n}\n\n.uxa-radio-button-indicator-inner {\n  display: block;\n  /* We use an SVG here instead of a rounded div due to weird scaling issue when zooming on chrome */\n  fill: var(--uxa-radio-button-indicator-inner__background-color);\n  r: var(--uxa-radio-button-indicator-inner__size);\n}\n\n.uxa-radio-button-input {\n  border: 0;\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.uxa-radio-button-label {\n  color: var(--uxa-radio-button-label__color);\n  margin-inline-start: var(--uxa-radio-button-label__margin-inline-start);\n  font-family: var(--uxa-radio-button-label__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-radio-button-label__font-size);\n  font-weight: var(--uxa-radio-button-label__font-weight);\n  line-height: var(--uxa-radio-button-label__line-height);\n}";
styleInject(css_248z$1);

const RadioButton = forwardRef((props, ref) => {
  const {
      id,
      value,
      isDisabled = false,
      children
    } = props,
    htmlProps = __rest(props, ["id", "value", "isDisabled", "children"]);
  const {
    state,
    onChange,
    isDisabled: isGroupDisabled,
    isReadonly
  } = useRadioContext();
  const radioButtonProps = {
    value: value,
    isDisabled: isDisabled || isGroupDisabled,
    children
  };
  const inputRef = useRef(null);
  const {
    inputProps
  } = useRadio(radioButtonProps, state, inputRef);
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const isSelected = state.selectedValue === value;
  const {
    wrapperId,
    inputId
  } = useWrappedInputId(id, 'uxa-radio-button');
  return React.createElement("label", Object.assign({
    ref: ref
  }, htmlProps, {
    id: wrapperId,
    className: clsx('uxa-radio-button', {
      'uxa-checked': isSelected,
      'uxa-disabled': isDisabled || isGroupDisabled,
      'uxa-readonly': isReadonly,
      'uxa-focused': isFocusVisible
    }, props.className)
  }), React.createElement("input", Object.assign({}, mergeProps({
    ref: inputRef,
    id: inputId,
    className: 'uxa-radio-button-input',
    type: 'radio',
    onChange
  }, inputProps, focusProps,
  // we have to do this after as react aria doesn't change the tabindex base on readonly state
  {
    tabIndex: isReadonly ? -1 : inputProps.tabIndex
  }))), React.createElement("svg", {
    className: "uxa-radio-button-indicator",
    viewBox: "0 0 12 12"
  }, React.createElement("circle", {
    className: "uxa-radio-button-indicator-inner",
    cx: "50%",
    cy: "50%"
  })), React.createElement("span", {
    className: "uxa-radio-button-label"
  }, children));
});
RadioButton.propTypes = {
  isDisabled: PropTypes__default.bool,
  value: PropTypes__default.string
};

var css_248z = ".uxa-radio-button-group,\n:host.uxa-radio-button-group {\n  display: flex;\n  flex-direction: column;\n  width: -moz-max-content;\n  width: max-content;\n  gap: var(--uxa-radio-button-group__gap);\n}\n.uxa-radio-button-group.uxa-radio-button-group-horizontal,\n:host.uxa-radio-button-group.uxa-radio-button-group-horizontal {\n  flex-direction: row;\n  --uxa-radio-button-group__gap: var(--uxa-radio-button-group__gap--horizontal);\n  --uxa-radio-button-group__gap--compact: var(--uxa-radio-button-group__gap--horizontal--compact);\n  --uxa-radio-button-group__gap--spacious: var(\n    --uxa-radio-button-group__gap--horizontal--spacious\n  );\n}\n.uxa-radio-button-group.uxa-compact,\n:host.uxa-radio-button-group.uxa-compact {\n  gap: var(--uxa-radio-button-group__gap--compact);\n}\n.uxa-radio-button-group.uxa-spacious,\n:host.uxa-radio-button-group.uxa-spacious {\n  gap: var(--uxa-radio-button-group__gap--spacious);\n}";
styleInject(css_248z);

const RadioGroup = forwardRef((props, ref) => {
  const {
      children,
      orientation = 'vertical',
      density = 'regular',
      onValueChange,
      onChange,
      isDisabled = false,
      isReadonly = false
    } = props,
    htmlProps = __rest(props, ["children", "orientation", "density", "onValueChange", "onChange", "isDisabled", "isReadonly"]);
  const state = useRadioGroupState(Object.assign(Object.assign({}, props), {
    onChange: onValueChange,
    isDisabled,
    isReadOnly: isReadonly
  }));
  const {
    radioGroupProps
  } = useRadioGroup(mergeProps(props, {
    onChange: onValueChange
  }), state);
  const focusManager = useFocusManager();
  // Integrate with the Inline Edit component
  useFocusableControl({
    onFocus: () => {
      focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusFirst({
        // if there is a selected radio button, focus it, if not, focus the first radio button
        accept: el => props.value ? el instanceof HTMLInputElement && el.checked : true
      });
    }
  });
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: clsx('uxa-radio-button-group', {
      'uxa-radio-button-group-horizontal': orientation === 'horizontal',
      'uxa-compact': density === 'compact',
      'uxa-spacious': density === 'spacious'
    }),
    role: 'radiogroup'
  }, radioGroupProps, htmlProps)), React.createElement(RadioProvider, {
    state: state,
    onChange: onChange,
    isDisabled: isDisabled,
    isReadonly: isReadonly
  }, children));
});
RadioGroup.propTypes = {
  /**
   * The orientation of the radio buttons.
   */
  orientation: PropTypes__default.oneOf(['vertical', 'horizontal']),
  /**
   * The currently selected option.
   */
  value: PropTypes__default.string,
  /**
   * Function for handling updates to the selected option.
   */
  onValueChange: PropTypes__default.func,
  /**
   * The spacing between each radio button.
   * @default 'regular'
   */
  density: PropTypes__default.oneOf(['compact', 'regular', 'spacious'])
};

export { RadioButton, RadioGroup };
