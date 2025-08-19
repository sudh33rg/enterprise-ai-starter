import * as React from 'react';
import { useState, useCallback, createContext, useContext, useEffect, useRef, useMemo } from 'react';
import { _ as __rest } from './_tslib.esm.js';
import clsx from 'clsx';
import { s as styleInject } from './style-inject.es.esm.js';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { aw as CloseSmallIcon } from './zoom-out.esm.js';
import { u as useStatusClassName } from './use-status-class-name.esm.js';
import PropTypes__default from 'prop-types';
import './prop-types.esm.js';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './reducer-provider.esm.js';
import './use-unique-id.esm.js';

let uniqueId = 1;
class UxaNotificationRef {
  constructor(content, configuration, _dismissFn) {
    this.content = content;
    this.configuration = configuration;
    this._dismissFn = _dismissFn;
    /** Whether the notification is open */
    this.open = false;
    /** @internal A unique key for each notification */
    this._id = uniqueId++;
    /** @internal Store the dismiss event listeners */
    this._callbacks = [];
    /** @internal Store the current notification state, used for animations */
    this._state = NotificationState.Enter;
  }
  dismiss() {
    this._dismissFn(this);
  }
  onDismiss(callback) {
    this._callbacks.push(callback);
  }
}
var NotificationState;
(function (NotificationState) {
  NotificationState[NotificationState["Enter"] = 0] = "Enter";
  NotificationState[NotificationState["Shown"] = 1] = "Shown";
  NotificationState[NotificationState["Exit"] = 2] = "Exit";
})(NotificationState || (NotificationState = {}));

function useNotificationLauncher() {
  const [notifications, setNotifications] = useState([]);
  const dismiss = useCallback(ref => {
    setNotifications(notificationList => {
      const notification = notificationList.find(n => n._id === ref._id);
      if (notification) {
        notification._state = NotificationState.Exit;
        notification._callbacks.forEach(callback => callback());
        notification.open = false;
      }
      return [...notificationList];
    });
  }, [setNotifications]);
  const open = useCallback((component, config) => {
    const ref = new UxaNotificationRef(component, Object.assign({
      placement: 'top',
      alignment: 'end'
    }, config), dismiss);
    ref.open = true;
    setNotifications(refs => [...refs, ref]);
    return ref;
  }, [setNotifications, dismiss]);
  const openToast = useCallback((component, _a = {}) => {
    var {
        alignment = 'start',
        placement = 'bottom',
        role = 'alert',
        width = 'var(--uxa-notification-toast__width)'
      } = _a,
      config = __rest(_a, ["alignment", "placement", "role", "width"]);
    return open(component, Object.assign({
      alignment,
      placement,
      role,
      width
    }, config));
  }, [open]);
  const remove = useCallback(ref => setNotifications(instances => instances.filter(notification => notification._id !== ref._id)), [setNotifications]);
  const dismissAll = useCallback(() => notifications.forEach(notification => dismiss(notification)), [dismiss, notifications]);
  return {
    notifications,
    open,
    openToast,
    dismiss,
    dismissAll,
    remove
  };
}

const NotificationContext = createContext(null);

function useNotificationContext() {
  return useContext(NotificationContext);
}

function useNotificationAutoDismiss(notification) {
  const {
    dismiss
  } = useNotificationContext();
  useEffect(() => {
    if (!notification.configuration.duration) {
      return;
    }
    const timeoutId = setTimeout(() => dismiss(notification), notification.configuration.duration);
    return () => clearTimeout(timeoutId);
  }, [dismiss, notification]);
}

function useNotificationRegion(placement, alignment) {
  const {
    notifications
  } = useNotificationContext();
  return notifications.filter(notification => notification.configuration.alignment === alignment && notification.configuration.placement === placement);
}

