import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import { aw as CloseSmallIcon } from './zoom-out.esm.js';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { createContext, useContext, forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { s as styleInject } from './style-inject.es.esm.js';
import './prop-types.esm.js';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './reducer-provider.esm.js';
import './use-unique-id.esm.js';

var css_248z$1 = "/* Add focus outline and offset to an element */\n:host,\n.uxa-alert-dismiss {\n  flex: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: inherit;\n  border: var(--uxa-alert-dismiss__border);\n  background-color: var(--uxa-alert-dismiss__background-color);\n  cursor: var(--uxa-alert-dismiss__cursor);\n  padding-inline: var(--uxa-alert-dismiss__padding-inline);\n  padding-block: var(--uxa-alert-dismiss__padding-block);\n  margin-inline-start: var(--uxa-alert-dismiss__margin-inline-start);\n  border-radius: var(--uxa-alert-dismiss__border-radius);\n  min-width: var(--uxa-alert-dismiss__min-width);\n}\n:host:focus,\n.uxa-alert-dismiss:focus {\n  outline: none;\n}\n:host.uxa-focused, :host:focus-visible,\n.uxa-alert-dismiss.uxa-focused,\n.uxa-alert-dismiss:focus-visible {\n  z-index: 1;\n  outline-offset: var(--uxa-alert-dismiss__outline-offset--focus);\n  outline: rgba(var(--uxa-color__white--rgb), 0.65) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}";
styleInject(css_248z$1);

// default i18n values
const defaultAlertI18n = {
  dismissButtonAriaLabel: 'Dismiss Alert'
};
const AlertI18nContext = createContext(defaultAlertI18n);
const useAlertI18n = () => useContext(AlertI18nContext);

const AlertDismissButton = forwardRef((_a, ref) => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const {
    dismissButtonAriaLabel
  } = useAlertI18n();
  return React.createElement("button", Object.assign({
    ref: ref,
    type: "button",
    "aria-label": dismissButtonAriaLabel
  }, mergeProps(props, focusProps, {
    className: clsx('uxa-alert-dismiss', {
      'uxa-focused': isFocusVisible
    })
  })), children);
});

var css_248z = ".uxa-alert,\n:host.uxa-alert {\n  display: flex;\n  align-items: flex-start;\n  font-family: var(--uxa-alert__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-alert__font-size);\n  font-weight: var(--uxa-alert__font-weight);\n  min-height: var(--uxa-alert__min-height);\n  line-height: var(--uxa-alert__line-height);\n  border-width: var(--uxa-alert__border-width);\n  border-style: var(--uxa-alert__border-style);\n  border-color: var(--uxa-alert__border-color);\n  padding-inline: var(--uxa-alert__padding-inline);\n  padding-block: var(--uxa-alert__padding-block);\n  background-color: var(--uxa-alert__background-color);\n  color: var(--uxa-alert__color);\n  box-sizing: border-box;\n  width: 100%;\n  --uxa-typography-link__font-weight: var(--uxa-alert-link__font-weight);\n  --uxa-typography-link__font-size: var(--uxa-alert__font-size);\n  --uxa-typography-link__color: var(--uxa-alert__color);\n  --uxa-typography-link__color--hover: var(--uxa-alert__color);\n  --uxa-typography-link__color--focus: var(--uxa-alert__color);\n  --uxa-typography-link__color--active: var(--uxa-alert__color);\n  --uxa-typography-link__color--visited: var(--uxa-alert__color);\n  --uxa-typography-link__opacity--hover: 0.8;\n  --uxa-typography-link__outline-color--focus: rgba(var(--uxa-color__white--rgb), 0.65);\n  --uxa-typography-link__outline-offset--focus: 2px;\n}\n.uxa-alert.uxa-status-info,\n:host.uxa-alert.uxa-status-info {\n  --uxa-alert__border-color: var(--uxa-alert__border-color--info);\n  --uxa-alert__background-color: var(--uxa-alert__background-color--info);\n  --uxa-alert__color: var(--uxa-alert__color--info);\n}\n.uxa-alert.uxa-status-error,\n:host.uxa-alert.uxa-status-error {\n  --uxa-alert__border-color: var(--uxa-alert__border-color--error);\n  --uxa-alert__background-color: var(--uxa-alert__background-color--error);\n  --uxa-alert__color: var(--uxa-alert__color--error);\n}\n.uxa-alert.uxa-status-success,\n:host.uxa-alert.uxa-status-success {\n  --uxa-alert__border-color: var(--uxa-alert__border-color--success);\n  --uxa-alert__background-color: var(--uxa-alert__background-color--success);\n  --uxa-alert__color: var(--uxa-alert__color--success);\n}\n.uxa-alert.uxa-status-warning,\n:host.uxa-alert.uxa-status-warning {\n  --uxa-alert__border-color: var(--uxa-alert__border-color--warning);\n  --uxa-alert__background-color: var(--uxa-alert__background-color--warning);\n  --uxa-alert__color: var(--uxa-alert__color--warning);\n}\n.uxa-alert.uxa-status-dark,\n:host.uxa-alert.uxa-status-dark {\n  --uxa-alert__border-color: var(--uxa-alert__border-color--dark);\n  --uxa-alert__background-color: var(--uxa-alert__background-color--dark);\n  --uxa-alert__color: var(--uxa-alert__color--dark);\n}\n\n.uxa-alert-icon {\n  flex: none;\n  font-size: var(--uxa-alert-icon__font-size);\n  width: var(--uxa-alert-icon__width);\n  height: var(--uxa-alert-icon__height);\n  margin-inline-end: var(--uxa-alert-icon__margin-inline-end);\n}\n\n.uxa-alert-content {\n  flex: 1;\n}";
styleInject(css_248z);

const Alert = _a => {
  var {
      status,
      icon,
      children,
      isDismissible = true,
      onDismiss,
      dismissButton
    } = _a,
    htmlProps = __rest(_a, ["status", "icon", "children", "isDismissible", "onDismiss", "dismissButton"]);
  return React.createElement("div", Object.assign({
    role: "alert"
  }, mergeProps({
    className: clsx('uxa-alert', {
      'uxa-status-info': status === 'info',
      'uxa-status-success': status === 'success',
      'uxa-status-error': status === 'error',
      'uxa-status-warning': status === 'warning',
      'uxa-status-dark': status === 'dark'
    })
  }, htmlProps)), icon && React.createElement("div", {
    className: "uxa-alert-icon"
  }, React.cloneElement(icon, {
    size: '16px'
  })), React.createElement("div", {
    className: "uxa-alert-content"
  }, children), isDismissible && !dismissButton && React.createElement(AlertDismissButton, {
    onClick: onDismiss
  }, React.createElement(CloseSmallIcon, {
    size: "16px"
  })), dismissButton);
};
/** Define the Prop Type information */
Alert.propTypes = {
  /**
   * Defines the color of the alert.
   */
  status: PropTypes__default.oneOf(['info', 'success', 'error', 'warning', 'dark']).isRequired,
  /**
   * Define an icon to display in the alert.
   */
  icon: PropTypes__default.element,
  /**
   * Defines whether the dismiss button is included in the alert.
   * If you need to use a different icon, or add custom attributes to the button, use the `AlertDismissButton` component and the `dismissButton` prop instead.
   */
  isDismissible: PropTypes__default.bool,
  /**
   * Emits when the built-in dismiss button is clicked. Will not emit if you are using a custom dismiss button.
   */
  onDismiss: PropTypes__default.func,
  /**
   * Define a custom dismiss button.
   */
  dismissButton: PropTypes__default.element
};

export { Alert, AlertDismissButton };
