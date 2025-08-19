import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import { c as FocusKeyManager } from './focus-key-manager.esm.js';
import { useFocusRing } from '@react-aria/focus';
import '@react-aria/interactions';
import * as React from 'react';
import { isValidElement, cloneElement, useEffect, forwardRef, useRef } from 'react';
import clsx from 'clsx';
import './reducer-provider.esm.js';
import { a as AvatarConfiguration, A as Avatar } from './avatar.esm2.js';
import '@ux-aspects-universal/core/theming';
import './theme-region.esm.js';
import { u as useThemeFamily } from './use-active-theme.esm.js';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { u as useProductColor } from './use-product-color.esm.js';
import { b as useTabbable } from './use-tabbable.esm.js';
import { cH as MyAviatorIcon } from './zoom-out.esm2.js';
import './use-unique-id.esm.js';
import 'react-dom';
import './context.esm.js';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './prop-types.esm.js';

var css_248z$6 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n.uxa-masthead,\n:host.uxa-masthead {\n  display: grid;\n  position: relative;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-family: var(--uxa-masthead__font-family, var(--uxa-typography__font-family));\n  background: var(--uxa-masthead__background);\n  height: var(--uxa-masthead__height);\n  border-bottom-width: var(--uxa-masthead__border-bottom-width);\n  border-bottom-style: var(--uxa-masthead__border-bottom-style);\n  border-bottom-color: var(--uxa-masthead__border-bottom-color);\n  box-shadow: var(--uxa-masthead__box-shadow);\n  box-sizing: border-box;\n  padding-inline: var(--uxa-masthead__padding-inline, 0);\n  container-type: inline-size;\n  container-name: masthead;\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--2);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--2);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--2);\n  --uxa-breadcrumb__color--hover: var(--uxa-breadcrumb__color--masthead-hover);\n  --uxa-breadcrumb__font-size: var(--uxa-breadcrumb__font-size--masthead);\n  --uxa-breadcrumb__color: var(--uxa-breadcrumb__color--masthead);\n  --uxa-breadcrumb__color--current: var(--uxa-breadcrumb__color--masthead-current);\n  --uxa-breadcrumb-separator__color: var(--uxa-breadcrumb-separator__color--masthead);\n  --uxa-breadcrumb-separator__background-image: var(\n    --uxa-breadcrumb-separator__background-image--masthead\n  );\n}\n.uxa-masthead::after,\n:host.uxa-masthead::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: var(--uxa-masthead-underline__height, 0);\n  background-image: var(--uxa-masthead-underline__background-image, none);\n}\n.uxa-masthead.uxa-primary,\n:host.uxa-masthead.uxa-primary {\n  gap: var(--uxa-masthead__gap--primary);\n  grid-template-columns: var(--uxa-masthead__grid-template-columns--primary);\n  grid-template-areas: var(--uxa-masthead__grid-template-areas--primary);\n  --uxa-masthead__background: var(--uxa-masthead__background--primary);\n  --uxa-masthead__height: var(--uxa-masthead__height--primary);\n  --uxa-masthead__border-bottom-color: var(--uxa-masthead__border-bottom-color--primary);\n  --uxa-masthead__padding-inline: var(--uxa-masthead__padding-inline--primary);\n  --uxa-masthead-underline__height: var(--uxa-masthead-underline__height--primary);\n  --uxa-masthead-underline__background-image: var(\n    --uxa-masthead-underline__background-image--primary\n  );\n  --uxa-masthead-title__color: var(--uxa-masthead__color--primary);\n  --uxa-tab__color: var(--uxa-masthead-tab__color--primary);\n  --uxa-tab__color--selected: var(--uxa-masthead-tab__color--primary-selected);\n  --uxa-tab__color--hover: var(--uxa-masthead-tab__color--primary-hover);\n  --uxa-tab__font-size: var(--uxa-masthead-tab__font-size--primary);\n  --uxa-tab__color--disabled: var(--uxa-masthead-tab__color--primary-disabled);\n  --uxa-masthead-tab__color--hover: var(--uxa-masthead-tab__color--primary-hover);\n  --uxa-masthead-tab__background-color--focus: var(\n    --uxa-masthead-tab__background-color--primary-focus\n  );\n  --uxa-masthead-tab__background-color--hover: var(\n    --uxa-masthead-tab__background-color--primary-hover\n  );\n  --uxa-masthead-tab__background-color--active: var(\n    --uxa-masthead-tab__background-color--primary-active\n  );\n  --uxa-masthead-tab__background-color--disabled: var(\n    --uxa-masthead-tab__background-color--primary-disabled\n  );\n  --uxa-tab-indicator__background-color--selected: var(\n    --uxa-masthead-tab-indicator__background-color--primary\n  );\n  --uxa-tab-indicator__background-color--selected-hover: var(\n    --uxa-masthead-tab-indicator__background-color--primary\n  );\n  --uxa-tab-indicator__background-color--selected-active: var(\n    --uxa-masthead-tab-indicator__background-color--primary\n  );\n}\n.uxa-masthead.uxa-secondary,\n:host.uxa-masthead.uxa-secondary {\n  grid-template-columns: auto 1fr auto;\n  grid-template-areas: \"module main actions\";\n  align-items: center;\n  --uxa-masthead__background: var(--uxa-masthead__background--secondary);\n  --uxa-masthead__height: var(--uxa-masthead__height--secondary);\n  --uxa-masthead__border-bottom-width: var(--uxa-masthead__border-bottom-width--secondary);\n  --uxa-masthead__border-bottom-color: var(--uxa-masthead__border-bottom-color--secondary);\n  --uxa-masthead__padding-inline: var(--uxa-masthead__padding-inline--secondary);\n  --uxa-masthead-actions__gap: var(--uxa-masthead-actions__gap--secondary);\n  --uxa-masthead-main-content__justify-content: center;\n  --uxa-tab__color: var(--uxa-masthead-tab__color--secondary);\n  --uxa-tab__color--selected: var(--uxa-masthead-tab__color--secondary-selected);\n  --uxa-tab__font-size: var(--uxa-masthead-tab__font-size--secondary);\n  --uxa-tab__color--disabled: var(--uxa-masthead-tab__color--secondary-disabled);\n  --uxa-tab__border-radius: var(--uxa-masthead-tab__border-radius, inherit);\n  --uxa-masthead-tab__color--hover: var(--uxa-masthead-tab__color--secondary-hover);\n  --uxa-masthead-tab__background-color--focus: var(\n    --uxa-masthead-tab__background-color--secondary-focus\n  );\n  --uxa-masthead-tab__background-color--hover: var(\n    --uxa-masthead-tab__background-color--secondary-hover\n  );\n  --uxa-masthead-tab__background-color--active: var(\n    --uxa-masthead-tab__background-color--secondary-active\n  );\n  --uxa-masthead-tab__background-color--disabled: var(\n    --uxa-masthead-tab__background-color--secondary-disabled\n  );\n  --uxa-tab-indicator__background-color--selected: var(\n    --uxa-masthead-tab-indicator__background-color--secondary\n  );\n  --uxa-tab-indicator__background-color--selected-hover: var(\n    --uxa-masthead-tab-indicator__background-color--secondary\n  );\n  --uxa-tab-indicator__background-color--selected-active: var(\n    --uxa-masthead-tab-indicator__background-color--secondary\n  );\n}\n\n.uxa-masthead-main-content {\n  grid-area: main;\n  justify-content: var(--uxa-masthead-main-content__justify-content, flex-start);\n  margin-inline-start: var(--uxa-masthead-main-content__margin-inline-start, 0);\n  display: flex;\n  align-items: center;\n}\n\n.uxa-masthead-tabs {\n  flex: none;\n  display: flex;\n  flex-direction: var(--uxa-tab-list__flex-direction, row);\n  -moz-column-gap: var(--uxa-tab-list__column-gap);\n       column-gap: var(--uxa-tab-list__column-gap);\n  height: var(--uxa-tab-list__height);\n  border-top-width: var(--uxa-tab-list__border-top-width);\n  border-bottom-width: var(--uxa-tab-list__border-bottom-width);\n  border-inline-start-width: var(--uxa-tab-list__border-inline-start-width);\n  border-inline-end-width: var(--uxa-tab-list__border-inline-end-width);\n  border-style: var(--uxa-tab-list__border-style);\n  border-color: var(--uxa-tab-list__border-color);\n  margin-inline-start: var(--uxa-masthead-tab-list__margin-inline-start);\n  margin-inline-end: var(--uxa-masthead-tab-list__margin-inline-end);\n  --uxa-tab-list__height: var(--uxa-masthead__height);\n  --uxa-tab-list__column-gap: var(--uxa-masthead-tab-list__column-gap);\n  --uxa-tab-list__border-bottom-width: 0;\n}\n\n.uxa-masthead-actions {\n  display: grid;\n  grid-auto-flow: column;\n  gap: var(--uxa-masthead-actions__gap);\n  grid-area: actions;\n  align-items: center;\n  padding-inline: var(--uxa-masthead-actions__padding-inline);\n  --uxa-button__color--flat-primary: var(--uxa-masthead-action__color);\n  --uxa-button__font-weight--flat: var(--uxa-masthead-action__font-weight);\n  --uxa-button__background-color--flat-primary: var(--uxa-masthead-action__background-color);\n  --uxa-button__color--flat-primary-hover: var(--uxa-masthead-action__color--hover);\n  --uxa-button__background-color--flat-primary-hover: var(\n    --uxa-masthead-action__background-color--hover\n  );\n  --uxa-button__color--flat-primary-active: var(--uxa-masthead-action__color--active);\n  --uxa-button__background-color--flat-primary-active: var(\n    --uxa-masthead-action__background-color--active\n  );\n  --uxa-button__color--flat-primary-focused: var(--uxa-masthead-action__color--focus);\n  --uxa-button__background-color--flat-primary-focused: var(\n    --uxa-masthead-action__background-color--focus\n  );\n  --uxa-button__box-shadow--flat-primary-focused: 0 0 0 var(--uxa-focus-outline__width)\n    var(--uxa-focus-outline__color);\n}\n.uxa-masthead-actions:empty {\n  display: none;\n}\n\n.uxa-masthead-group {\n  display: flex;\n  align-items: center;\n}\n.uxa-masthead-group:empty {\n  display: none;\n}\n\n.uxa-masthead-separator {\n  width: var(--uxa-masthead-separator__width);\n  height: var(--uxa-masthead-separator__height);\n  margin-inline: var(--uxa-masthead-separator__margin-inline);\n  background-color: var(--uxa-masthead-separator__background-color);\n}\n\n.uxa-masthead-avatar-container {\n  margin-inline-start: var(--uxa-masthead-avatar__margin-inline-start);\n}\n.uxa-masthead-avatar-container:empty {\n  display: none;\n}\n\n.uxa-masthead-my-aviator-container {\n  margin-inline-start: var(--uxa-masthead-my-aviator__margin-inline-start);\n}\n.uxa-masthead-my-aviator-container:empty {\n  display: none;\n}\n\n:host,\n.uxa-masthead-logo {\n  color: var(--uxa-masthead-logo__color);\n  display: var(--uxa-masthead-logo__display, flex);\n  --uxa-logo__width: var(--uxa-masthead-logo__width);\n  --uxa-logo__height: var(--uxa-masthead-logo__height);\n}\n\n@container masthead (width < 320px) {\n  :host-context(.uxa-masthead:has([uxa-masthead-menu-button])) :host {\n    --uxa-masthead-logo__display: var(--uxa-masthead-logo__display--sm);\n  }\n  .uxa-masthead:has(.uxa-masthead-menu-button) .uxa-masthead-logo {\n    --uxa-masthead-logo__display: var(--uxa-masthead-logo__display--sm);\n  }\n}\n.uxa-masthead-menu-button,\n:host {\n  grid-area: menu;\n  padding-inline: var(--uxa-masthead-menu-button__padding-inline);\n  padding-block: var(--uxa-masthead-menu-button__padding-block);\n  margin-inline: var(--uxa-masthead-menu-button__margin-inline);\n  display: var(--uxa-masthead-menu-button__display);\n  align-items: var(--uxa-masthead-menu-button__align-items);\n  --uxa-button__color--flat-primary: var(--uxa-masthead-action__color);\n  --uxa-button__font-weight--flat: var(--uxa-masthead-action__font-weight);\n  --uxa-button__background-color--flat-primary: var(--uxa-masthead-action__background-color);\n  --uxa-icon-button-icon__size: var(--uxa-masthead-menu-button__icon-size, 1em);\n  --uxa-button__color--flat-primary-hover: var(--uxa-masthead-action__color--hover);\n  --uxa-button__background-color--flat-primary-hover: var(\n    --uxa-masthead-action__background-color--hover\n  );\n  --uxa-button__color--flat-primary-active: var(--uxa-masthead-action__color--active);\n  --uxa-button__background-color--flat-primary-active: var(\n    --uxa-masthead-action__background-color--active\n  );\n  --uxa-button__background-color--flat-primary-focused: var(\n    --uxa-masthead-action__background-color--focus\n  );\n  --uxa-button__box-shadow--flat-primary-focused: 0 0 0 var(--uxa-focus-outline__width)\n    var(--uxa-focus-outline__color);\n}";
styleInject(css_248z$6);

const Masthead = _a => {
  var {
      icon,
      tabs,
      actions,
      title,
      breadcrumbs,
      menuButton,
      logo,
      module,
      avatar,
      myAviator
    } = _a,
    props = __rest(_a, ["icon", "tabs", "actions", "title", "breadcrumbs", "menuButton", "logo", "module", "avatar", "myAviator"]);
  const {
    isOpenText,
    isMicroFocus
  } = useThemeFamily();
  const tabCount = Array.isArray(tabs) ? tabs.length : tabs ? 1 : 0;
  const hasTitleSeparator = title && (breadcrumbs || tabCount > 0) && isMicroFocus;
  const hasBreadcrumbsSeparator = breadcrumbs && tabCount > 0 && isMicroFocus;
  const hasLogoSeparator = logo && title && isOpenText;
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-masthead uxa-primary'
  }, props)), icon, menuButton && React.createElement("div", {
    className: "uxa-masthead-menu-button"
  }, menuButton), React.createElement("div", {
    className: "uxa-masthead-main-content"
  }, React.createElement("div", {
    className: "uxa-masthead-group"
  }, isValidElement(logo) && cloneElement(logo, {
    className: clsx('uxa-masthead-logo', logo.props.className)
  }), hasLogoSeparator && React.createElement("div", {
    className: "uxa-masthead-separator"
  }), title, hasTitleSeparator && React.createElement("div", {
    className: "uxa-masthead-separator"
  }), module), breadcrumbs && React.createElement("div", {
    className: "uxa-masthead-group"
  }, breadcrumbs), hasBreadcrumbsSeparator && React.createElement("div", {
    className: "uxa-masthead-separator"
  }), React.createElement("div", {
    role: "menubar",
    className: "uxa-masthead-tabs uxa-masthead-group"
  }, React.createElement(FocusKeyManager, {
    orientation: "horizontal"
  }, tabs))), React.createElement("div", {
    className: "uxa-masthead-actions"
  }, actions, React.createElement("div", {
    className: "uxa-masthead-avatar-container"
  }, React.createElement(AvatarConfiguration, {
    color: "plum",
    size: "small"
  }, avatar)), React.createElement("div", {
    className: "uxa-masthead-my-aviator-container"
  }, myAviator)));
};
/** Define the Prop Type information */
Masthead.propTypes = {
  /** Content to render in the icon slot of the masthead. */
  icon: PropTypes__default.element,
  /** Content to render in the tabs slot of the masthead. */
  tabs: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.arrayOf(PropTypes__default.element)]),
  /** Content to render in the actions slot of the masthead. */
  actions: PropTypes__default.oneOfType([PropTypes__default.arrayOf(PropTypes__default.element), PropTypes__default.element]),
  /** Content to render in the title slot of the masthead. */
  title: PropTypes__default.element,
  /** Content to render in the breadcrumbs slot of the masthead. */
  breadcrumbs: PropTypes__default.element,
  /** Content to render in the menuButton slot of the masthead. */
  menuButton: PropTypes__default.element,
  /** Content to render in the logo slot of the masthead. */
  logo: PropTypes__default.element,
  /** Content to render in the module slot of the masthead. */
  module: PropTypes__default.element,
  /** Content to render in the avatar slot of the masthead. */
  avatar: PropTypes__default.element,
  /** Content to render in the my aviator slot of the masthead. */
  myAviator: PropTypes__default.element
};

