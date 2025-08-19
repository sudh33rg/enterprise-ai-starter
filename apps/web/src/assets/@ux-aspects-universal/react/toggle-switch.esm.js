import { _ as __rest } from './_tslib.esm.js';
import { useFocusRing } from '@react-aria/focus';
import { useSwitch } from '@react-aria/switch';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import * as React from 'react';
import { forwardRef, useRef } from 'react';
import clsx from 'clsx';
import { u as useWrappedInputId } from './use-wrapped-input-id.esm.js';
import './reducer-provider.esm.js';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import './use-unique-id.esm.js';

var css_248z = ":host {\n  display: inline-flex;\n}\n\n.uxa-toggle-switch {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: var(--uxa-toggle-switch__spacing);\n  line-height: normal;\n  min-height: var(--uxa-toggle-switch__min-height);\n  max-width: var(--uxa-toggle-switch__max-width);\n  box-shadow: var(--uxa-toggle-switch__box-shadow);\n  cursor: var(--uxa-toggle-switch__cursor);\n  padding-inline: var(--uxa-toggle-switch__padding-inline);\n  padding-block: var(--uxa-toggle-switch__padding-block);\n  border-radius: var(--uxa-toggle-switch__border-radius);\n  background-color: var(--uxa-toggle-switch__background-color);\n  transition: var(--uxa-toggle-switch__transition);\n}\n.uxa-toggle-switch:hover:not(.uxa-disabled) {\n  --uxa-toggle-switch__background-color: var(--uxa-toggle-switch__background-color--hover);\n}\n.uxa-toggle-switch:hover:not(.uxa-disabled):not(.uxa-checked) {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--hover\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--hover);\n  --uxa-toggle-switch-thumb__inset-inline-end: var(\n    --uxa-toggle-switch-thumb__inset-inline-end--hover\n  );\n}\n.uxa-toggle-switch:hover:not(.uxa-disabled).uxa-checked {\n  --uxa-toggle-switch-track__background-color--checked: var(\n    --uxa-toggle-switch-track__background-color--checked-hover\n  );\n  --uxa-toggle-switch-track__border-color--checked: var(\n    --uxa-toggle-switch-track__border-color--checked-hover\n  );\n  --uxa-toggle-switch-thumb__inset-inline-start: var(\n    --uxa-toggle-switch-thumb__inset-inline-start--hover-checked\n  );\n}\n.uxa-toggle-switch:active:not(.uxa-disabled) {\n  --uxa-toggle-switch__background-color: var(--uxa-toggle-switch__background-color--active);\n  --uxa-toggle-switch-thumb__transform: var(--uxa-toggle-switch-thumb__transform--active);\n}\n.uxa-toggle-switch:active:not(.uxa-disabled):not(.uxa-checked) {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--active\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--active);\n}\n.uxa-toggle-switch:active:not(.uxa-disabled).uxa-checked {\n  --uxa-toggle-switch-track__background-color--checked: var(\n    --uxa-toggle-switch-track__background-color--checked-active\n  );\n  --uxa-toggle-switch-track__border-color--checked: var(\n    --uxa-toggle-switch-track__border-color--checked-active\n  );\n}\n.uxa-toggle-switch.uxa-checked {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--checked\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--checked);\n  --uxa-toggle-switch-thumb__inset-inline-start: var(\n    --uxa-toggle-switch-thumb__inset-inline-start--checked\n  );\n  --uxa-toggle-switch-thumb__inset-inline-end: var(\n    --uxa-toggle-switch-thumb__inset-inline-end--checked\n  );\n  --uxa-toggle-switch-thumb__border-color: var(--uxa-toggle-switch-thumb__border-color--checked);\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--checked\n  );\n}\n.uxa-toggle-switch.uxa-disabled {\n  --uxa-toggle-switch__cursor: var(--uxa-toggle-switch__cursor--disabled);\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--disabled\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--disabled);\n  --uxa-toggle-switch-thumb__border-color: var(--uxa-toggle-switch-thumb__border-color--disabled);\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--disabled\n  );\n  --uxa-toggle-switch-thumb__box-shadow: var(--uxa-toggle-switch-thumb__box-shadow--disabled);\n  --uxa-toggle-switch-label__color: var(--uxa-toggle-switch-label__color--disabled);\n}\n.uxa-toggle-switch.uxa-disabled.uxa-checked {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--disabled-checked\n  );\n  --uxa-toggle-switch-track__border-color: var(\n    --uxa-toggle-switch-track__border-color--disabled-checked\n  );\n  --uxa-toggle-switch-track__background-clip: var(\n    --uxa-toggle-switch-track__background-clip--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__border-color: var(\n    --uxa-toggle-switch-thumb__border-color--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__box-shadow: var(\n    --uxa-toggle-switch-thumb__box-shadow--disabled-checked\n  );\n}\n.uxa-toggle-switch.uxa-focused {\n  --uxa-toggle-switch__box-shadow: var(--uxa-toggle-switch__box-shadow--focused);\n  --uxa-toggle-switch-thumb__box-shadow: var(--uxa-toggle-switch-thumb__box-shadow--focused);\n}\n\n.uxa-toggle-switch-input {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n}\n\n.uxa-toggle-switch-control {\n  flex: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: var(--uxa-toggle-switch-control__width);\n  height: var(--uxa-toggle-switch-control__height);\n}\n\n.uxa-toggle-switch-track {\n  width: var(--uxa-toggle-switch-track__width);\n  height: var(--uxa-toggle-switch-track__height);\n  border-radius: var(--uxa-toggle-switch-track__border-radius);\n  background-color: var(--uxa-toggle-switch-track__background-color);\n  border: var(--uxa-toggle-switch-track__border-width) solid var(--uxa-toggle-switch-track__border-color);\n  transition: var(--uxa-toggle-switch-track__transition);\n  background-clip: var(--uxa-toggle-switch-track__background-clip, initial);\n}\n\n.uxa-toggle-switch-thumb {\n  box-sizing: border-box;\n  position: absolute;\n  inset-inline-start: var(--uxa-toggle-switch-thumb__inset-inline-start);\n  inset-inline-end: var(--uxa-toggle-switch-thumb__inset-inline-end);\n  width: var(--uxa-toggle-switch-thumb__width);\n  height: var(--uxa-toggle-switch-thumb__height);\n  box-shadow: var(--uxa-toggle-switch-thumb__box-shadow);\n  border-width: var(--uxa-toggle-switch-thumb__border-width);\n  border-style: var(--uxa-toggle-switch-thumb__border-style);\n  border-color: var(--uxa-toggle-switch-thumb__border-color);\n  border-radius: var(--uxa-toggle-switch-thumb__border-radius);\n  background-color: var(--uxa-toggle-switch-thumb__background-color);\n  transform: var(--uxa-toggle-switch-thumb__transform);\n  transition: var(--uxa-toggle-switch-thumb__transition);\n}\n\n.uxa-toggle-switch-label {\n  flex: 1;\n  font-family: var(--uxa-toggle-switch-label__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-toggle-switch-label__font-size);\n  font-weight: var(--uxa-toggle-switch-label__font-weight);\n  color: var(--uxa-toggle-switch-label__color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.uxa-toggle-switch-label:empty {\n  display: none;\n}";
styleInject(css_248z);

