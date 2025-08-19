import { _ as __rest } from './_tslib.esm.js';
import { useDialog } from '@react-aria/dialog';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { usePreventScroll, useOverlay } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import '@ux-aspects-universal/core/theming';
import { T as ThemeRegion } from './theme-region.esm.js';
import * as React from 'react';
import { useRef, forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { u as useScrollMonitor } from './use-scroll-monitor.esm.js';
import './reducer-provider.esm.js';
import { u as useThemeFamily } from './use-active-theme.esm.js';
import './use-event-listener.esm.js';
import './use-mutation-observer.esm.js';
import './use-resize-observer.esm.js';

var css_248z$5 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n.uxa-dialog {\n  position: relative;\n  pointer-events: auto;\n  box-shadow: var(--uxa-dialog__box-shadow);\n  border: var(--uxa-dialog__border);\n  box-sizing: border-box;\n  background-color: var(--uxa-dialog__background-color);\n  border-radius: var(--uxa-dialog__border-radius);\n  width: var(--uxa-dialog__width);\n  height: var(--uxa-dialog__height);\n  max-height: var(--uxa-dialog__max-height);\n  display: grid;\n  background-clip: var(--uxa-dialog__background-clip, unset);\n  grid-template-rows: minmax(0, 1fr);\n  grid-template-columns: minmax(0, 1fr);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--3);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--3);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--3);\n  overflow: hidden;\n}\n.uxa-dialog:focus {\n  outline: none;\n}\n.uxa-dialog.uxa-small {\n  --uxa-dialog__width: var(--uxa-dialog__width--small);\n}\n.uxa-dialog.uxa-large {\n  --uxa-dialog__width: var(--uxa-dialog__width--large);\n}\n.uxa-dialog.uxa-status-info {\n  --uxa-dialog-icon__fill: var(--uxa-dialog-icon__color--info);\n  --uxa-dialog-emphasis-indicator: var(--uxa-dialog-icon__color--info);\n}\n.uxa-dialog.uxa-status-error {\n  --uxa-dialog-icon__fill: var(--uxa-dialog-icon__color--error);\n  --uxa-dialog-emphasis-indicator: var(--uxa-dialog-icon__color--error);\n}\n.uxa-dialog.uxa-status-success {\n  --uxa-dialog-icon__fill: var(--uxa-dialog-icon__color--success);\n  --uxa-dialog-emphasis-indicator: var(--uxa-dialog-icon__color--success);\n}\n.uxa-dialog.uxa-status-warning {\n  --uxa-dialog-icon__fill: var(--uxa-dialog-icon__color--warning);\n  --uxa-dialog-emphasis-indicator: var(--uxa-dialog-icon__color--warning);\n}\n.uxa-dialog.uxa-status-question {\n  --uxa-dialog-icon__fill: var(--uxa-dialog-icon__color--question);\n  --uxa-dialog-emphasis-indicator: var(--uxa-dialog-icon__color--question);\n}\n.uxa-dialog[class*=uxa-status-] {\n  --uxa-dialog-header__padding-inline: var(--uxa-dialog-header__padding-inline--modal-message);\n  --uxa-dialog-content__padding-block: var(--uxa-dialog-content__padding-block--modal-message);\n  --uxa-dialog-header__margin-inline: var(---uxa-dialog-header__margin-inline--modal-message);\n}\n\n.uxa-dialog-emphasis-indicator {\n  grid-area: emphasize;\n  display: var(--uxa-dialog-emphasis-indicator__display, none);\n  visibility: var(--uxa-dialog-emphasis-indicator__visibility, hidden);\n  width: var(--uxa-dialog-emphasis-indicator__width);\n  margin-block-start: var(--uxa-dialog-emphasis-indicator__margin-block-start);\n  margin-block-end: var(--uxa-dialog-emphasis-indicator__margin-block-end);\n  margin-inline-start: var(--uxa-dialog-emphasis-indicator__margin-inline-start);\n  margin-inline-end: var(--uxa-dialog-emphasis-indicator__margin-inline-end);\n  border-radius: var(--uxa-dialog-emphasis-indicator__border-radius);\n  background-color: var(--uxa-dialog-emphasis-indicator);\n}\n\n.uxa-dialog-icon {\n  grid-area: icon;\n  margin-block: var(--uxa-dialog-icon__margin-block);\n  margin-inline: var(--uxa-dialog-icon__margin-inline);\n  --uxa-icon__fill: var(--uxa-dialog-icon__fill);\n  --uxa-icon__size: var(--uxa-dialog-icon__size);\n}\n\n.uxa-dialog-layout,\n:host {\n  height: 100%;\n  display: grid;\n  grid-template-rows: var(--uxa-dialog-layout__grid-template-rows);\n  grid-template-columns: var(--uxa-dialog-layout__grid-template-columns);\n  grid-template-areas: var(--uxa-dialog-layout__grid-template-areas);\n}\n.uxa-dialog-layout.uxa-emphasize,\n:host.uxa-emphasize {\n  --uxa-dialog-emphasis-indicator__visibility: visible;\n}\n\n:host-context(.uxa-overlay-wrapper.uxa-placement-start, .uxa-overlay-wrapper.uxa-placement-end) :host {\n  height: calc(100vh - var(--uxa-dialog__border-width) * 2);\n}\n\n.uxa-overlay {\n  z-index: 1000;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.uxa-overlay-backdrop {\n  position: absolute;\n  pointer-events: auto;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--uxa-overlay-backdrop__background);\n  -webkit-backdrop-filter: var(--uxa-overlay-backdrop__backdrop-filter);\n          backdrop-filter: var(--uxa-overlay-backdrop__backdrop-filter);\n}\n\n.uxa-overlay-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.uxa-overlay-wrapper.uxa-placement-center {\n  --uxa-dialog-emphasis-indicator__display: block;\n}\n.uxa-overlay-wrapper.uxa-placement-start, .uxa-overlay-wrapper.uxa-placement-end, .uxa-overlay-wrapper.uxa-placement-top, .uxa-overlay-wrapper.uxa-placement-bottom {\n  --uxa-dialog-header__margin-inline: var(--uxa-dialog-header__margin-inline--modal-panel);\n  --uxa-dialog-header__margin-block: var(--uxa-dialog-header__margin-block--modal-panel);\n  --uxa-dialog-header__padding-inline: var(--uxa-dialog-header__padding-inline--modal-panel);\n  --uxa-dialog-header__padding-block: var(--uxa-dialog-header__padding-block--modal-panel);\n  --uxa-dialog-content__margin-inline: var(--uxa-dialog-content__margin-inline--modal-panel);\n  --uxa-dialog-content__margin-block: var(--uxa-dialog-content__margin-block--modal-panel);\n  --uxa-dialog-footer__padding-inline: var(--uxa-dialog-footer__padding-inline--modal-panel);\n  --uxa-dialog-footer__padding-block: var(--uxa-dialog-footer__padding-block--modal-panel);\n  --uxa-dialog-footer__margin-inline: var(--uxa-dialog-footer__margin-inline--modal-panel);\n  --uxa-dialog-footer__margin-block: var(--uxa-dialog-footer__margin-block--modal-panel);\n}\n.uxa-overlay-wrapper.uxa-placement-top, .uxa-overlay-wrapper.uxa-placement-bottom {\n  --uxa-dialog__width: auto;\n}\n.uxa-overlay-wrapper.uxa-placement-start, .uxa-overlay-wrapper.uxa-placement-end {\n  align-items: stretch;\n  --uxa-dialog__height: 100vh;\n}\n.uxa-overlay-wrapper.uxa-placement-start {\n  justify-content: flex-start;\n  --uxa-dialog__border-radius: var(--uxa-dialog__border-radius--modal-panel-start);\n}\n.uxa-overlay-wrapper.uxa-placement-end {\n  justify-content: flex-end;\n  --uxa-dialog__border-radius: var(--uxa-dialog__border-radius--modal-panel-end);\n}\n.uxa-overlay-wrapper.uxa-placement-top {\n  align-items: flex-start;\n  --uxa-dialog__border-radius: var(--uxa-dialog__border-radius--modal-panel-top);\n}\n.uxa-overlay-wrapper.uxa-placement-bottom {\n  align-items: flex-end;\n  --uxa-dialog__border-radius: var(--uxa-dialog__border-radius--modal-panel-bottom);\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep .uxa-overlay-backdrop.cdk-overlay-backdrop {\n  position: absolute;\n  pointer-events: auto;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--uxa-overlay-backdrop__background);\n  -webkit-backdrop-filter: var(--uxa-overlay-backdrop__backdrop-filter);\n          backdrop-filter: var(--uxa-overlay-backdrop__backdrop-filter);\n}";
styleInject(css_248z$5);

