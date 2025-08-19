import { mergeProps } from '@react-aria/utils';
import '@ux-aspects-universal/core/drawer';
import { u as useDrawer, b as DrawerResizeHandle } from './drawer-container.esm.js';
import { u as useDirection } from './direction.esm.js';
import * as React from 'react';
import { createContext, useContext, useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { u as useControlled } from './use-controllable.esm.js';
import clsx from 'clsx';
import { _ as __rest, a as __awaiter } from './_tslib.esm.js';
import './reducer-provider.esm.js';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { useFocusRing } from '@react-aria/focus';
import { D as DoubleChevronLeftIcon, f as ChevronSmallRightIcon } from './zoom-out.esm.js';
import { f as focusWithModality, c as FocusKeyManager } from './focus-key-manager.esm.js';
import '@react-aria/interactions';
import { b as useTabbable, u as useFocusManager } from './use-tabbable.esm.js';
import { T as Tooltip } from './tooltip.esm.js';
import { a as useTooltipTrigger } from './use-popover-trigger.esm.js';
import { a as useIsSelected } from './use-selection.esm.js';
import { S as Spinner } from './spinner.esm2.js';

var NavigationType;
(function (NavigationType) {
  NavigationType[NavigationType["List"] = 0] = "List";
  NavigationType[NavigationType["Tree"] = 1] = "Tree";
})(NavigationType || (NavigationType = {}));
const TreeDrawerContext = createContext({
  isMinimized: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMinimized: () => {},
  navigationType: NavigationType.Tree,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNavigationType: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSingleLevel: () => {}
});
function useTreeDrawer() {
  return useContext(TreeDrawerContext);
}

var css_248z$7 = "/* stylelint-disable ux-aspects/no-host-context */\n/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:host,\n.uxa-drawer {\n  display: block;\n  position: relative;\n  width: var(--uxa-drawer__width, 100%);\n  height: var(--uxa-drawer__height, 100%);\n  animation-duration: var(--uxa-drawer__animation-duration);\n  animation-fill-mode: forwards;\n}\n:host.uxa-placement-start .uxa-drawer-content,\n.uxa-drawer.uxa-placement-start .uxa-drawer-content {\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-end .uxa-drawer-content,\n.uxa-drawer.uxa-placement-end .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-top .uxa-drawer-content,\n.uxa-drawer.uxa-placement-top .uxa-drawer-content {\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-bottom .uxa-drawer-content,\n.uxa-drawer.uxa-placement-bottom .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-opening.uxa-placement-start, :host.uxa-opening.uxa-placement-end,\n.uxa-drawer.uxa-opening.uxa-placement-start,\n.uxa-drawer.uxa-opening.uxa-placement-end {\n  animation-name: opening-horizontal;\n}\n:host.uxa-opening.uxa-placement-top, :host.uxa-opening.uxa-placement-bottom,\n.uxa-drawer.uxa-opening.uxa-placement-top,\n.uxa-drawer.uxa-opening.uxa-placement-bottom {\n  animation-name: opening-vertical;\n}\n:host.uxa-closing.uxa-placement-start, :host.uxa-closing.uxa-placement-end,\n.uxa-drawer.uxa-closing.uxa-placement-start,\n.uxa-drawer.uxa-closing.uxa-placement-end {\n  animation-name: closing-horizontal;\n}\n:host.uxa-closing.uxa-placement-top, :host.uxa-closing.uxa-placement-bottom,\n.uxa-drawer.uxa-closing.uxa-placement-top,\n.uxa-drawer.uxa-closing.uxa-placement-bottom {\n  animation-name: closing-vertical;\n}\n:host.uxa-closed,\n.uxa-drawer.uxa-closed {\n  display: none;\n}\n:host.uxa-placement-start,\n.uxa-drawer.uxa-placement-start {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-end: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--start);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--start);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--start\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--start);\n}\n:host.uxa-placement-end,\n.uxa-drawer.uxa-placement-end {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-start: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--end);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--end);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--end);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--end);\n}\n:host.uxa-placement-top,\n.uxa-drawer.uxa-placement-top {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__bottom: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--top);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--top);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--top);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--top);\n}\n:host.uxa-placement-bottom,\n.uxa-drawer.uxa-placement-bottom {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__top: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--bottom);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--bottom);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--bottom\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--bottom);\n}\n:host.uxa-drawer-overlay,\n.uxa-drawer.uxa-drawer-overlay {\n  position: absolute;\n}\n:host.uxa-drawer-overlay.uxa-placement-start,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-start {\n  inset-inline-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-end,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-end {\n  inset-inline-end: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-top,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-top {\n  inset-block-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-bottom,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-bottom {\n  inset-block-end: 0;\n}\n\n.uxa-drawer-wrapper {\n  display: flex;\n  position: absolute;\n  flex-direction: var(--uxa-drawer-wrapper__flex-direction);\n  top: var(--uxa-drawer-wrapper__top);\n  bottom: var(--uxa-drawer-wrapper__bottom);\n  inset-inline-start: var(--uxa-drawer-wrapper__inset-inline-start);\n  inset-inline-end: var(--uxa-drawer-wrapper__inset-inline-end);\n  width: var(--uxa-drawer-wrapper__width, 100%);\n  height: var(--uxa-drawer-wrapper__height, 100%);\n}\n\n.uxa-drawer-content {\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n  box-shadow: var(--uxa-drawer-content__box-shadow);\n  background-color: var(--uxa-drawer-content__background-color);\n  border-width: var(--uxa-drawer-content__border-width-top) var(--uxa-drawer-content__border-width-right) var(--uxa-drawer-content__border-width-bottom) var(--uxa-drawer-content__border-width-left);\n  border-style: var(--uxa-drawer-content__border-style);\n  border-color: var(--uxa-drawer-content__border-color);\n}\n\n@media screen and (prefers-reduced-motion) {\n  :host {\n    animation-duration: 0;\n  }\n}\n@keyframes opening-horizontal {\n  from {\n    width: 0;\n  }\n  to {\n    width: var(--uxa-drawer__width, 100%);\n  }\n}\n@keyframes closing-horizontal {\n  from {\n    width: var(--uxa-drawer__width, 100%);\n  }\n  to {\n    width: 0;\n  }\n}\n@keyframes opening-vertical {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--uxa-drawer__height, 100%);\n  }\n}\n@keyframes closing-vertical {\n  from {\n    height: var(--uxa-drawer__height, 100%);\n  }\n  to {\n    height: 0;\n  }\n}\n:host.uxa-tree-drawer-minimized,\n.uxa-tree-drawer.uxa-tree-drawer-minimized {\n  --uxa-tree-node__column-gap: var(--uxa-tree-node__column-gap--minimized);\n  --uxa-tree-node__padding-start: var(--uxa-tree-node__padding-start--minimized);\n  --uxa-treee-minimize-button__transform: var(--uxa-tree-minimize-button__transform--minimized);\n  --uxa-tree-node-title__display: var(--uxa-tree-node-title__display--minimized);\n  --uxa-tree-header__padding-inline: var(--uxa-tree-header__padding-inline--minimized);\n  --uxa-tree-header__padding-block: var(--uxa-tree-header__padding-block--minimized);\n  --uxa-tree__display: var(--uxa-tree__display--minimized);\n  --uxa-tree-node-expander-container__display: none;\n  --uxa-tree-node__display: none;\n  --uxa-tree-node-expander__width: 1rem;\n}\n:host.uxa-tree-drawer-single-level,\n.uxa-tree-drawer.uxa-tree-drawer-single-level {\n  --uxa-tree-header__padding-inline: 16px;\n  --uxa-tree-header__padding-block: 8px;\n}\n\n.uxa-drawer-content {\n  display: flex;\n  flex-direction: column;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl],\n:host-context([dir=rtl]) {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}";
styleInject(css_248z$7);

const TreeDrawer = ({
  isMinimized,
  onMinimizedChange,
  isOpen = true,
  size = 256,
  unit = 'pixel',
  mode = 'adjacent',
  placement = 'start',
  resizable = false,
  resizeHandleAriaLabel,
  minSize,
  maxSize,
  onSizeChange,
  children
}) => {
  const ref = useRef(null);
  const direction = useDirection();
  const [minimized, setMinimized] = useControlled(isMinimized, onMinimizedChange, false);
  const {
    drawerProps,
    drawerWrapperProps,
    onResize
  } = useDrawer({
    ref,
    isOpen,
    size,
    unit,
    mode,
    placement,
    resizable,
    onSizeChange
  });
  const [navigationType, setNavigationType] = useState(NavigationType.List);
  const [isSingleLevel, setSingleLevel] = useState(false);
  const width = useMemo(() => {
    if (minimized) {
      return navigationType === NavigationType.Tree ? 'var(--uxa-navigation-tree-drawer__width--minimized)' : 'var(--uxa-tree-drawer__width--minimized)';
    }
    const contentSize = `${size}${unit === 'percent' ? '%' : 'px'}`;
    return resizable ? `calc(${contentSize} + var(--uxa-drawer-resize-handle__size))` : contentSize;
  }, [minimized, size, unit, resizable, navigationType]);
  // toggle the minimized state
  const toggleMinimized = useCallback(() => setMinimized(!minimized), [minimized, setMinimized]);
  return React.createElement(TreeDrawerContext.Provider, {
    value: {
      isMinimized: minimized,
      toggleMinimized,
      navigationType,
      setNavigationType,
      setSingleLevel
    }
  }, React.createElement("div", Object.assign({}, mergeProps(drawerProps, {
    className: clsx('uxa-tree-drawer', {
      'uxa-navigation-tree-drawer': navigationType === NavigationType.Tree,
      'uxa-tree-drawer-minimized': minimized,
      'uxa-tree-drawer-single-level': isSingleLevel
    }),
    style: {
      '--uxa-drawer__width': width
    },
    dir: direction
  })), React.createElement("div", Object.assign({
    className: "uxa-drawer-wrapper",
    ref: ref
  }, drawerWrapperProps), placement === 'start' ? React.createElement("div", {
    className: "uxa-drawer-content"
  }, children) : null, resizable && !minimized && React.createElement(DrawerResizeHandle, {
    ariaLabel: resizeHandleAriaLabel,
    placement: placement,
    unit: unit,
    size: size,
    minSize: minSize,
    maxSize: maxSize,
    onSizeChange: onResize
  }), placement === 'end' ? React.createElement("div", {
    className: "uxa-drawer-content"
  }, children) : null)));
};
/** Define the Prop Type information */
TreeDrawer.propTypes = {
  /** Whether the drawer is minimized or not. */
  isMinimized: PropTypes__default.bool,
  /** Emit when the drawer's minimized state changes. */
  onMinimizedChange: PropTypes__default.func,
  /** Whether the drawer is open or not. */
  isOpen: PropTypes__default.bool,
  /** The size of the drawer panel. The CSS unit is determined by unit input. */
  size: PropTypes__default.number,
  /** The minimum height/width of the drawer panel. The CSS unit is determined by unit input. */
  minSize: PropTypes__default.number,
  /** The maximum height/width of the drawer panel. The CSS unit is determined by unit input. */
  maxSize: PropTypes__default.number,
  /** Selected CSS unit for the size of the drawer. Default to 'pixel'. */
  unit: PropTypes__default.oneOf(['pixel', 'percent']),
  /** The display mode of the drawer. */
  mode: PropTypes__default.oneOf(['adjacent', 'overlay']),
  /** Where the drawer is positioned relative to the window. */
  placement: PropTypes__default.oneOf(['top', 'bottom', 'start', 'end']),
  /** Whether the drawer is resizable. */
  resizable: PropTypes__default.bool,
  /** Emits when size value changes. */
  onSizeChange: PropTypes__default.func,
  /** `aria-label` for the resize handle. */
  resizeHandleAriaLabel: PropTypes__default.string
};

var css_248z$6 = ":host,\n.uxa-tree-header {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--uxa-tree-header__gap);\n       column-gap: var(--uxa-tree-header__gap);\n  height: var(--uxa-tree-header__height);\n  padding-inline: var(--uxa-tree-header__padding-inline);\n  padding-block: var(--uxa-tree-header__padding-block);\n  background-color: var(--uxa-elevation__background-color--2);\n  box-shadow: var(--uxa-tree-header__box-shadow);\n  box-sizing: border-box;\n  flex: none;\n}\n:host.uxa-tree-header-minimized,\n.uxa-tree-header.uxa-tree-header-minimized {\n  justify-content: center;\n}\n:host.uxa-tree-header-minimized .uxa-tree-header-content,\n.uxa-tree-header.uxa-tree-header-minimized .uxa-tree-header-content {\n  display: none;\n}\n\n.uxa-tree-header-content {\n  flex: 1;\n}";
styleInject(css_248z$6);

const TreeHeader = ({
  minimizeButton,
  children
}) => {
  const {
    isMinimized
  } = useTreeDrawer();
  return React.createElement("div", {
    className: clsx('uxa-tree-header', {
      'uxa-tree-header-minimized': isMinimized
    })
  }, React.createElement("div", {
    className: "uxa-tree-header-content"
  }, children), minimizeButton);
};
/** Define the Prop Type information */
TreeHeader.propTypes = {
  /** The content to render in the header. */
  children: PropTypes__default.element,
  /** Define a minimize button. */
  minimizeButton: PropTypes__default.element
};

var css_248z$5 = ":host,\n.uxa-tree-node-content {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  -moz-column-gap: var(--uxa-tree-node-content__column-gap);\n       column-gap: var(--uxa-tree-node-content__column-gap);\n  overflow: hidden;\n  -webkit-text-decoration: var(--uxa-tree-node-content__text-decoration);\n          text-decoration: var(--uxa-tree-node-content__text-decoration);\n}\n\n.uxa-tree-node-icon {\n  display: var(--uxa-tree-node-icon__display, inline-flex);\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: var(--uxa-tree-node-icon__width);\n  height: var(--uxa-tree-node-icon__height);\n  font-size: var(--uxa-tree-node-icon__font-size);\n  color: var(--uxa-tree-node-icon__color);\n}";
styleInject(css_248z$5);

const TreeItemLink = ({
  icon,
  children
}) => {
  return React.createElement("div", {
    className: "uxa-tree-node-content"
  }, React.createElement("span", {
    style: {
      display: `${icon ? 'block' : 'none'}`
    },
    className: "uxa-tree-node-icon"
  }, icon), children);
};

var css_248z$4 = ":host,\n.uxa-tree-minimize-button {\n  grid-area: minimize-button;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: var(--uxa-icon-button__overflow);\n  width: var(--uxa-icon-button__width);\n  padding-inline: var(--uxa-icon-button__padding-inline);\n  padding-block: var(--uxa-icon-button__padding-block);\n  border-radius: var(--uxa-button__border-radius);\n  height: var(--uxa-icon-button__height);\n  cursor: var(--uxa-icon-button__cursor);\n  min-width: var(--uxa-icon-button__min-width);\n  --uxa-icon__size: var(--uxa-icon-button-icon__size);\n  color: var(--uxa-button__color--flat-secondary);\n  background: var(--uxa-button__background-color--flat-secondary);\n  border-width: var(--uxa-button__border-width--flat-secondary);\n  border-style: var(--uxa-button__border-style--flat-secondary);\n  border-color: var(--uxa-button__border-color--flat-secondary);\n  width: var(--uxa-icon-button__width--small);\n  height: var(--uxa-icon-button__height--small);\n  padding-inline: var(--uxa-icon-button__padding-inline--small);\n  padding-block: var(--uxa-icon-button__padding-block--small);\n  border-radius: var(--uxa-icon-button__border-radius--small, var(--uxa-button__border-radius));\n  --uxa-icon__size: var(--uxa-icon-button-icon__size--small);\n  --uxa-icon__size: var(--uxa-tree-minimize-button__size);\n  --uxa-icon__fill: var(--uxa-typography__color);\n  --uxa-icon__transform: var(--uxa-tree-minimize-button__transform);\n}\n:host:is(a),\n.uxa-tree-minimize-button:is(a) {\n  box-sizing: border-box;\n}\n:host:hover:not(.uxa-disabled):not(.uxa-focused),\n.uxa-tree-minimize-button:hover:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-hover);\n  border-color: var(--uxa-button__border-color--flat-secondary-hover);\n  color: var(--uxa-button__color--flat-secondary-hover);\n  background: var(--uxa-button__background-color--flat-secondary-hover);\n}\n:host:active:not(.uxa-disabled):not(.uxa-focused),\n.uxa-tree-minimize-button:active:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-active);\n  border-color: var(--uxa-button__border-color--flat-secondary-active);\n  color: var(--uxa-button__color--flat-secondary-active);\n  background: var(--uxa-button__background-color--flat-secondary-active);\n}\n:host:focus,\n.uxa-tree-minimize-button:focus {\n  outline: none;\n  box-shadow: none;\n  z-index: var(--uxa-button__z-index);\n}\n:host.uxa-focused:not(.uxa-disabled),\n.uxa-tree-minimize-button.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-focused);\n  border-color: var(--uxa-button__border-color--flat-secondary-focused);\n  color: var(--uxa-button__color--flat-secondary-focused);\n  background: var(--uxa-button__background-color--flat-secondary-focused);\n}\n\n:host-context(.uxa-tree-drawer-minimized) :host,\n:host-context(.uxa-tree-drawer-minimized) .uxa-tree-minimize-button {\n  --uxa-icon__transform: var(--uxa-tree-minimize-button__transform--minimized);\n}";
styleInject(css_248z$4);

const TreeMinimizeButton = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const {
    toggleMinimized,
    isMinimized
  } = useTreeDrawer();
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const direction = useDirection();
  const isRtl = useMemo(() => direction === 'rtl', [direction]);
  return React.createElement("button", Object.assign({}, mergeProps(props, focusProps, {
    onClick: toggleMinimized,
    className: clsx('uxa-tree-minimize-button', {
      'uxa-focused': isFocusVisible
    })
  })), children !== null && children !== void 0 ? children : React.createElement(DoubleChevronLeftIcon, {
    style: {
      transform: `${isMinimized ? `rotate(${isRtl ? '0deg' : '180deg'})` : `rotate(${isRtl ? '180deg' : '0deg'})`}`
    }
  }));
};
/** Define the Prop Type information */
TreeMinimizeButton.propTypes = {
  /** The content to render in the button. */
  children: PropTypes__default.element
};