function useNotificationPosition(notification, ref) {
  var _a, _b, _c, _d;
  // update the ref information when it is available
  useEffect(() => {
    notification._ref = ref;
  }, [ref, notification]);
  // get all the notifications in the same region
  const notifications = useNotificationRegion((_a = notification.configuration.placement) !== null && _a !== void 0 ? _a : 'top', (_b = notification.configuration.alignment) !== null && _b !== void 0 ? _b : 'end');
  // get the index of the current notification
  const index = notifications.findIndex(n => n._id === notification._id);
  // find all notifications that were launched before this notification
  const notificationsLaunchedBefore = notifications.slice(0, index);
  const offset = notificationsLaunchedBefore.reduce((total, n) => {
    var _a, _b, _c;
    return total + ((_c = (_b = (_a = n._ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) !== null && _c !== void 0 ? _c : 0);
  }, 0);
  const placementProperty = (_c = notification.configuration.placement) !== null && _c !== void 0 ? _c : 'top';
  const alignmentProperty = notification.configuration.alignment === 'end' ? 'insetInlineEnd' : 'insetInlineStart';
  const width = (_d = notification.configuration.width) !== null && _d !== void 0 ? _d : 380;
  const cssWidth = typeof width === 'number' ? `${width}px` : width;
  return {
    width,
    [placementProperty]: `calc(${offset}px + calc(16px * ${index + 1}))`,
    [alignmentProperty]: notification.configuration.alignment === 'center' ? `calc(50% - calc(${cssWidth} / 2))` : 'var(--uxa-notification__inset)'
  };
}

var css_248z$6 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n.uxa-notification,\n:host {\n  position: fixed;\n  background-color: var(--uxa-notification__background-color);\n  box-shadow: var(--uxa-notification__box-shadow);\n  border-top-width: var(--uxa-notification__border-top-width);\n  border-right-width: var(--uxa-notification__border-right-width);\n  border-bottom-width: var(--uxa-notification__border-bottom-width);\n  border-left-width: var(--uxa-notification__border-left-width);\n  border-radius: var(--uxa-notification__border-radius);\n  border-color: var(--uxa-notification__border-color);\n  border-style: solid;\n  animation-duration: var(--uxa-notification__animation-duration);\n  z-index: var(--uxa-notification__z-index);\n  animation-fill-mode: forwards;\n  transition: top var(--uxa-notification__animation-duration) ease-in, bottom var(--uxa-notification__animation-duration) ease-in;\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--3);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--3);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--3);\n}\n.uxa-notification.uxa-notification-placement-top.uxa-notification-enter,\n:host.uxa-notification-placement-top.uxa-notification-enter {\n  animation-name: notification-slide-top-enter;\n}\n.uxa-notification.uxa-notification-placement-top.uxa-notification-exit,\n:host.uxa-notification-placement-top.uxa-notification-exit {\n  animation-name: notification-slide-top-exit;\n}\n.uxa-notification.uxa-notification-placement-bottom.uxa-notification-enter,\n:host.uxa-notification-placement-bottom.uxa-notification-enter {\n  animation-name: notification-slide-bottom-enter;\n}\n.uxa-notification.uxa-notification-placement-bottom.uxa-notification-exit,\n:host.uxa-notification-placement-bottom.uxa-notification-exit {\n  animation-name: notification-slide-bottom-exit;\n}\n\n@keyframes notification-slide-top-enter {\n  from {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes notification-slide-top-exit {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-50px);\n  }\n}\n@keyframes notification-slide-bottom-enter {\n  from {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes notification-slide-bottom-exit {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n}";
styleInject(css_248z$6);

const NotificationRefContext = createContext(null);

const Notification = ({
  notification
}) => {
  var _a;
  const ref = useRef(null);
  const {
    remove
  } = useNotificationContext();
  // We useMemo here to trigger a re-render when the state changes, just referencing the class
  // property will not trigger an update
  const state = useMemo(() => notification._state, [notification._state]);
  // Automatically dismiss after the duration has elapsed
  useNotificationAutoDismiss(notification);
  const style = useNotificationPosition(notification, ref);
  const onAnimationEnd = useCallback(() => {
    if (notification._state === NotificationState.Enter) {
      notification._state = NotificationState.Shown;
    }
    if (notification._state === NotificationState.Exit) {
      remove(notification);
    }
  }, [notification, remove]);
  return React.createElement(NotificationRefContext.Provider, {
    value: notification
  }, React.createElement("div", {
    ref: ref,
    className: clsx('uxa-notification', {
      'uxa-notification-placement-top': notification.configuration.placement === 'top',
      'uxa-notification-placement-bottom': notification.configuration.placement === 'bottom',
      'uxa-notification-enter': state === NotificationState.Enter,
      'uxa-notification-exit': state === NotificationState.Exit
    }),
    role: (_a = notification.configuration.role) !== null && _a !== void 0 ? _a : 'alert',
    "aria-live": notification.configuration.ariaLive,
    onAnimationEnd: onAnimationEnd,
    style: style
  }, notification.content));
};

const NotificationContainer = ({
  children
}) => {
  const launcher = useNotificationLauncher();
  const {
    notifications
  } = launcher;
  return React.createElement(NotificationContext.Provider, {
    value: launcher
  }, notifications.map(notification => React.createElement(Notification, {
    key: notification._id,
    notification: notification
  })), children);
};

var css_248z$5 = "/* Add focus outline and offset to an element */\n.uxa-notification-content,\n:host {\n  grid-area: content;\n  flex: 1;\n  display: block;\n  padding-block-start: var(--uxa-notification-content__padding-block-start);\n  font-family: var(--uxa-typography-body__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body__font-weight);\n  font-size: var(--uxa-typography-body__font-size);\n  text-transform: var(--uxa-typography-body__text-transform);\n  color: var(--uxa-typography-body__color);\n  line-height: var(--uxa-typography-body__line-height);\n  --uxa-typography-body__font-size: var(--uxa-notification-content__font-size);\n  --uxa-typography-body__color: var(--uxa-notification-content__color);\n}";
styleInject(css_248z$5);

const NotificationContent = ({
  children
}) => {
  return React.createElement("div", {
    className: "uxa-notification-content"
  }, children);
};

function useNotificationRef() {
  return useContext(NotificationRefContext);
}

var css_248z$4 = ".uxa-notification-dismiss-button,\n:host {\n  position: var(--uxa-notification-dismiss-button__position, absolute);\n  top: var(--uxa-notification-dismiss-button__top);\n  inset-inline-end: var(--uxa-notification-dismiss-button__inset-inline-end);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: var(--uxa-icon-button__overflow);\n  width: var(--uxa-icon-button__width);\n  padding-inline: var(--uxa-icon-button__padding-inline);\n  padding-block: var(--uxa-icon-button__padding-block);\n  border-radius: var(--uxa-button__border-radius);\n  height: var(--uxa-icon-button__height);\n  cursor: var(--uxa-icon-button__cursor);\n  min-width: var(--uxa-icon-button__min-width);\n  --uxa-icon__size: var(--uxa-icon-button-icon__size);\n  color: var(--uxa-button__color--flat-secondary);\n  background: var(--uxa-button__background-color--flat-secondary);\n  border-width: var(--uxa-button__border-width--flat-secondary);\n  border-style: var(--uxa-button__border-style--flat-secondary);\n  border-color: var(--uxa-button__border-color--flat-secondary);\n  width: var(--uxa-icon-button__width--small);\n  height: var(--uxa-icon-button__height--small);\n  padding-inline: var(--uxa-icon-button__padding-inline--small);\n  padding-block: var(--uxa-icon-button__padding-block--small);\n  border-radius: var(--uxa-icon-button__border-radius--small, var(--uxa-button__border-radius));\n  --uxa-icon__size: var(--uxa-icon-button-icon__size--small);\n  --uxa-icon__fill: var(--uxa-typography__color);\n}\n.uxa-notification-dismiss-button:is(a),\n:host:is(a) {\n  box-sizing: border-box;\n}\n.uxa-notification-dismiss-button:hover:not(.uxa-disabled):not(.uxa-focused),\n:host:hover:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-hover);\n  border-color: var(--uxa-button__border-color--flat-secondary-hover);\n  color: var(--uxa-button__color--flat-secondary-hover);\n  background: var(--uxa-button__background-color--flat-secondary-hover);\n}\n.uxa-notification-dismiss-button:active:not(.uxa-disabled):not(.uxa-focused),\n:host:active:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-active);\n  border-color: var(--uxa-button__border-color--flat-secondary-active);\n  color: var(--uxa-button__color--flat-secondary-active);\n  background: var(--uxa-button__background-color--flat-secondary-active);\n}\n.uxa-notification-dismiss-button:focus,\n:host:focus {\n  outline: none;\n  box-shadow: none;\n  z-index: var(--uxa-button__z-index);\n}\n.uxa-notification-dismiss-button.uxa-focused:not(.uxa-disabled),\n:host.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-focused);\n  border-color: var(--uxa-button__border-color--flat-secondary-focused);\n  color: var(--uxa-button__color--flat-secondary-focused);\n  background: var(--uxa-button__background-color--flat-secondary-focused);\n}";
styleInject(css_248z$4);

const NotificationDismissButton = props => {
  const ref = useNotificationRef();
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  return React.createElement("button", Object.assign({
    type: "button"
  }, mergeProps({
    onClick: () => ref.dismiss(),
    className: clsx('uxa-notification-dismiss-button', {
      'uxa-focused': isFocusVisible
    })
  }, focusProps, props)), React.createElement(CloseSmallIcon, null));
};

var css_248z$3 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n.uxa-notification-footer,\n:host {\n  grid-area: footer;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: var(--uxa-notification-footer__gap);\n  margin-inline: var(--uxa-notification-footer__margin-inline);\n  margin-block: var(--uxa-notification-footer__margin-block);\n  --uxa-typography-body-small__color: var(--uxa-notification-footer__color);\n}";
styleInject(css_248z$3);

const NotificationFooter = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps(props, {
    className: 'uxa-notification-footer'
  })), children);
};

