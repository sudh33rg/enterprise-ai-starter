export { u as useNavigationTreeControl } from './use-tree-control.esm.js';
import * as React from 'react';
import { createContext, useContext, useRef, useState, useMemo, useCallback, useEffect, forwardRef } from 'react';
import { a as __awaiter, _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import { f as ChevronSmallRightIcon, D as DoubleChevronLeftIcon } from './zoom-out.esm.js';
import '@ux-aspects-universal/core/drawer';
import { u as useDrawer, b as DrawerResizeHandle } from './drawer-container.esm.js';
import { u as useDirection } from './direction.esm.js';
import { u as useControlled } from './use-controllable.esm.js';
import clsx from 'clsx';
import './reducer-provider.esm.js';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { useFocusRing } from '@react-aria/focus';
import { f as focusWithModality, c as FocusKeyManager } from './focus-key-manager.esm.js';
import { b as useTabbable } from './use-tabbable.esm.js';
import { T as Tooltip } from './tooltip.esm.js';
import { a as useTooltipTrigger } from './use-popover-trigger.esm.js';
import { S as Spinner } from './spinner.esm2.js';
import '@react-aria/interactions';
import '@ux-aspects-universal/core/theming';
import './theme-region.esm.js';
import { u as useThemeFamily } from './use-active-theme.esm.js';
import { u as useIsomorphicEffect } from './use-isomorphic-effect.esm.js';
import './use-selection.esm.js';
import './use-state-ref.esm.js';
import './prop-types.esm.js';
import './use-unique-id.esm.js';
import './use-mutation-observer.esm.js';
import 'react-dom';
import '@floating-ui/react';
import './use-body-ref.esm.js';
import './use-event-listener.esm.js';
import './use-outside-click.esm.js';
import './use-debounce.esm.js';
import './show.esm.js';

const NavigationDrawerContext = createContext(undefined);
function useNavigationDrawer() {
  const context = useContext(NavigationDrawerContext);
  if (!context) {
    throw new Error('useNavigationDrawerContext must be used within a NavigationDrawerContext');
  }
  return context;
}
var NavigationType;
(function (NavigationType) {
  NavigationType[NavigationType["List"] = 0] = "List";
  NavigationType[NavigationType["Tree"] = 1] = "Tree";
})(NavigationType || (NavigationType = {}));

var css_248z$8 = "/* stylelint-disable ux-aspects/no-host-context */\n/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:host,\n.uxa-drawer {\n  display: block;\n  position: relative;\n  width: var(--uxa-drawer__width, 100%);\n  height: var(--uxa-drawer__height, 100%);\n  animation-duration: var(--uxa-drawer__animation-duration);\n  animation-fill-mode: forwards;\n}\n:host.uxa-placement-start .uxa-drawer-content,\n.uxa-drawer.uxa-placement-start .uxa-drawer-content {\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-end .uxa-drawer-content,\n.uxa-drawer.uxa-placement-end .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-top .uxa-drawer-content,\n.uxa-drawer.uxa-placement-top .uxa-drawer-content {\n  border-bottom-left-radius: var(--uxa-drawer-content__border-radius);\n  border-bottom-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-placement-bottom .uxa-drawer-content,\n.uxa-drawer.uxa-placement-bottom .uxa-drawer-content {\n  border-top-left-radius: var(--uxa-drawer-content__border-radius);\n  border-top-right-radius: var(--uxa-drawer-content__border-radius);\n}\n:host.uxa-opening.uxa-placement-start, :host.uxa-opening.uxa-placement-end,\n.uxa-drawer.uxa-opening.uxa-placement-start,\n.uxa-drawer.uxa-opening.uxa-placement-end {\n  animation-name: opening-horizontal;\n}\n:host.uxa-opening.uxa-placement-top, :host.uxa-opening.uxa-placement-bottom,\n.uxa-drawer.uxa-opening.uxa-placement-top,\n.uxa-drawer.uxa-opening.uxa-placement-bottom {\n  animation-name: opening-vertical;\n}\n:host.uxa-closing.uxa-placement-start, :host.uxa-closing.uxa-placement-end,\n.uxa-drawer.uxa-closing.uxa-placement-start,\n.uxa-drawer.uxa-closing.uxa-placement-end {\n  animation-name: closing-horizontal;\n}\n:host.uxa-closing.uxa-placement-top, :host.uxa-closing.uxa-placement-bottom,\n.uxa-drawer.uxa-closing.uxa-placement-top,\n.uxa-drawer.uxa-closing.uxa-placement-bottom {\n  animation-name: closing-vertical;\n}\n:host.uxa-closed,\n.uxa-drawer.uxa-closed {\n  display: none;\n}\n:host.uxa-placement-start,\n.uxa-drawer.uxa-placement-start {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-end: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--start);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--start);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--start\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--start);\n}\n:host.uxa-placement-end,\n.uxa-drawer.uxa-placement-end {\n  --uxa-drawer-wrapper__flex-direction: row;\n  --uxa-drawer-wrapper__inset-inline-start: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--end);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--end);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--end);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--end);\n}\n:host.uxa-placement-top,\n.uxa-drawer.uxa-placement-top {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__bottom: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--top);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--top);\n  --uxa-drawer-content__border-width-bottom: var(--uxa-drawer-content__border-width-bottom--top);\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--top);\n}\n:host.uxa-placement-bottom,\n.uxa-drawer.uxa-placement-bottom {\n  --uxa-drawer-wrapper__flex-direction: column;\n  --uxa-drawer-wrapper__top: 0;\n  --uxa-drawer-content__border-width-top: var(--uxa-drawer-content__border-width-top--bottom);\n  --uxa-drawer-content__border-width-right: var(--uxa-drawer-content__border-width-right--bottom);\n  --uxa-drawer-content__border-width-bottom: var(\n    --uxa-drawer-content__border-width-bottom--bottom\n  );\n  --uxa-drawer-content__border-width-left: var(--uxa-drawer-content__border-width-left--bottom);\n}\n:host.uxa-drawer-overlay,\n.uxa-drawer.uxa-drawer-overlay {\n  position: absolute;\n}\n:host.uxa-drawer-overlay.uxa-placement-start,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-start {\n  inset-inline-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-end,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-end {\n  inset-inline-end: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-top,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-top {\n  inset-block-start: 0;\n}\n:host.uxa-drawer-overlay.uxa-placement-bottom,\n.uxa-drawer.uxa-drawer-overlay.uxa-placement-bottom {\n  inset-block-end: 0;\n}\n\n.uxa-drawer-wrapper {\n  display: flex;\n  position: absolute;\n  flex-direction: var(--uxa-drawer-wrapper__flex-direction);\n  top: var(--uxa-drawer-wrapper__top);\n  bottom: var(--uxa-drawer-wrapper__bottom);\n  inset-inline-start: var(--uxa-drawer-wrapper__inset-inline-start);\n  inset-inline-end: var(--uxa-drawer-wrapper__inset-inline-end);\n  width: var(--uxa-drawer-wrapper__width, 100%);\n  height: var(--uxa-drawer-wrapper__height, 100%);\n}\n\n.uxa-drawer-content {\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n  box-shadow: var(--uxa-drawer-content__box-shadow);\n  background-color: var(--uxa-drawer-content__background-color);\n  border-width: var(--uxa-drawer-content__border-width-top) var(--uxa-drawer-content__border-width-right) var(--uxa-drawer-content__border-width-bottom) var(--uxa-drawer-content__border-width-left);\n  border-style: var(--uxa-drawer-content__border-style);\n  border-color: var(--uxa-drawer-content__border-color);\n}\n\n@media screen and (prefers-reduced-motion) {\n  :host {\n    animation-duration: 0;\n  }\n}\n@keyframes opening-horizontal {\n  from {\n    width: 0;\n  }\n  to {\n    width: var(--uxa-drawer__width, 100%);\n  }\n}\n@keyframes closing-horizontal {\n  from {\n    width: var(--uxa-drawer__width, 100%);\n  }\n  to {\n    width: 0;\n  }\n}\n@keyframes opening-vertical {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--uxa-drawer__height, 100%);\n  }\n}\n@keyframes closing-vertical {\n  from {\n    height: var(--uxa-drawer__height, 100%);\n  }\n  to {\n    height: 0;\n  }\n}\n:host.uxa-tree-drawer-minimized,\n.uxa-tree-drawer.uxa-tree-drawer-minimized {\n  --uxa-tree-node__column-gap: var(--uxa-tree-node__column-gap--minimized);\n  --uxa-tree-node__padding-start: var(--uxa-tree-node__padding-start--minimized);\n  --uxa-treee-minimize-button__transform: var(--uxa-tree-minimize-button__transform--minimized);\n  --uxa-tree-node-title__display: var(--uxa-tree-node-title__display--minimized);\n  --uxa-tree-header__padding-inline: var(--uxa-tree-header__padding-inline--minimized);\n  --uxa-tree-header__padding-block: var(--uxa-tree-header__padding-block--minimized);\n  --uxa-tree__display: var(--uxa-tree__display--minimized);\n  --uxa-tree-node-expander-container__display: none;\n  --uxa-tree-node__display: none;\n  --uxa-tree-node-expander__width: 1rem;\n}\n:host.uxa-tree-drawer-single-level,\n.uxa-tree-drawer.uxa-tree-drawer-single-level {\n  --uxa-tree-header__padding-inline: 16px;\n  --uxa-tree-header__padding-block: 8px;\n}\n\n.uxa-drawer-content {\n  display: flex;\n  flex-direction: column;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl],\n:host-context([dir=rtl]) {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) {\n  --uxa-tree-minimize-button__transform: var(--uxa-tree-minimize-button__transform--rtl);\n  --uxa-tree-minimize-button__transform--minimized: var(\n    --uxa-tree-minimize-button__transform--minimized-rtl\n  );\n}\n\n:host,\n.uxa-navigation-drawer {\n  display: var(--uxa-navigation-drawer__display, block);\n}\n:host.uxa-navigation-drawer-minimized,\n.uxa-navigation-drawer.uxa-navigation-drawer-minimized {\n  --uxa-navigation-item__column-gap: var(--uxa-navigation-item__column-gap--minimized);\n  --uxa-navigation-item__padding-start: var(--uxa-navigation-item__padding-start--minimized);\n  --uxa-navigation-minimize-button__transform: var(\n    --uxa-navigation-minimize-button__transform--minimized\n  );\n  --uxa-navigation-item-title__display: var(--uxa-navigation-item-title__display--minimized);\n  --uxa-navigation-header__padding-inline: var(\n    --uxa-navigation-header__padding-inline--minimized\n  );\n  --uxa-navigation-header__padding-block: var(--uxa-navigation-header__padding-block--minimized);\n  --uxa-navigation-tree__display: var(--uxa-navigation-tree__display--minimized);\n  --uxa-tree-node__display: flex;\n  --uxa-tree-node-expander__padding-inline-end: 0;\n  --uxa-navigation-drawer__display: var(--uxa-navigation-drawer__display--minimized);\n}\n:host.uxa-navigation-drawer-single-level,\n.uxa-navigation-drawer.uxa-navigation-drawer-single-level {\n  --uxa-navigation-header__padding-inline: 16px;\n  --uxa-navigation-header__padding-block: 8px;\n}\n:host.uxa-drawer-overlay,\n.uxa-navigation-drawer.uxa-drawer-overlay {\n  z-index: 10;\n}\n\n.uxa-navigation-search {\n  display: flex;\n  align-items: center;\n  padding-inline: var(--uxa-navigation-search__padding-inline);\n  height: var(--uxa-navigation-search__height);\n  flex: none;\n}\n.uxa-navigation-search:empty {\n  display: none;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl],\n:host-context([dir=rtl]) {\n  --uxa-navigation-minimize-button__transform: var(\n    --uxa-navigation-minimize-button__transform--rtl\n  );\n  --uxa-navigation-minimize-button__transform--minimized: var(\n    --uxa-navigation-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] {\n  --uxa-navigation-minimize-button__transform: var(\n    --uxa-navigation-minimize-button__transform--rtl\n  );\n  --uxa-navigation-minimize-button__transform--minimized: var(\n    --uxa-navigation-minimize-button__transform--minimized-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) {\n  --uxa-navigation-minimize-button__transform: var(\n    --uxa-navigation-minimize-button__transform--rtl\n  );\n  --uxa-navigation-minimize-button__transform--minimized: var(\n    --uxa-navigation-minimize-button__transform--minimized-rtl\n  );\n}";
styleInject(css_248z$8);

const NavigationDrawer = ({
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
      return navigationType === NavigationType.Tree ? 'var(--uxa-navigation-tree-drawer__width--minimized)' : 'var(--uxa-navigation-drawer__width--minimized)';
    }
    const contentSize = `${size}${unit === 'percent' ? '%' : 'px'}`;
    return resizable ? `calc(${contentSize} + var(--uxa-drawer-resize-handle__size))` : contentSize;
  }, [minimized, size, unit, resizable, navigationType]);
  // toggle the minimized state
  const toggleMinimized = useCallback(() => setMinimized(!minimized), [minimized, setMinimized]);
  return React.createElement(NavigationDrawerContext.Provider, {
    value: {
      isMinimized: minimized,
      toggleMinimized,
      navigationType,
      setNavigationType,
      setSingleLevel
    }
  }, React.createElement("div", Object.assign({}, mergeProps(drawerProps, {
    className: clsx('uxa-navigation-drawer uxa-tree-drawer', {
      'uxa-navigation-tree-drawer': navigationType === NavigationType.Tree,
      'uxa-navigation-drawer-minimized': minimized,
      'uxa-navigation-drawer-single-level': isSingleLevel
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
NavigationDrawer.propTypes = {
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

var css_248z$7 = ":host,\n.uxa-tree-header {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--uxa-tree-header__gap);\n       column-gap: var(--uxa-tree-header__gap);\n  height: var(--uxa-tree-header__height);\n  padding-inline: var(--uxa-tree-header__padding-inline);\n  padding-block: var(--uxa-tree-header__padding-block);\n  background-color: var(--uxa-elevation__background-color--2);\n  box-shadow: var(--uxa-tree-header__box-shadow);\n  box-sizing: border-box;\n  flex: none;\n}\n:host.uxa-tree-header-minimized,\n.uxa-tree-header.uxa-tree-header-minimized {\n  justify-content: center;\n}\n:host.uxa-tree-header-minimized .uxa-tree-header-content,\n.uxa-tree-header.uxa-tree-header-minimized .uxa-tree-header-content {\n  display: none;\n}\n\n.uxa-tree-header-content {\n  flex: 1;\n}\n\n:host,\n.uxa-navigation-header {\n  display: grid;\n  grid-template-areas: var(--uxa-navigation-header__grid-template-areas);\n  grid-template-columns: var(--uxa-navigation-header__grid-template-columns);\n  --uxa-tree-header__column-gap: var(--uxa-navigation-header__gap);\n  --uxa-tree-header__height: var(--uxa-navigation-header__height);\n  --uxa-tree-header__padding-inline: var(--uxa-navigation-header__padding-inline);\n  --uxa-tree-header__padding-block: var(--uxa-navigation-header__padding-block);\n  --uxa-tree-header__background-color: var(--uxa-elevation__background-color--2);\n  --uxa-tree-header__box-shadow: var(--uxa-navigation-header__box-shadow);\n  --uxa-logo__fill: var(--uxa-navigation-header__color, inherit);\n}\n:host.uxa-navigation-header-minimized,\n.uxa-navigation-header.uxa-navigation-header-minimized {\n  justify-content: center;\n  grid-template-areas: \"minimize-button\";\n  grid-template-columns: auto;\n}\n:host.uxa-navigation-header-minimized .uxa-navigation-header-content,\n.uxa-navigation-header.uxa-navigation-header-minimized .uxa-navigation-header-content {\n  display: none;\n}\n\n.uxa-navigation-header-content {\n  flex: 1;\n  grid-area: content;\n  display: flex;\n  align-items: center;\n}";
styleInject(css_248z$7);

const NavigationHeader = ({
  minimizeButton,
  children
}) => {
  const {
    isMinimized
  } = useNavigationDrawer();
  return React.createElement("div", {
    className: clsx('uxa-navigation-header uxa-tree-header', {
      'uxa-navigation-header-minimized': isMinimized
    })
  }, React.createElement("div", {
    className: "uxa-navigation-header-content"
  }, children), minimizeButton);
};
/** Define the Prop Type information */
NavigationHeader.propTypes = {
  /** The content to render in the header. */
  children: PropTypes__default.element,
  /** Define a minimize button. */
  minimizeButton: PropTypes__default.element
};

// Create the context
const NavigationItemContext = createContext({
  level: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  collapseParent: _ => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleParent: _ => {}
});
// Create a hook to consume the context
function useNavigationItem() {
  return useContext(NavigationItemContext);
}

var css_248z$6 = ":host,\n.uxa-tree-node-expander {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent;\n  height: var(--uxa-tree-node-expander__height);\n  font-size: var(--uxa-tree-node-expander__font-size);\n  color: var(--uxa-tree-node-expander__color);\n  cursor: var(--uxa-tree-node-expander__cursor);\n  padding-inline-end: var(--uxa-tree-node-expander__padding-inline-end);\n}\n\n:host,\n.uxa-navigation-item-expander {\n  --uxa-tree-node-expander__font-size: var(--uxa-navigation-item-expander__font-size);\n  --uxa-tree-node-expander__color: var(--uxa-navigation-item-expander__color);\n  --uxa-tree-node-expander__cursor: var(--uxa-navigation-item-expander__cursor);\n}";
styleInject(css_248z$6);

const NavigationItemExpander = props => {
  const {
    toggleParent,
    level
  } = useNavigationItem();
  return React.createElement("span", Object.assign({}, mergeProps({
    className: 'uxa-navigation-item-expander uxa-tree-node-expander',
    style: {
      '--uxa-icon__transform': 'var(--uxa-navigation-minimize-button__transform)',
      paddingInlineStart: `calc(var(--uxa-navigation-tree-item__padding-inline-start) + calc(var(--uxa-navigation-tree-item__padding-multiplier) * ${level - 1}))`
    },
    tabIndex: -1,
    'aria-hidden': true,
    // prevent the expander from triggering the parent item's onClick - to prevent navigating to the route for example
    onClick: event => {
      toggleParent('pointer');
      return event.stopPropagation();
    }
  }, props)), React.createElement(ChevronSmallRightIcon, {
    style: {
      transform: 'var(--uxa-navigation-item-expander-icon__transform)'
    }
  }));
};

var css_248z$5 = ":host,\n.uxa-tree-node-content {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  -moz-column-gap: var(--uxa-tree-node-content__column-gap);\n       column-gap: var(--uxa-tree-node-content__column-gap);\n  overflow: hidden;\n  -webkit-text-decoration: var(--uxa-tree-node-content__text-decoration);\n          text-decoration: var(--uxa-tree-node-content__text-decoration);\n}\n\n.uxa-tree-node-icon {\n  display: var(--uxa-tree-node-icon__display, inline-flex);\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: var(--uxa-tree-node-icon__width);\n  height: var(--uxa-tree-node-icon__height);\n  font-size: var(--uxa-tree-node-icon__font-size);\n  color: var(--uxa-tree-node-icon__color);\n}\n\n:host,\n.uxa-navigation-item-link {\n  --uxa-tree-node-content__column-gap: var(--uxa-navigation-item-link__column-gap);\n  --uxa-tree-node-content__text-decoration: var(--uxa-navigation-item-link__text-decoration);\n  height: 100%;\n}\n\n.navigation-item-link-icon {\n  display: var(--uxa-navigation-item-link-icon__display, inline-flex);\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: var(--uxa-navigation-item-link-icon__width);\n  height: var(--uxa-navigation-item-link-icon__height);\n  font-size: var(--uxa-navigation-item-link-icon__font-size);\n  color: var(--uxa-navigation-item-link-icon__color);\n}";
styleInject(css_248z$5);

const NavigationItemLink = ({
  icon,
  children
}) => {
  return React.createElement("span", {
    className: "uxa-navigation-item-link uxa-tree-node-content"
  }, React.createElement("span", {
    className: "navigation-item-link-icon uxa-tree-node-icon"
  }, icon), children);
};

var css_248z$4 = ":host,\n.uxa-tree-node-title {\n  display: var(--uxa-tree-node-title__display, inline-block);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  font-size: var(--uxa-tree-node-title__font-size);\n  font-weight: var(--uxa-tree-node-title__font-weight);\n  line-height: var(--uxa-tree-node-title__line-height);\n  color: var(--uxa-tree-node-title__color);\n}\n\n:host,\n.uxa-navigation-item-title {\n  --uxa-tree-node-title__display: var(--uxa-navigation-item-title__display, inline-block);\n  --uxa-tree-node-title__font-size: var(--uxa-navigation-item-title__font-size);\n  --uxa-tree-node-title__line-height: var(--uxa-navigation-item-title__line-height);\n  --uxa-tree-node-title__color: var(--uxa-navigation-item-title__color);\n}";
styleInject(css_248z$4);

const NavigationItemTitle = ({
  children
}) => {
  return React.createElement("span", {
    className: "uxa-navigation-item-title uxa-tree-node-title"
  }, children);
};

const NavigationContext = createContext({
  expandOn: 'item',
  SecondaryItem: () => null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNavigate: () => {}
});
// use a function to create the context so we can type it with generics
function createNavigationContext() {
  return NavigationContext;
}
// export the navigation list context
function useNavigation() {
  return useContext(NavigationContext);
}

function isNavigationItemWithChildren(item) {
  var _a, _b;
  return isPrimaryItemOrTreeItem(item) && (((_b = (_a = item.children) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 || item.hasChildren === true) ? true : false;
}
function isPrimaryItemOrTreeItem(item) {
  return item.hasOwnProperty('children') || item.hasOwnProperty('hasChildren');
}

var css_248z$3 = "/* stylelint-disable ux-aspects/no-host-context */\n/** Rules for navigation-item-expander-icon states: expanded, rtl, expanded+rtl */\n:host,\n.uxa-tree-node-expander-container {\n  display: var(--uxa-tree-node-expander-container__display, flex);\n  align-items: center;\n  height: 100%;\n}\n:host.uxa-tree-node-expander-container-hidden,\n.uxa-tree-node-expander-container.uxa-tree-node-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host,\n.uxa-tree-node-loading-container {\n  display: flex;\n  align-items: center;\n}\n:host.uxa-tree-node-loading-hidden,\n.uxa-tree-node-loading-container.uxa-tree-node-loading-hidden {\n  display: none;\n}\n\n:host,\n.uxa-tree-node,\n.uxa-navigation-item,\n.uxa-navigation-tree-item {\n  position: relative;\n  display: var(--uxa-tree-node__display);\n  align-items: center;\n  background-color: var(--uxa-tree-node__background-color);\n  box-shadow: var(--uxa-tree-node__box-shadow);\n  color: var(--uxa-tree-node__color);\n  --uxa-tree-node-title__font-weight: var(--uxa-tree-node__font-weight);\n  cursor: pointer;\n  outline: none;\n  font-family: var(--uxa-tree-node__font-family, var(--uxa-typography__font-family));\n  height: var(--uxa-tree-node__height);\n  margin-inline: var(--uxa-tree-node__margin-inline);\n  box-sizing: border-box;\n  width: auto;\n  border: var(--uxa-tree-node__border);\n  border-radius: var(--uxa-tree-node__border-radius);\n  padding-inline: 0;\n  padding-block: 0;\n  overflow: hidden;\n}\n:host.uxa-small,\n.uxa-tree-node.uxa-small,\n.uxa-navigation-item.uxa-small,\n.uxa-navigation-tree-item.uxa-small {\n  height: var(--uxa-tree-node__height--small);\n}\n:host.uxa-large,\n.uxa-tree-node.uxa-large,\n.uxa-navigation-item.uxa-large,\n.uxa-navigation-tree-item.uxa-large {\n  height: var(--uxa-tree-node__height--large);\n}\n:host[disabled],\n.uxa-tree-node[disabled],\n.uxa-navigation-item[disabled],\n.uxa-navigation-tree-item[disabled] {\n  pointer-events: none;\n}\n:host:hover,\n.uxa-tree-node:hover,\n.uxa-navigation-item:hover,\n.uxa-navigation-tree-item:hover {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--hover);\n}\n:host:active,\n.uxa-tree-node:active,\n.uxa-navigation-item:active,\n.uxa-navigation-tree-item:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-active,\n.uxa-tree-node.uxa-active,\n.uxa-navigation-item.uxa-active,\n.uxa-navigation-tree-item.uxa-active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active);\n  --uxa-tree-node__box-shadow: var(--uxa-tree-node__box-shadow--active);\n}\n:host.uxa-active::before,\n.uxa-tree-node.uxa-active::before,\n.uxa-navigation-item.uxa-active::before,\n.uxa-navigation-tree-item.uxa-active::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  inset-inline-start: 0;\n  bottom: 0;\n  width: var(--uxa-tree-node-indicator__width);\n  background: var(--uxa-tree-node-indicator__background);\n}\n:host.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-navigation-item.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-navigation-tree-item.uxa-active .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover);\n}\n.uxa-tree-node-children :host.uxa-active,\n.uxa-tree-node-children .uxa-tree-node.uxa-active,\n.uxa-tree-node-children .uxa-navigation-item.uxa-active,\n.uxa-tree-node-children .uxa-navigation-tree-item.uxa-active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus-child);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active-child);\n}\n.uxa-tree-node-children :host.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-tree-node.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-navigation-item.uxa-active .uxa-tree-node-main-content:hover,\n.uxa-tree-node-children .uxa-navigation-tree-item.uxa-active .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover-child);\n}\n:host.uxa-active.uxa-active-parent,\n.uxa-tree-node.uxa-active.uxa-active-parent,\n.uxa-navigation-item.uxa-active.uxa-active-parent,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--focus);\n  --uxa-tree-node__font-weight: var(--uxa-tree-node__font-weight--active);\n}\n:host.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-tree-node.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-navigation-item.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent .uxa-tree-node-main-content:hover {\n  background-color: var(--uxa-tree-node__background-color--active-hover);\n}\n:host.uxa-active.uxa-active-parent:active,\n.uxa-tree-node.uxa-active.uxa-active-parent:active,\n.uxa-navigation-item.uxa-active.uxa-active-parent:active,\n.uxa-navigation-tree-item.uxa-active.uxa-active-parent:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-active:active,\n.uxa-tree-node.uxa-active:active,\n.uxa-navigation-item.uxa-active:active,\n.uxa-navigation-tree-item.uxa-active:active {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--active);\n}\n:host.uxa-focused,\n.uxa-tree-node.uxa-focused,\n.uxa-navigation-item.uxa-focused,\n.uxa-navigation-tree-item.uxa-focused {\n  --uxa-tree-node__box-shadow: var(--uxa-tree-node__box-shadow--focus);\n}\n\n.uxa-tree-node-main-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.uxa-tree-node-trailing-action-container {\n  display: flex;\n}\n\n.uxa-tree-node-loading-container {\n  min-width: var(--uxa-tree-node-loading-container__min-width);\n  justify-content: var(--uxa-tree-node-loading-container__justify-content);\n}\n\n.uxa-tree-node-content-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-inline-end: var(--uxa-tree-node-content-container__padding-inline-end);\n}\n\n.uxa-tree-node-expander-container {\n  display: var(--uxa-tree-node-expander-container__display, flex);\n  align-items: center;\n}\n.uxa-tree-node-expander-container.uxa-tree-node-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host.uxa-expanded,\n.uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded\n  );\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] :host:not(.uxa-expanded),\n::ng-deep[dir=rtl] .uxa-tree-node:not(.uxa-expanded),\n:host-context([dir=rtl]) :host:not(.uxa-expanded),\n:host-context([dir=rtl]) .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n::ng-deep[dir=rtl] :host.uxa-expanded,\n::ng-deep[dir=rtl] .uxa-tree-node.uxa-expanded,\n:host-context([dir=rtl]) :host.uxa-expanded,\n:host-context([dir=rtl]) .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] :host:not(.uxa-expanded),\n[dir=rtl] .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n[dir=rtl] :host.uxa-expanded,\n[dir=rtl] .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) :host:not(.uxa-expanded),\n:dir(rtl) .uxa-tree-node:not(.uxa-expanded) {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--rtl\n  );\n}\n:dir(rtl) :host.uxa-expanded,\n:dir(rtl) .uxa-tree-node.uxa-expanded {\n  --uxa-tree-node-expander-icon__transform: var(\n    --uxa-tree-node-expander-icon__transform--expanded-rtl\n  );\n}\n\n/** Rules for navigation-item-expander-icon states: expanded, rtl, expanded+rtl */\n.uxa-navigation-item-expander-container {\n  --uxa-tree-node-expander-container__display: var(\n    --uxa-navigation-item-expander-container__display,\n    flex\n  );\n  --uxa-tree-node-expander__width: var(--uxa-navigation-item-expander__width);\n  --uxa-tree-node-expander__height: var(--uxa-navigation-item-expander__height);\n}\n.uxa-navigation-item-expander-container.uxa-navigation-item-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host,\n.uxa-navigation-item {\n  padding-block: 0;\n  --uxa-tree-node__font-family: var(\n    --uxa-navigation-item__font-family,\n    var(--uxa-typography__font-family)\n  );\n  --uxa-tree-node__color: var(--uxa-navigation-item__color);\n  --uxa-tree-node__font-weight: var(--uxa-navigation-item__font-weight);\n  --uxa-tree-node__column-gap: var(--uxa-navigation-item__column-gap);\n  --uxa-tree-node__padding-inline: var(--uxa-navigation-item__padding-inline);\n  --uxa-tree-node__border: var(--uxa-navigation-item__border);\n  --uxa-tree-node__border-radius: var(--uxa-navigation-item__border-radius);\n  --uxa-tree-node__background-color: var(--uxa-navigation-item__background-color);\n  --uxa-tree-node__box-shadow: var(--uxa-navigation-item__box-shadow);\n  --uxa-tree-node__height: var(--uxa-navigation-item__height);\n  --uxa-tree-node__box-shadow--focus: var(--uxa-navigation-item__box-shadow--focus);\n  --uxa-tree-node__background-color--hover: var(--uxa-navigation-item__background-color--hover);\n  --uxa-tree-node__height--small: var(--uxa-navigation-item__height--small);\n  --uxa-tree-node__height--large: var(--uxa-navigation-item__height--large);\n  --uxa-tree-node__box-shadow--active: var(--uxa-navigation-item__box-shadow--active);\n  --uxa-tree-node__color--active: var(--uxa-navigation-item__color--active);\n  --uxa-tree-node__font-weight--active: var(--uxa-navigation-item__font-weight--active);\n  --uxa-tree-node__background-color--active: var(--uxa-navigation-item__background-color--active);\n  --uxa-tree-node__background-color--active-hover: var(\n    --uxa-navigation-item__background-color--active-hover\n  );\n  --uxa-tree-node__box-shadow--active-focus: var(--uxa-navigation-item__box-shadow--active-focus);\n  --uxa-tree-node-indicator__width: var(--uxa-navigation-item-indicator__width);\n  --uxa-tree-node-indicator__background: var(--uxa-navigation-item-indicator__background);\n  --uxa-tree-node-expander__width: var(--uxa-navigation-item-expander__width);\n  --uxa-tree-node-expander__height: var(--uxa-navigation-item-expander__height);\n  --uxa-tree-node-expander-container__display: var(\n    --uxa-navigation-item-expander-container__display\n  );\n}\n\n.uxa-navigation-item-expander-container {\n  display: var(--uxa-navigation-item-expander-container__display, flex);\n  align-items: center;\n}\n.uxa-navigation-item-expander-container.uxa-navigation-item-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host.uxa-expanded,\n.uxa-navigation-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded\n  );\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] :host:not(.uxa-expanded),\n::ng-deep[dir=rtl] .uxa-navigation-item:not(.uxa-expanded),\n:host-context([dir=rtl]) :host:not(.uxa-expanded),\n:host-context([dir=rtl]) .uxa-navigation-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n::ng-deep[dir=rtl] :host.uxa-expanded,\n::ng-deep[dir=rtl] .uxa-navigation-item.uxa-expanded,\n:host-context([dir=rtl]) :host.uxa-expanded,\n:host-context([dir=rtl]) .uxa-navigation-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] :host:not(.uxa-expanded),\n[dir=rtl] .uxa-navigation-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n[dir=rtl] :host.uxa-expanded,\n[dir=rtl] .uxa-navigation-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) :host:not(.uxa-expanded),\n:dir(rtl) .uxa-navigation-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n:dir(rtl) :host.uxa-expanded,\n:dir(rtl) .uxa-navigation-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}\n\n:host,\n.uxa-navigation-tree-item {\n  --uxa-tree-node-link-icon__display: var(--uxa-navigation-item-link-icon__display);\n  --uxa-tree-node__font-weight: var(--uxa-navigation-tree-item__font-weight);\n  --uxa-tree-node__margin-inline: var(--uxa-navigation-tree-item__margin-inline);\n  --uxa-tree-node__padding-inline-start: var(--uxa-navigation-tree-item__padding-inline-start);\n  --uxa-tree-node__padding-inline-end: var(--uxa-navigation-tree-item__padding-inline-end);\n  --uxa-tree-node__column-gap: var(--uxa-navigation-tree-item__column-gap);\n  --uxa-tree-node__background-color: var(--uxa-navigation-tree-item__background-color);\n  --uxa-tree-node__box-shadow: var(--uxa-navigation-tree-item__box-shadow);\n  --uxa-tree-node__color: var(--uxa-navigation-tree-item__color);\n  --uxa-tree-node__font-family: var(\n    --uxa-navigation-tree-item__font-family,\n    var(--uxa-typography__font-family)\n  );\n  --uxa-tree-node__height: var(--uxa-navigation-tree-item__height);\n  --uxa-tree-node__border: var(--uxa-navigation-tree-item__border);\n  --uxa-tree-node__border-radius: var(--uxa-navigation-tree-item__border-radius);\n  --uxa-tree-node__height--small: var(--uxa-navigation-tree-item__height--small);\n  --uxa-tree-node__height--large: var(--uxa-navigation-tree-item__height--large);\n  --uxa-tree-node__box-shadow--focus: var(--uxa-navigation-tree-item__box-shadow--focus);\n  --uxa-tree-node__background-color--hover: var(\n    --uxa-navigation-tree-item__background-color--hover\n  );\n  --uxa-tree-node__background-color--active: var(\n    --uxa-navigation-tree-item__background-color--active\n  );\n  --uxa-tree-node__font-weight--active: var(--uxa-navigation-tree-item__font-weight--active);\n  --uxa-tree-node__background-color--active-hover: var(\n    --uxa-navigation-tree-item__background-color--active-hover\n  );\n  --uxa-tree-node-indicator__width: var(--uxa-navigation-tree-item-indicator__width);\n  --uxa-tree-node-indicator__background: var(--uxa-navigation-tree-item-indicator__background);\n}\n\n.uxa-navigation-item-expander-container {\n  display: var(--uxa-navigation-item-expander-container__display, flex);\n  align-items: center;\n}\n.uxa-navigation-item-expander-container.uxa-navigation-item-expander-container-hidden {\n  visibility: hidden;\n}\n\n:host.uxa-expanded,\n.uxa-navigation-tree-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded\n  );\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] :host:not(.uxa-expanded),\n::ng-deep[dir=rtl] .uxa-navigation-tree-item:not(.uxa-expanded),\n:host-context([dir=rtl]) :host:not(.uxa-expanded),\n:host-context([dir=rtl]) .uxa-navigation-tree-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n::ng-deep[dir=rtl] :host.uxa-expanded,\n::ng-deep[dir=rtl] .uxa-navigation-tree-item.uxa-expanded,\n:host-context([dir=rtl]) :host.uxa-expanded,\n:host-context([dir=rtl]) .uxa-navigation-tree-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] :host:not(.uxa-expanded),\n[dir=rtl] .uxa-navigation-tree-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n[dir=rtl] :host.uxa-expanded,\n[dir=rtl] .uxa-navigation-tree-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) :host:not(.uxa-expanded),\n:dir(rtl) .uxa-navigation-tree-item:not(.uxa-expanded) {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--rtl\n  );\n}\n:dir(rtl) :host.uxa-expanded,\n:dir(rtl) .uxa-navigation-tree-item.uxa-expanded {\n  --uxa-navigation-item-expander-icon__transform: var(\n    --uxa-navigation-item-expander-icon__transform--expanded-rtl\n  );\n}";
styleInject(css_248z$3);

function NavigationItem({
  item,
  isActive,
  expander,
  size = 'medium',
  icon,
  content,
  loadingIndicator,
  trailingAction,
  isSelectable = true
}) {
  var _a, _b;
  const ref = useRef(null);
  const {
    isMinimized,
    toggleMinimized,
    navigationType
  } = useNavigationDrawer();
  const {
    treeControl,
    SecondaryItem,
    onNavigate,
    secondaryItemSize,
    isItemActive,
    loadChildren,
    expandOn,
    isSingleLevel
  } = useNavigation();
  const {
    level,
    collapseParent
  } = useNavigationItem();
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref);
  const [isLoading, setIsLoading] = useState(false);
  // determine if the item is expanded
  const isExpanded = (_a = treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(item)) !== null && _a !== void 0 ? _a : false;
  const loadChildNodes = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    // nothing to expand
    if (!isNavigationItemWithChildren(item)) {
      return;
    }
    // if the children are already loaded, stop
    if (item.children) {
      return;
    }
    // load the children
    setIsLoading(true);
    yield loadChildren === null || loadChildren === void 0 ? void 0 : loadChildren(item);
    setIsLoading(false);
  }), [item, loadChildren]);
  const expand = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    // nothing to expand
    if (!isNavigationItemWithChildren(item) || (treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(item))) {
      return;
    }
    // if the navigation drawer is minimized, expand it
    if (isMinimized) {
      toggleMinimized();
    }
    // if the children need to be loaded asynchronously, load them
    yield loadChildNodes();
    treeControl === null || treeControl === void 0 ? void 0 : treeControl.expand(item);
  }), [isMinimized, item, loadChildNodes, toggleMinimized, treeControl]);
  const collapse = useCallback(modality => {
    treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(item);
    // focus the item
    focusWithModality(ref.current, modality);
  }, [item, treeControl]);
  const toggleItem = useCallback(modality => __awaiter(this, void 0, void 0, function* () {
    if (!isSelectable) {
      return;
    }
    (treeControl === null || treeControl === void 0 ? void 0 : treeControl.isExpanded(item)) ? collapse(modality) : yield expand();
  }), [collapse, expand, item, treeControl, isSelectable]);
  const onKeyDown = useCallback(event => {
    // if the right arrow key is pressed, expand the item
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      toggleItem('keyboard');
    }
    // if the left arrow key is pressed, collapse the item
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      // if this item has children or is collapsed then collapse it, otherwise collapse the parent
      if (isNavigationItemWithChildren(item) && isExpanded) {
        treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(item);
      } else {
        collapseParent('keyboard');
      }
    }
    // on enter or space, navigate to the item
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem('keyboard');
      onNavigate(item);
    }
  }, [collapseParent, isExpanded, item, onNavigate, toggleItem, treeControl]);
  const onClick = useCallback(() => {
    if (expandOn === 'item') {
      toggleItem('pointer');
    }
    if (item.route) {
      onNavigate(item);
    }
  }, [item, onNavigate, toggleItem, expandOn]);
  // when the isMinimized state changes to true, collapse the item
  useEffect(() => {
    if (isMinimized && isExpanded) {
      treeControl === null || treeControl === void 0 ? void 0 : treeControl.collapse(item);
    }
  }, [isExpanded, isMinimized, item, treeControl]);
  const {
    tooltipProps,
    triggerProps
  } = useTooltipTrigger({
    triggerRef: ref
  });
  const getInset = () => {
    if (navigationType === NavigationType.List) {
      // if this list is single level
      if (isSingleLevel) {
        return 'var(--uxa-navigation-item__padding-inline-start--single-level)';
      }
      // if the drawer is minimized and has no children
      if (isMinimized && !isNavigationItemWithChildren(item)) {
        return 'var(--uxa-navigation-item__padding-inline-start--minimized)';
      }
      return isNavigationItemWithChildren(item) ? 'var(--uxa-navigation-item__padding-inline-start--children)' : 'var(--uxa-navigation-item__padding-inline-start--no-children)';
    }
    if (navigationType === NavigationType.Tree) {
      return isNavigationItemWithChildren(item) ? '0' : `calc(var(--uxa-navigation-item__inset) + calc(var(--uxa-navigation-tree-item__padding-multiplier) * ${level}))`;
    }
    return '0';
  };
  const renderTrailingAction = useCallback(() => {
    if (!trailingAction) {
      return;
    }
    if (typeof trailingAction === 'function') {
      return trailingAction({
        item,
        isLoading,
        isFocused: isFocusVisible,
        isActive,
        reload: () => treeControl.reload(item),
        focus: (origin = 'pointer') => focusWithModality(ref.current, origin)
      });
    }
    return trailingAction;
  }, [isActive, isFocusVisible, isLoading, item, trailingAction, treeControl]);
  return React.createElement(NavigationItemContext.Provider, {
    value: {
      level: level + 1,
      collapseParent: collapse,
      toggleParent: toggleItem
    }
  }, React.createElement("div", {
    className: clsx({
      'uxa-navigation-item-expanded': isExpanded
    })
  }, React.createElement("div", Object.assign({
    role: "treeitem",
    "aria-selected": isActive,
    "aria-expanded": isExpanded,
    className: clsx({
      'uxa-navigation-item': navigationType === NavigationType.List,
      'uxa-navigation-tree-item': navigationType === NavigationType.Tree,
      'uxa-small': size === 'small',
      'uxa-medium': size === 'medium',
      'uxa-large': size === 'large',
      'uxa-active': isActive,
      'uxa-expanded': isExpanded,
      'uxa-focused': isFocusVisible
    })
  }, mergeProps(focusProps, tabbableProps, triggerProps, {
    onKeyDown,
    tabIndex
  })), isNavigationItemWithChildren(item) && React.createElement("span", {
    className: "uxa-navigation-item-expander-container"
  }, expander !== null && expander !== void 0 ? expander : React.createElement(NavigationItemExpander, null)), React.createElement("div", Object.assign({
    className: "uxa-tree-node-content-container"
  }, mergeProps({
    style: {
      paddingInlineStart: getInset()
    },
    onClick
  })), React.createElement(NavigationItemLink, {
    icon: icon !== null && icon !== void 0 ? icon : item.icon
  }, content !== null && content !== void 0 ? content : React.createElement(NavigationItemTitle, null, item.title))), React.createElement("div", {
    className: "uxa-tree-node-trailing-action-container"
  }, isLoading && React.createElement("div", {
    className: "uxa-tree-node-loading-container"
  }, loadingIndicator !== null && loadingIndicator !== void 0 ? loadingIndicator : React.createElement(Spinner, {
    size: 12
  })), renderTrailingAction())), isNavigationItemWithChildren(item) && isExpanded && React.createElement("div", {
    className: "uxa-navigation-item-children"
  }, (_b = item.children) === null || _b === void 0 ? void 0 : _b.map(child => React.createElement(SecondaryItem, {
    key: child.title,
    item: child,
    size: secondaryItemSize,
    isActive: isItemActive === null || isItemActive === void 0 ? void 0 : isItemActive(child)
  })))), React.createElement(Tooltip, Object.assign({
    placement: "after",
    alignment: "center",
    isDisabled: !isMinimized
  }, tooltipProps), item.title));
}
/** Define the Prop Type information */
NavigationItem.propTypes = {
  /** The object to render as navigation item. */
  item: PropTypes__default.shape({
    title: PropTypes__default.string.isRequired,
    icon: PropTypes__default.node,
    data: PropTypes__default.any,
    children: PropTypes__default.arrayOf(PropTypes__default.shape({}))
  }).isRequired,
  /** Whether the navigation item is active. */
  isActive: PropTypes__default.bool,
  /** The navigation item's primary icon. This will remain visible when the navigation drawer is minimized. */
  icon: PropTypes__default.node,
  /** Custom component which renders the title and any other content needed for the navigation item. */
  content: PropTypes__default.node,
  /** Custom component which renders in the expander slot. Will only be displayed if the item has children. */
  expander: PropTypes__default.node,
  /** Whether the navigation item is selectable */
  isSelectable: PropTypes__default.bool
};