// Create the context
const TreeItemContext = createContext({
  level: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  collapseParent: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleParent: () => {}
});
// Create a hook to consume the context
function useTreeItem() {
  return useContext(TreeItemContext);
}

var css_248z$3 = ":host,\n.uxa-tree-node-expander {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent;\n  height: var(--uxa-tree-node-expander__height);\n  font-size: var(--uxa-tree-node-expander__font-size);\n  color: var(--uxa-tree-node-expander__color);\n  cursor: var(--uxa-tree-node-expander__cursor);\n  padding-inline-end: var(--uxa-tree-node-expander__padding-inline-end);\n}";
styleInject(css_248z$3);

const TreeNodeExpander = _a => {
  var props = __rest(_a, []);
  const {
    toggleParent,
    level
  } = useTreeItem();
  return React.createElement("span", Object.assign({}, mergeProps({
    className: 'uxa-tree-node-expander',
    style: {
      paddingInlineStart: `calc(var(--uxa-tree-node__padding-inline-start) + calc(var(--uxa-tree-node__padding-multiplier) * ${level - 1}))`
    },
    tabIndex: -1,
    'aria-hidden': true,
    // prevent the expander from triggering the parent item's onClick - to prevent navigating to the route for example
    onClick: event => {
      toggleParent();
      return event.stopPropagation();
    },
    props
  })), React.createElement(ChevronSmallRightIcon, {
    style: {
      transform: 'var(--uxa-tree-node-expander-icon__transform)'
    }
  }));
};

