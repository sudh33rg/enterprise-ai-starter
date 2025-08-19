import { UxaDefaultBreadcrumbsI18n } from '@ux-aspects-universal/core/i18n';
export { UxaBreadcrumbsI18n, UxaDefaultBreadcrumbsI18n } from '@ux-aspects-universal/core/i18n';
import * as React from 'react';
import { forwardRef, useRef, useMemo, createContext, useContext, useState, useCallback } from 'react';
import { _ as __rest } from './_tslib.esm.js';
import { mergeRefs, mergeProps } from '@react-aria/utils';
import { c as FocusKeyManager } from './focus-key-manager.esm.js';
import { useFocusRing } from '@react-aria/focus';
import '@react-aria/interactions';
import { b as useTabbable } from './use-tabbable.esm.js';
import { I as IconButton } from './split-button-group.esm.js';
import clsx from 'clsx';
import './reducer-provider.esm.js';
import { M as MoreHorizontalIcon } from './zoom-out.esm.js';
import { u as useMenuTrigger, M as Menu, a as MenuItem } from './menu-divider.esm.js';
import '@ux-aspects-universal/core/theming';
import './theme-region.esm.js';
import { u as useThemeFamily } from './use-active-theme.esm.js';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import { a as useChildrenOfType } from './use-children.esm.js';
import { a as useResizeObserver } from './use-resize-observer.esm.js';
import { flushSync } from 'react-dom';
import './use-unique-id.esm.js';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './prop-types.esm.js';
import './use-controllable.esm.js';
import '@ux-aspects-universal/core/popover';
import './use-isomorphic-effect.esm.js';
import './use-outside-click.esm.js';
import '@react-aria/overlays';
import './react-element.esm.js';

// The ref parameter is not used here, but it is required by the forwardRef function, otherwise React complains.
// The parent component access the ref via the children prop.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Breadcrumb = forwardRef(({
  children
}, ref) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return React.createElement(React.Fragment, null, children);
});

