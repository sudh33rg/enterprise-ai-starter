import { _ as __rest } from "./_tslib.esm.js";
import clsx from "clsx";
import PropTypes__default from "prop-types";
import * as React from "react";
import { forwardRef, useContext, useCallback, useMemo } from "react";
import { s as styleInject } from "./style-inject.es.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { B as Button } from "./split-button-group.esm.js";
import "./reducer-provider.esm.js";
import { dX as SortDescendingIcon, dW as SortAscendingIcon } from "./zoom-out.esm2.js";
import { r as ArrowDownIcon, u as ArrowUpIcon } from "./zoom-out.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import { u as useThemeFamily } from "./use-active-theme.esm.js";
import "./prop-types.esm.js";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "./use-unique-id.esm.js";
var css_248z = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table {\n  display: table;\n  box-shadow: var(--uxa-table__box-shadow);\n  border: var(--uxa-table__border);\n  border-radius: var(--uxa-table__border-radius);\n  background-color: var(--uxa-table__background-color);\n  font-feature-settings: \"tnum\" 1;\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--1);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--1);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--1);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table.uxa-small,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table.uxa-small {\n  --uxa-table-row__height: var(--uxa-table-row__height--small);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table.uxa-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table.uxa-large {\n  --uxa-table-row__height: var(--uxa-table-row__height--large);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table.uxa-extra-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table.uxa-extra-large {\n  --uxa-table-row__height: var(--uxa-table-row__height--extralarge);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table.uxa-table-embedded,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table.uxa-table-embedded {\n  --uxa-table__border-radius: var(--uxa-table__border-radius--embedded);\n  --uxa-table__box-shadow: var(--uxa-table__box-shadow--embedded);\n  --uxa-table-header-cell__background-color: var(\n    --uxa-table-header-cell__background-color--embedded\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table.uxa-table-striped,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table.uxa-table-striped {\n  --uxa-table-cell__background-color--odd: var(--uxa-table-cell__background-color--odd-striped);\n  --uxa-table-cell__background-color--odd-hover: var(\n    --uxa-table-cell__background-color--odd-striped-hover\n  );\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-body,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-body {\n  display: table-row-group;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-header-cell,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-header-cell {\n  display: table-cell;\n  vertical-align: middle;\n  border-color: var(--uxa-table-header-cell__border-color);\n  border-style: var(--uxa-table-header-cell__border-style);\n  border-width: var(--uxa-table-header-cell__border-top-width) var(--uxa-table-header-cell__border-right-width) var(--uxa-table-header-cell__border-bottom-width) var(--uxa-table-header-cell__border-left-width);\n  padding-inline: var(--uxa-table-header-cell__padding-inline);\n  padding-block: var(--uxa-table-header-cell__padding-block);\n  font-family: var(--uxa-table-header-cell__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-table-header-cell__font-size);\n  font-weight: var(--uxa-table-header-cell__font-weight);\n  letter-spacing: var(--uxa-table-header-cell__letter-spacing);\n  line-height: var(--uxa-table-header-cell__line-height);\n  text-align: var(--uxa-table-header-cell__text-align);\n  color: var(--uxa-table-header-cell__color);\n  background: var(--uxa-table-header-cell__background-color);\n  box-sizing: var(--uxa-table-header-cell__box-sizing);\n  background-clip: padding-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-header-cell.uxa-align-center,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-header-cell.uxa-align-center {\n  --uxa-table-header-cell__text-align: center;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-header-cell.uxa-align-end,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-header-cell.uxa-align-end {\n  --uxa-table-header-cell__text-align: end;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-header-cell:has(> uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) .uxa-table-header-cell:has(> .uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-header-cell:has(> uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-header-cell:has(> .uxa-checkbox) {\n  --uxa-table-header-cell__line-height: var(--uxa-table-header-cell__line-height--checkbox);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-cell,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  border-color: var(--uxa-table-cell__border-color);\n  border-style: var(--uxa-table-cell__border-style);\n  border-width: var(--uxa-table-cell__border-top-width) var(--uxa-table-cell__border-right-width) var(--uxa-table-cell__border-bottom-width) var(--uxa-table-cell__border-left-width);\n  padding-inline: var(--uxa-table-cell__padding-inline);\n  padding-block: var(--uxa-table-cell__padding-block);\n  font-family: var(--uxa-table-cell__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-table-cell__font-size);\n  font-weight: var(--uxa-table-cell__font-weight);\n  letter-spacing: var(--uxa-table-cell__letter-spacing);\n  line-height: var(--uxa-table-cell__line-height);\n  text-align: var(--uxa-table-cell__text-align);\n  color: var(--uxa-table-cell__color);\n  background: var(--uxa-table-cell__background-color);\n  box-sizing: var(--uxa-table-cell__box-sizing);\n  background-clip: padding-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-cell.uxa-align-center,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-cell.uxa-align-center {\n  --uxa-table-cell__text-align: center;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-cell.uxa-align-end,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-cell.uxa-align-end {\n  --uxa-table-cell__text-align: end;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-cell:has(> uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) .uxa-table-cell:has(> .uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-cell:has(> uxa-checkbox), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-cell:has(> .uxa-checkbox) {\n  --uxa-table-cell__line-height: var(--uxa-table-cell__line-height--checkbox);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-sortable-header,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-sortable-header {\n  padding-inline: 0;\n  padding-block: 0;\n  width: auto;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-sortable-header.uxa-sorting,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-sortable-header.uxa-sorting {\n  --uxa-table-sort-toggle__font-weight: var(--uxa-table-sort-toggle__font-weight--sorting);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-sort-toggle {\n  width: 100%;\n  text-align: var(--uxa-table-header-cell__text-align);\n  letter-spacing: var(--uxa-table-header-cell__letter-spacing);\n  line-height: var(--uxa-table-header-cell__line-height);\n  --uxa-button__height--flat: var(--uxa-table-sort-toggle__height);\n  --uxa-button__padding-block--flat: var(--uxa-table-sort-toggle__padding-block);\n  --uxa-button__padding-inline--flat: var(--uxa-table-sort-toggle__padding-inline);\n  --uxa-button__font-size--flat: var(--uxa-table-sort-toggle__font-size);\n  --uxa-button__font-family--flat: var(\n    --uxa-table-sort-toggle__font-family,\n    var(--uxa-typography__font-family)\n  );\n  --uxa-button__font-weight--flat-secondary: var(--uxa-table-sort-toggle__font-weight);\n  --uxa-button__color--flat-secondary: var(--uxa-table-header-cell__color);\n  --uxa-button__background-color--flat-secondary: var(--uxa-table-sort-toggle__background-color);\n  --uxa-button__background-color--flat-secondary-active: var(\n    --uxa-table-sort-toggle__background-color--active\n  );\n  --uxa-button__background-color--flat-secondary-hover: var(\n    --uxa-table-sort-toggle__background-color--hover\n  );\n  --uxa-button__color--flat-secondary-focused: var(--uxa-button__color--flat-secondary);\n  --uxa-button__background-color--flat-secondary-focused: var(\n    --uxa-table-sort-toggle__background-color--focused\n  );\n  --uxa-button__border-radius--flat: var(--uxa-table-sort-toggle__border-radius);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-sort-icon {\n  --uxa-icon__fill: var(--uxa-table-sort-icon__color);\n  padding-inline: var(--uxa-table-sort-icon__padding-inline);\n  padding-block: var(--uxa-table-sort-icon__padding-block);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-sort-toggle-content {\n  display: flex;\n  align-items: center;\n  gap: var(--uxa-table-sort-toggle__column-gap);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row {\n  display: table-row;\n  height: var(--uxa-table-row__height);\n  box-sizing: border-box;\n  --uxa-checkbox-container__height: 100%;\n  --uxa-checkbox-container__padding-inline: 0;\n  --uxa-checkbox-container__background-color--hover: var(\n    --uxa-checkbox-container__background-color\n  );\n  --uxa-checkbox-container__background-color--active: var(\n    --uxa-checkbox-container__background-color\n  );\n  --uxa-checkbox-container__border-radius: var(--uxa-checkbox__border-radius);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:hover,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:hover {\n  --uxa-table-cell__background-color: var(--uxa-table-cell__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:hover:has(uxa-table-cell), :not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:hover:has(.uxa-table-cell), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:hover:has(uxa-table-cell), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:hover:has(.uxa-table-cell) {\n  --uxa-checkbox__background-color: var(--uxa-checkbox__background-color--hover);\n  --uxa-checkbox__border-color: var(--uxa-checkbox__border-color--hover);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row.uxa-focused {\n  outline: var(--uxa-table-row__outline--focused);\n  outline-offset: var(--uxa-table-row__outline-offset--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row.uxa-selected,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row.uxa-selected {\n  --uxa-table-cell__background-color: var(--uxa-table-cell__background-color--selected);\n  --uxa-table-cell__color: var(--uxa-table-cell__color--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:last-of-type,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:last-of-type {\n  --uxa-table-cell__border-bottom-width: var(--uxa-table-cell__border-bottom-width--last, 0);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:nth-child(odd):not(.uxa-selected):not(:hover),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:nth-child(odd):not(.uxa-selected):not(:hover) {\n  --uxa-table-cell__background-color: var(--uxa-table-cell__background-color--odd);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-row:nth-child(odd):not(.uxa-selected):hover,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-row:nth-child(odd):not(.uxa-selected):hover {\n  --uxa-table-cell__background-color: var(--uxa-table-cell__background-color--odd-hover);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-table-head,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-table-head {\n  display: table-header-group;\n  --uxa-table-row__height: var(--uxa-table-head-row__height);\n}";
styleInject(css_248z);
const Table = forwardRef((_a, ref) => {
    var { className, size = "medium", isEmbedded, isStriped, children } = _a, props = __rest(_a, ["className", "size", "isEmbedded", "isStriped", "children"]);
    return React.createElement("div", Object.assign({
        ref: ref,
        role: "table",
        className: clsx("uxa-table", {
            "uxa-small": size === "small",
            "uxa-large": size === "large",
            "uxa-extra-large": size === "extra-large",
            "uxa-table-embedded": isEmbedded,
            "uxa-table-striped": isStriped
        }, className)
    }, props), children);
});
Table.propTypes = {
    size: PropTypes__default.oneOf(["small", "medium", "large", "extra-large"]),
    isEmbedded: PropTypes__default.bool,
    isStriped: PropTypes__default.bool
};
const TableRegionContext = React.createContext({
    region: null
});
/**
 * This allows us to use a TableCell component in both the head and body
 * and it can adapt accordingly by knowing the region of the table it is in
 */
const TableRegion = ({ region, children }) => {
    return React.createElement(TableRegionContext.Provider, {
        value: {
            region
        }
    }, children);
};
const TableHead = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return React.createElement("div", Object.assign({
        ref: ref,
        role: "rowgroup",
        className: clsx("uxa-table-head", className)
    }, props), React.createElement(TableRegion, {
        region: "head"
    }, children));
});
const TableRow = forwardRef((_a, ref) => {
    var { isSelected, children } = _a, props = __rest(_a, ["isSelected", "children"]);
    const { region } = useContext(TableRegionContext);
    const { focusProps, isFocusVisible } = useFocusRing();
    const _b = mergeProps(focusProps, props), { className } = _b, mergedProps = __rest(_b, ["className"]);
    return React.createElement("div", Object.assign({
        ref: ref,
        role: "row",
        className: clsx("uxa-table-row", {
            "uxa-selected": isSelected && region === "body",
            "uxa-focused": isFocusVisible && region === "body"
        }, className)
    }, mergedProps), children);
});
TableRow.propTypes = {
    isSelected: PropTypes__default.bool
};
const TableCell = forwardRef((_a, ref) => {
    var { align } = _a, props = __rest(_a, ["align"]);
    const { region } = useContext(TableRegionContext);
    return React.createElement("div", Object.assign({
        ref: ref
    }, mergeProps({
        className: clsx("uxa-table-cell", {
            "uxa-align-center": align === "center",
            "uxa-align-end": align === "end"
        }),
        role: region === "head" ? "columnheader" : "cell"
    }, props)));
});
const TableBody = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return React.createElement("div", Object.assign({
        ref: ref,
        role: "rowgroup",
        className: clsx("uxa-table-body", className)
    }, props), React.createElement(TableRegion, {
        region: "body"
    }, children));
});
const TableHeaderCell = forwardRef((_a, ref) => {
    var { isSortable, sortDirection, onSortDirectionChange, align, children } = _a, props = __rest(_a, ["isSortable", "sortDirection", "onSortDirectionChange", "align", "children"]);
    const { isJato } = useThemeFamily();
    const changeDirection = useCallback(() => {
        if (!isSortable) {
            return;
        }
        let newDirection;
        switch (sortDirection) {
            case "ascending":
                newDirection = "descending";
                break;
            case "descending":
                newDirection = null;
                break;
            default:
                newDirection = "ascending";
                break;
        }
        onSortDirectionChange === null || onSortDirectionChange === void 0 ? void 0 : onSortDirectionChange(newDirection);
    }, [isSortable, sortDirection, onSortDirectionChange]);
    const icon = useMemo(() => {
        switch (sortDirection) {
            case "ascending":
                return isJato ? React.createElement(SortAscendingIcon, {
                    className: "uxa-table-sort-icon"
                }) : React.createElement(ArrowUpIcon, {
                    className: "uxa-table-sort-icon"
                });
            case "descending":
                return isJato ? React.createElement(SortDescendingIcon, {
                    className: "uxa-table-sort-icon"
                }) : React.createElement(ArrowDownIcon, {
                    className: "uxa-table-sort-icon"
                });
        }
        return undefined;
    }, [isJato, sortDirection]);
    return React.createElement("div", Object.assign({
        ref: ref
    }, mergeProps({
        role: "columnheader",
        className: clsx("uxa-table-header-cell", {
            "uxa-table-sortable-header": isSortable,
            "uxa-align-center": align === "center",
            "uxa-align-end": align === "end"
        }),
        onClick: changeDirection,
        "aria-sort": isSortable ? sortDirection !== null && sortDirection !== void 0 ? sortDirection : "none" : null
    }, props)), isSortable ? React.createElement(Button, {
        type: "button",
        flat: true,
        secondary: true,
        className: "uxa-table-sort-toggle"
    }, React.createElement("div", {
        className: "uxa-table-sort-toggle-content"
    }, children, icon)) : children);
});
export { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRegion, TableRegionContext, TableRow };