/** @deprecated */
const MastheadAvatar = ({
  color = 'plum',
  isInteractive = false,
  children
}) => {
  useEffect(() => console.log('The MastheadAvatar component is deprecated. Use the Avatar component instead.'), []);
  // extract the text content from the children
  const initials = React.Children.toArray(children).filter(child => typeof child === 'string').join('');
  return React.createElement(Avatar, {
    color: color,
    isInteractive: isInteractive,
    initials: initials
  }, children);
};
/** Define the Prop Type information */
MastheadAvatar.propTypes = {
  /** The color of the avatar. */
  color: PropTypes__default.oneOf(['raspberry', 'plum', 'blue', 'teal', 'cerulean', 'navy', 'steel']),
  /** Whether the avatar is interactive. */
  isInteractive: PropTypes__default.bool
};

var css_248z$5 = "/**\n * Styling for a square product icon with configurable height.\n * https://www.figma.com/file/Kt3sh9BkLw7TxCP4BG0x51/Components-Light-V-1.0?node-id=11560%3A40451&t=rCT7T80LV1Pe7tK4-0\n */\n.uxa-masthead-icon,\n:host.uxa-masthead-icon {\n  grid-area: icon;\n  cursor: default;\n  --uxa-product-icon__font-weight: var(--uxa-masthead-icon__font-weight);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  padding-inline: var(--uxa-product-icon__padding-inline);\n  height: var(--uxa-masthead-icon__height);\n  min-width: var(--uxa-masthead-icon__height);\n  background-color: var(--uxa-product-icon__background-color, var(--uxa-color__black));\n  color: var(--uxa-product-icon__color, var(--uxa-color__white));\n  font-size: var(--uxa-masthead-icon__font-size);\n  font-weight: var(--uxa-product-icon__font-weight);\n}\n.uxa-masthead-icon.uxa-black,\n:host.uxa-masthead-icon.uxa-black {\n  --uxa-product-icon__background-color: var(--uxa-color__black);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n.uxa-masthead-icon.uxa-steelblue,\n:host.uxa-masthead-icon.uxa-steelblue {\n  --uxa-product-icon__background-color: var(--uxa-color__steelblue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n.uxa-masthead-icon.uxa-dark-blue,\n:host.uxa-masthead-icon.uxa-dark-blue {\n  --uxa-product-icon__background-color: var(--uxa-color__dark-blue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n.uxa-masthead-icon.uxa-cerulean,\n:host.uxa-masthead-icon.uxa-cerulean {\n  --uxa-product-icon__background-color: var(--uxa-color__cerulean);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n.uxa-masthead-icon.uxa-skyblue,\n:host.uxa-masthead-icon.uxa-skyblue {\n  --uxa-product-icon__background-color: var(--uxa-color__skyblue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n.uxa-masthead-icon.uxa-aqua,\n:host.uxa-masthead-icon.uxa-aqua {\n  --uxa-product-icon__background-color: var(--uxa-color__aqua);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n.uxa-masthead-icon.uxa-aquamarine,\n:host.uxa-masthead-icon.uxa-aquamarine {\n  --uxa-product-icon__background-color: var(--uxa-color__aquamarine);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n.uxa-masthead-icon.uxa-lime,\n:host.uxa-masthead-icon.uxa-lime {\n  --uxa-product-icon__background-color: var(--uxa-color__lime);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n.uxa-masthead-icon.uxa-forest-green,\n:host.uxa-masthead-icon.uxa-forest-green {\n  --uxa-product-icon__background-color: var(--uxa-color__forest-green);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}";
styleInject(css_248z$5);