var css_248z$2 = ":host,\n.uxa-tree {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n}\n:host.uxa-tree-hidden-icons,\n.uxa-tree.uxa-tree-hidden-icons {\n  --uxa-tree-node-icon__display: none;\n}\n:host.uxa-tree-single-level,\n.uxa-tree.uxa-tree-single-level {\n  --uxa-tree-node-expander-container__display: none;\n  --uxa-tree-node__padding-inline: 16px;\n}\n\n.uxa-tree-node-expanded {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--expanded);\n}\n\n:host.uxa-navigation-list-hidden-icons,\n.uxa-navigation-list.uxa-navigation-list-hidden-icons {\n  --uxa-navigation-item-link-icon__display: none;\n}\n:host.uxa-navigation-list-single-level,\n.uxa-navigation-list.uxa-navigation-list-single-level {\n  --uxa-navigation-item-expander-container__display: none;\n}\n\n.uxa-navigation-item-expanded {\n  --uxa-navigation-item__background-color: var(--uxa-navigation-item__background-color--expanded);\n}\n.uxa-navigation-item-expanded .uxa-navigation-item-children {\n  --uxa-navigation-item__background-color: var(\n    --uxa-navigation-item__background-color--children-expanded\n  );\n}";
styleInject(css_248z$2);

function NavigationList({
  isItemActive,
  treeControl,
  primaryItemSize = 'large',
  secondaryItemSize = 'medium',
  primary,
  secondary,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNavigate = () => {},
  loadChildren,
  expandOn = 'item'
}) {
  const {
    setNavigationType,
    setSingleLevel
  } = useNavigationDrawer();
  // set the navigation type to list on mount
  useEffect(() => setNavigationType(NavigationType.List), [setNavigationType]);
  // memoize the primary item component so we don't lose reference equality - important for retaining element focus
  const PrimaryNavigationItem = useMemo(() => primary !== null && primary !== void 0 ? primary : NavigationItem, [primary]);
  // memoize the secondary item component so we don't lose reference equality - important for retaining element focus
  const SecondaryNavigationItem = useMemo(() => secondary !== null && secondary !== void 0 ? secondary : NavigationItem, [secondary]);
  // create the context value
  const NavigationListContext = createNavigationContext();
  // sort the items based on visual order rather than the order they were added
  const sort = useCallback((a, b) => {
    if (!a.ref.current || !b.ref.current) {
      return 0;
    }
    return a.ref.current.offsetTop - b.ref.current.offsetTop;
  }, []);
  // determine if any of the top level items have icons
  const hasIcons = useMemo(() => treeControl.items.some(item => item.icon), [treeControl.items]);
  // determine if this is a single level navigation list
  const isSingleLevel = useMemo(() => treeControl.items.every(item => !item.children && !item.hasChildren), [treeControl.items]);
  // any time the items change, update the single level flag
  useEffect(() => setSingleLevel(isSingleLevel), [isSingleLevel, setSingleLevel]);
  return React.createElement(NavigationListContext.Provider, {
    value: {
      treeControl,
      SecondaryItem: SecondaryNavigationItem,
      onNavigate,
      secondaryItemSize,
      isItemActive,
      loadChildren,
      expandOn,
      isSingleLevel: isSingleLevel
    }
  }, React.createElement(FocusKeyManager, {
    orientation: "vertical",
    sort: sort
  }, React.createElement("div", {
    className: clsx('uxa-navigation-list', {
      'uxa-navigation-list-hidden-icons': !hasIcons,
      'uxa-navigation-list-single-level': isSingleLevel
    }),
    role: "navigation"
  }, React.createElement("div", {
    role: "tree"
  }, treeControl === null || treeControl === void 0 ? void 0 : treeControl.items.map(item => {
    var _a;
    return React.createElement(PrimaryNavigationItem, {
      key: item.title,
      item: item,
      size: primaryItemSize,
      isActive: (_a = isItemActive === null || isItemActive === void 0 ? void 0 : isItemActive(item)) !== null && _a !== void 0 ? _a : false
    });
  })))));
}
/** Define the Prop Type information */
NavigationList.propTypes = {
  /** A function which determines whether a navigation item is currently active. */
  isItemActive: PropTypes__default.func,
  /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
  treeControl: PropTypes__default.any.isRequired,
  /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
  expandOn: PropTypes__default.oneOf(['item', 'chevron']),
  /** Custom component used to render primary navigation items. */
  primary: PropTypes__default.func,
  /** Custom component used to render secondary navigation items. */
  secondary: PropTypes__default.func,
  /** The size of the primary navigation items. Defaults to 'large'. */
  primaryItemSize: PropTypes__default.oneOf(['small', 'medium', 'large']),
  /** The size of the secondary navigation items. Defaults to 'medium'. */
  secondaryItemSize: PropTypes__default.oneOf(['small', 'medium', 'large']),
  /** Load children asynchronously */
  loadChildren: PropTypes__default.func
};