const Dialog = _a => {
  var {
      children,
      icon,
      status,
      emphasize,
      size,
      width,
      height,
      placement = 'center',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      onClose,
      className,
      theme
    } = _a,
    props = __rest(_a, ["children", "icon", "status", "emphasize", "size", "width", "height", "placement", "closeOnBackdropClick", "closeOnEscape", "onClose", "className", "theme"]);
  const ref = useRef(null);
  // Prevent page scrolling on mount.
  usePreventScroll();
  // Add react aria overlay behaviour.
  const {
    overlayProps
  } = useOverlay(Object.assign(Object.assign({}, props), {
    isOpen: true,
    isDismissable: closeOnBackdropClick !== null && closeOnBackdropClick !== void 0 ? closeOnBackdropClick : true,
    isKeyboardDismissDisabled: !closeOnEscape,
    onClose,
    shouldCloseOnInteractOutside: element => {
      if (!closeOnBackdropClick) {
        return false;
      }
      // if the element has a data-overlay attribute, or is within an element with a data-overlay attribute, do not close
      if (element && element instanceof Element && element.closest('[data-overlay]')) {
        return false;
      }
      // if the element is within the dialog, do not close
      if (element && element instanceof HTMLElement && ref.current && ref.current.contains(element)) {
        return false;
      }
      return true;
    }
  }), ref);
  // Add react aria dialog behaviour.
  const {
    dialogProps
  } = useDialog(props, ref);
  return React.createElement(FocusScope, {
    contain: true,
    restoreFocus: true,
    autoFocus: true
  }, React.createElement("div", {
    className: "uxa-overlay"
  }, React.createElement("div", {
    className: "uxa-overlay-backdrop"
  }), React.createElement(ThemeRegion, Object.assign({
    theme: theme
  }, mergeProps(overlayProps, {
    className: clsx('uxa-overlay-wrapper', {
      'uxa-placement-center': placement === 'center',
      'uxa-placement-start': placement === 'start',
      'uxa-placement-end': placement === 'end',
      'uxa-placement-top': placement === 'top',
      'uxa-placement-bottom': placement === 'bottom'
    }, className)
  })), React.createElement("div", Object.assign({}, mergeProps(dialogProps, {
    className: clsx('uxa-dialog', {
      'uxa-small': size === 'small',
      'uxa-large': size === 'large',
      'uxa-status-info': status === 'info',
      'uxa-status-error': status === 'error',
      'uxa-status-success': status === 'success',
      'uxa-status-warning': status === 'warning',
      'uxa-status-question': status === 'question'
    }, className),
    style: Object.assign({
      width,
      height
    }, props.style)
  }), {
    "aria-modal": "true",
    ref: ref
  }), React.createElement("div", {
    className: clsx('uxa-dialog-layout', {
      'uxa-emphasize': emphasize
    })
  }, React.createElement("div", {
    className: "uxa-dialog-emphasis-indicator"
  }), icon && React.createElement("div", {
    className: "uxa-dialog-icon"
  }, icon), children)))));
};
/** Define the Prop Type information */
Dialog.propTypes = {
  /** A predefined width for the dialog. */
  size: PropTypes__default.oneOf(['small', 'medium', 'large']),
  /** Width of the dialog in CSS units. */
  width: PropTypes__default.number,
  /** Height of the dialog in CSS units. */
  height: PropTypes__default.number,
  /** Placement of the dialog relative to the viewport */
  placement: PropTypes__default.oneOf(['center', 'start', 'end', 'top', 'bottom']),
  /** Whether to close the dialog by clicking on the backdrop. */
  closeOnBackdropClick: PropTypes__default.bool,
  /** Whether to close the dialog with the ESC key. */
  closeOnEscape: PropTypes__default.bool,
  /** Called when the dialog is closed. */
  onClose: PropTypes__default.func,
  /** Defines the color of the dialog icon. */
  status: PropTypes__default.oneOf(['info', 'error', 'success', 'warning', 'question']),
  /** Whether to apply the emphasis appearance. */
  emphasize: PropTypes__default.bool,
  /** Define an icon to display in the dialog. */
  icon: PropTypes__default.element,
  /** Apply a theme to the dialog. */
  theme: PropTypes__default.string
};