const MastheadIcon = forwardRef((_a, ref) => {
  var {
      color = 'steelblue',
      children
    } = _a,
    props = __rest(_a, ["color", "children"]);
  const productColor = useProductColor(color);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    role: 'presentation',
    className: clsx('uxa-masthead-icon', productColor)
  }, props)), children);
});
/** Define the Prop Type information */
MastheadIcon.propTypes = {
  color: PropTypes__default.oneOf(['black', 'steelblue', 'dark-blue', 'cerulean', 'skyblue', 'aqua', 'aquamarine', 'lime', 'forest-green'])
};

var css_248z$4 = ".uxa-masthead-module,\n:host {\n  font-size: var(--uxa-masthead-module__font-size);\n  line-height: var(--uxa-masthead-module__font__line-height);\n  color: var(--uxa-masthead-module__color);\n  margin-inline-end: var(--uxa-masthead-module__margin-inline-end);\n  font-weight: var(--uxa-masthead-module__font-weight, inherit);\n}\n.uxa-masthead-module:empty,\n:host:empty {\n  display: none;\n}";
styleInject(css_248z$4);

const MastheadModule = _a => {
  var {
      children
    } = _a,
    props = __rest(_a, ["children"]);
  return React.createElement("div", Object.assign({
    className: "uxa-masthead-module"
  }, props), children);
};
/** Define the Prop Type information */
MastheadModule.propTypes = {
  children: PropTypes__default.element
};