const ToggleSwitch = forwardRef((props, ref) => {
  const {
      id,
      className,
      style,
      isDisabled,
      isSelected,
      onValueChange,
      children,
      value = 'on',
      defaultSelected,
      labelPosition = 'after'
    } = props,
    htmlProps = __rest(props, ["id", "className", "style", "isDisabled", "isSelected", "onValueChange", "children", "value", "defaultSelected", "labelPosition"]);
  const state = useToggleState(Object.assign(Object.assign({}, props), {
    onChange: onValueChange,
    defaultSelected
  }));
  const inputRef = useRef(null);
  const {
    inputProps
  } = useSwitch(Object.assign({
    isSelected,
    onChange: onValueChange,
    value
  }, props), state, inputRef);
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const {
    wrapperId,
    inputId
  } = useWrappedInputId(id, 'uxa-toggle-switch');
  return React.createElement("label", {
    ref: ref,
    id: wrapperId,
    className: clsx('uxa-toggle-switch', className, {
      'uxa-checked': state.isSelected,
      'uxa-disabled': isDisabled,
      'uxa-focused': isFocusVisible
    }),
    style: style
  }, React.createElement("input", Object.assign({
    ref: inputRef
  }, mergeProps({
    className: 'uxa-toggle-switch-input'
  }, htmlProps, inputProps, focusProps), {
    id: inputId
  })), labelPosition === 'before' && React.createElement("span", {
    className: "uxa-toggle-switch-label"
  }, children), React.createElement("span", {
    className: "uxa-toggle-switch-control"
  }, React.createElement("span", {
    className: "uxa-toggle-switch-track"
  }), React.createElement("span", {
    className: "uxa-toggle-switch-thumb"
  })), labelPosition === 'after' && React.createElement("span", {
    className: "uxa-toggle-switch-label"
  }, children));
});
ToggleSwitch.propTypes = {
  /**
   * Whether the toggle-switch is checked.
   */
  isSelected: PropTypes__default.bool,
  /**
   * Form value of the toggle switch when it is checked.
   */
  value: PropTypes__default.string,
  /**
   * Whether the toggle-switch is disabled.
   */
  isDisabled: PropTypes__default.bool,
  /**
   * Emits whenever the selection state changes.
   */
  onValueChange: PropTypes__default.func,
  /**
   * Whether the toggle-switch is selected when uncontrolled.
   */
  defaultSelected: PropTypes__default.bool
};

export { ToggleSwitch };