var css_248z$4 = "/* Add focus outline and offset to an element */\n.uxa-dialog-content,\n:host {\n  display: block;\n  font-weight: var(--uxa-dialog-content__font-weight);\n  font-size: var(--uxa-dialog-content__font-size);\n  line-height: var(--uxa-dialog-content__line-height);\n  color: var(--uxa-dialog-content__color);\n  margin-inline: var(--uxa-dialog-content__margin-inline);\n  margin-block: var(--uxa-dialog-content__margin-block);\n  padding-inline: var(--uxa-dialog-content__padding-inline);\n  padding-block: var(--uxa-dialog-content__padding-block);\n  flex: auto;\n  grid-area: content;\n  overflow-y: auto;\n  position: relative;\n}\n.uxa-dialog-content:not([data-scroll-bottom]),\n:host:not([data-scroll-bottom]) {\n  -webkit-mask-image: var(--uxa-dialog-content__mask-image--bottom);\n          mask-image: var(--uxa-dialog-content__mask-image--bottom);\n}\n.uxa-dialog-content:not([data-scroll-top]),\n:host:not([data-scroll-top]) {\n  -webkit-mask-image: var(--uxa-dialog-content__mask-image--top);\n          mask-image: var(--uxa-dialog-content__mask-image--top);\n}\n.uxa-dialog-content:not([data-scroll-top]):not([data-scroll-bottom]),\n:host:not([data-scroll-top]):not([data-scroll-bottom]) {\n  -webkit-mask-image: var(--uxa-dialog-content__mask-image--both);\n          mask-image: var(--uxa-dialog-content__mask-image--both);\n}\n.uxa-dialog-content:focus,\n:host:focus {\n  outline: none;\n}\n.uxa-dialog-content.uxa-focused,\n:host.uxa-focused {\n  outline: var(--uxa-focus-outline__width) var(--uxa-focus-outline__style) var(--uxa-focus-outline__color);\n  outline-offset: var(--uxa-dialog-content__focus-outline-offset);\n}";
styleInject(css_248z$4);