var css_248z$3 = ".uxa-masthead-tab,\n:host.uxa-masthead-tab {\n  position: relative;\n  display: inline-flex;\n  justify-content: var(--uxa-tab__justify-content);\n  align-items: center;\n  height: var(--uxa-tab__height);\n  text-decoration: none;\n  flex: none;\n  background-color: var(--uxa-tab__background-color);\n  margin-inline: var(--uxa-tab__margin-inline);\n  border: var(--uxa-tab__border);\n  padding-inline: var(--uxa-tab__padding-inline);\n  padding-block: var(--uxa-tab__padding-block);\n  font-family: var(--uxa-tab__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-tab__font-weight);\n  font-size: var(--uxa-tab__font-size);\n  color: var(--uxa-tab__color);\n  text-transform: var(--uxa-tab__text-transform);\n  cursor: var(--uxa-tab__cursor);\n  box-shadow: var(--uxa-tab__box-shadow);\n  min-width: var(--uxa-tab__min-width);\n  max-width: var(--uxa-tab__max-width);\n  white-space: var(--uxa-tab__white-space);\n  border-radius: var(--uxa-tab__border-radius);\n  outline: var(--uxa-tab__outline, none);\n  outline-offset: var(--uxa-tab__outline-offset, 0);\n  --uxa-icon__size: var(--uxa-tab-icon__size);\n  --uxa-tab__font-weight: var(--uxa-masthead-tab__font-weight);\n  --uxa-tab__padding-inline: var(--uxa-masthead-tab__padding-inline);\n  --uxa-tab__padding-block: var(--uxa-masthead-tab__padding-block);\n}\n.uxa-masthead-tab:hover:not(.uxa-disabled),\n:host.uxa-masthead-tab:hover:not(.uxa-disabled) {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--hover);\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--hover);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--hover);\n}\n.uxa-masthead-tab:active:not(.uxa-disabled),\n:host.uxa-masthead-tab:active:not(.uxa-disabled) {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--active);\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--active);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--active);\n}\n.uxa-masthead-tab.uxa-focused,\n:host.uxa-masthead-tab.uxa-focused {\n  --uxa-tab__box-shadow: var(--uxa-tab__box-shadow--focused);\n}\n.uxa-masthead-tab.uxa-selected,\n:host.uxa-masthead-tab.uxa-selected {\n  --uxa-tab__color: var(--uxa-tab__color--selected);\n  --uxa-tab__font-weight: var(--uxa-tab__font-weight--selected);\n  --uxa-tab-indicator__background-color: var(--uxa-tab-indicator__background-color--selected);\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected);\n}\n.uxa-masthead-tab.uxa-selected:hover,\n:host.uxa-masthead-tab.uxa-selected:hover {\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected-hover);\n  --uxa-tab-indicator__background-color: var(\n    --uxa-tab-indicator__background-color--selected-hover\n  );\n}\n.uxa-masthead-tab.uxa-selected:active,\n:host.uxa-masthead-tab.uxa-selected:active {\n  --uxa-tab-indicator__height: var(--uxa-tab-indicator__height--selected-active);\n  --uxa-tab-indicator__width: var(--uxa-tab-indicator__width--selected-active);\n  --uxa-tab-indicator__background-color: var(\n    --uxa-tab-indicator__background-color--selected-active\n  );\n}\n.uxa-masthead-tab.uxa-disabled,\n:host.uxa-masthead-tab.uxa-disabled {\n  --uxa-tab__color: var(--uxa-tab__color--disabled);\n  --uxa-tab__cursor: var(--uxa-tab__cursor--disabled);\n}\n.uxa-masthead-tab.uxa-selected, .uxa-masthead-tab.uxa-selected:hover,\n:host.uxa-masthead-tab.uxa-selected,\n:host.uxa-masthead-tab.uxa-selected:hover {\n  --uxa-tab__font-weight: var(--uxa-masthead-tab__font-weight--selected);\n  --uxa-tab-indicator__width--selected: var(--uxa-masthead-tab-indicator__width--selected);\n  --uxa-tab-indicator__width--selected-hover: var(--uxa-masthead-tab-indicator__width--selected);\n}\n.uxa-masthead-tab.uxa-focused,\n:host.uxa-masthead-tab.uxa-focused {\n  --uxa-tab__background-color: var(--uxa-masthead-tab__background-color--focus);\n  --uxa-tab__box-shadow: var(--uxa-masthead-tab__box-shadow--focused);\n}\n.uxa-masthead-tab:hover,\n:host.uxa-masthead-tab:hover {\n  --uxa-tab__color: var(--uxa-masthead-tab__color--hover);\n  --uxa-tab__background-color: var(--uxa-masthead-tab__background-color--hover);\n}\n.uxa-masthead-tab:active,\n:host.uxa-masthead-tab:active {\n  --uxa-tab__background-color: var(--uxa-masthead-tab__background-color--active);\n  --uxa-tab-indicator__width--selected-active: var(--uxa-masthead-tab-indicator__width--selected);\n}\n.uxa-masthead-tab.uxa-disabled,\n:host.uxa-masthead-tab.uxa-disabled {\n  --uxa-tab__background-color: var(--uxa-masthead-tab__background-color--disabled);\n  --uxa-masthead-tab__color--hover: var(--uxa-tab__color--disabled);\n}\n\n.uxa-masthead-tab-indicator {\n  position: absolute;\n  inset-inline-start: var(--uxa-tab-indicator__inset-inline-start);\n  bottom: 0;\n  width: var(--uxa-tab-indicator__width);\n  margin-inline: auto;\n  margin-block: 0;\n  height: var(--uxa-tab-indicator__height);\n  background-color: var(--uxa-tab-indicator__background-color);\n  transition: var(--uxa-tab-indicator__transition);\n  top: var(--uxa-tab-indicator__top);\n  transform: var(--uxa-tab-indicator__translate);\n  border-radius: var(--uxa-tab-indicator__border-radius);\n}";
styleInject(css_248z$3);