var css_248z$2 = ":host,\n.uxa-tree-node-title {\n  display: var(--uxa-tree-node-title__display, inline-block);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  font-size: var(--uxa-tree-node-title__font-size);\n  font-weight: var(--uxa-tree-node-title__font-weight);\n  line-height: var(--uxa-tree-node-title__line-height);\n  color: var(--uxa-tree-node-title__color);\n}";
styleInject(css_248z$2);

const TreeNodeTitle = ({
  children
}) => {
  return React.createElement("span", {
    className: "uxa-tree-node-title"
  }, children);
};

const TreeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SecondaryItem: () => null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNavigate: () => {}
});
// use a function to create the context so we can type it with generics
function createTreeContext() {
  return TreeContext;
}
// export the navigation list context
function useTreeContext() {
  return useContext(TreeContext);
}

/**
 * We want to be able to add some internal methods to the tree control,
 * but we don't want to expose those methods to the consumer.
 * So we use a symbol to add the methods to the tree control.
 * As the symbol is not exported, the consumer cannot access the methods,
 * nor will they be shown in autocomplete.
 */
const addReloadEventListenerSymbol = Symbol('addReloadEventListener');
const removeReloadEventListenerSymbol = Symbol('removeReloadEventListener');

function isTreeNodeWithChildren(item) {
  return item.hasOwnProperty('children') || item.hasChildren === true;
}