var css_248z$1 = "/* stylelint-disable ux-aspects/no-host-context */\n/* Add focus outline and offset to an element */\n.uxa-breadcrumb,\n:host {\n  display: inline-flex;\n  align-items: center;\n  -moz-column-gap: var(--uxa-breadcrumb__gap);\n       column-gap: var(--uxa-breadcrumb__gap);\n  outline: var(--uxa-breadcrumb__outline);\n  color: var(--uxa-breadcrumb__color);\n  font-weight: var(--uxa-breadcrumb__font-weight);\n  font-family: var(--uxa-breadcrumb__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-breadcrumb__font-size);\n  -webkit-text-decoration: var(--uxa-breadcrumb__text-decoration);\n          text-decoration: var(--uxa-breadcrumb__text-decoration);\n  height: var(--uxa-breadcrumb__height);\n  width: var(--uxa-breadcrumb__width);\n  padding-inline: var(--uxa-breadcrumb__padding-inline);\n  padding-block: var(--uxa-breadcrumb__padding-block);\n  --uxa-button__color--flat-secondary: var(--uxa-breadcrumb-button__color);\n  --uxa-button__color--flat-secondary-hover: var(--uxa-breadcrumb-button__color--hover);\n  --uxa-button__color--flat-secondary-active: var(--uxa-breadcrumb-button__color--active);\n  --uxa-button__color--flat-secondary-focused: var(--uxa-breadcrumb-button__color--focused);\n}\n.uxa-breadcrumb.uxa-focused .uxa-breadcrumb-text,\n:host.uxa-focused .uxa-breadcrumb-text {\n  z-index: 1;\n  outline-offset: var(--uxa-focus-outline__offset);\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n  outline-offset: var(--uxa-breadcrumb__outline-offset--focus);\n}\n.uxa-breadcrumb:hover .uxa-breadcrumb-link,\n:host:hover .uxa-breadcrumb-link {\n  color: var(--uxa-breadcrumb__color--hover);\n  -webkit-text-decoration: var(--uxa-breadcrumb__text-decoration--hover);\n          text-decoration: var(--uxa-breadcrumb__text-decoration--hover);\n  cursor: var(--uxa-breadcrumb__cursor--hover);\n}\n.uxa-breadcrumb:active .uxa-breadcrumb-link,\n:host:active .uxa-breadcrumb-link {\n  color: var(--uxa-breadcrumb__color--active);\n  -webkit-text-decoration: var(--uxa-breadcrumb__text-decoration--active);\n          text-decoration: var(--uxa-breadcrumb__text-decoration--active);\n  cursor: var(--uxa-breadcrumb__cursor--active);\n}\n\n.uxa-breadcrumb-current,\n.uxa-breadcrumb-current:hover {\n  color: var(--uxa-breadcrumb__color--current);\n  font-weight: var(--uxa-breadcrumb__font-weight--current);\n  -webkit-text-decoration: var(--uxa-breadcrumb__text-decoration--current);\n          text-decoration: var(--uxa-breadcrumb__text-decoration--current);\n  cursor: var(--uxa-breadcrumb__cursor--current);\n}\n.uxa-breadcrumb-current .uxa-breadcrumb-separator,\n.uxa-breadcrumb-current:hover .uxa-breadcrumb-separator {\n  display: none;\n}\n\n.uxa-breadcrumb-separator {\n  display: var(--uxa-breadcrumb-separator__display);\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-breadcrumb-separator__width);\n  height: var(--uxa-breadcrumb-separator__height);\n  font-size: var(--uxa-breadcrumb-separator__font-size);\n  color: var(--uxa-breadcrumb-separator__color);\n}\n.uxa-breadcrumb-separator:empty {\n  background-image: var(--uxa-breadcrumb-separator__background-image);\n}\n\n.uxa-breadcrumb-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  display: flex;\n  border-radius: var(--uxa-breadcrumb__border-radius);\n}\n.uxa-breadcrumb-text:empty {\n  display: none;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] .uxa-breadcrumb-separator,\n:host-context([dir=rtl]) .uxa-breadcrumb-separator {\n  --uxa-icon__transform: scaleX(-1);\n}\n::ng-deep[dir=rtl] .uxa-breadcrumb-separator:empty,\n:host-context([dir=rtl]) .uxa-breadcrumb-separator:empty {\n  transform: scaleX(-1);\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] .uxa-breadcrumb-separator {\n  --uxa-icon__transform: scaleX(-1);\n}\n[dir=rtl] .uxa-breadcrumb-separator:empty {\n  transform: scaleX(-1);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) .uxa-breadcrumb-separator {\n  --uxa-icon__transform: scaleX(-1);\n}\n:dir(rtl) .uxa-breadcrumb-separator:empty {\n  transform: scaleX(-1);\n}";
styleInject(css_248z$1);

const BreadcrumbButton = forwardRef((_a, ref) => {
  var {
      index,
      isLast,
      separator
    } = _a,
    props = __rest(_a, ["index", "isLast", "separator"]);
  const internalRef = useRef(null);
  const {
    tabbableProps,
    tabIndex
  } = useTabbable(internalRef);
  const separatorNode = useMemo(() => typeof separator === 'function' ? separator(index) : separator, [separator, index]);
  return React.createElement("div", {
    className: "uxa-breadcrumb"
  }, React.createElement(IconButton, Object.assign({
    ref: mergeRefs(internalRef, ref),
    flat: true,
    secondary: true,
    size: "small",
    tabIndex: tabIndex
  }, mergeProps(props, tabbableProps))), !isLast && React.createElement("div", {
    className: "uxa-breadcrumb-separator"
  }, separatorNode));
});

const BreadcrumbLink = forwardRef((_a, ref) => {
  var {
      index,
      isLast,
      separator,
      children,
      isOverflowing
    } = _a,
    props = __rest(_a, ["index", "isLast", "separator", "children", "isOverflowing"]);
  const internalRef = useRef(null);
  const isLink = Boolean(props.href);
  const {
    tabbableProps,
    tabIndex
  } = useTabbable(internalRef, {
    isDisabled: !isLink || isOverflowing
  });
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const separatorNode = useMemo(() => typeof separator === 'function' ? separator(index) : separator, [separator, index]);
  const Element = isLink ? 'a' : 'span';
  return React.createElement(Element, Object.assign({
    ref: mergeRefs(internalRef, ref),
    tabIndex: tabIndex
  }, mergeProps({
    className: clsx('uxa-breadcrumb', {
      'uxa-focused': isFocusVisible
    })
  }, props, focusProps, tabbableProps)), React.createElement("span", {
    className: clsx('uxa-breadcrumb-text', {
      'uxa-breadcrumb-current': isLast,
      'uxa-breadcrumb-link': isLink
    }),
    "aria-current": isLink && isLast ? 'page' : undefined
  }, children), !isLast && React.createElement("div", {
    className: "uxa-breadcrumb-separator"
  }, separatorNode));
});