const MastheadTab = _a => {
  var {
      isSelected,
      isDisabled,
      children
    } = _a,
    props = __rest(_a, ["isSelected", "isDisabled", "children"]);
  const ref = useRef(null);
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref, {
    isDisabled
  });
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  return React.createElement("a", Object.assign({
    ref: ref
  }, mergeProps({
    role: 'menuitem',
    className: clsx('uxa-masthead-tab', {
      'uxa-selected': isSelected,
      'uxa-disabled': isDisabled,
      'uxa-focused': isFocusVisible
    }),
    tabIndex
  }, focusProps, tabbableProps, props)), children, React.createElement("div", {
    className: "uxa-masthead-tab-indicator"
  }));
};
/** Define the Prop Type information */
MastheadTab.propTypes = {
  isSelected: PropTypes__default.bool,
  isDisabled: PropTypes__default.bool
};

var css_248z$2 = ".uxa-masthead-title,\n:host.uxa-masthead-title {\n  font-family: var(--uxa-masthead-title__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-masthead-title__font-weight);\n  font-size: var(--uxa-masthead-title__font-size);\n  line-height: var(--uxa-masthead-title__line-height);\n  letter-spacing: var(--uxa-masthead-title__letter-spacing, inherit);\n  color: var(--uxa-masthead-title__color);\n  margin-inline: var(--uxa-masthead-title__margin-inline);\n  display: var(--uxa-masthead-title__display, flex);\n  text-transform: var(--uxa-masthead-title__text-transform);\n  align-items: baseline;\n}\n\n@container masthead (width < 768px) {\n  .uxa-masthead-title,\n  :host.uxa-masthead-title {\n    --uxa-masthead-title__display: var(--uxa-masthead-title__display--med);\n  }\n}\n:host,\n.uxa-masthead-title-secondary {\n  margin-inline-start: var(--uxa-masthead-title-secondary__margin-inline-start);\n  color: var(--uxa-masthead-title-secondary__color);\n  opacity: var(--uxa-masthead-title-secondary__opacity, 1);\n}";
styleInject(css_248z$2);