var css_248z$1 = "/* stylelint-disable ux-aspects/no-host-context */\n/** Rules for navigation-item-expander-icon states: expanded, rtl, expanded+rtl */\n:host,\n.uxa-tree-node-expander-container {\n  display: var(--uxa-tree-node-expander-container__display, flex);\n  align-items: center;\n  height: 100%;\n}\n:host.uxa-tree-node-expander-container-hidden,\n.uxa-tree-node-expander-container.uxa-tree-node-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host,\n.uxa-tree-node-loading-container {\n  display: flex;\n  align-items: center;\n}\n:host.uxa-tree-node-loading-hidden,\n.uxa-tree-node-loading-container.uxa-tree-node-loading-hidden {\n  display: none;\n}\n\n:host,\n.uxa-tree-node,\n.uxa-navigation-item,\n.uxa-navigation-tree-item {\n  position: relative;\n  display: var(--uxa-tree-node__display);\n  align-items: center;\n  background-color: var(--uxa-tree-node__background-color);\n  box-shadow: var(--uxa-tree-node__box-shadow);\n  color: var(--uxa-tree-node__color);\n  --uxa-tree-node-title__font-weight: var(--uxa-tree-node__font-weight);\n  cursor: pointer;\n  outline: none;\n  font-family: var(--uxa-tree-node__font-family, var(--uxa-typography__font-family));\n  height: var(--uxa-tree-node__height);\n  margin-inline: var(--uxa-tree-node__margin-inline);\n  box-sizing: border-box;\n  width: auto;\n  border: var(--uxa-tree-node__border);\n  border-radius: var(--uxa-tree-node__border-radius);\n  padding-inline: 0;\n  padding-block: 0;\n  overflow: hidden;\n}\n:host.uxa-small,\n.uxa-tree-node.uxa-small,\n.uxa-navigation-item.uxa-small,\n.uxa-navigation-tree-item.uxa-small {\n  height: var(--uxa-tree-node__height--small);\n}\n:host.uxa-large,\n.uxa-tree-node.uxa-large,\n.uxa-navigation-item.uxa-large,\n.uxa-navigation-tree-item.uxa-large {\n  height: var(--uxa-tree-node__height--large);\n}\n:host[disabled],\n.uxa-tree-node[disabled],\n.uxa-navigation-item[disabled],\n.uxa-navigation-tree-item[disabled] {\n  pointer-events: none;\n}\n:host:hover,\n.uxa-tree-node:hover,\n.uxa-navigation-item:hover,\n.uxa-navigation-tree-item:hover {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--hover);\n}\n:host:active,\n.uxa-tree-node:active,\n.uxa-navigation-item:active,\n.uxa-navigation-tree-item:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-active,\n.uxa-tree-node.uxa-active,\n.uxa-navigation-item.uxa-active,\n.uxa-navigation-tree-item.uxa-active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active);\n  --uxa-tree-node__box-shadow: var(--uxa-tree-node__box-shadow--active);\n}\n:host.uxa-active::before,\n.uxa-tree-node.uxa-active::before,\n.uxa-navigation-item.uxa-active::before,\n.uxa-navigation-tree-item.uxa-active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  inset-inline-start: 0;\n  bottom: 0;\n  width: var(--uxa-tree-node-indicator__width);\n  background: var(--uxa-tree-node-indicator__background);\n}\n:host.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-navigation-item.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-navigation-tree-item.uxa-active .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover);\n}\n.uxa-tree-node-children :host.uxa-active,\n.uxa-tree-node-children .uxa-tree-node.uxa-active,\n.uxa-tree-node-children .uxa-navigation-item.uxa-active,\n.uxa-tree-node-children .uxa-navigation-tree-item.uxa-active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus-child);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active-child);\n}\n.uxa-tree-node-children :host.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-tree-node.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-navigation-item.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-navigation-tree-item.uxa-active .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover-child);\n}\n:host.uxa-active.uxa-active-parent,\n.uxa-tree-node.uxa-active.uxa-active-parent,\n.uxa-navigation-item.uxa-active.uxa-active-parent,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active);\n}\n:host.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-tree-node.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-navigation-item.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover);\n}\n:host.uxa-active.uxa-active-parent:active,\n.uxa-tree-node.uxa-active.uxa-active-parent:active,\n.uxa-navigation-item.uxa-active.uxa-active-parent:active,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-active:active,\n.uxa-tree-node.uxa-active:active,\n.uxa-navigation-item.uxa-active:active,\n.uxa-navigation-tree-item.uxa-active:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-focused,\n.uxa-tree-node.uxa-focused,\n.uxa-navigation-item.uxa-focused,\n.uxa-navigation-tree-item.uxa-focused {\n  --uxa-tree-node__box-shadow: var(--uxa-tree-node__box-shadow--focus);\n}\n\n.uxa-tree-node-main-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.uxa-tree-node-trailing-action-container {\n  display: flex;\n}\n\n.uxa-tree-node-loading-container {\n  min-width: var(--uxa-tree-node-loading-container__min-width);\n  justify-content: var(--uxa-tree-node-loading-container__justify-content);\n}\n\n.uxa-tree-node-content-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-inline-end: var(--uxa-tree-node-content-container__padding-inline-end);\n}\n\n.uxa-tree-node-expander-container {\n  display: var(--uxa-tree-node-expander-container__display, flex);\n  align-items: center;\n}\n.uxa-tree-node-expander-container.uxa-tree-node-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host.uxa-expanded,\n.uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded\n  );\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] :host:not(.uxa-expanded),\n::ng-deep[dir=rtl] .uxa-tree-node:not(.uxa-expanded),\n:host-context([dir=rtl]) :host:not(.uxa-expanded),\n:host-context([dir=rtl]) .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n::ng-deep[dir=rtl] :host.uxa-expanded,\n::ng-deep[dir=rtl] .uxa-tree-node.uxa-expanded,\n:host-context([dir=rtl]) :host.uxa-expanded,\n:host-context([dir=rtl]) .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] :host:not(.uxa-expanded),\n[dir=rtl] .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n[dir=rtl] :host.uxa-expanded,\n[dir=rtl] .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) :host:not(.uxa-expanded),\n:dir(rtl) .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n:dir(rtl) :host.uxa-expanded,\n:dir(rtl) .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}";
styleInject(css_248z$1);