var css_248z = ":host,\n.uxa-breadcrumbs {\n  display: var(--uxa-breadcrumbs__display);\n  min-height: var(--uxa-breadcrumbs__min-height);\n}\n:host.uxa-small,\n.uxa-breadcrumbs.uxa-small {\n  --uxa-breadcrumb__font-size: 12px;\n}\n:host.uxa-breadcrumbs-responsive,\n.uxa-breadcrumbs.uxa-breadcrumbs-responsive {\n  --uxa-breadcrumbs__display: flex;\n  --uxa-breadcrumbs__min-height: 24px;\n}\n\n.uxa-breadcrumb-list {\n  display: flex;\n  -moz-column-gap: var(--uxa-breadcrumb-list__column-gap);\n       column-gap: var(--uxa-breadcrumb-list__column-gap);\n}\n\n.uxa-breadcrumb-separator {\n  display: var(--uxa-breadcrumb-separator__display);\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-breadcrumb-separator__width);\n  height: var(--uxa-breadcrumb-separator__height);\n  font-size: var(--uxa-breadcrumb-separator__font-size);\n  color: var(--uxa-breadcrumb-separator__color);\n}\n.uxa-breadcrumb-separator:empty {\n  background-image: var(--uxa-breadcrumb-separator__background-image);\n}\n\n.uxa-breadcrumbs-overflow-menu {\n  display: flex;\n  align-items: center;\n  --uxa-button__color--flat-primary: var(--uxa-breadcrumb__overflow-button__color);\n  --uxa-button__color--flat-primary-hover: var(--uxa-breadcrumb__overflow-button__color--hover);\n  --uxa-button__color--flat-primary-active: var(--uxa-breadcrumb__overflow-button__color--active);\n}\n\n.uxa-breadcrumbs-collapsed-menu-items {\n  --uxa-menu-content__min-width: none;\n  --uxa-menu-item__padding-inline: 0;\n  --uxa-menu-item__padding-block: 0;\n  --uxa-breadcrumb__height: 32px;\n  --uxa-breadcrumb__width: 100%;\n  --uxa-breadcrumb-separator__display: none;\n  --uxa-breadcrumb__padding-inline: 8px;\n  --uxa-breadcrumb__padding-block: 0;\n  --uxa-menu-item-container__width: 100%;\n  --uxa-breadcrumb__text-decoration--hover: none;\n  --uxa-breadcrumb__color: var(--uxa-breadcrumb__collapsed-menu-items__color);\n  --uxa-breadcrumb__color--hover: var(--uxa-breadcrumb__collapsed-menu-items__color--hover);\n  --uxa-breadcrumb__color--active: var(--uxa-breadcrumb__collapsed-menu-items__color--active);\n}";
styleInject(css_248z);