var css_248z$1 = ":host,\n.uxa-tree-minimize-button {\n  grid-area: minimize-button;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: var(--uxa-icon-button__overflow);\n  width: var(--uxa-icon-button__width);\n  padding-inline: var(--uxa-icon-button__padding-inline);\n  padding-block: var(--uxa-icon-button__padding-block);\n  border-radius: var(--uxa-button__border-radius);\n  height: var(--uxa-icon-button__height);\n  cursor: var(--uxa-icon-button__cursor);\n  min-width: var(--uxa-icon-button__min-width);\n  --uxa-icon__size: var(--uxa-icon-button-icon__size);\n  color: var(--uxa-button__color--flat-secondary);\n  background: var(--uxa-button__background-color--flat-secondary);\n  border-width: var(--uxa-button__border-width--flat-secondary);\n  border-style: var(--uxa-button__border-style--flat-secondary);\n  border-color: var(--uxa-button__border-color--flat-secondary);\n  width: var(--uxa-icon-button__width--small);\n  height: var(--uxa-icon-button__height--small);\n  padding-inline: var(--uxa-icon-button__padding-inline--small);\n  padding-block: var(--uxa-icon-button__padding-block--small);\n  border-radius: var(--uxa-icon-button__border-radius--small, var(--uxa-button__border-radius));\n  --uxa-icon__size: var(--uxa-icon-button-icon__size--small);\n  --uxa-icon__size: var(--uxa-tree-minimize-button__size);\n  --uxa-icon__fill: var(--uxa-typography__color);\n  --uxa-icon__transform: var(--uxa-tree-minimize-button__transform);\n}\n:host:is(a),\n.uxa-tree-minimize-button:is(a) {\n  box-sizing: border-box;\n}\n:host:hover:not(.uxa-disabled):not(.uxa-focused),\n.uxa-tree-minimize-button:hover:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-hover);\n  border-color: var(--uxa-button__border-color--flat-secondary-hover);\n  color: var(--uxa-button__color--flat-secondary-hover);\n  background: var(--uxa-button__background-color--flat-secondary-hover);\n}\n:host:active:not(.uxa-disabled):not(.uxa-focused),\n.uxa-tree-minimize-button:active:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-active);\n  border-color: var(--uxa-button__border-color--flat-secondary-active);\n  color: var(--uxa-button__color--flat-secondary-active);\n  background: var(--uxa-button__background-color--flat-secondary-active);\n}\n:host:focus,\n.uxa-tree-minimize-button:focus {\n  outline: none;\n  box-shadow: none;\n  z-index: var(--uxa-button__z-index);\n}\n:host.uxa-focused:not(.uxa-disabled),\n.uxa-tree-minimize-button.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-focused);\n  border-color: var(--uxa-button__border-color--flat-secondary-focused);\n  color: var(--uxa-button__color--flat-secondary-focused);\n  background: var(--uxa-button__background-color--flat-secondary-focused);\n}\n\n:host-context(.uxa-tree-drawer-minimized) :host,\n:host-context(.uxa-tree-drawer-minimized) .uxa-tree-minimize-button {\n  --uxa-icon__transform: var(--uxa-tree-minimize-button__transform--minimized);\n}\n\n:host,\n.uxa-navigation-minimize-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: var(--uxa-icon-button__overflow);\n  width: var(--uxa-icon-button__width);\n  padding-inline: var(--uxa-icon-button__padding-inline);\n  padding-block: var(--uxa-icon-button__padding-block);\n  border-radius: var(--uxa-button__border-radius);\n  height: var(--uxa-icon-button__height);\n  cursor: var(--uxa-icon-button__cursor);\n  min-width: var(--uxa-icon-button__min-width);\n  --uxa-icon__size: var(--uxa-icon-button-icon__size);\n  color: var(--uxa-button__color--flat-secondary);\n  background: var(--uxa-button__background-color--flat-secondary);\n  border-width: var(--uxa-button__border-width--flat-secondary);\n  border-style: var(--uxa-button__border-style--flat-secondary);\n  border-color: var(--uxa-button__border-color--flat-secondary);\n  --uxa-icon__fill: var(--uxa-navigation-minimize-button__color);\n  --uxa-icon__transform: var(--uxa-navigation-minimize-button__transform);\n  --uxa-icon__size: var(--uxa-navigation-minimize-button__size);\n}\n:host:is(a),\n.uxa-navigation-minimize-button:is(a) {\n  box-sizing: border-box;\n}\n:host:hover:not(.uxa-disabled):not(.uxa-focused),\n.uxa-navigation-minimize-button:hover:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-hover);\n  border-color: var(--uxa-button__border-color--flat-secondary-hover);\n  color: var(--uxa-button__color--flat-secondary-hover);\n  background: var(--uxa-button__background-color--flat-secondary-hover);\n}\n:host:active:not(.uxa-disabled):not(.uxa-focused),\n.uxa-navigation-minimize-button:active:not(.uxa-disabled):not(.uxa-focused) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-active);\n  border-color: var(--uxa-button__border-color--flat-secondary-active);\n  color: var(--uxa-button__color--flat-secondary-active);\n  background: var(--uxa-button__background-color--flat-secondary-active);\n}\n:host:focus,\n.uxa-navigation-minimize-button:focus {\n  outline: none;\n  box-shadow: none;\n  z-index: var(--uxa-button__z-index);\n}\n:host.uxa-focused:not(.uxa-disabled),\n.uxa-navigation-minimize-button.uxa-focused:not(.uxa-disabled) {\n  box-shadow: var(--uxa-button__box-shadow--flat-secondary-focused);\n  border-color: var(--uxa-button__border-color--flat-secondary-focused);\n  color: var(--uxa-button__color--flat-secondary-focused);\n  background: var(--uxa-button__background-color--flat-secondary-focused);\n}\n:host.uxa-small,\n.uxa-navigation-minimize-button.uxa-small {\n  width: var(--uxa-icon-button__width--small);\n  height: var(--uxa-icon-button__height--small);\n  padding-inline: var(--uxa-icon-button__padding-inline--small);\n  padding-block: var(--uxa-icon-button__padding-block--small);\n  border-radius: var(--uxa-icon-button__border-radius--small, var(--uxa-button__border-radius));\n  --uxa-icon__size: var(--uxa-icon-button-icon__size--small);\n  --uxa-icon__size: var(--uxa-navigation-minimize-button__size);\n}\n\n:host-context(.uxa-navigation-drawer-minimized) :host,\n:host-context(.uxa-navigation-drawer-minimized) .uxa-navigation-minimize-button {\n  --uxa-icon__transform: var(--uxa-navigation-minimize-button__transform--minimized);\n}";
styleInject(css_248z$1);

