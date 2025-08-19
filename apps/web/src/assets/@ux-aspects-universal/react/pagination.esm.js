import { UxaDefaultPaginationI18n } from '@ux-aspects-universal/core/i18n';
import * as React from 'react';
import { createContext, useContext, useRef, forwardRef } from 'react';
import { _ as __rest } from './_tslib.esm.js';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { getPageRange } from '@ux-aspects-universal/core/pagination';
import { c as FocusKeyManager } from './focus-key-manager.esm.js';
import '@react-aria/focus';
import '@react-aria/interactions';
import { b as useTabbable } from './use-tabbable.esm.js';
import { ab as ChevronFirstIcon, ag as ChevronLastIcon } from './zoom-out.esm2.js';
import { e as ChevronSmallLeftIcon, f as ChevronSmallRightIcon } from './zoom-out.esm.js';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import PropTypes__default from 'prop-types';
import { s as styleInject } from './style-inject.es.esm.js';
import './reducer-provider.esm.js';
import './use-unique-id.esm.js';
import 'react-dom';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './prop-types.esm.js';

const PaginationI18nContext = createContext(new UxaDefaultPaginationI18n());
const defaultI18n = new UxaDefaultPaginationI18n();
function usePaginationI18n() {
  var _a;
  // Use the default where none have been defined
  return (_a = useContext(PaginationI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n;
}

var css_248z$2 = "/* stylelint-disable ux-aspects/no-host-context */\n:host,\n.uxa-pagination {\n  display: flex;\n  align-items: center;\n  gap: var(--uxa-pagination__gap);\n  margin-inline-start: var(--uxa-pagination__margin-inline-start);\n}\n:host.uxa-flat, :host:is(uxa-flat-pagination),\n.uxa-pagination.uxa-flat,\n.uxa-pagination:is(uxa-flat-pagination) {\n  --uxa-pagination-list__border: var(--uxa-pagination-list__border--flat);\n  --uxa-pagination-arrow__background-color--disabled: var(\n    --uxa-pagination-arrow__background-color--disabled--flat\n  );\n  --uxa-pagination-link__box-shadow--focus: var(--uxa-pagination-link__box-shadow--focus-flat);\n  --uxa-pagination-link__background-color--selected: var(\n    --uxa-pagination-link__background-color--selected-flat\n  );\n  --uxa-pagination-link__color--selected: var(--uxa-pagination-link__color--selected-flat);\n  --uxa-pagination-link__box-shadow--selected: var(\n    --uxa-pagination-link__box-shadow--selected-flat\n  );\n  --uxa-pagination-link__background-color--selected-hover: var(\n    --uxa-pagination-link__background-color--selected-flat-hover\n  );\n  --uxa-pagination-link__box-shadow--selected-focus: var(\n    --uxa-pagination-link__box-shadow--selected-flat-focus\n  );\n  --uxa-pagination-divider__background-color: var(\n    --uxa-pagination-divider__background-color--flat\n  );\n}\n\n.uxa-pagination-list {\n  display: flex;\n  list-style-type: none;\n  padding-inline: 0;\n  padding-block: 0;\n  margin-inline: 0;\n  margin-block: 0;\n  border-radius: var(--uxa-pagination-list__border-radius);\n  border: var(--uxa-pagination-list__border);\n  box-sizing: border-box;\n  height: var(--uxa-pagaintion-list__height);\n}\n\n.uxa-pagination-summary {\n  display: var(--uxa-pagination-summary__display, block);\n  color: var(--uxa-pagination-summary__color);\n  font-size: var(--uxa-pagination-summary__font-size);\n  font-weight: var(--uxa-pagination-summary__font-weight);\n  line-height: var(--uxa-pagination-summary__line-height);\n}\n\n.uxa-pagination-item,\n.uxa-pagination-arrow {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: var(--uxa-pagination-item__background-color);\n}\n.uxa-pagination-item:hover,\n.uxa-pagination-arrow:hover {\n  --uxa-pagination-item__background-color: var(--uxa-pagination-link__color--hover);\n}\n.uxa-pagination-item:active,\n.uxa-pagination-arrow:active {\n  --uxa-pagination-item__background-color: var(--uxa-pagination-link__color--active);\n}\n.uxa-pagination-item.uxa-active,\n.uxa-pagination-arrow.uxa-active {\n  --uxa-pagination-item__background-color: var(--uxa-pagination-link__background-color--selected);\n  --uxa-pagination-link__color: var(--uxa-pagination-link__color--selected);\n  --uxa-pagination-link__box-shadow: var(--uxa-pagination-link__box-shadow--selected);\n  --uxa-pagination-link__font-weight: var(--uxa-pagination-link__font-weight--selected);\n  --uxa-pagination-link__box-shadow--focus: var(\n    --uxa-pagination-link__box-shadow--selected-focus\n  );\n}\n.uxa-pagination-item.uxa-active:hover,\n.uxa-pagination-arrow.uxa-active:hover {\n  --uxa-pagination-item__background-color: var(\n    --uxa-pagination-link__background-color--selected-hover\n  );\n}\n\n.uxa-pagination-item {\n  width: var(--uxa-pagination-item__width);\n  height: 100%;\n  border-radius: var(--uxa-pagination-item__border-radius);\n}\n\n.uxa-pagination-arrow {\n  display: var(--uxa-pagination-arrow__display, flex);\n  visibility: var(--uxa-pagination-arrow__visibility, visible);\n  width: var(--uxa-pagination-arrow__width);\n  border-radius: var(--uxa-pagination-arrow__border-radius);\n  height: 100%;\n  --uxa-pagination-link__font-size: var(--uxa-pagination-arrow__size);\n}\n.uxa-pagination-arrow.uxa-disabled {\n  pointer-events: none;\n  --uxa-pagination-item__background-color: var(\n    --uxa-pagination-arrow__background-color--disabled\n  );\n  --uxa-pagination-link__color: var(--uxa-pagination-arrow__color--disabled);\n  --uxa-pagination-link__box-shadow--focus: none;\n  --uxa-pagination-arrow__display: var(--uxa-pagination-arrow__display--disabled);\n  --uxa-pagination-arrow__visibility: var(--uxa-pagination-arrow__visibility--disabled);\n}\n\n.uxa-pagination-boundary-arrow {\n  --uxa-pagination-arrow__display: var(--uxa-pagination-arrow__display--boundary, none);\n  --uxa-pagination-arrow__visibility: var(--uxa-pagination-arrow__visibility--boundary, visible);\n}\n.uxa-pagination-boundary-arrow.uxa-disabled {\n  --uxa-pagination-arrow__display: var(--uxa-pagination-arrow__display--boundary-disabled, none);\n  --uxa-pagination-arrow__visibility: var(\n    --uxa-pagination-arrow__visibility--boundary-disabled,\n    var(--uxa-pagination-arrow__visibility--disabled)\n  );\n}\n\n.uxa-pagination-arrow:not(.uxa-disabled) + .uxa-pagination-item {\n  margin-inline-start: var(--uxa-pagination-arrow__gap);\n}\n\n.uxa-pagination-item + .uxa-pagination-arrow:not(.uxa-disabled) {\n  margin-inline-start: var(--uxa-pagination-arrow__gap);\n}\n\n.uxa-pagination-arrow + .uxa-pagination-item:not(.uxa-active)::after,\n.uxa-pagination-item:not(.uxa-active) + .uxa-pagination-item:not(.uxa-active)::after,\n.uxa-pagination-item:not(.uxa-active) + .uxa-pagination-arrow::after {\n  content: \"\";\n  position: absolute;\n  inset-inline-start: 0;\n  width: var(--uxa-pagination-divider__width);\n  height: var(--uxa-pagination-divider__height);\n  background-color: var(--uxa-pagination-divider__background-color);\n  box-sizing: border-box;\n}\n\n.uxa-pagination-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--uxa-pagination-link__color);\n  font-size: var(--uxa-pagination-link__font-size);\n  font-weight: var(--uxa-pagination-link__font-weight);\n  line-height: var(--uxa-pagination-link__line-height);\n  box-shadow: var(--uxa-pagination-link__box-shadow);\n  background-color: transparent;\n  border: none;\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: inherit;\n}\n.uxa-pagination-link:focus {\n  outline: none;\n}\n.uxa-pagination-link.uxa-focused, .uxa-pagination-link:focus-visible {\n  --uxa-pagination-link__box-shadow: var(--uxa-pagination-link__box-shadow--focus);\n  z-index: 1;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n::ng-deep[dir=rtl] .uxa-pagination-arrow,\n:host-context([dir=rtl]) .uxa-pagination-arrow {\n  --uxa-icon__transform: scaleX(-1);\n}\n\n/**\n  * Chrome support (react)\n */\n[dir=rtl] .uxa-pagination-arrow {\n  --uxa-icon__transform: scaleX(-1);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:dir(rtl) .uxa-pagination-arrow {\n  --uxa-icon__transform: scaleX(-1);\n}";
styleInject(css_248z$2);

/**
 * ## Localization
 *
 * This component uses several strings which must be localized. You can use `PaginationI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <PaginationI18nContext.Provider value={{ previousButtonAriaLabel: 'Le précédent', ... }}>
 *   <Pagination />
 * </PaginationI18nContext.Provider>
 * ```
 *
 * See documentation for [UxaPaginationI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `Pagination` in your application, it may be beneficial to
 * configure `PaginationI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
const Pagination = ({
  page = 1,
  pageCount = 1,
  limit = 5,
  flat = false,
  onPageChange
}) => {
  var _a;
  const i18n = usePaginationI18n();
  const range = getPageRange(page, pageCount, limit);
  const goToFirstPage = () => goToPage(1);
  const goToLastPage = () => goToPage(pageCount);
  const goToPreviousPage = () => goToPage(page - 1);
  const goToNextPage = () => goToPage(page + 1);
  const goToPage = targetPage => {
    if (targetPage !== page && onPageChange && targetPage >= 1 && targetPage <= pageCount) {
      onPageChange(targetPage);
    }
  };
  return React.createElement(FocusKeyManager, {
    orientation: "horizontal",
    inheritFocusManager: true
  }, React.createElement("div", {
    className: clsx('uxa-pagination', {
      'uxa-flat': flat
    })
  }, React.createElement("ul", {
    className: "uxa-pagination-list"
  }, React.createElement("li", {
    className: clsx('uxa-pagination-arrow uxa-pagination-boundary-arrow', {
      'uxa-disabled': page === 1
    })
  }, React.createElement(PaginationLink, {
    isDisabled: page === 1,
    onClick: goToFirstPage,
    "aria-label": i18n.firstButtonAriaLabel
  }, React.createElement(ChevronFirstIcon, null))), React.createElement("li", {
    className: clsx('uxa-pagination-arrow', {
      'uxa-disabled': page === 1
    })
  }, React.createElement(PaginationLink, {
    onClick: goToPreviousPage,
    isDisabled: page === 1,
    "aria-label": i18n.previousButtonAriaLabel
  }, React.createElement(ChevronSmallLeftIcon, null))), range.map(pageIndex => {
    var _a, _b;
    return React.createElement("li", {
      key: pageIndex,
      className: clsx('uxa-pagination-item', {
        'uxa-active': page === pageIndex
      })
    }, React.createElement(PaginationLink, {
      "aria-label": (_b = (_a = i18n.getPageAriaLabel) === null || _a === void 0 ? void 0 : _a.call(i18n, pageIndex)) !== null && _b !== void 0 ? _b : 'Goto page ' + pageIndex,
      "aria-current": page === pageIndex ? true : undefined,
      onClick: () => goToPage(pageIndex)
    }, pageIndex));
  }), React.createElement("li", {
    className: clsx('uxa-pagination-arrow', {
      'uxa-disabled': page === pageCount
    })
  }, React.createElement(PaginationLink, {
    onClick: goToNextPage,
    onMouseDown: event => event.preventDefault(),
    isDisabled: page === pageCount,
    "aria-label": i18n.nextButtonAriaLabel
  }, React.createElement(ChevronSmallRightIcon, null))), React.createElement("li", {
    className: clsx('uxa-pagination-arrow uxa-pagination-boundary-arrow', {
      'uxa-disabled': page === pageCount
    })
  }, React.createElement(PaginationLink, {
    onClick: goToLastPage,
    onMouseDown: event => event.preventDefault(),
    isDisabled: page === pageCount,
    "aria-label": i18n.lastButtonAriaLabel
  }, React.createElement(ChevronLastIcon, null)))), React.createElement("span", {
    className: "uxa-pagination-summary"
  }, (_a = i18n.getRangeLabel) === null || _a === void 0 ? void 0 : _a.call(i18n, page, pageCount))));
};
/** Define the Prop Type information */
Pagination.propTypes = {
  /** The active page. */
  page: PropTypes.number,
  /** The total number of pages. */
  pageCount: PropTypes.number,
  /** The maximum number of pages to display. */
  limit: PropTypes.number,
  /** Whether to use the flat variant. */
  flat: PropTypes.bool,
  /** Event emitted when the active page changes. */
  onPageChange: PropTypes.func
};
function PaginationLink(_a) {
  var {
      isDisabled,
      children
    } = _a,
    props = __rest(_a, ["isDisabled", "children"]);
  const ref = useRef(null);
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref, {
    isDisabled
  });
  return React.createElement("button", Object.assign({
    ref: ref,
    className: "uxa-pagination-link",
    tabIndex: tabIndex,
    onMouseDown: event => event.preventDefault()
  }, mergeProps(props, tabbableProps)), children);
}

var css_248z$1 = ":host,\n.uxa-pagination-bar {\n  display: grid;\n  align-items: center;\n  width: var(--uxa-pagination-bar__width);\n  height: var(--uxa-pagination-bar__height);\n  border-top: var(--uxa-pagination-bar__border-width) solid var(--uxa-pagination-bar__border-color);\n  padding-inline: var(--uxa-pagination-bar__padding-inline);\n  padding-block: var(--uxa-pagination-bar__padding-block);\n  box-sizing: border-box;\n  --uxa-pagination-arrow__gap: var(--uxa-pagination-bar-arrow__gap);\n  --uxa-pagination-arrow__display--boundary: var(--uxa-pagination-bar-arrow__display--boundary);\n  --uxa-pagination-arrow__display--disabled: var(--uxa-pagination-bar-arrow__display--disabled);\n  --uxa-pagination-arrow__display--boundary-disabled: var(\n    --uxa-pagination-bar-arrow__display--boundary-disabled\n  );\n  --uxa-pagination-arrow__visibility--disabled: var(\n    --uxa-pagination-bar-arrow__visibility--disabled\n  );\n}\n:host.uxa-align-center,\n.uxa-pagination-bar.uxa-align-center {\n  grid-template-areas: var(--uxa-pagination-bar__grid-template-areas--align-center);\n  grid-template-columns: var(--uxa-pagination-bar__grid-template-columns--align-center);\n  justify-content: var(--uxa-pagination-bar__justify-content--align-center);\n}\n:host.uxa-align-end,\n.uxa-pagination-bar.uxa-align-end {\n  grid-template-areas: var(--uxa-pagination-bar__grid-template-areas--align-end);\n  grid-template-columns: var(--uxa-pagination-bar__grid-template-columns--align-end);\n  justify-content: var(--uxa-pagination-bar__justify-content--align-end);\n  --uxa-pagination__margin-inline-start: var(--uxa-pagination__margin-inline-start--align-end);\n}\n\n.uxa-pagination-dropdown-container {\n  grid-area: dropdown;\n}\n\n.uxa-pagination-container {\n  grid-area: pagination;\n  justify-self: center;\n}\n\n.uxa-pagination-count-container {\n  grid-area: count;\n}";
styleInject(css_248z$1);

function PaginationDropdown({
  dropdown
}) {
  const ref = useRef(null);
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref);
  return React.createElement("div", {
    className: "uxa-pagination-dropdown-container"
  }, dropdown ? React.cloneElement(dropdown, Object.assign({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: mergeRefs(ref, dropdown.ref),
    tabIndex
  }, tabbableProps)) : null);
}