const MastheadTitle = forwardRef((_a, ref) => {
  var {
      is = 'h1',
      variant = 'primary',
      children
    } = _a,
    htmlProps = __rest(_a, ["is", "variant", "children"]);
  // if an href is defined then this must be an anchor tag
  if (htmlProps.href) {
    is = 'a';
  }
  const componentProps = mergeProps({
    ref,
    className: variant === 'primary' ? 'uxa-masthead-title' : 'uxa-masthead-title-secondary',
    role: 'heading',
    'aria-level': '1'
  }, htmlProps);
  return React.createElement(is !== null && is !== void 0 ? is : 'h1', componentProps, children);
});
/** Define the Prop Type information */
MastheadTitle.propTypes = {
  /** Name of the element type to render the masthead title with. */
  is: PropTypes__default.string,
  /** The variant of the masthead title */
  variant: PropTypes__default.oneOf(['primary', 'secondary'])
};
const MastheadTitleSecondary = forwardRef((_a, ref) => {
  var {
      is = 'span',
      children
    } = _a,
    htmlProps = __rest(_a, ["is", "children"]);
  return React.createElement(MastheadTitle, Object.assign({
    is: is,
    variant: "secondary",
    ref: ref
  }, htmlProps), children);
});

var css_248z$1 = ":host,\n.uxa-masthead-version {\n  font-size: var(--uxa-masthead-version__font-size);\n  padding-inline-start: var(--uxa-masthead-version__padding-inline-start);\n  line-height: var(--uxa-masthead-version__line-height);\n  opacity: var(--uxa-masthead-version__opacity, 1);\n}";
styleInject(css_248z$1);