const DialogContent = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const dialogContentRef = useRef(null);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  // Dont show the fade if there is less overflow than the size of the fade
  const {
    isOverflowing,
    scrollProps
  } = useScrollMonitor({
    element: dialogContentRef,
    threshold: 16
  });
  return React.createElement("div", Object.assign({
    ref: dialogContentRef,
    id: "dialog-content",
    tabIndex: isOverflowing ? 0 : -1
  }, mergeProps(focusProps, {
    className: clsx('uxa-dialog-content', {
      'uxa-focused': isFocusVisible
    })
  }, scrollProps, props)), children);
};
/** Define the Prop Type information */
DialogContent.propTypes = {
  id: PropTypes__default.string
};

var css_248z$3 = ".uxa-dialog-header,\n:host {\n  display: flex;\n  align-items: center;\n  gap: var(--uxa-dialog-header__gap);\n  margin-inline: var(--uxa-dialog-header__margin-inline);\n  margin-block: var(--uxa-dialog-header__margin-block);\n  font-family: var(--uxa-dialog-header__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-dialog-header__font-size);\n  font-weight: var(--uxa-dialog-header__font-weight);\n  letter-spacing: var(--uxa-dialog-header__letter-spacing);\n  color: var(--uxa-dialog-header__color);\n  line-height: var(--uxa-dialog-header__line-height);\n  grid-area: header;\n  position: var(--uxa-dialog-dismiss-button-container-position);\n  padding-inline: var(--uxa-dialog-header__padding-inline);\n  padding-block: var(--uxa-dialog-header__padding-block);\n  background: var(--uxa-dialog__background-color);\n  border-radius: var(--uxa-dialog__border-radius);\n}\n\n.uxa-dialog-header-title-container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  flex-wrap: wrap;\n}\n\n.uxa-dialog-header-title {\n  padding-inline: var(--uxa-dialog-header-title__padding-inline);\n  padding-block: var(--uxa-dialog-header-title__padding-block);\n  box-sizing: border-box;\n}\n\n.uxa-dialog-header-leading-button {\n  align-self: flex-start;\n}\n.uxa-dialog-header-leading-button:empty {\n  display: none;\n}";
styleInject(css_248z$3);

