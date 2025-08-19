import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import * as React from "react";
import { createContext, useCallback, useContext } from "react";
import clsx from "clsx";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
import { u as useControlled } from "./use-controllable.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { d as ChevronSmallDownIcon } from "./zoom-out.esm.js";
import { SPACE, ENTER } from "./keycodes.esm.js";
import "./prop-types.esm.js";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
var css_248z = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: block;\n  border-bottom: var(--uxa-accordion__border-width) var(--uxa-accordion__border-style) var(--uxa-accordion__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-accordion-leading-icon {\n  --uxa-accordion-icon__transform: rotate(-90deg);\n  --uxa-accordion-icon__transform--expanded: rotate(0deg);\n  --uxa-accordion-header__flex-direction: row-reverse;\n  --uxa-accordion-content__padding-inline: var(\n    --uxa-accordion-content__padding-inline--leading-icon\n  );\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-accordion,\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] :host,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-accordion,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) :host {\n  --uxa-accordion-icon__transform--expanded: rotate(180deg);\n}\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-accordion.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] :host.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-accordion.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) :host.uxa-accordion-leading-icon {\n  --uxa-accordion-icon__transform: rotate(90deg);\n  --uxa-accordion-icon__transform--expanded: rotate(0);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-accordion,\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] :host {\n  --uxa-accordion-icon__transform--expanded: rotate(180deg);\n}\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-accordion.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] :host.uxa-accordion-leading-icon {\n  --uxa-accordion-icon__transform: rotate(90deg);\n  --uxa-accordion-icon__transform--expanded: rotate(0);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-accordion,\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) :host {\n  --uxa-accordion-icon__transform--expanded: rotate(180deg);\n}\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-accordion.uxa-accordion-leading-icon,\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) :host.uxa-accordion-leading-icon {\n  --uxa-accordion-icon__transform: rotate(90deg);\n  --uxa-accordion-icon__transform--expanded: rotate(0);\n}\n\n/* Add focus outline and offset to an element */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-panel .uxa-accordion-content,\n:not(#\\9):not(#\\9):not(#\\9) :host .uxa-accordion-content {\n  display: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-panel.uxa-expanded > .uxa-accordion-content,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-expanded > .uxa-accordion-content {\n  display: block;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-content {\n  font-family: var(--uxa-typography-body__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body__font-weight);\n  font-size: var(--uxa-typography-body__font-size);\n  text-transform: var(--uxa-typography-body__text-transform);\n  color: var(--uxa-typography-body__color);\n  line-height: var(--uxa-typography-body__line-height);\n  padding-block: var(--uxa-accordion-content__padding-block);\n  padding-inline: var(--uxa-accordion-content__padding-inline);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: flex;\n  align-items: center;\n  flex-direction: var(--uxa-accordion-header__flex-direction, row);\n  gap: var(--uxa-accordion-header__gap);\n  font-family: var(--uxa-accordion-header__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-accordion-header__font-weight);\n  font-size: var(--uxa-accordion-header__font-size);\n  color: var(--uxa-accordion-header__color);\n  background-color: var(--uxa-accordion-header__background-color);\n  border-top: var(--uxa-accordion-header__border-top-width) var(--uxa-accordion-header__border-top-style) var(--uxa-accordion-header__border-top-color);\n  padding-inline: var(--uxa-accordion-header__padding-inline);\n  padding-block: var(--uxa-accordion-header__padding-block);\n  cursor: pointer;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused {\n  z-index: 1;\n  outline-offset: var(--uxa-accordion-header__focus-outline--offset);\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header:hover,\n:not(#\\9):not(#\\9):not(#\\9) :host:hover {\n  --uxa-accordion-header__background-color: var(--uxa-accordion-header__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header.uxa-expanded,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-expanded {\n  --uxa-accordion-icon__transform: var(--uxa-accordion-icon__transform--expanded);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-header-content {\n  flex: 1;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-accordion-icon {\n  flex: none;\n  height: var(--uxa-accordion-icon__height);\n  transform: var(--uxa-accordion-icon__transform);\n  --uxa-icon__size: var(--uxa-accordion-icon__size);\n  --uxa-icon__fill: var(--uxa-accordion-icon__fill);\n}";
styleInject(css_248z);
const AccordionContext = createContext(null);
const Accordion = _a => {
    var { iconAlign = "end", id, children } = _a, props = __rest(_a, ["iconAlign", "id", "children"]);
    const uniqueId = useUniqueId("uxa-accordion");
    id = id !== null && id !== void 0 ? id : uniqueId;
    return React.createElement(AccordionContext.Provider, {
        value: {
            id
        }
    }, React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-accordion", {
            "uxa-accordion-leading-icon": iconAlign === "start"
        }),
        id
    }, props)), children));
};
Accordion.propTypes = {
    /** Whether the chevron should appear at the start or the end of the panel header. */
    iconAlign: PropTypes__default.oneOf(["start", "end"])
};
const AccordionPanelHeader = ({ id, contentId, isExpanded, onExpandedChange, children }) => {
    const { focusProps, isFocusVisible } = useFocusRing();
    const handleClick = useCallback(() => {
        onExpandedChange === null || onExpandedChange === void 0 ? void 0 : onExpandedChange(!isExpanded);
    }, [onExpandedChange, isExpanded]);
    const handleKeyDown = useCallback(event => {
        if (event.keyCode === SPACE || event.keyCode === ENTER) {
            onExpandedChange === null || onExpandedChange === void 0 ? void 0 : onExpandedChange(!isExpanded);
            event.preventDefault();
        }
    }, [onExpandedChange, isExpanded]);
    return React.createElement("div", Object.assign({
        className: clsx("uxa-accordion-header", {
            "uxa-focused": isFocusVisible,
            "uxa-expanded": isExpanded
        }),
        role: "button",
        id: id,
        tabIndex: 0,
        "aria-controls": contentId,
        "aria-expanded": isExpanded,
        onClick: handleClick,
        onKeyDown: handleKeyDown
    }, focusProps), React.createElement("span", {
        className: "uxa-accordion-header-content"
    }, children), React.createElement("div", {
        className: "uxa-accordion-icon"
    }, React.createElement(ChevronSmallDownIcon, null)));
};
function useAccordion() {
    return useContext(AccordionContext);
}
function useAccordionPanel({ isExpanded, onExpandedChange }) {
    const { id } = useAccordion();
    const headerId = useUniqueId(id + "-header");
    const contentId = useUniqueId(id + "-content");
    const expandedChange = useCallback(expandedState => {
        if (isExpanded !== expandedState) {
            onExpandedChange === null || onExpandedChange === void 0 ? void 0 : onExpandedChange(expandedState);
        }
    }, [onExpandedChange, isExpanded]);
    return {
        panelHeaderProps: {
            id: headerId,
            contentId: contentId,
            isExpanded: isExpanded,
            onExpandedChange: expandedChange
        },
        panelContentProps: {
            id: contentId,
            "aria-labelledby": headerId,
            role: "region"
        }
    };
}
const AccordionPanel = _a => {
    var { header, isExpanded, onExpandedChange, children, defaultExpanded = false } = _a, props = __rest(_a, ["header", "isExpanded", "onExpandedChange", "children", "defaultExpanded"]);
    [isExpanded, onExpandedChange] = useControlled(isExpanded, onExpandedChange, defaultExpanded);
    const { panelHeaderProps, panelContentProps } = useAccordionPanel({
        isExpanded,
        onExpandedChange
    });
    return React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-accordion-panel", {
            "uxa-expanded": isExpanded
        })
    }, props)), React.createElement(AccordionPanelHeader, Object.assign({}, panelHeaderProps), header), React.createElement("div", Object.assign({
        className: "uxa-accordion-content"
    }, panelContentProps), children));
};
AccordionPanel.propTypes = {
    /** Content to display as the accordion panel header. */
    header: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
    /** Whether the content panel is visible. */
    isExpanded: PropTypes__default.bool,
    /** Emits when the user changes the expanded state of the content panel. */
    onExpandedChange: PropTypes__default.func,
    /** Whether the content panel is visible by default. */
    defaultExpanded: PropTypes__default.bool
};
export { Accordion, AccordionPanel };
