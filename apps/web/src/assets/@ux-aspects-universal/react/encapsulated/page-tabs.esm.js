import { UxaDefaultPageTabsI18n } from "@ux-aspects-universal/core/i18n";
import * as React from "react";
import { createContext, useContext, useMemo, forwardRef, useRef, useState, useEffect, useCallback } from "react";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
import { _ as __rest } from "./_tslib.esm.js";
import { mergeRefs, mergeProps } from "@react-aria/utils";
import { u as useControlled } from "./use-controllable.esm.js";
import clsx from "clsx";
import { a as useResizeObserver } from "./use-resize-observer.esm.js";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { c as FocusKeyManager, a as useActiveDescendantItem, u as useActiveDescendant, f as focusWithModality, A as ActiveDescendantProvider } from "./focus-key-manager.esm.js";
import "@react-aria/interactions";
import { b as useTabbable } from "./use-tabbable.esm.js";
import { an as CloseExtraSmallIcon, ao as CloseSmallIcon, ac as ChevronLargeDownIcon } from "./zoom-out.esm2.js";
import { T as Tooltip } from "./tooltip.esm.js";
import { a as useTooltipTrigger } from "./use-popover-trigger.esm.js";
import { c as createContext$1 } from "./context.esm.js";
import { u as useScrollMonitor } from "./use-scroll-monitor.esm.js";
import { useFloating, autoUpdate, offset, flip, shift, useDismiss, useInteractions } from "@floating-ui/react";
import { B as Button, I as IconButton } from "./split-button-group.esm.js";
import { R as NoListResultsIcon } from "./workspace.esm.js";
import { I as InputGroup, a as SearchClearButton } from "./search-clear-button.esm.js";
import { T as TextInput } from "./textarea.esm.js";
import "react-dom";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "./prop-types.esm.js";
import "./use-body-ref.esm.js";
import "./use-isomorphic-effect.esm.js";
import "./use-event-listener.esm.js";
import "./use-outside-click.esm.js";
import "./use-debounce.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import "./use-active-theme.esm.js";
import "./show.esm.js";
import "./validity-provider.esm.js";
import "./focusable-option.esm.js";
const PageTabsI18nContext = createContext(new UxaDefaultPageTabsI18n());
const defaultI18n = new UxaDefaultPageTabsI18n();
function usePageTabsI18n() {
    var _a;
    // Use the default where none have been defined
    return (_a = useContext(PageTabsI18nContext)) !== null && _a !== void 0 ? _a : defaultI18n;
}
var css_248z$4 = "";
styleInject(css_248z$4);
const PageTab = () => null;
/** Define the Prop Type information */
PageTab.propTypes = {
    /** The unique id for this tab. */
    id: PropTypes__default.string.isRequired,
    /** The label of the tab. */
    label: PropTypes__default.string.isRequired,
    /** The icon of the tab. */
    icon: PropTypes__default.element,
    /** Whether this tab is removable */
    isRemovable: PropTypes__default.bool
};
function useTabs(children) {
    return useMemo(() => React.Children.toArray(children).filter(React.isValidElement).filter(child => child.type === PageTab), [children]);
}
var css_248z$3 = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding-inline: 12px;\n  gap: var(--uxa-page-tab-button__gap);\n  flex: 1;\n  min-width: var(--uxa-page-tab-button__min-width);\n  max-width: var(--uxa-page-tab-button__max-width);\n  background: var(--uxa-page-tab-button__background);\n  border-width: var(--uxa-page-tab-button__border-width);\n  border-style: solid;\n  border-color: var(--uxa-page-tab-button__border-color);\n  border-radius: var(--uxa-page-tab-button__border-radius);\n  color: var(--uxa-page-tab-button-label__color);\n  font-family: inherit;\n  transition: var(--uxa-page-tab-button__transition);\n  outline: none;\n  --uxa-icon__size: 16px;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused, :not(#\\9):not(#\\9):not(#\\9) :host.cdk-keyboard-focused, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-focused, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.cdk-keyboard-focused {\n  outline: var(--uxa-page-tab-button__outline--focus);\n  outline-offset: var(--uxa-page-tab-button__outline-offset--focus);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: 0;\n  border-radius: inherit;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0;\n  pointer-events: none;\n  transition: var(--uxa-page-tab-button__transition);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover {\n  --uxa-page-tab-button-dismiss-button__opacity: var(\n    --uxa-page-tab-button-dismiss-button__opacity--hover\n  );\n  --uxa-page-tab-button-label__background: var(--uxa-page-tab-button-label__background--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) :host:active .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-selected .uxa-page-tab-button-label {\n  background: linear-gradient(to right, var(--uxa-page-tab-button-label__color) calc(100% - 22px), transparent calc(100% - 12px));\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover:not(.uxa-page-tab-button-dismiss-button:hover)::before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover:not(.uxa-page-tab-button-dismiss-button:hover)::before {\n  background: var(--uxa-page-tab-button__background--hover);\n  border-color: var(--uxa-page-tab-button__border-color--hover);\n  border-width: var(--uxa-page-tab-button__border-width--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-selected),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:not(.uxa-selected) {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top-color: transparent;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) :host:active:hover:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:hover:not(.uxa-selected)::before {\n  background: var(--uxa-page-tab-button__background--active);\n  border-color: var(--uxa-page-tab-button__border-color--active);\n  border-width: var(--uxa-page-tab-button__border-width--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-medium,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-medium {\n  height: var(--uxa-page-tab-button__height--md);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-small,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-small {\n  height: var(--uxa-page-tab-button__height--sm);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-selected {\n  --uxa-page-tab-button__background: var(--uxa-page-tab-button__background--selected);\n  --uxa-page-tab-button__background--hover: var(\n    --uxa-page-tab-button__background--selected-hover\n  );\n  --uxa-page-tab-button-label__font-weight: var(\n    --uxa-page-tab-button-label__font-weight--selected\n  );\n  --uxa-page-tab-button-dismiss-button__opacity: var(\n    --uxa-page-tab-button-dismiss-button__opacity--selected\n  );\n  border-bottom-color: transparent;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-label {\n  display: block;\n  flex: 1;\n  text-align: start;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-inline-end: var(--uxa-page-tab-button-label__padding-inline-end);\n  font-size: var(--uxa-page-tab-button-label__font-size);\n  font-weight: var(--uxa-page-tab-button-label__font-weight);\n  line-height: var(--uxa-page-tab-button-label__line-height);\n  background: linear-gradient(to right, var(--uxa-page-tab-button-label__color) calc(100% - 16px), transparent calc(100% - 6px));\n  color: transparent;\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-inline: var(--uxa-page-tab-button-dismiss-button__padding-inline);\n  padding-block: var(--uxa-page-tab-button-dismiss-button__padding-block);\n  width: var(--uxa-page-tab-button-dismiss-button__width);\n  height: var(--uxa-page-tab-button-dismiss-button__height);\n  flex: none;\n  background: var(--uxa-page-tab-button-dismiss-button__background);\n  border: var(--uxa-page-tab-button-dismiss-button__border);\n  font-size: var(--uxa-page-tab-button-dismiss-button__font-size);\n  inset-inline-end: var(--uxa-page-tab-button-dismiss-button__inset-inline-end);\n  opacity: var(--uxa-page-tab-button-dismiss-button__opacity);\n  border-radius: var(--uxa-page-tab-button-dismiss-button__border-radius);\n  box-sizing: border-box;\n  z-index: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button:hover {\n  background: var(--uxa-page-tab-button-dismiss-button__background--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button:active {\n  background: var(--uxa-page-tab-button-dismiss-button__background--active);\n}";
styleInject(css_248z$3);
const [PageTabGroupProvider, usePageTabGroup] = createContext$1();
const PageTabButton = forwardRef((_a, ref) => {
    var { id, icon, label, isRemovable } = _a, props = __rest(_a, ["id", "icon", "label", "isRemovable"]);
    const buttonRef = useRef(null);
    const { focusProps, isFocusVisible } = useFocusRing();
    const { setActive, tabIndex, tabbableProps } = useTabbable(buttonRef, {
        id
    });
    const context = usePageTabGroup();
    const { tooltipProps, triggerProps } = useTooltipTrigger({
        triggerRef: buttonRef,
        triggerId: `${context.id}-button-${id}`
    });
    const isSelected = context.selectedTab === id;
    const selectTab = () => {
        var _a;
        setActive();
        (_a = context.selectTab) === null || _a === void 0 ? void 0 : _a.call(context, id);
    };
    const closeTab = e => {
        var _a;
        if (!isRemovable) {
            return;
        }
        e.preventDefault();
        (_a = context.closeTab) === null || _a === void 0 ? void 0 : _a.call(context, id);
    };
    const onKeyDown = e => {
        // if the user presses delete or backspace, close the tab
        if (isRemovable && (e.key === "Delete" || e.key === "Backspace")) {
            closeTab(e);
        }
    };
    return React.createElement(React.Fragment, null, React.createElement("button", Object.assign({
        ref: mergeRefs(buttonRef, ref),
        className: clsx("uxa-page-tab-button", {
            "uxa-selected": isSelected,
            "uxa-small": context.size === "small",
            "uxa-medium": context.size === "medium",
            "uxa-focused": isFocusVisible
        }),
        role: "tab",
        type: "button",
        "aria-controls": context.id + "-panel-" + id,
        "aria-selected": isSelected,
        tabIndex: tabIndex
    }, mergeProps({
        onClick: selectTab,
        onKeyDown,
        id: triggerProps.id,
        "aria-describedby": triggerProps["aria-describedby"]
    }, tabbableProps, focusProps, props)), icon, React.createElement("span", {
        className: "uxa-page-tab-button-label"
    }, label), isRemovable && React.createElement("div", {
        className: "uxa-page-tab-button-dismiss-button",
        onClick: closeTab
    }, React.createElement(CloseExtraSmallIcon, null))), React.createElement(Tooltip, Object.assign({}, tooltipProps, {
        placement: "above",
        delay: 500
    }), label));
});
/** Define the Prop Type information */
PageTabButton.propTypes = {
    /** The label of the tab. */
    label: PropTypes__default.string.isRequired,
    /** The icon of the tab. */
    icon: PropTypes__default.element,
    /** Whether this tab is removable */
    isRemovable: PropTypes__default.bool
};
var css_248z$2 = "";
styleInject(css_248z$2);
const PageTabGroupList = forwardRef(({ controller, children }, ref) => {
    const listRef = useRef(null);
    const { scrollProps } = useScrollMonitor({
        element: listRef,
        threshold: 16
    });
    return React.createElement(FocusKeyManager, {
        orientation: "horizontal",
        controller: controller
    }, React.createElement("div", Object.assign({
        ref: mergeRefs(ref, listRef),
        "aria-orientation": "horizontal",
        role: "tablist",
        className: "uxa-page-tab-group-list"
    }, scrollProps), children));
});
var css_248z$1 = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group {\n  display: block;\n  width: 100%;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host[data-level=\"0\"],\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group[data-level=\"0\"] {\n  --uxa-page-tab-panel__background: var(--uxa-page-tab-panel__background--level-0);\n  --uxa-page-tab-button__background: var(--uxa-page-tab-button__background--level-0);\n  --uxa-page-tab-button__background--selected: var(\n    --uxa-page-tab-button__background--level-0-selected\n  );\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-header {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: var(--uxa-page-tab-group-header__column-gap);\n       column-gap: var(--uxa-page-tab-group-header__column-gap);\n  margin-inline-end: var(--uxa-page-tab-group-header__margin-inline-end);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list-container {\n  position: relative;\n  width: 100%;\n  max-width: var(--uxa-page-tab-group-list-container__max-width);\n  isolation: isolate;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list-container:not(:has(> [data-scroll-start]))::before, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list-container:not(:has(> [data-scroll-end]))::after {\n  content: \"\";\n  position: absolute;\n  inset-block: 0 1px;\n  width: 16px;\n  z-index: 1;\n  pointer-events: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list-container:not(:has(> [data-scroll-start]))::before {\n  inset-inline-start: 0;\n  background: var(--uxa-page-tab-group-list-container-fade__background--start);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list-container:not(:has(> [data-scroll-end]))::after {\n  inset-inline-end: 0;\n  background: var(--uxa-page-tab-group-list-container-fade__background--end);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-list {\n  display: flex;\n  overflow: hidden;\n  -moz-column-gap: var(--uxa-page-tab-group-list__column-gap);\n       column-gap: var(--uxa-page-tab-group-list__column-gap);\n  flex: 1 1 auto;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-group-dropdown-button {\n  flex: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-panel {\n  background: var(--uxa-page-tab-panel__background);\n  border: var(--uxa-page-tab-panel__border);\n  min-height: var(--uxa-page-tab-panel__min-height);\n  margin-block-start: var(--uxa-page-tab-panel__margin-block-start);\n  border-radius: var(--uxa-page-tab-panel__border-radius);\n  color: var(--uxa-page-tab-panel__color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-panel:empty {\n  display: none;\n}\n\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding-inline: 12px;\n  gap: var(--uxa-page-tab-button__gap);\n  flex: 1;\n  min-width: var(--uxa-page-tab-button__min-width);\n  max-width: var(--uxa-page-tab-button__max-width);\n  background: var(--uxa-page-tab-button__background);\n  border-width: var(--uxa-page-tab-button__border-width);\n  border-style: solid;\n  border-color: var(--uxa-page-tab-button__border-color);\n  border-radius: var(--uxa-page-tab-button__border-radius);\n  color: var(--uxa-page-tab-button-label__color);\n  font-family: inherit;\n  transition: var(--uxa-page-tab-button__transition);\n  outline: none;\n  --uxa-icon__size: 16px;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused, :not(#\\9):not(#\\9):not(#\\9) :host.cdk-keyboard-focused, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-focused, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.cdk-keyboard-focused {\n  outline: var(--uxa-page-tab-button__outline--focus);\n  outline-offset: var(--uxa-page-tab-button__outline-offset--focus);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  right: -1px;\n  bottom: 0;\n  border-radius: inherit;\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0;\n  pointer-events: none;\n  transition: var(--uxa-page-tab-button__transition);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover {\n  --uxa-page-tab-button-dismiss-button__opacity: var(\n    --uxa-page-tab-button-dismiss-button__opacity--hover\n  );\n  --uxa-page-tab-button-label__background: var(--uxa-page-tab-button-label__background--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) :host:active .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active .uxa-page-tab-button-label, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-selected .uxa-page-tab-button-label {\n  background: linear-gradient(to right, var(--uxa-page-tab-button-label__color) calc(100% - 22px), transparent calc(100% - 12px));\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover:not(.uxa-page-tab-button-dismiss-button:hover)::before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:hover:not(.uxa-page-tab-button-dismiss-button:hover)::before {\n  background: var(--uxa-page-tab-button__background--hover);\n  border-color: var(--uxa-page-tab-button__border-color--hover);\n  border-width: var(--uxa-page-tab-button__border-width--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-selected),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:not(.uxa-selected) {\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top-color: transparent;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) :host:active:hover:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:not(.uxa-selected)::before, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button:active:hover:not(.uxa-selected)::before {\n  background: var(--uxa-page-tab-button__background--active);\n  border-color: var(--uxa-page-tab-button__border-color--active);\n  border-width: var(--uxa-page-tab-button__border-width--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-medium,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-medium {\n  height: var(--uxa-page-tab-button__height--md);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-small,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-small {\n  height: var(--uxa-page-tab-button__height--sm);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button.uxa-selected {\n  --uxa-page-tab-button__background: var(--uxa-page-tab-button__background--selected);\n  --uxa-page-tab-button__background--hover: var(\n    --uxa-page-tab-button__background--selected-hover\n  );\n  --uxa-page-tab-button-label__font-weight: var(\n    --uxa-page-tab-button-label__font-weight--selected\n  );\n  --uxa-page-tab-button-dismiss-button__opacity: var(\n    --uxa-page-tab-button-dismiss-button__opacity--selected\n  );\n  border-bottom-color: transparent;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-label {\n  display: block;\n  flex: 1;\n  text-align: start;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-inline-end: var(--uxa-page-tab-button-label__padding-inline-end);\n  font-size: var(--uxa-page-tab-button-label__font-size);\n  font-weight: var(--uxa-page-tab-button-label__font-weight);\n  line-height: var(--uxa-page-tab-button-label__line-height);\n  background: linear-gradient(to right, var(--uxa-page-tab-button-label__color) calc(100% - 16px), transparent calc(100% - 6px));\n  color: transparent;\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-inline: var(--uxa-page-tab-button-dismiss-button__padding-inline);\n  padding-block: var(--uxa-page-tab-button-dismiss-button__padding-block);\n  width: var(--uxa-page-tab-button-dismiss-button__width);\n  height: var(--uxa-page-tab-button-dismiss-button__height);\n  flex: none;\n  background: var(--uxa-page-tab-button-dismiss-button__background);\n  border: var(--uxa-page-tab-button-dismiss-button__border);\n  font-size: var(--uxa-page-tab-button-dismiss-button__font-size);\n  inset-inline-end: var(--uxa-page-tab-button-dismiss-button__inset-inline-end);\n  opacity: var(--uxa-page-tab-button-dismiss-button__opacity);\n  border-radius: var(--uxa-page-tab-button-dismiss-button__border-radius);\n  box-sizing: border-box;\n  z-index: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button:hover {\n  background: var(--uxa-page-tab-button-dismiss-button__background--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-button-dismiss-button:active {\n  background: var(--uxa-page-tab-button-dismiss-button__background--active);\n}";
styleInject(css_248z$1);
function PageTabMenuItem({ tab }) {
    var _a;
    const { selectTab, closeTab, selectedTab, closeMenu } = usePageTabGroup();
    const { isActive, itemProps } = useActiveDescendantItem({
        id: tab.props.id,
        disabled: false,
        value: tab.props.label
    });
    const { focusProps, isFocusVisible } = useFocusRing();
    return React.createElement("button", Object.assign({}, mergeProps({
        className: clsx("uxa-page-tab-menu-list-item", {
            "uxa-selected": selectedTab === tab.props.id
        }),
        tabIndex: -1,
        onClick: () => {
            selectTab(tab.props.id);
            closeMenu();
        }
    }, itemProps)), tab.props.icon && React.cloneElement(tab.props.icon, {
        className: "uxa-page-tab-menu-list-item-icon"
    }), React.createElement("span", {
        className: "uxa-page-tab-menu-list-item-label"
    }, tab.props.label), ((_a = tab.props.isRemovable) !== null && _a !== void 0 ? _a : true) && React.createElement("span", Object.assign({
        className: clsx("uxa-page-tab-menu-list-item-dismiss", {
            "uxa-focused": isFocusVisible
        })
    }, focusProps, {
        tabIndex: isActive ? 0 : -1,
        onClick: e => {
            e.stopPropagation();
            closeTab(tab.props.id);
        },
        onKeyDown: e => {
            if (e.key === "Enter") {
                closeTab(tab.props.id);
            }
        }
    }), React.createElement(CloseSmallIcon, null)));
}
var css_248z = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--uxa-page-tab-menu__min-width);\n  max-width: var(--uxa-page-tab-menu__max-width);\n  height: var(--uxa-page-tab-menu__height);\n  box-sizing: border-box;\n  padding-inline: var(--uxa-page-tab-menu__padding-inline);\n  padding-block: var(--uxa-page-tab-menu__padding-block);\n  border-radius: var(--uxa-page-tab-menu__border-radius);\n  background: var(--uxa-page-tab-menu__background);\n  border: var(--uxa-page-tab-menu__border);\n  box-shadow: var(--uxa-page-tab-menu__box-shadow);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-search {\n  display: flex;\n  width: var(--uxa-page-tab-menu-search__width);\n  padding-inline: var(--uxa-page-tab-menu-search__padding-inline);\n  padding-block: var(--uxa-page-tab-menu-search__padding-block);\n  margin-block-end: var(--uxa-page-tab-menu-search__margin-block-end);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-container {\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-container:not(:has(> [data-scroll-top]))::before {\n  content: \"\";\n  position: absolute;\n  top: var(--uxa-page-tab-menu-list-container-before__top);\n  left: var(--uxa-page-tab-menu-list-container-before__left);\n  right: var(--uxa-page-tab-menu-list-container-before__right);\n  height: var(--uxa-page-tab-menu-list-container-before__height);\n  background: var(--uxa-page-tab-menu-list-container-before__background);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-container:not(:has(> [data-scroll-bottom]))::after {\n  content: \"\";\n  position: absolute;\n  bottom: var(--uxa-page-tab-menu-list-container-after__bottom);\n  left: var(--uxa-page-tab-menu-list-container-after__left);\n  right: var(--uxa-page-tab-menu-list-container-after__right);\n  height: var(--uxa-page-tab-menu-list-container-after__height);\n  background: var(--uxa-page-tab-menu-list-container-after__background);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--uxa-page-tab-menu-list__row-gap);\n  overflow: var(--uxa-page-tab-menu-list__overflow);\n  height: var(--uxa-page-tab-menu-list__height);\n  padding-inline: var(--uxa-page-tab-menu__padding-inline);\n  margin-inline: calc(var(--uxa-page-tab-menu__padding-inline) * -1);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item {\n  display: flex;\n  align-items: center;\n  height: var(--uxa-page-tab-menu-list-item__height);\n  flex: none;\n  background: var(--uxa-page-tab-menu-list-item__background);\n  border: var(--uxa-page-tab-menu-list-item__border);\n  font-family: var(--uxa-page-tab-menu-list-item__font-family);\n  color: var(--uxa-page-tab-menu-list-item__color);\n  border-radius: var(--uxa-page-tab-menu-list-item__border-radius);\n  padding-inline: var(--uxa-page-tab-menu-list-item__padding-inline);\n  padding-block: var(--uxa-page-tab-menu-list-item__padding-block);\n  -moz-column-gap: var(--uxa-page-tab-menu-list-item__column-gap);\n       column-gap: var(--uxa-page-tab-menu-list-item__column-gap);\n  transition: var(--uxa-page-tab-menu-list-item__transition);\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item:hover, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item.uxa-active {\n  background: var(--uxa-page-tab-menu-list-item__background--hover);\n  --uxa-page-menu-list-item-dismiss__opacity: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item:active:not(:has(> .uxa-page-tab-menu-list-item-dismiss:hover)) {\n  background: var(--uxa-page-tab-menu-list-item__background--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item.uxa-selected {\n  background: var(--uxa-page-tab-menu-list-item__background--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item.uxa-selected .uxa-page-tab-menu-list-item-label {\n  font-weight: var(--uxa-page-tab-menu-list-item__font-weight--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item.uxa-selected:hover, :not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item.uxa-selected.uxa-active {\n  background: var(--uxa-page-tab-menu-list-item__background--selected-hover);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-icon {\n  flex: none;\n  font-size: var(--uxa-page-menu-list-item-icon__font-size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-label {\n  font-weight: var(--uxa-page-tab-menu-list-item-label__font-weight);\n  font-size: var(--uxa-page-tab-menu-list-item-label__font-size);\n  line-height: var(--uxa-page-tab-menu-list-item-label__line-height);\n  flex: 1;\n  text-align: start;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-dismiss {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-page-tab-menu-list-item-dismiss__width);\n  height: var(--uxa-page-tab-menu-list-item-dismiss__height);\n  border-radius: var(--uxa-page-tab-menu-list-item-dismiss__border-radius);\n  padding-inline: var(--uxa-page-tab-menu-list-item-dismiss__padding-inline);\n  color: var(--uxa-page-tab-menu-list-item-dismiss__color);\n  opacity: var(--uxa-page-menu-list-item-dismiss__opacity, 0);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-dismiss:hover {\n  background: var(--uxa-page-tab-menu-list-item-dismiss__background--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-dismiss:active {\n  background: var(--uxa-page-tab-menu-list-item-dismiss__background--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-item-dismiss:focus-visible {\n  outline: var(--uxa-page-tab-menu-list-item-dismiss__outline--focus);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-empty-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-block: var(--uxa-page-tab-menu-list-empty__padding-block);\n  padding-inline: var(--uxa-page-tab-menu-list-empty__padding-inline);\n  gap: var(--uxa-page-tab-menu-list-empty__gap);\n  flex: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-empty-message {\n  font-weight: var(--uxa-page-tab-menu-list-empty-message__font-weight);\n  font-size: var(--uxa-page-tab-menu-list-empty-message__font-size);\n  line-height: var(--uxa-page-tab-menu-list-empty-message__line-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--uxa-page-tab-menu-list-empty-message__color);\n  flex: none;\n  margin-block: 0;\n  margin-inline: 0;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-list-empty-icon {\n  font-size: var(--uxa-page-tab-menu-list-empty-icon__size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-page-tab-menu-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-inline: var(--uxa-page-tab-menu-footer__padding-inline);\n  padding-block: var(--uxa-page-tab-menu-footer__padding-block);\n}";
styleInject(css_248z);
const PageTabMenu = forwardRef((_a, ref) => {
    var { tabs, closeMenu } = _a, props = __rest(_a, ["tabs", "closeMenu"]);
    const menuListRef = useRef(null);
    const { scrollProps } = useScrollMonitor({
        element: menuListRef
    });
    const [search, setSearch] = useState("");
    const { closeAllTabs, selectedTab } = usePageTabGroup();
    const i18n = usePageTabsI18n();
    const filteredTabs = useMemo(() => tabs.filter(tab => tab.props.label.toLowerCase().includes(search)), [search, tabs]);
    const { activeId, onKeyDown, setActiveItem } = useActiveDescendant();
    useEffect(() => {
        if (selectedTab) {
            setActiveItem(selectedTab);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setActiveItem]);
    return React.createElement("div", Object.assign({
        ref: ref,
        role: "menu"
    }, mergeProps({
        className: "uxa-page-tab-menu"
    }, props)), React.createElement("div", {
        className: "uxa-page-tab-menu-search"
    }, React.createElement(InputGroup, {
        trailingAddon: React.createElement(SearchClearButton, {
            icon: React.createElement(CloseSmallIcon, null)
        })
    }, React.createElement(TextInput, {
        autoFocus: true,
        type: "search",
        placeholder: i18n.searchPlaceholder,
        value: search,
        onChange: e => setSearch(e.target.value),
        "aria-activedescendant": activeId,
        onKeyDown: onKeyDown
    }))), React.createElement("div", {
        className: "uxa-page-tab-menu-list-container"
    }, React.createElement("div", Object.assign({
        ref: menuListRef,
        className: "uxa-page-tab-menu-list",
        tabIndex: -1
    }, scrollProps), filteredTabs.map(tab => React.createElement(PageTabMenuItem, {
        tab: tab,
        key: tab.props.id
    })), filteredTabs.length === 0 && React.createElement("div", {
        className: "uxa-page-tab-menu-list-empty-container"
    }, React.createElement(NoListResultsIcon, {
        className: "uxa-page-tab-menu-list-empty-icon"
    }), React.createElement("p", {
        className: "uxa-page-tab-menu-list-empty-message"
    }, "No results found.")))), React.createElement("div", {
        className: "uxa-page-tab-menu-footer"
    }, React.createElement(Button, {
        secondary: true,
        size: "small",
        onClick: closeAllTabs
    }, i18n.closeAllButtonLabel)));
});
function PageTabOverflowButton({ tabs }) {
    const menuId = useUniqueId("uxa-page-tab-overflow-menu");
    const i18n = usePageTabsI18n();
    const { isMenuOpen, closeMenu, openMenu } = usePageTabGroup();
    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        }
        else {
            openMenu();
        }
    };
    const { refs, floatingStyles, context } = useFloating({
        open: isMenuOpen,
        onOpenChange: (isOpen, _, reason) => {
            if (reason === "escape-key" && refs.domReference.current) {
                focusWithModality(refs.domReference.current, "keyboard");
            }
            isOpen ? closeMenu() : openMenu();
        },
        placement: "bottom-end",
        middleware: [offset({
                mainAxis: 0
            }), flip(), shift()],
        whileElementsMounted: autoUpdate,
        transform: false
    });
    const dismiss = useDismiss(context);
    const { selectTab } = usePageTabGroup();
    const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
    return React.createElement(React.Fragment, null, React.createElement(IconButton, Object.assign({
        ref: refs.setReference,
        flat: true,
        secondary: true,
        size: "small",
        className: "uxa-page-tab-group-dropdown-button",
        icon: React.createElement(ChevronLargeDownIcon, null),
        onClick: toggleMenu,
        "aria-label": i18n.menuButtonAriaLabel,
        "aria-expanded": isMenuOpen,
        "aria-controls": isMenuOpen ? menuId : undefined,
        "aria-haspopup": "menu"
    }, getReferenceProps())), isMenuOpen && React.createElement(ActiveDescendantProvider, {
        onEnter: id => {
            selectTab(id);
            closeMenu();
            setTimeout(() => focusWithModality(refs.domReference.current, "keyboard"));
        }
    }, React.createElement(PageTabMenu, Object.assign({
        id: menuId,
        ref: refs.setFloating,
        style: floatingStyles,
        tabs: tabs,
        closeMenu: closeMenu
    }, getFloatingProps()))));
}
function PageTabPanel({ id, children }) {
    const { id: panelId } = usePageTabGroup();
    return React.createElement("div", {
        id: `${panelId}-panel-${id}`,
        className: "uxa-page-tab-panel",
        role: "tabpanel"
    }, children);
}
const PageTabGroup = forwardRef((_a, ref) => {
    var { selectedTab, size = "medium", onSelectedTabChange, onTabClose, level, children } = _a, props = __rest(_a, ["selectedTab", "size", "onSelectedTabChange", "onTabClose", "level", "children"]);
    const id = useUniqueId("uxa-tabset", props.id);
    const focusController = useRef(null);
    const tabListRef = useRef(null);
    const tabButtons = useRef(new Map());
    const [menuOpen, setMenuOpen] = useState(false);
    const tabs = useTabs(children);
    [selectedTab, onSelectedTabChange] = useControlled(selectedTab, onSelectedTabChange);
    const scrollTabIntoView = useCallback(tabId => {
        if (!tabListRef.current) {
            return;
        }
        // scroll the tab into view if needed
        const tab = tabButtons.current.get(tabId);
        if (!tab) {
            return;
        }
        // get the position of the tab within the tab list accounting for the current scroll offset
        const tabStart = tab.offsetLeft;
        const tabEnd = tabStart + tab.offsetWidth;
        // get the visible width of the tab list container
        const tabListWidth = tabListRef.current.offsetWidth;
        const tabListScrollLeft = tabListRef.current.scrollLeft;
        // calculate the scroll area for the tab container
        const containerEnd = tabListScrollLeft + tabListWidth;
        // check if the tab is fully visible
        if (tabStart < tabListScrollLeft || tabEnd > containerEnd) {
            let scrollTo = tabStart - 68; // give 68px before the tab
            // Ensure the tab is fully visible, including 68px space after
            if (tabEnd + 68 > containerEnd) {
                scrollTo = tabEnd + 68 - tabListWidth;
            }
            // Edge case: if the tab list container is smaller than the total width of tabs, align to start
            if (tabListWidth >= tabListRef.current.scrollWidth) {
                scrollTo = tabStart; // Align to start if there is no scrolling needed
            }
            // Adjust if the tab is before the start of the scrollable area
            if (tabStart < tabListScrollLeft) {
                scrollTo = tabStart - 68; // Scroll to before the tab, giving it extra space before
            }
            // Scroll to the calculated position, making sure the whole tab is visible
            tabListRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth"
            });
        }
    }, []);
    const selectTab = useCallback(tabId => {
        var _a;
        onSelectedTabChange(tabId);
        if (!tabId) {
            return;
        }
        scrollTabIntoView(tabId);
        // make sure the tab becomes the focusable tab
        (_a = focusController.current) === null || _a === void 0 ? void 0 : _a.setActiveItem(tabId);
    }, [onSelectedTabChange, scrollTabIntoView]);
    const ensureSelectedTab = useCallback(() => {
        var _a, _b;
        // if there are no tabs then ensure the menu is closed and return
        if (tabs.length === 0) {
            return selectTab(undefined);
        }
        // if there is no selected tab, select the first tab
        if (!selectedTab) {
            return selectTab((_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.props.id);
        }
        // if the selected tab no longer exists, select the first tab
        if (tabs.every(tab => tab.props.id !== selectedTab)) {
            return selectTab((_b = tabs[0]) === null || _b === void 0 ? void 0 : _b.props.id);
        }
    }, [selectTab, selectedTab, tabs]);
    const closeTab = useCallback(tabId => onTabClose === null || onTabClose === void 0 ? void 0 : onTabClose(tabId), [onTabClose]);
    const openMenu = useCallback(() => setMenuOpen(true), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const closeAllTabs = useCallback(() => {
        // close all tabs
        tabs.forEach(tab => onTabClose === null || onTabClose === void 0 ? void 0 : onTabClose(tab.props.id));
        closeMenu();
    }, [closeMenu, onTabClose, tabs]);
    // when the tab list is resized, ensure the selected tab is visible
    useResizeObserver(tabListRef, () => {
        if (selectedTab) {
            scrollTabIntoView(selectedTab);
        }
    });
    // when initialized, ensure we have a selected tab on init
    useEffect(ensureSelectedTab, [ensureSelectedTab]);
    return React.createElement(PageTabGroupProvider, {
        id: id,
        size: size,
        selectedTab: selectedTab,
        selectTab: selectTab,
        closeTab: closeTab,
        closeAllTabs: closeAllTabs,
        openMenu: openMenu,
        closeMenu: closeMenu,
        isMenuOpen: menuOpen
    }, React.createElement("div", Object.assign({
        ref: ref,
        id: id,
        "data-level": level
    }, mergeProps({
        className: "uxa-page-tab-group"
    }, props)), React.createElement("div", {
        className: "uxa-page-tab-group-header"
    }, React.createElement("div", {
        className: "uxa-page-tab-group-list-container"
    }, React.createElement(PageTabGroupList, {
        ref: tabListRef,
        controller: focusController
    }, tabs.map((tab, index) => {
        var _a;
        return React.createElement(PageTabButton, {
            key: index,
            ref: el => {
                if (el) {
                    tabButtons.current.set(tab.props.id, el);
                }
                else {
                    tabButtons.current.delete(tab.props.id);
                }
            },
            id: tab.props.id,
            label: tab.props.label,
            icon: tab.props.icon,
            isRemovable: (_a = tab.props.isRemovable) !== null && _a !== void 0 ? _a : true,
            "aria-posinset": index + 1,
            "aria-setsize": tabs.length
        });
    }))), React.createElement(PageTabOverflowButton, {
        tabs: tabs
    })), tabs.map((tab, index) => tab.props.id === selectedTab ? React.createElement(PageTabPanel, {
        key: index,
        id: tab.props.id,
        children: tab.props.children
    }) : null)));
});
/** Define the Prop Type information */
PageTabGroup.propTypes = {
    /** The selected tab */
    selectedTab: PropTypes__default.string,
    /** The size of the page tabs */
    size: PropTypes__default.oneOf(["small", "medium"]),
    /** The container level the tab is within */
    level: PropTypes__default.oneOf([0, 1]),
    /** Emit when the tab should be closed */
    onTabClose: PropTypes__default.func,
    /** Emit when a tab is selected */
    onSelectedTabChange: PropTypes__default.func
};
export { PageTab, PageTabGroup, PageTabMenu, PageTabsI18nContext, usePageTabsI18n };