const DialogHeader = _a => {
  var {
      children,
      dismissButton,
      leadingButton,
      subtitle
    } = _a,
    props = __rest(_a, ["children", "dismissButton", "leadingButton", "subtitle"]);
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-dialog-header'
  }, props)), React.createElement("div", {
    className: "uxa-dialog-header-leading-button"
  }, leadingButton), React.createElement("div", {
    className: "uxa-dialog-header-title-container"
  }, React.createElement("div", {
    role: "heading",
    "aria-level": 2,
    className: "uxa-dialog-header-title"
  }, children), subtitle), dismissButton);
};
/** Define the Prop Type information */
DialogHeader.propTypes = {
  id: PropTypes__default.string,
  /** Optionally defines a custom dismiss button. */
  dismissButton: PropTypes__default.element,
  subtitle: PropTypes__default.element
};

var css_248z$2 = ".uxa-dialog-subtitle {\n  padding-inline: var(--uxa-dialog-header-subtitle__padding-inline);\n  padding-block: var(--uxa-dialog-header-subtitle__padding-block);\n  font-size: var(--uxa-dialog-header-subtitle__font-size);\n  font-weight: var(--uxa-dialog-header-subtitle__font-weight);\n  line-height: var(--uxa-dialog-header-subtitle__line-height);\n  color: var(--uxa-dialog-header-subtitle__text-color);\n  letter-spacing: 0;\n}";
styleInject(css_248z$2);

const DialogSubtitle = forwardRef((_a, ref) => {
  var props = __rest(_a, []);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps(props, {
    className: 'uxa-dialog-subtitle'
  })));
});

var css_248z$1 = ".uxa-dialog-footer,\n:host {\n  display: flex;\n  border-style: none;\n  gap: var(--uxa-dialog-footer__gap);\n  padding-inline: var(--uxa-dialog-footer-main__padding-inline);\n  padding-block: var(--uxa-dialog-footer-main__padding-block);\n  margin-inline: var(--uxa-dialog-footer__margin-inline);\n  margin-block: var(--uxa-dialog-footer__margin-block);\n  grid-area: footer;\n  justify-content: flex-end;\n  position: relative;\n}\n.uxa-dialog-footer.uxa-dialog-divider,\n:host.uxa-dialog-divider {\n  border-style: var(--uxa-dialog-footer__border-style);\n  border-width: var(--uxa-dialog-footer__border-top-width) var(--uxa-dialog-footer__border-right-width) var(--uxa-dialog-footer__border-bottom-width) var(--uxa-dialog-footer__border-right-width);\n  border-color: var(--uxa-dialog-footer__border-color);\n  padding-inline: var(--uxa-dialog-footer__padding-inline);\n  padding-block: var(--uxa-dialog-footer__padding-block);\n  gap: var(--uxa-dialog-footer__gap--divider, unset);\n}";
styleInject(css_248z$1);