var css_248z$2 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n/* Add focus outline and offset to an element */\n.uxa-notification-header,\n:host {\n  grid-area: header;\n  margin-inline: var(--uxa-notification-header__margin-inline);\n  margin-block: var(--uxa-notification-header__margin-block);\n  font-family: var(--uxa-typography-heading-6__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-6__font-weight);\n  font-size: var(--uxa-typography-heading-6__font-size);\n  text-transform: var(--uxa-typography-heading-6__text-transform);\n  color: var(--uxa-typography-heading-6__color);\n  line-height: var(--uxa-typography-heading-6__line-height);\n}";
styleInject(css_248z$2);

const NotificationHeader = ({
  children
}) => {
  return React.createElement("div", {
    className: "uxa-notification-header"
  }, children);
};

var css_248z$1 = ".uxa-notification-icon {\n  grid-area: icon;\n  margin-inline-end: var(--uxa-notification-icon__margin-inline-end);\n  padding-block-start: var(--uxa-notification-icon__padding-block-start);\n  --uxa-icon__fill: var(--uxa-notification-icon__fill);\n  --uxa-icon__size: var(--uxa-notification-icon__size);\n}\n\n/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n.uxa-notification-layout,\n:host {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: auto 1fr;\n  grid-template-areas: \"icon header\" \"icon content\" \"icon footer\";\n  padding-inline: var(--uxa-notification-layout__padding-inline);\n  padding-block: var(--uxa-notification-layout__padding-block);\n}\n.uxa-notification-layout.uxa-notification-layout-with-icon,\n:host.uxa-notification-layout-with-icon {\n  padding-inline-start: var(--uxa-notification-layout__padding-inline-start--with-icon);\n}\n.uxa-notification-layout.uxa-status-info,\n:host.uxa-status-info {\n  --uxa-notification-icon__fill: var(--uxa-color__status-info);\n}\n.uxa-notification-layout.uxa-status-error,\n:host.uxa-status-error {\n  --uxa-notification-icon__fill: var(--uxa-color__status-error);\n}\n.uxa-notification-layout.uxa-status-success,\n:host.uxa-status-success {\n  --uxa-notification-icon__fill: var(--uxa-color__status-success);\n}\n.uxa-notification-layout.uxa-status-warning,\n:host.uxa-status-warning {\n  --uxa-notification-icon__fill: var(--uxa-color__status-warning);\n}";
styleInject(css_248z$1);