const MastheadVersion = ({
  children
}) => React.createElement("span", {
  className: "uxa-masthead-version"
}, children);

var css_248z = ":host,\n.uxa-my-aviator-button {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  transition: var(--uxa-my-aviator-button__transition);\n  align-items: center;\n  padding-inline: var(--uxa-my-aviator-button__padding-inline);\n  gap: var(--uxa-my-aviator-button__gap);\n  height: var(--uxa-my-aviator-button__height);\n  background: var(--uxa-my-aviator-button__background);\n  border-width: var(--uxa-my-aviator-button__border-width);\n  border-style: var(--uxa-my-aviator-button__border-style);\n  border-color: var(--uxa-my-aviator-button__border-color);\n  border-radius: var(--uxa-my-aviator-button__border-radius);\n  cursor: var(--uxa-my-aviator-button__cursor);\n  width: -moz-max-content;\n  width: max-content;\n  outline: none;\n}\n:host:hover,\n.uxa-my-aviator-button:hover {\n  --uxa-my-aviator-button__background: var(--uxa-my-aviator-button__background--hover);\n  --uxa-my-aviator-button__border-color: var(--uxa-my-aviator-button__border-color--hover);\n  --uxa-my-aviator-button-label__color: var(--uxa-my-aviator-button-label__color--hover);\n  --uxa-my-aviator-button-icon__color: var(--uxa-my-aviator-button-icon__color--hover);\n}\n:host:active,\n.uxa-my-aviator-button:active {\n  --uxa-my-aviator-button__background: var(--uxa-my-aviator-button__background--active);\n  --uxa-my-aviator-button__border-color: var(--uxa-my-aviator-button__border-color--active);\n  --uxa-my-aviator-button-label__color: var(--uxa-my-aviator-button-label__color--active);\n  --uxa-my-aviator-button-icon__color: var(--uxa-my-aviator-button-icon__color--active);\n}\n:host:focus-visible,\n.uxa-my-aviator-button:focus-visible {\n  outline: var(--uxa-my-aviator-button__outline--focus);\n  outline-offset: var(--uxa-my-aviator-button__outline-offset--focus);\n}\n\n.uxa-my-aviator-button-label {\n  font-family: var(--uxa-my-aviator-button-label__font-family);\n  font-weight: var(--uxa-my-aviator-button-label__font-weight);\n  font-size: var(--uxa-my-aviator-button-label__font-size);\n  line-height: var(--uxa-my-aviator-button-label__line-height);\n  text-align: var(--uxa-my-aviator-button-label__text-align);\n  color: var(--uxa-my-aviator-button-label__color);\n  opacity: var(--uxa-my-aviator-button-label__opacity, 1);\n  transition: var(--uxa-my-aviator-button-label__transition);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n}\n\n.uxa-my-aviator-button-icon {\n  color: var(--uxa-my-aviator-button-icon__color);\n  --uxa-icon__size: var(--uxa-my-aviator-button-icon__size);\n}\n\n@container masthead (width < 768px) {\n  :host,\n  .uxa-my-aviator-button {\n    grid-template-columns: auto 0;\n    gap: 0;\n    --uxa-my-aviator-button-label__opacity: 0;\n  }\n}";
styleInject(css_248z);