function TreeNode(_a) {
  var _b, _c;
  var {
      icon,
      expander,
      content,
      model,
      isSelectable = true,
      loadingIndicator,
      trailingAction,
      className
    } = _a,
    props = __rest(_a, ["icon", "expander", "content", "model", "isSelectable", "loadingIndicator", "trailingAction", "className"]);
  const {
    isMinimized,
    toggleMinimized
  } = useTreeDrawer();
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const ref = useRef(null);
  const {
    level,
    collapseParent
  } = useTreeItem();
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref);
  const {
    focusNext
  } = useFocusManager();
  const {
    treeControl,
    SecondaryItem,
    selectionManager,
    selections,
    isRtl,
    loadChildren
  } = useTreeContext();
  const [isLoading, setIsLoading] = useState(false);
  const isActive = useIsSelected(model, selectionManager);
  // determine if the item is expanded
  const isExpanded = (_b = treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(model)) !== null && _b !== void 0 ? _b : false;
  const selectChildren = useCallback((node, isSelected) => {
    // if there are no children or selection manager, or single select stop
    if (!node.children || !selectionManager || selectionManager.mode() === 'single') {
      return;
    }
    node.children.forEach(child => {
      if (isSelected) {
        selectionManager.select(child);
      } else {
        selectionManager.deselect(child);
      }
      // recursively call selectMultiModeChildren and mark those node as selected also.
      selectChildren(child, isSelected);
    });
  }, [selectionManager]);
  const loadChildNodes = useCallback((...args_1) => __awaiter(this, [...args_1], void 0, function* (forceReload = false) {
    // nothing to expand
    if (!isTreeNodeWithChildren(model)) {
      return;
    }
    // if the children are already loaded, stop
    if (model.children && !forceReload) {
      return;
    }
    // load the children
    setIsLoading(true);
    yield loadChildren === null || loadChildren === void 0 ? void 0 : loadChildren(model);
    setIsLoading(false);
  }), [loadChildren, model]);
  const expand = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    // nothing to expand
    if (!isTreeNodeWithChildren(model) || (treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(model))) {
      return;
    }
    // if the navigation drawer is minimized, expand it
    if (isMinimized) {
      toggleMinimized();
    }
    // if the children need to be loaded asynchronously, load them
    yield loadChildNodes();
    treeControl === null || treeControl === void 0 ? void 0 : treeControl.expand(model);
    // toggle selection of all child nodes as they may not initially be selected if they were loaded asynchronously
    if ((selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode()) === 'multiple') {
      selectChildren(model, selectionManager.isSelected(model));
    }
  }), [isMinimized, model, loadChildNodes, selectChildren, selectionManager, toggleMinimized, treeControl]);
  const collapse = useCallback(() => {
    treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(model);
    // focus the model
    focusWithModality(ref.current, 'keyboard');
  }, [model, treeControl]);
  const toggleItem = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    (treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(model)) ? collapse() : yield expand();
  }), [collapse, expand, model, treeControl]);
  const onSelect = useCallback(() => {
    // this should never be the case, but just in case
    if (!selectionManager) {
      return;
    }
    // handle single selection.
    if ((selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode()) === 'single') {
      selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.clear();
      if (isSelectable) {
        selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.select(model);
      }
      // track selection
      selections === null || selections === void 0 ? void 0 : selections(model, isTreeNodeWithChildren(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode());
      return;
    }
    // handle multiple selection.
    if (isSelectable) {
      selectionManager.toggle(model);
    }
    // track selection
    selections === null || selections === void 0 ? void 0 : selections(model, isTreeNodeWithChildren(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode());
    // toggle selection of all parents children
    if ((selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode()) === 'multiple') {
      selectChildren(model, selectionManager.isSelected(model));
    }
  }, [selectionManager, isSelectable, model, selections, selectChildren]);
  const onKeyDown = useCallback(event => __awaiter(this, void 0, void 0, function* () {
    // if the right arrow key is pressed, expand the item
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (isExpanded) {
        focusNext();
      } else {
        !isRtl ? yield expand() : collapse();
      }
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onSelect();
    }
    // if the left arrow key is pressed, collapse the item
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      !isRtl ? collapse() : yield expand();
      // if this item has children or is collapsed then collapse it, otherwise collapse the parent
      if (isTreeNodeWithChildren(model) && isExpanded) {
        treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(model);
      } else {
        !isRtl && collapseParent();
      }
    }
    // on enter or space, navigate to the model
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }
  }), [collapse, collapseParent, expand, isExpanded, focusNext, isRtl, model, onSelect, treeControl]);
  // when the isMinimized state changes to true, collapse the item
  useEffect(() => {
    if (isMinimized && isExpanded) {
      treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(model);
    }
  }, [isExpanded, isMinimized, model, treeControl]);
  const {
    tooltipProps,
    triggerProps
  } = useTooltipTrigger({
    triggerRef: ref
  });
  const isTopMostSelected = useIsTopMostSelected(model);
  // listen for programmatic reload events
  useEffect(() => {
    const listener = () => __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c;
      // before loading check if the node is selected and all its children are selected
      const shouldSelectAllChildren = (selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(model)) && ((_b = (_a = model.children) === null || _a === void 0 ? void 0 : _a.every(child => selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(child))) !== null && _b !== void 0 ? _b : true);
      yield loadChildNodes === null || loadChildNodes === void 0 ? void 0 : loadChildNodes(true);
      // if all children were previously selected then select all new children that aren't already selected
      if (shouldSelectAllChildren) {
        (_c = model.children) === null || _c === void 0 ? void 0 : _c.forEach(child => {
          if (!(selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(child))) {
            selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.select(child);
          }
        });
      }
      selections === null || selections === void 0 ? void 0 : selections(model, isTreeNodeWithChildren(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.isSelected(model), selectionManager === null || selectionManager === void 0 ? void 0 : selectionManager.mode());
    });
    // add the listener
    treeControl === null || treeControl === void 0 ? void 0 : treeControl[addReloadEventListenerSymbol](model, listener);
    // remove the listener
    return () => {
      treeControl === null || treeControl === void 0 ? void 0 : treeControl[removeReloadEventListenerSymbol](model);
    };
  }, [loadChildNodes, loadChildren, model, selectionManager, selections, treeControl]);
  const renderTrailingAction = useCallback(() => {
    if (!trailingAction) {
      return;
    }
    if (typeof trailingAction === 'function') {
      return trailingAction({
        model,
        isLoading,
        isFocused: isFocusVisible,
        isSelected: isActive,
        reload: () => treeControl.reload(model),
        focus: (origin = 'pointer') => focusWithModality(ref.current, origin)
      });
    }
    return trailingAction;
  }, [isActive, isFocusVisible, isLoading, model, trailingAction, treeControl]);
  const renderContent = useCallback(() => {
    // if there is no content prop, then render the default children
    if (!content) {
      return React.createElement(TreeItemLink, {
        icon: icon !== null && icon !== void 0 ? icon : model.icon
      }, React.createElement(TreeNodeTitle, null, model.title));
    }
    // if the content prop is a function, then call it with some useful metadata
    if (typeof content === 'function') {
      return content({
        model,
        isLoading,
        isFocused: isFocusVisible,
        isSelected: isActive,
        reload: () => treeControl.reload(model),
        focus: (origin = 'pointer') => focusWithModality(ref.current, origin)
      });
    }
    // ideally this would not be wrapped in the TreeItemLink component as that would align with the Angular implementation,
    // but that would require a breaking change so we are stuck with it for now.
    return React.createElement(TreeItemLink, {
      icon: icon !== null && icon !== void 0 ? icon : model.icon
    }, content);
  }, [content, icon, isFocusVisible, isActive, isLoading, model, treeControl]);
  return React.createElement(TreeItemContext.Provider, {
    value: {
      level: level + 1,
      collapseParent: collapse,
      toggleParent: toggleItem
    }
  }, React.createElement("div", Object.assign({
    className: clsx({
      'uxa-navigation-item-expanded': isExpanded
    }),
    role: "treeitem",
    "aria-selected": isActive,
    "aria-expanded": isExpanded
  }, props), React.createElement("div", Object.assign({
    className: clsx('uxa-tree-node', className, {
      'uxa-active': isActive,
      'uxa-expanded': isExpanded,
      'uxa-focused': isFocusVisible,
      'uxa-active-parent': isTopMostSelected
    })
  }, mergeProps(focusProps, tabbableProps, triggerProps, {
    tabIndex,
    onKeyDown
  })), React.createElement("div", {
    className: "uxa-tree-node-main-content"
  }, isTreeNodeWithChildren(model) && React.createElement("span", {
    className: "uxa-tree-node-expander-container"
  }, expander !== null && expander !== void 0 ? expander : React.createElement(TreeNodeExpander, {
    isExpanded: isExpanded
  })), React.createElement("div", Object.assign({
    className: "uxa-tree-node-content-container"
  }, mergeProps({
    onClick: onSelect,
    style: {
      paddingInlineStart: isTreeNodeWithChildren(model) ? '0' : `calc(var(--uxa-tree-node__inset) + calc(var(--uxa-tree-node__padding-multiplier) * ${level}))`
    }
  })), renderContent()), React.createElement("div", {
    className: "uxa-tree-node-trailing-action-container"
  }, isLoading && React.createElement("div", {
    className: "uxa-tree-node-loading-container"
  }, loadingIndicator !== null && loadingIndicator !== void 0 ? loadingIndicator : React.createElement(Spinner, {
    size: 12
  })), renderTrailingAction()))), isTreeNodeWithChildren(model) && isExpanded && React.createElement("div", {
    className: "uxa-tree-node-children"
  }, (_c = model.children) === null || _c === void 0 ? void 0 : _c.map(child => React.createElement(SecondaryItem, {
    key: child.title,
    model: child
  })))), React.createElement(Tooltip, Object.assign({
    placement: "after",
    alignment: "center",
    isDisabled: !isMinimized
  }, tooltipProps), model.title));
}
/** Define the Prop Type information */
TreeNode.propTypes = {
  /** The tree node id. */
  id: PropTypes__default.string,
  /** The Tree nodes primary icon. This will remain visible when the drawer is minimized. */
  icon: PropTypes__default.node,
  /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
  expander: PropTypes__default.node,
  /** The object to render as tree node. */
  model: PropTypes__default.shape({
    id: PropTypes__default.string,
    title: PropTypes__default.string.isRequired,
    icon: PropTypes__default.node,
    data: PropTypes__default.any,
    children: PropTypes__default.arrayOf(PropTypes__default.shape({}))
  }).isRequired,
  /** Custom component which renders the title and any other content needed for the navigation item. */
  content: PropTypes__default.node
};
function useIsTopMostSelected(model) {
  const {
    selected
  } = useTreeContext();
  // if the node is not selected, then it is not the top most selected node
  if (!selected) {
    return false;
  }
  // if this is the only selected node, then it is the top most selected node
  if (selected.length === 1 && selected[0].title === model.title) {
    return true;
  }
  const hasChild = (node, child) => {
    if (node.children) {
      return node.children.some(c => c.title === child.title || hasChild(c, child));
    }
    return false;
  };
  // rescursively check selected nodes children to find if a parent is selected
  const isParentSelected = node => {
    // iterate over all selected nodes
    for (const selectedNode of selected) {
      // this is node is the target node then skip as it is not its own parent
      if (selectedNode.title === node.title) {
        continue;
      }
      // if the selected node is a parent of the target node then return true
      if (hasChild(selectedNode, node)) {
        return true;
      }
    }
    return false;
  };
  return !isParentSelected(model);
}