const NotificationLayout = _a => {
  var {
      icon,
      status,
      children
    } = _a,
    props = __rest(_a, ["icon", "status", "children"]);
  const statusClassName = useStatusClassName(status);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-notification-layout', statusClassName, {
      'uxa-notification-layout-with-icon': icon
    })
  }, props)), icon ? React.createElement("div", {
    className: "uxa-notification-icon"
  }, icon) : null, children);
};
/** Define the Prop Type information */
NotificationLayout.propTypes = {
  /** Status of the notification, if applicable. */
  status: PropTypes__default.oneOf(['info', 'success', 'error', 'warning']),
  /** Content to render as the status icon. */
  icon: PropTypes__default.element
};

const NotificationToastActions = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-notification-toast-actions'
  }, props)), children);
};

var css_248z = ".uxa-notification-icon {\n  grid-area: icon;\n  margin-inline-end: var(--uxa-notification-icon__margin-inline-end);\n  padding-block-start: var(--uxa-notification-icon__padding-block-start);\n  --uxa-icon__fill: var(--uxa-notification-icon__fill);\n  --uxa-icon__size: var(--uxa-notification-icon__size);\n}\n\n/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n.uxa-notification-toast-layout,\n:host {\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: var(--uxa-notification-toast-layout__min-height);\n  gap: var(--uxa-notification-toast-layout__gap);\n  padding-inline: var(--uxa-notification-toast-layout__padding-inline);\n  padding-block: var(--uxa-notification-toast-layout__padding-block);\n  --uxa-notification-icon__margin-inline-end: var(\n    --uxa-notification-icon__margin-inline-end--toast\n  );\n  --uxa-notification-icon__padding-block-start: var(\n    --uxa-notification-icon__padding-block-start--toast\n  );\n  --uxa-notification-content__padding-block-start: var(\n    --uxa-notification-content__padding-block-start--toast\n  );\n  --uxa-notification-dismiss-button__position: static;\n}\n.uxa-notification-toast-layout.uxa-status-info,\n:host.uxa-status-info {\n  --uxa-notification-icon__fill: var(--uxa-color__status-info);\n}\n.uxa-notification-toast-layout.uxa-status-error,\n:host.uxa-status-error {\n  --uxa-notification-icon__fill: var(--uxa-color__status-error);\n}\n.uxa-notification-toast-layout.uxa-status-success,\n:host.uxa-status-success {\n  --uxa-notification-icon__fill: var(--uxa-color__status-success);\n}\n.uxa-notification-toast-layout.uxa-status-warning,\n:host.uxa-status-warning {\n  --uxa-notification-icon__fill: var(--uxa-color__status-warning);\n}";
styleInject(css_248z);

const NotificationToastLayout = _a => {
  var {
      icon,
      status,
      children
    } = _a,
    props = __rest(_a, ["icon", "status", "children"]);
  const statusClassName = useStatusClassName(status);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-notification-toast-layout', statusClassName)
  }, props)), icon ? React.createElement("div", {
    className: "uxa-notification-icon"
  }, icon) : null, children);
};
NotificationToastLayout.propTypes = Object.assign({}, NotificationLayout.propTypes);

function useNotification() {
  const {
    open,
    openToast,
    dismissAll
  } = useNotificationContext();
  return {
    open,
    openToast,
    dismissAll
  };
}

export { NotificationContainer, NotificationContent, NotificationDismissButton, NotificationFooter, NotificationHeader, NotificationLayout, NotificationState, NotificationToastActions, NotificationToastLayout, UxaNotificationRef, useNotification };