const PaginationBar = forwardRef(({
  alignment = 'center',
  dropdown,
  itemCount,
  children
}, ref) => {
  return React.createElement(FocusKeyManager, {
    orientation: "horizontal"
  }, React.createElement("div", {
    ref: ref,
    className: clsx('uxa-pagination-bar', {
      'uxa-align-center': alignment === 'center',
      'uxa-align-end': alignment === 'end'
    })
  }, React.createElement(PaginationDropdown, {
    dropdown: dropdown
  }), React.createElement("div", {
    className: "uxa-pagination-container"
  }, children), React.createElement("div", {
    className: "uxa-pagination-count-container"
  }, itemCount)));
});
/** Define the Prop Type information */
PaginationBar.propTypes = {
  /** The alignment of the pagination bar. */
  alignment: PropTypes__default.oneOf(['center', 'end']),
  /** The pagination page size dropdown. */
  dropdown: PropTypes__default.element,
  /** The total item count. */
  itemCount: PropTypes__default.element
};

var css_248z = ":host,\n.uxa-pagination-count {\n  font-size: var(--uxa-pagination-count__font-size);\n  font-weight: var(--uxa-pagination-count__font-weight);\n  line-height: var(--uxa-pagination-count__line-height);\n  color: var(--uxa-pagination-count__color);\n  border-inline-end: var(--uxa-pagination-count__border-inline-end);\n  padding-inline-end: var(--uxa-pagination-count__padding-inline-end);\n  height: var(--uxa-pagination-count__height);\n}\n\n:host-context(uxa-pagination-bar.uxa-align-end) :host {\n  --uxa-pagination-count__border-inline-end: var(\n    --uxa-pagination-count__border-inline-end--align-end\n  );\n  --uxa-pagination-count__padding-inline-end: var(\n    --uxa-pagination-count__padding-inline-end--align-end\n  );\n}\n\n.uxa-pagination-bar.uxa-align-end .uxa-pagination-count {\n  --uxa-pagination-count__border-inline-end: var(\n    --uxa-pagination-count__border-inline-end--align-end\n  );\n  --uxa-pagination-count__padding-inline-end: var(\n    --uxa-pagination-count__padding-inline-end--align-end\n  );\n}";
styleInject(css_248z);

const PaginationCount = forwardRef((props, ref) => {
  return React.createElement("span", Object.assign({
    ref: ref
  }, mergeProps(props, {
    className: 'uxa-pagination-count'
  })));
});

export { Pagination, PaginationBar, PaginationCount, PaginationI18nContext };