var css_248z = ":host,\n.uxa-tree {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n}\n:host.uxa-tree-hidden-icons,\n.uxa-tree.uxa-tree-hidden-icons {\n  --uxa-tree-node-icon__display: none;\n}\n:host.uxa-tree-single-level,\n.uxa-tree.uxa-tree-single-level {\n  --uxa-tree-node-expander-container__display: none;\n  --uxa-tree-node__padding-inline: 16px;\n}\n\n.uxa-tree-node-expanded {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--expanded);\n}";
styleInject(css_248z);

function Tree({
  treeControl,
  node,
  selectionManager,
  loadChildren
}) {
  // create the context value
  const TreeListContext = createTreeContext();
  const [selected, setSelected] = useState([]);
  const direction = useDirection();
  const isRtl = useMemo(() => direction === 'rtl', [direction]);
  // sort the items based on visual order rather than the order they were added
  const sort = useCallback((a, b) => {
    if (!a.ref.current || !b.ref.current) {
      return 0;
    }
    return a.ref.current.offsetTop - b.ref.current.offsetTop;
  }, []);
  // determine if any of the top level items have icons
  const hasIcons = useMemo(() => treeControl.items.some(item => item.icon), [treeControl.items]);
  // a function to track the TreeItem selection.
  const selections = (item,
  // item will look like this
  hasChildren, isSelected, mode) => {
    // handle single selection.
    if (mode === 'single') {
      setSelected([item]);
      return;
    }
    // handle multiple selection.
    setSelected(prev => {
      const addDescendants = descendantItem => {
        let descendants = [descendantItem];
        if (descendantItem.children && descendantItem.children.length > 0) {
          descendantItem.children.forEach(child => {
            descendants = [...descendants, ...addDescendants(child)];
          });
        }
        return descendants;
      };
      if (isSelected) {
        // Add item and its descendants to the array
        return hasChildren ? [...prev, ...addDescendants(item)] : [...prev, item];
      } else {
        // Remove item and its descendants from the array if they exist
        return hasChildren ? prev.filter(i => !addDescendants(item).includes(i)) : prev.filter(i => i !== item);
      }
    });
  };
  const TreeItem = useMemo(() => node !== null && node !== void 0 ? node : TreeNode, [node]);
  return React.createElement(TreeListContext.Provider, {
    value: {
      treeControl,
      SecondaryItem: TreeItem,
      selectionManager,
      selections,
      selected,
      isRtl,
      loadChildren
    }
  }, React.createElement(FocusKeyManager, {
    orientation: "vertical",
    sort: sort
  }, React.createElement("div", {
    className: clsx('uxa-tree', {
      'uxa-tree-hidden-icons': !hasIcons
    })
  }, React.createElement("div", {
    role: "tree"
  }, treeControl === null || treeControl === void 0 ? void 0 : treeControl.items.map(item => React.createElement(TreeItem, {
    key: item.title,
    model: item
  }))))));
}
/** Define the Prop Type information */
Tree.propTypes = {
  /** Custom component used to render navigation items. */
  node: PropTypes__default.func,
  /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
  treeControl: PropTypes__default.any.isRequired,
  /** Emits when activating a navigation item (click or keypress). */
  selectionManager: PropTypes__default.any,
  /** Load children asynchronously */
  loadChildren: PropTypes__default.func
};