const MyAviatorButton = forwardRef(({
  children
}, ref) => {
  return React.createElement("button", {
    ref: ref,
    className: "uxa-my-aviator-button"
  }, React.createElement(MyAviatorIcon, {
    className: "uxa-my-aviator-button-icon"
  }), React.createElement("span", {
    className: "uxa-my-aviator-button-label"
  }, children));
});

const SecondaryMasthead = _a => {
  var {
      children,
      module,
      actions,
      tabs
    } = _a,
    props = __rest(_a, ["children", "module", "actions", "tabs"]);
  // if tabs are provided as children, then warn the user that this is deprecated
  if (children) {
    console.warn('The use of children to define the tabs in the secondary masthead is deprecated. Please use the tabs prop instead.');
  }
  return React.createElement("div", Object.assign({}, mergeProps({
    className: 'uxa-masthead uxa-secondary'
  }, props)), React.createElement("div", {
    className: "uxa-masthead-module"
  }, module), React.createElement("div", {
    className: "uxa-masthead-main-content"
  }, React.createElement("div", {
    role: "menubar",
    className: "uxa-masthead-tabs"
  }, React.createElement(FocusKeyManager, {
    orientation: "horizontal"
  }, tabs !== null && tabs !== void 0 ? tabs : children))), React.createElement("div", {
    className: "uxa-masthead-actions"
  }, actions));
};
SecondaryMasthead.propTypes = {
  /** Content to render in the tabs slot of the masthead. */
  tabs: PropTypes__default.arrayOf(PropTypes__default.element)
};

export { Masthead, MastheadAvatar, MastheadIcon, MastheadModule, MastheadTab, MastheadTitle, MastheadTitleSecondary, MastheadVersion, MyAviatorButton, SecondaryMasthead };