const NavigationMinimizeButton = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  const {
    toggleMinimized
  } = useNavigationDrawer();
  const {
    isJato
  } = useThemeFamily();
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  return React.createElement("button", Object.assign({}, mergeProps(props, focusProps, {
    onClick: toggleMinimized,
    className: clsx('uxa-navigation-minimize-button uxa-tree-minimize-button', {
      'uxa-focused': isFocusVisible,
      'uxa-small': !isJato
    })
  })), children !== null && children !== void 0 ? children : React.createElement(DoubleChevronLeftIcon, null));
};
/** Define the Prop Type information */
NavigationMinimizeButton.propTypes = {
  /** The content to render in the button. */
  children: PropTypes__default.element
};

const NavigationSearch = forwardRef((props, ref) => {
  return React.createElement("div", Object.assign({}, mergeProps(props, {
    className: 'uxa-navigation-search'
  }), {
    ref: ref
  }));
});

var css_248z = ":host,\n.uxa-tree {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n}\n:host.uxa-tree-hidden-icons,\n.uxa-tree.uxa-tree-hidden-icons {\n  --uxa-tree-node-icon__display: none;\n}\n:host.uxa-tree-single-level,\n.uxa-tree.uxa-tree-single-level {\n  --uxa-tree-node-expander-container__display: none;\n  --uxa-tree-node__padding-inline: 16px;\n}\n\n.uxa-tree-node-expanded {\n  --uxa-tree-node__background-color: var(--uxa-tree-node__background-color--expanded);\n}\n\n:host,\n.uxa-navigation-tree {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n  --uxa-tree__display: var(--uxa-navigation-tree__display);\n}\n:host.uxa-navigation-tree-hidden-icons,\n:host .uxa-navigation-item-children,\n.uxa-navigation-tree.uxa-navigation-tree-hidden-icons,\n.uxa-navigation-tree .uxa-navigation-item-children {\n  --uxa-navigation-item-link-icon__display: none;\n}\n:host .uxa-navigation-item-children,\n.uxa-navigation-tree .uxa-navigation-item-children {\n  background-color: var(--uxa-navigation-tree-children__background-color);\n  --uxa-navigation-item-title__font-size: var(--uxa-navigation-item-title__font-size--children);\n}";
styleInject(css_248z);