const DialogFooter = _a => {
  var {
      hasDivider,
      children
    } = _a,
    props = __rest(_a, ["hasDivider", "children"]);
  const {
    isJato
  } = useThemeFamily();
  // the divider should be shown when not in Jato
  hasDivider !== null && hasDivider !== void 0 ? hasDivider : hasDivider = !isJato;
  return React.createElement("div", Object.assign({}, mergeProps({
    className: clsx('uxa-dialog-footer', {
      'uxa-dialog-divider': hasDivider === true
    })
  }, props)), children);
};
/** Define the Prop Type information */
DialogFooter.propTypes = {
  /** Shows or hides the footer divider. */
  hasDivider: PropTypes__default.bool
};

var css_248z = ".uxa-dialog-dismiss-button,\n:host {\n  position: var(--uxa-dialog-dismiss-button__position);\n  top: var(--uxa-dialog-dismiss-button__top);\n  inset-inline-end: var(--uxa-dialog-dismiss-button__inset-inline-end);\n  align-self: var(--uxa-dialog-dismiss-button__align);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: var(--uxa-icon-button__overflow);\n  width: var(--uxa-icon-button__width);\n  padding-inline: var(--uxa-icon-button__padding-inline);\n  padding-block: var(--uxa-icon-button__padding-block);\n  border-radius: var(--uxa-button__border-radius);\n  height: var(--uxa-icon-button__height);\n  cursor: var(--uxa-icon-button__cursor);\n  min-width: var(--uxa-icon-button__min-width);\n  --uxa-icon__size: var(--uxa-icon-button-icon__size);\n  color: var(--uxa-button__color--flat-secondary);\n  background: var(--uxa-button__background-color--flat-secondary);\n  border-width: var(--uxa-button__border-width--flat-secondary);\n  border-style: var(--uxa-button__border-style--flat-secondary);\n  border-color: var(--uxa-button__border-color--flat-secondary);\n  width: var(--uxa-icon-button__width--small);\n  height: var(--uxa-icon-button__height--small);\n  padding-inline: var(--uxa-icon-button__padding-inline--small);\n  padding-block: var(--uxa-icon-button__padding-block--small);\n  border-radius: var(--uxa-icon-button__border-radius--small, var(--uxa-button__border-radius));\n  --uxa-icon__size: var(--uxa-icon-button-icon__size--small);\n  --uxa-icon__size: var(--uxa-dialog-dismiss-button__size);\n  --uxa-icon__fill: var(--uxa-typography__color);\n}\n.uxa-dialog-dismiss-button:is(a),\n:host:is(a) {\n  box-sizing: border-box;\n}\n.uxa-dialog-dismiss-button:hover:not(.uxa-disabled):not(.uxa-focused),\n:host:hover:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-hover);\n  border-color: var(--uxa-button__border-color--flat-secondary-hover);\n  color: var(--uxa-button__color--flat-secondary-hover);\n  background: var(--uxa-button__background-color--flat-secondary-hover);\n}\n.uxa-dialog-dismiss-button:active:not(.uxa-disabled):not(.uxa-focused),\n:host:active:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-active);\n  border-color: var(--uxa-button__border-color--flat-secondary-active);\n  color: var(--uxa-button__color--flat-secondary-active);\n  background: var(--uxa-button__background-color--flat-secondary-active);\n}\n.uxa-dialog-dismiss-button:focus,\n:host:focus {\n  outline: none;\n  box-shadow: none;\n  z-index: var(--uxa-button__z-index);\n}\n.uxa-dialog-dismiss-button.uxa-focused:not(.uxa-disabled),\n:host.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-focused);\n  border-color: var(--uxa-button__border-color--flat-secondary-focused);\n  color: var(--uxa-button__color--flat-secondary-focused);\n  background: var(--uxa-button__background-color--flat-secondary-focused);\n}";
styleInject(css_248z);

const DialogDismissButton = forwardRef((_a, ref) => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  return React.createElement("button", Object.assign({
    ref: ref,
    type: "button"
  }, mergeProps(props, focusProps, {
    className: clsx('uxa-dialog-dismiss-button', {
      'uxa-focused': isFocusVisible
    })
  })), children);
});

export { Dialog, DialogContent, DialogDismissButton, DialogFooter, DialogHeader, DialogSubtitle };