function useTreeControl({
  items
}) {
  // store the expanded items in an array
  const [expandedItems, setExpandedItems] = useState([]);
  // store the reload event listeners in an array
  const reloadListeners = useRef(new Map());
  // collapse an item
  const collapse = item => {
    setExpandedItems(list => list.filter(i => i !== item));
  };
  // collapse all items
  const collapseAll = () => {
    setExpandedItems([]);
  };
  // collapse the item and all of it's children
  const collapseDescendants = item => {
    var _a;
    collapse(item);
    if (isTreeNodeWithChildren(item)) {
      (_a = item.children) === null || _a === void 0 ? void 0 : _a.forEach(child => collapseDescendants(child));
    }
  };
  // expand an item and it's children
  const expand = item => {
    // if the item is already expanded, or it doesn't have children, do nothing
    if (isExpanded(item) || !isTreeNodeWithChildren(item)) {
      return;
    }
    setExpandedItems(list => [...list, item]);
  };
  // expand all items
  const expandAll = () => {
    items.forEach(item => expandDescendants(item));
  };
  // Expand the specified navigation item and all of its descendants.
  const expandDescendants = item => {
    var _a;
    expand(item);
    if (isTreeNodeWithChildren(item)) {
      (_a = item.children) === null || _a === void 0 ? void 0 : _a.forEach(child => expandDescendants(child));
    }
  };
  // Whether the navigation item is expanded.
  const isExpanded = item => {
    return expandedItems.includes(item);
  };
  // toggle the expanded state of an item
  const toggle = item => {
    if (isExpanded(item)) {
      collapse(item);
    } else {
      expand(item);
    }
  };
  // determine if there are only top level items in the list
  const isSingleLevel = useMemo(() => items.every(item => !item.children || item.children.length === 0), [items]);
  // add a reload event listener
  const addReloadEventListener = useCallback((item, listener) => {
    reloadListeners.current.set(item, listener);
  }, []);
  // remove a reload event listener
  const removeReloadEventListener = useCallback(item => {
    // remove the listener
    reloadListeners.current.delete(item);
  }, []);
  const reload = useCallback(item => __awaiter(this, void 0, void 0, function* () {
    // get the listener for this item
    const listener = reloadListeners.current.get(item);
    // call the listener
    yield listener === null || listener === void 0 ? void 0 : listener();
  }), []);
  return {
    items,
    isSingleLevel,
    collapse,
    collapseAll,
    collapseDescendants,
    expand,
    expandAll,
    expandDescendants,
    isExpanded,
    toggle,
    reload,
    [addReloadEventListenerSymbol]: addReloadEventListener,
    [removeReloadEventListenerSymbol]: removeReloadEventListener
  };
}

export { TreeDrawer as T, TreeHeader as a, TreeItemLink as b, TreeMinimizeButton as c, TreeNodeExpander as d, TreeNodeTitle as e, TreeNode as f, Tree as g, isTreeNodeWithChildren as i, useTreeControl as u };