function NavigationTree({
  treeControl,
  node,
  itemSize = 'medium',
  isItemActive,
  onNavigate,
  loadChildren,
  expandOn = 'item'
}) {
  const {
    setNavigationType
  } = useNavigationDrawer();
  // on mount, set the navigation type to tree
  useIsomorphicEffect(() => setNavigationType(NavigationType.Tree), [setNavigationType]);
  // create the context value
  const NavigationListContext = createNavigationContext();
  // determine if any of the top level items have icons
  const hasIcons = useMemo(() => treeControl.items.some(item => item.icon), [treeControl.items]);
  // sort the items based on visual order rather than the order they were added
  const sort = useCallback((a, b) => {
    if (!a.ref.current || !b.ref.current) {
      return 0;
    }
    return a.ref.current.offsetTop - b.ref.current.offsetTop;
  }, []);
  const TreeNavigationItem = useMemo(() => node !== null && node !== void 0 ? node : NavigationItem, [node]);
  return React.createElement(NavigationListContext.Provider, {
    value: {
      treeControl,
      isItemActive,
      onNavigate: onNavigate,
      SecondaryItem: TreeNavigationItem,
      secondaryItemSize: itemSize,
      loadChildren,
      expandOn
    }
  }, React.createElement(FocusKeyManager, {
    orientation: "vertical",
    sort: sort
  }, React.createElement("div", {
    className: clsx('uxa-navigation-tree', {
      'uxa-navigation-tree-hidden-icons': !hasIcons
    }),
    role: "navigation"
  }, React.createElement("div", {
    role: "tree"
  }, treeControl === null || treeControl === void 0 ? void 0 : treeControl.items.map(item => {
    var _a;
    return React.createElement(TreeNavigationItem, {
      key: item.title,
      item: item,
      size: itemSize,
      isActive: (_a = isItemActive === null || isItemActive === void 0 ? void 0 : isItemActive(item)) !== null && _a !== void 0 ? _a : false
    });
  })))));
}
/** Define the Prop Type information */
NavigationTree.propTypes = {
  /** A function which determines whether a navigation item is currently active. */
  isItemActive: PropTypes__default.func,
  /** Custom component used to render navigation items. */
  node: PropTypes__default.func,
  /** Whether the items are expanded by clicking on the item or chevron. Defaults to `item`. */
  expandOn: PropTypes__default.oneOf(['item', 'chevron']),
  /** Provides data and can be used to programmatically expand/collapse nodes in the tree. */
  treeControl: PropTypes__default.any.isRequired,
  /** The size of the tree items. Default to 'medium'. */
  itemSize: PropTypes__default.oneOf(['small', 'medium', 'large']),
  /** Emits when activating a navigation item (click or keypress). */
  onNavigate: PropTypes__default.func,
  /** Load children asynchronously */
  loadChildren: PropTypes__default.func
};

export { NavigationDrawer, NavigationHeader, NavigationItem, NavigationItemExpander, NavigationItemLink, NavigationItemTitle, NavigationList, NavigationMinimizeButton, NavigationSearch, NavigationTree, isNavigationItemWithChildren };