const BreadcrumbsI18nContext = createContext(new UxaDefaultBreadcrumbsI18n());
const defaultI18n = new UxaDefaultBreadcrumbsI18n();
function useBreadcrumbsI18n() {
  var _a;
  // Use the default where none have been defined
  return (_a = useContext(BreadcrumbsI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n;
}

const useResponsiveBreadcrumbs = (breadcrumbsRef, children, maxBreadcrumbs, isResponsive) => {
  const breadcrumbs = useChildrenOfType(children, Breadcrumb);
  const width = useRef(0);
  const leadingBreadcrumb = breadcrumbs[0];
  const [trailingBreadcrumbs, setTrailingBreadcrumbs] = useState([]);
  // the breadcrumbs that will be shown in the menu are those not in the visible breadcrumbs array and not the first breadcrumb
  const menuBreadcrumbs = useMemo(() => {
    return breadcrumbs.slice(1, breadcrumbs.length - trailingBreadcrumbs.length);
  }, [breadcrumbs, trailingBreadcrumbs]);
  const onResize = useCallback(entry => {
    // if the width has not changed, skip the resize
    if (entry[0].contentRect.width === width.current && (breadcrumbs.length === 0 || !breadcrumbsRef.current)) {
      // do nothing if breadcrumbs are not available or the responsive breadcrumbs directive is not being used
      return;
    }
    width.current = entry[0].contentRect.width;
    if (breadcrumbs.length === 0 || !breadcrumbsRef.current) {
      return;
    }
    let pendingBreadcrumbs = breadcrumbs.slice(1);
    // if there are more than the maximum number of breadcrumbs, remove all that exceed the maximum
    if (maxBreadcrumbs && breadcrumbs.length > maxBreadcrumbs) {
      pendingBreadcrumbs = breadcrumbs.slice(-maxBreadcrumbs + 1);
    }
    // if the pending breadcrumbs are the same as the visible breadcrumbs, skip the initial render
    if (pendingBreadcrumbs !== trailingBreadcrumbs) {
      // reset the visible breadcrumbs to the original children - skipping the first breadcrumb as it is always visible
      flushSync(() => setTrailingBreadcrumbs(pendingBreadcrumbs));
    }
    let isOverflowing = breadcrumbsRef.current.scrollWidth > breadcrumbsRef.current.clientWidth;
    while (isOverflowing) {
      // the minimum number of breadcrumbs to display is 2
      if (pendingBreadcrumbs.length <= 1) {
        break;
      }
      // remove the second breadcrumb from the list (as we always want to retain the first breadcrumb)
      pendingBreadcrumbs = pendingBreadcrumbs.slice(1);
      // force the component to re-render
      // remove the second breadcrumb from the list (as we always want to retain the first breadcrumb)
      // eslint-disable-next-line no-loop-func
      flushSync(() => setTrailingBreadcrumbs(pendingBreadcrumbs));
      // check if the breadcrumbs are still overflowing
      isOverflowing = breadcrumbsRef.current.scrollWidth > breadcrumbsRef.current.clientWidth;
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [breadcrumbs, breadcrumbsRef, maxBreadcrumbs]);
  useResizeObserver(breadcrumbsRef, onResize);
  if (isResponsive) {
    return {
      leadingBreadcrumb,
      menuBreadcrumbs,
      trailingBreadcrumbs
    };
  } else {
    return {
      leadingBreadcrumb,
      menuBreadcrumbs: [],
      trailingBreadcrumbs: breadcrumbs.slice(1)
    };
  }
};

/**
 * ## Localization
 *
 * This component uses several strings which must be localized. You can use `BreadcrumbsI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * import { BreadcrumbsI18nContext } from '@ux-aspects-universal/react/breadcrumbs';
 *
 * <BreadcrumbsI18nContext.Provider value={{ previousButtonAriaLabel: "Menu de débordement du fil d'Ariane", ... }}>
 *   <Breadcrumbs />
 * </BreadcrumbsI18nContext.Provider>
 * ```
 *
 * See documentation for [UxaBreadcrumbsI18n](#interfaces) for the full list of properties available to configure.
 */
const Breadcrumbs = _a => {
  var _b;
  var {
      separator,
      size = 'medium',
      children,
      maxBreadcrumbs = Infinity,
      isResponsive,
      overflowButton = () => React.createElement(BreadcrumbOverflowButton, null)
    } = _a,
    props = __rest(_a, ["separator", "size", "children", "maxBreadcrumbs", "isResponsive", "overflowButton"]);
  if (maxBreadcrumbs < 2) {
    throw new Error('maxBreadcrumbs must be greater than or equal to 2');
  }
  const {
    isJato
  } = useThemeFamily();
  const overflowButtonElement = overflowButton();
  const breadcrumbsRef = useRef(null);
  const breadcrumbLinksRefs = useRef([]);
  const {
    leadingBreadcrumb,
    menuBreadcrumbs,
    trailingBreadcrumbs
  } = useResponsiveBreadcrumbs(breadcrumbsRef, children, maxBreadcrumbs, isResponsive);
  const {
    triggerProps,
    menuProps
  } = useMenuTrigger({
    triggerId: overflowButtonElement.props.id
  });
  const separatorNode = useMemo(() => typeof separator === 'function' ? separator(0) : separator, [separator]);
  const handleKeyDown = (event, menuBreadcrumbsRef) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      menuBreadcrumbsRef === null || menuBreadcrumbsRef === void 0 ? void 0 : menuBreadcrumbsRef.click();
    }
  };
  const {
      ref: menuRef
    } = triggerProps,
    menuTriggerProps = __rest(triggerProps, ["ref"]);
  return React.createElement(FocusKeyManager, {
    orientation: "horizontal"
  }, React.createElement("div", Object.assign({}, mergeProps(props, {
    role: 'navigation',
    className: clsx('uxa-breadcrumbs uxa-breadcrumbs-responsive', {
      'uxa-small': size === 'small',
      'uxa-medium': size === 'medium',
      'uxa-breadcrumbs-responsive': isResponsive
    }),
    ref: breadcrumbsRef
  })), React.createElement("div", {
    className: "uxa-breadcrumb-list"
  }, leadingBreadcrumb ? ((_b = leadingBreadcrumb.props) === null || _b === void 0 ? void 0 : _b.icon) ? React.createElement(BreadcrumbButton, Object.assign({
    ref: leadingBreadcrumb === null || leadingBreadcrumb === void 0 ? void 0 : leadingBreadcrumb.ref,
    isLast: 0 === React.Children.count(children) - 1,
    separator: separator,
    index: 0
  }, leadingBreadcrumb === null || leadingBreadcrumb === void 0 ? void 0 : leadingBreadcrumb.props)) : React.createElement(BreadcrumbLink, Object.assign({
    ref: leadingBreadcrumb === null || leadingBreadcrumb === void 0 ? void 0 : leadingBreadcrumb.ref,
    isLast: 0 === React.Children.count(children) - 1,
    separator: separator,
    index: 0
  }, leadingBreadcrumb === null || leadingBreadcrumb === void 0 ? void 0 : leadingBreadcrumb.props)) : null, menuBreadcrumbs.length ? React.createElement("div", {
    className: "uxa-breadcrumbs-overflow-menu"
  }, React.cloneElement(overflowButtonElement, mergeProps(overflowButtonElement.props, Object.assign(Object.assign({}, menuTriggerProps), {
    menuRef
  }))), React.createElement("div", {
    className: "uxa-breadcrumb-separator"
  }, separatorNode), React.createElement(Menu, Object.assign({}, menuProps, {
    hasArrow: !isJato,
    offsetY: isJato ? 8 : 0,
    closeOnBlur: true,
    className: "uxa-breadcrumbs-collapsed-menu-items"
  }), menuBreadcrumbs.map((breadcrumb, index) => React.createElement(MenuItem, {
    key: index,
    onKeyDown: event => handleKeyDown(event, breadcrumbLinksRefs.current[index])
  }, React.createElement(BreadcrumbLink, Object.assign({
    tabIndex: -1,
    ref: ref => breadcrumbLinksRefs.current[index] = ref,
    isLast: false,
    separator: separator,
    index: index + 1,
    isOverflowing: true
  }, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.props)))))) : null, trailingBreadcrumbs.map((breadcrumb, index) => React.createElement(BreadcrumbLink, Object.assign({
    ref: breadcrumb.ref,
    key: index,
    index: index + 1,
    isLast: index === trailingBreadcrumbs.length - 1,
    separator: separator
  }, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.props))))));
};
/** Define the Prop Type information */
Breadcrumbs.propTypes = {
  size: PropTypes__default.oneOf(['small', 'medium']),
  separator: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.func]),
  maxBreadcrumbs: PropTypes__default.number,
  isResponsive: PropTypes__default.bool,
  overflowButton: PropTypes__default.func
};
const BreadcrumbOverflowButton = forwardRef((_a, ref) => {
  var {
      menuRef
    } = _a,
    props = __rest(_a, ["menuRef"]);
  const defaultMenuRef = useRef(null);
  const internalRef = useRef(null);
  const {
    tabbableProps,
    tabIndex
  } = useTabbable(internalRef);
  const {
    isJato
  } = useThemeFamily();
  const {
    overflowMenuButtonAriaLabel
  } = useBreadcrumbsI18n();
  return React.createElement(IconButton, Object.assign({
    ref: mergeRefs(ref, internalRef, menuRef !== null && menuRef !== void 0 ? menuRef : defaultMenuRef)
  }, mergeProps({
    className: 'uxa-breadcrumbs-overflow-menu-button',
    primary: isJato,
    secondary: !isJato,
    isCircular: !isJato,
    size: 'small',
    flat: true,
    'aria-label': overflowMenuButtonAriaLabel,
    icon: React.createElement(MoreHorizontalIcon, null),
    tabIndex
  }, tabbableProps, props)));
});

export { Breadcrumb, BreadcrumbOverflowButton, Breadcrumbs, BreadcrumbsI18nContext };
