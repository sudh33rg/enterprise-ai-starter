import { _ as __rest } from "./_tslib.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps, mergeRefs } from "@react-aria/utils";
import clsx from "clsx";
import PropTypes__default from "prop-types";
import * as React from "react";
import { forwardRef, useCallback, useRef, useState } from "react";
import { aw as CloseSmallIcon, av as CloseExtraSmallIcon } from "./zoom-out.esm.js";
import "./reducer-provider.esm.js";
import { c as createContext } from "./context.esm.js";
import { s as styleInject } from "./style-inject.es.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import { b as useThemeHasColor, c as useWarnIfColorNotDefined, a as useThemeColorContrast, u as useThemeColor } from "./use-theme-color.esm.js";
import { c as FocusKeyManager, f as focusWithModality } from "./focus-key-manager.esm.js";
import { b as useTabbable } from "./use-tabbable.esm.js";
import { an as CloseExtraSmallIcon$1, ak as ChevronSmallUpIcon, ah as ChevronSmallDownIcon } from "./zoom-out.esm2.js";
import { u as useControlled } from "./use-controllable.esm.js";
import { u as usePropEffect } from "./use-prop-effect.esm.js";
import { a as useResizeObserver } from "./use-resize-observer.esm.js";
import { flushSync } from "react-dom";
import "./prop-types.esm.js";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "./use-unique-id.esm.js";
import "@react-aria/interactions";
const [ChipProvider, useChipContext] = createContext({
    isDisabled: false
});
const ChipRemoveButton = ({ size, onRemove }) => {
    const { isDisabled } = useChipContext();
    return React.createElement("div", {
        className: clsx("uxa-chip-remove-container", {
            "uxa-disabled": isDisabled
        }),
        onClick: event => {
            onRemove === null || onRemove === void 0 ? void 0 : onRemove("pointer");
            event.stopPropagation();
        },
        onKeyDown: event => {
            if (event.key === "Enter" || event.key === " ") {
                onRemove === null || onRemove === void 0 ? void 0 : onRemove("keyboard");
            }
        }
    }, React.createElement("span", {
        className: "uxa-chip-remove",
        tabIndex: isDisabled ? -1 : 0
    }, size === "large" ? React.createElement(CloseSmallIcon, {
        "aria-hidden": true
    }) : React.createElement(CloseExtraSmallIcon, {
        "aria-hidden": true
    })));
};
var css_248z$3 = "/* Add focus outline and offset to an element */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n  align-items: center;\n  height: var(--uxa-chip__height);\n  border: var(--uxa-chip__border-width) var(--uxa-chip__border-style) var(--uxa-chip__border-color);\n  border-radius: var(--uxa-chip__border-radius);\n  padding-inline-start: var(--uxa-chip__padding-inline-start);\n  padding-inline-end: var(--uxa-chip__padding-inline-end);\n  color: var(--uxa-chip__color);\n  background-color: var(--uxa-chip__background-color);\n  font-family: var(--uxa-chip__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-chip__font-size);\n  font-weight: var(--uxa-chip__font-weight);\n  cursor: var(--uxa-chip__cursor);\n  box-sizing: border-box;\n  white-space: var(--uxa-chip__white-space, normal);\n  box-shadow: var(--uxa-chip__box-shadow);\n  transition: var(--uxa-chip__transition);\n  --uxa-icon__size: 16px;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused {\n  box-shadow: var(--uxa-chip__box-shadow--focused);\n  z-index: 1;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-large {\n  --uxa-chip__font-size: var(--uxa-chip__font-size--large);\n  --uxa-chip__padding-inline-start: var(--uxa-chip__padding-inline-start--large);\n  --uxa-chip__padding-inline-end: var(--uxa-chip__padding-inline-end--large);\n  --uxa-chip__height: var(--uxa-chip__height--large);\n  --uxa-chip-color-tag__size: var(--uxa-chip-color-tag__size--large);\n  --uxa-chip-avatar__size: var(--uxa-chip-avatar__size--large);\n  --uxa-chip-avatar__font-size: var(--uxa-chip-avatar__font-size--large);\n  --uxa-chip-avatar__margin-start: var(--uxa-chip-avatar__margin-start--large);\n  --uxa-chip-remove-container__width: var(--uxa-chip-remove-container__width--large);\n  --uxa-chip-remove-container__padding-inline-end: var(\n    --uxa-chip-remove-container__padding-inline-end--large\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-removable,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-removable {\n  --uxa-chip__padding-inline-end: var(--uxa-chip__padding-inline-end--removable);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-removable:hover:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-removable:hover:not(.uxa-disabled) {\n  --uxa-chip__background-color: var(--uxa-chip__background-color--removable-hover);\n  --uxa-chip__border-color: var(--uxa-chip__border-color--removable-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-removable:active:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-removable:active:not(.uxa-disabled) {\n  --uxa-chip__background-color: var(--uxa-chip__background-color--removable-active);\n  --uxa-chip__border-color: var(--uxa-chip__border-color--removable-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selectable,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selectable {\n  cursor: var(--uxa-chip__cursor--selectable);\n  box-shadow: var(--uxa-chip__box-shadow--selectable);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selectable:hover:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selectable:hover:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)) {\n  background-color: var(--uxa-chip__background-color--selectable-hover);\n  border-color: var(--uxa-chip__border-color--selectable-hover);\n  box-shadow: var(--uxa-chip__box-shadow--selectable-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selectable:active:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:active)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selectable:active:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:active)) {\n  background-color: var(--uxa-chip__background-color--selectable-active);\n  border-color: var(--uxa-chip__border-color--selectable-active);\n  box-shadow: var(--uxa-chip__box-shadow--selectable-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selectable.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selectable.uxa-focused {\n  box-shadow: var(--uxa-chip__box-shadow--selectable-focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selected.uxa-selectable,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected.uxa-selectable {\n  background-color: var(--uxa-chip__background-color--selected);\n  color: var(--uxa-chip__color--selected);\n  border-color: var(--uxa-chip__border-color--selected);\n  --uxa-chip-remove__background-color--hover: var(\n    --uxa-chip-remove__background-color--selected-hover\n  );\n  --uxa-chip-remove__color--hover: var(--uxa-chip-remove__color--selected-hover);\n  box-shadow: var(--uxa-chip__box-shadow--selected);\n  font-weight: var(--uxa-chip__font-weight--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selected.uxa-selectable:hover:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected.uxa-selectable:hover:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)) {\n  background-color: var(--uxa-chip__background-color--selected-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selected.uxa-selectable:hover:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected.uxa-selectable:hover:not(.uxa-disabled) {\n  box-shadow: var(--uxa-chip__box-shadow--selected-hover);\n  border-color: var(--uxa-chip__border-color--selected-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selected.uxa-selectable:active:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected.uxa-selectable:active:not(.uxa-disabled):not(:has(.uxa-chip-remove-container:hover)) {\n  background-color: var(--uxa-chip__background-color--selected-active);\n  border-color: var(--uxa-chip__border-color--selected-active);\n  box-shadow: var(--uxa-chip__box-shadow--selected-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-selected.uxa-selectable.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected.uxa-selectable.uxa-focused {\n  box-shadow: var(--uxa-chip__box-shadow--selected-focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-readonly,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-readonly {\n  background: var(--uxa-chip__background-color--readonly);\n  border-color: var(--uxa-chip__border-color--readonly);\n  box-shadow: var(--uxa-chip__box-shadow--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled {\n  background: var(--uxa-chip__background-color--disabled);\n  border-color: var(--uxa-chip__border-color--disabled);\n  color: var(--uxa-chip__color--disabled);\n  box-shadow: var(--uxa-chip__box-shadow--disabled);\n  --uxa-chip-color-tag__opacity: var(--uxa-chip-color-tag__opacity--disabled);\n  --uxa-chip-avatar__opacity: var(--uxa-chip-avatar__opacity--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.uxa-disabled .uxa-chip-remove-container,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled .uxa-chip-remove-container {\n  pointer-events: none;\n  --uxa-chip-remove__color: var(--uxa-chip-remove__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip.cdk-drag-preview, :not(#\\9):not(#\\9):not(#\\9) .uxa-chip[data-dragging=true], :not(#\\9):not(#\\9):not(#\\9) :host.cdk-drag-preview, :not(#\\9):not(#\\9):not(#\\9) :host[data-dragging=true] {\n  background-color: var(--uxa-chip__background-color--dragging);\n  border-color: var(--uxa-chip__border-color--dragging);\n  border-width: var(--uxa-chip__border-width--dragging);\n  box-shadow: var(--uxa-chip__box-shadow--dragging);\n  z-index: 1;\n  cursor: grabbing;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-content-container {\n  -moz-column-gap: var(--uxa-chip-content-container__column-gap);\n       column-gap: var(--uxa-chip-content-container__column-gap);\n  line-height: var(--uxa-chip-content-container__line-height);\n  display: flex;\n  align-items: center;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-remove-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  width: var(--uxa-chip-remove-container__width);\n  height: var(--uxa-chip-remove-container__height);\n  padding-inline-end: var(--uxa-chip-remove-container__padding-inline-end);\n  cursor: pointer;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-remove-container:hover {\n  --uxa-chip-remove__background-color: var(--uxa-chip-remove__background-color--hover);\n  --uxa-chip-remove__color: var(--uxa-chip-remove__color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-remove-container:active {\n  --uxa-chip-remove__background-color: var(--uxa-chip-remove__background-color--active);\n  --uxa-chip-remove__color: var(--uxa-chip-remove__color--active);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-remove {\n  --uxa-icon__size: var(--uxa-chip-remove-icon__size);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-chip-remove__size);\n  height: var(--uxa-chip-remove__size);\n  border: var(--uxa-chip-remove__border);\n  border-radius: var(--uxa-chip-remove__border-radius);\n  background-color: var(--uxa-chip-remove__background-color);\n  color: var(--uxa-chip-remove__color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-remove:focus-visible {\n  outline: none;\n  box-shadow: var(--uxa-chip-remove__box-shadow--focused);\n}";
styleInject(css_248z$3);
const Chip = forwardRef((_a, ref) => {
    var { size = "large", isSelectable, isSelected, onSelectedChange, isRemovable, onRemove, isDisabled, isReadonly, children, icon } = _a, htmlProps = __rest(_a, ["size", "isSelectable", "isSelected", "onSelectedChange", "isRemovable", "onRemove", "isDisabled", "isReadonly", "children", "icon"]);
    const { isFocusVisible, focusProps } = useFocusRing();
    const canSelect = isSelectable && !isDisabled && !isReadonly;
    const canRemove = isRemovable && !isDisabled && !isReadonly;
    const toggleSelection = useCallback(() => {
        if (canSelect) {
            onSelectedChange === null || onSelectedChange === void 0 ? void 0 : onSelectedChange(!isSelected);
        }
    }, [canSelect, onSelectedChange, isSelected]);
    const remove = useCallback(modality => {
        if (canRemove) {
            onRemove === null || onRemove === void 0 ? void 0 : onRemove(modality);
        }
    }, [canRemove, onRemove]);
    return React.createElement(ChipProvider, {
        isDisabled: isDisabled
    }, React.createElement("span", Object.assign({
        ref: ref
    }, mergeProps({
        className: clsx("uxa-chip", {
            "uxa-focused": isFocusVisible,
            "uxa-removable": isRemovable,
            "uxa-large": size === "large",
            "uxa-selectable": isSelectable,
            "uxa-selected": isSelected && isSelectable,
            "uxa-disabled": isDisabled,
            "uxa-readonly": isReadonly
        }),
        role: isSelectable ? "button" : undefined,
        "aria-pressed": isSelectable ? isSelected : undefined,
        tabIndex: 0,
        onClick: toggleSelection,
        onKeyDown: event => {
            if (event.key === "Backspace" || event.key === "Delete") {
                remove("keyboard");
            }
            if (event.key === "Enter" || event.key === " ") {
                toggleSelection();
                event.preventDefault();
            }
        }
    }, focusProps, htmlProps)), React.createElement("div", {
        className: "uxa-chip-content-container"
    }, icon, children), isRemovable && !isReadonly && React.createElement(ChipRemoveButton, {
        size: size,
        onRemove: remove
    })));
});
/** Define the Prop Type information */
Chip.propTypes = {
    /** Whether the chip can be removed. */
    isRemovable: PropTypes__default.bool,
    /** Emitted when the user removes the chip. */
    onRemove: PropTypes__default.func,
    /** Whether the chip can be selected. */
    isSelectable: PropTypes__default.bool,
    /** Whether the chip is selected. */
    isSelected: PropTypes__default.bool,
    /** Emitted when the user selects the chip. */
    onSelectedChange: PropTypes__default.func,
    /** The size of the chip. */
    size: PropTypes__default.oneOf(["medium", "large"]),
    /** Icon, avatar or color tag to display in the chip. */
    icon: PropTypes__default.element
};
var css_248z$2 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-chip-avatar,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-chip-avatar__size);\n  height: var(--uxa-chip-avatar__size);\n  border-radius: var(--uxa-chip-avatar__border-radius);\n  font-family: var(--uxa-chip-avatar__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-chip-avatar__font-weight);\n  font-size: var(--uxa-chip-avatar__font-size);\n  text-align: var(--uxa-chip-avatar__text-align);\n  margin-inline-start: var(--uxa-chip-avatar__margin-start);\n  background-repeat: no-repeat;\n  background-size: var(--uxa-chip-avatar__background-size);\n  opacity: var(--uxa-chip-avatar__opacity);\n  box-shadow: var(--uxa-chip-avatar__box-shadow);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-avatar.uxa-chip-avatar-image,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-chip-avatar-image {\n  box-shadow: var(--uxa-chip-avatar-image__box-shadow);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-avatar.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled {\n  background-color: var(--uxa-chip-avatar__background-color--disabled);\n}";
styleInject(css_248z$2);
const ChipAvatar = forwardRef((_a, ref) => {
    var { image, color } = _a, htmlProps = __rest(_a, ["image", "color"]);
    const { isDisabled } = useChipContext();
    const backgroundColor = useThemeColor(color);
    const foregroundColor = useThemeColorContrast(color);
    const backgroundColorExists = useThemeHasColor(backgroundColor);
    const foregroundColorExists = useThemeHasColor(foregroundColor);
    // warn the user if the color they have specified does not exist in the theme
    useWarnIfColorNotDefined(backgroundColor);
    const backgroundColorValue = backgroundColorExists ? `var(${backgroundColor})` : "black";
    const foregroundColorValue = foregroundColorExists ? `var(${foregroundColor})` : "white";
    return React.createElement("span", Object.assign({
        ref: ref
    }, mergeProps({
        role: "presentation",
        className: clsx("uxa-chip-avatar", {
            "uxa-chip-avatar-image": Boolean(image),
            "uxa-disabled": isDisabled
        }),
        style: {
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundColor: !image && !isDisabled ? backgroundColorValue : undefined,
            color: !image ? foregroundColorValue : undefined
        }
    }, htmlProps)));
});
/** Define the Prop Type information */
ChipAvatar.propTypes = {
    /** The image to display in the avatar. */
    image: PropTypes__default.string,
    /** Background color of the avatar when there is no image. This should be the name of a color from the color palette. */
    color: PropTypes__default.string
};
var css_248z$1 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-chip-color-tag,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  width: var(--uxa-chip-color-tag__size);\n  height: var(--uxa-chip-color-tag__size);\n  border-radius: var(--uxa-chip-color-tag__border-radius);\n  opacity: var(--uxa-chip-color-tag__opacity);\n  box-shadow: var(--uxa-chip-color-tag__box-shadow);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-color-tag.uxa-status-success,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-status-success {\n  background-color: var(--uxa-color__status-success);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-color-tag.uxa-status-warning,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-status-warning {\n  background-color: var(--uxa-color__status-warning);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-color-tag.uxa-status-error,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-status-error {\n  background-color: var(--uxa-color__status-error);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-chip-color-tag.uxa-status-info,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-status-info {\n  background-color: var(--uxa-color__status-info);\n}";
styleInject(css_248z$1);
const ChipColorTag = forwardRef((_a, ref) => {
    var { color = "error" } = _a, htmlProps = __rest(_a, ["color"]);
    const isColorStatus = ["warning", "success", "info", "error"].includes(color);
    return React.createElement("span", Object.assign({
        ref: ref
    }, mergeProps({
        role: "presentation",
        className: clsx("uxa-chip-color-tag", isColorStatus ? `uxa-status-${color}` : null),
        style: {
            backgroundColor: !isColorStatus ? color : null
        }
    }, htmlProps)));
});
/** Define the Prop Type information */
ChipColorTag.propTypes = {
    /** The color of the tag. */
    color: PropTypes__default.oneOfType([PropTypes__default.oneOf(["error", "warning", "success", "info"]), PropTypes__default.string])
};
var css_248z = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip {\n  display: inline-grid;\n  grid-template-columns: var(--uxa-multi-value-chip__grid-template-columns);\n  grid-template-rows: var(--uxa-multi-value-chip__grid-template-rows);\n  background: var(--uxa-multi-value-chip__background);\n  border-width: var(--uxa-multi-value-chip__border-width);\n  border-style: var(--uxa-multi-value-chip__border-style);\n  border-color: var(--uxa-multi-value-chip__border-color);\n  box-shadow: var(--uxa-multi-value-chip__box-shadow);\n  padding-inline: var(--uxa-multi-value-chip__padding-inline);\n  border-radius: var(--uxa-multi-value-chip__border-radius);\n  height: var(--uxa-multi-value-chip__height);\n  gap: var(--uxa-multi-value-chip__gap);\n  cursor: var(--uxa-multi-value-chip__cursor);\n  transition: var(--uxa-multi-value-chip__transition);\n  transition-timing-function: var(--uxa-multi-value-chip__transition-timing-function);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover:not(.uxa-disabled):not(.uxa-expanded),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip:hover:not(.uxa-disabled):not(.uxa-expanded) {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background--hover);\n  --uxa-multi-value-chip__border-color: var(--uxa-multi-value-chip__border-color--hover);\n  --uxa-multi-value-chip__box-shadow: var(--uxa-multi-value-chip__box-shadow--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:hover:not(.uxa-disabled).uxa-expanded,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip:hover:not(.uxa-disabled).uxa-expanded {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background);\n  --uxa-multi-value-chip__border-color: var(--uxa-multi-value-chip__border-color--expanded-hover);\n  --uxa-multi-value-chip__box-shadow: var(--uxa-multi-value-chip__box-shadow--expanded-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-disabled):not(.uxa-expanded),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip:active:not(.uxa-disabled):not(.uxa-expanded) {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background--active);\n  --uxa-multi-value-chip__border-color: var(--uxa-multi-value-chip__border-color--active);\n  --uxa-multi-value-chip__box-shadow: var(--uxa-multi-value-chip__box-shadow--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-disabled).uxa-expanded,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip:active:not(.uxa-disabled).uxa-expanded {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background);\n  --uxa-multi-value-chip__border-color: var(\n    --uxa-multi-value-chip__border-color--expanded-active\n  );\n  --uxa-multi-value-chip__box-shadow: var(--uxa-multi-value-chip__box-shadow--expanded-active);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:focus,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-focused {\n  outline: var(--uxa-multi-value-chip__outline--focus);\n  outline-offset: var(--uxa-multi-value-chip__outline-offset--focus);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-disabled {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background--disabled);\n  --uxa-multi-value-chip__border-color: var(--uxa-multi-value-chip__border-color--disabled);\n  --uxa-multi-value-chip__box-shadow: var(--uxa-multi-value-chip__box-shadow--disabled);\n  --uxa-multi-value-chip-label__color: var(--uxa-multi-value-chip-label__color--disabled);\n  --uxa-multi-value-chip-button__color: var(--uxa-multi-value-chip-button__color--disabled);\n  --uxa-multi-value-chips__color: var(--uxa-multi-value-chips__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-readonly.uxa-expanded .uxa-multi-value-chip-label,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-readonly.uxa-expanded .uxa-multi-value-chip-label {\n  --uxa-multi-value-chip-label__color: var(--uxa-multi-value-chip-label__color--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-readonly:not(.uxa-expanded),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-readonly:not(.uxa-expanded) {\n  --uxa-multi-value-chip__background: var(--uxa-multi-value-chip__background--readonly);\n  --uxa-multi-value-chip__border-color: var(--uxa-multi-value-chip__border-color--readonly);\n  --uxa-multi-value-chip__background--hover: var(\n    --uxa-multi-value-chip__background--readonly-hover\n  );\n  --uxa-multi-value-chip__border-color--hover: var(\n    --uxa-multi-value-chip__border-color--readonly-hover\n  );\n  --uxa-multi-value-chip__background--active: var(\n    --uxa-multi-value-chip__background--readonly-active\n  );\n  --uxa-multi-value-chip__border-color--active: var(\n    --uxa-multi-value-chip__border-color--readonly-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-expanded,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-expanded {\n  --uxa-multi-value-chip__height: var(--uxa-multi-value-chip__height--expanded);\n  --uxa-multi-value-chip__grid-template-rows: var(\n    --uxa-multi-value-chip__grid-template-rows--expanded\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-expanded .uxa-multi-value-chip-actions,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip.uxa-expanded .uxa-multi-value-chip-actions {\n  grid-row: 1/3;\n  align-items: end;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-overview {\n  display: flex;\n  gap: var(--uxa-multi-value-chip-overview__gap);\n  flex: 1;\n  overflow: hidden;\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-actions {\n  display: flex;\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-label {\n  font-weight: var(--uxa-multi-value-chip-label__font-weight);\n  font-size: var(--uxa-multi-value-chip-label__font-size);\n  line-height: var(--uxa-multi-value-chip-label__line-height);\n  color: var(--uxa-multi-value-chip-label__color);\n  margin-block: var(--uxa-multi-value-chip-label__margin-block);\n  white-space: var(--uxa-multi-value-chip-label__white-space);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--uxa-multi-value-chip-list__gap);\n  padding-block-end: var(--uxa-multi-value-chip-list__padding-block-end);\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-button {\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--uxa-multi-value-chip-button__width);\n  height: var(--uxa-multi-value-chip-button__height);\n  border-radius: var(--uxa-multi-value-chip-button__border-radius);\n  box-sizing: border-box;\n  margin-block: var(--uxa-multi-value-chip-button__margin-block);\n  font-size: var(--uxa-multi-value-chip-button__font-size);\n  color: var(--uxa-multi-value-chip-button__color);\n  background: var(--uxa-multi-value-chip-button__background);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-button:hover:not([disabled]) {\n  cursor: pointer;\n  --uxa-multi-value-chip-button__background: var(\n    --uxa-multi-value-chip-button__background--hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-button:active:not([disabled]) {\n  --uxa-multi-value-chip-button__background: var(\n    --uxa-multi-value-chip-button__background--active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-button:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chip-button:focus-visible {\n  box-shadow: var(--uxa-multi-value-chip-button__box-shadow--focus);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-multi-value-chips {\n  color: var(--uxa-multi-value-chips__color);\n  font-size: var(--uxa-multi-value-chips__font-size);\n  line-height: var(--uxa-multi-value-chips__line-height);\n  font-weight: var(--uxa-multi-value-chips__font-weight);\n  margin-block: var(--uxa-multi-value-chips__margin-block);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}";
styleInject(css_248z);
const MultiValueChip = forwardRef((_a, ref) => {
    var { label, isExpanded, values = [], isReadonly, isDisabled, onExpandedChange, onValuesChange } = _a, props = __rest(_a, ["label", "isExpanded", "values", "isReadonly", "isDisabled", "onExpandedChange", "onValuesChange"]);
    const containerRef = useRef(null);
    const valuesRef = useRef(null);
    const isResizing = useRef(false);
    const { isFocusVisible, focusProps } = useFocusRing();
    const [visibleValues, setVisibleValues] = useState(values);
    // ensure that the expanded state is controlled
    [isExpanded, onExpandedChange] = useControlled(isExpanded, onExpandedChange, false);
    const hiddenCount = values.length - visibleValues.length;
    const showExpanded = isExpanded && values.length > 1 && !isDisabled;
    const onKeyDown = event => {
        if (isDisabled) {
            return;
        }
        if (event.key === "Enter") {
            expand("keyboard");
        }
        else if (event.key === "Escape") {
            collapse("keyboard");
        }
        else if (event.key === "Backspace") {
            // if there is only a single value, remove it
            if (values.length === 1) {
                clear();
            }
        }
    };
    const expand = (modality = "pointer") => {
        var _a;
        if (isDisabled || isExpanded || values.length <= 0) {
            return;
        }
        flushSync(() => onExpandedChange === null || onExpandedChange === void 0 ? void 0 : onExpandedChange(true));
        const chips = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".uxa-chip");
        if (chips && chips.length > 0 && !isReadonly) {
            focusWithModality(chips[0], modality);
        }
    };
    const collapse = (modality = "pointer") => {
        if (isDisabled || !isExpanded) {
            return;
        }
        onExpandedChange === null || onExpandedChange === void 0 ? void 0 : onExpandedChange(false);
        if (containerRef.current) {
            focusWithModality(containerRef.current, modality);
        }
    };
    const removeValuesUntilFit = useCallback(() => {
        if (!valuesRef.current || isResizing.current) {
            return;
        }
        isResizing.current = true;
        // start with every value visible
        flushSync(() => setVisibleValues(values));
        while (visibleValues.length > 1 && valuesRef.current.scrollWidth > valuesRef.current.clientWidth) {
            flushSync(() => setVisibleValues(v => v.slice(0, -1)));
        }
        isResizing.current = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);
    // whenever the container is resized, remove values until they fit
    useResizeObserver(containerRef, removeValuesUntilFit);
    const remove = (modality, value) => {
        const index = values.indexOf(value);
        const newValues = values.filter((_, i) => i !== index);
        onValuesChange === null || onValuesChange === void 0 ? void 0 : onValuesChange(newValues);
        if (newValues.length <= 1) {
            collapse(modality);
        }
    };
    const clear = () => {
        onValuesChange === null || onValuesChange === void 0 ? void 0 : onValuesChange([]);
    };
    const toggle = () => {
        isExpanded ? collapse() : expand();
    };
    // whenever the values change, we must update the visible values to ensure they contain no values that have been removed
    // and include any new values that have been added
    usePropEffect(values, () => {
        // we must do this asynchronously otherwise react will complain we are flushing during render
        requestAnimationFrame(() => removeValuesUntilFit());
    });
    return React.createElement("div", Object.assign({
        ref: mergeRefs(containerRef, ref)
    }, mergeProps({
        className: clsx("uxa-multi-value-chip", {
            "uxa-expanded": showExpanded,
            "uxa-disabled": isDisabled,
            "uxa-readonly": isReadonly,
            "uxa-focused": isFocusVisible
        }),
        tabIndex: isDisabled ? -1 : 0,
        onKeyDown,
        onClick: () => toggle()
    }, focusProps, props)), React.createElement("div", {
        className: "uxa-multi-value-chip-overview"
    }, React.createElement("span", {
        className: "uxa-multi-value-chip-label"
    }, label, ":"), !showExpanded && React.createElement("span", {
        ref: valuesRef,
        className: "uxa-multi-value-chips"
    }, hiddenCount > 0 ? [...visibleValues, `+${hiddenCount}`].join("; ") : visibleValues.join("; "))), showExpanded && React.createElement("div", {
        className: "uxa-multi-value-chip-list"
    }, React.createElement(FocusKeyManager, {
        orientation: "horizontal"
    }, values.map((value, index) => React.createElement(TabbableChip, {
        key: index,
        size: "medium",
        isReadonly: isReadonly,
        isRemovable: !isReadonly,
        isDisabled: isDisabled,
        onRemove: modality => remove(modality, value),
        onClick: e => e.stopPropagation()
    }, value)))), React.createElement("div", {
        className: "uxa-multi-value-chip-actions"
    }, values.length === 1 && React.createElement("button", {
        className: "uxa-multi-value-chip-button",
        onClick: clear,
        disabled: isDisabled,
        "aria-hidden": true
    }, React.createElement(CloseExtraSmallIcon$1, null)), values.length > 1 && React.createElement("button", Object.assign({
        className: "uxa-multi-value-chip-button",
        tabIndex: -1,
        disabled: isDisabled
    }, {
        inert: ""
    }), isExpanded ? React.createElement(ChevronSmallUpIcon, null) : React.createElement(ChevronSmallDownIcon, null))));
});
/** Define the Prop Type information */
MultiValueChip.propTypes = {};
const TabbableChip = props => {
    const ref = useRef(null);
    const { tabIndex, tabbableProps } = useTabbable(ref);
    return React.createElement(Chip, Object.assign({
        ref: ref
    }, mergeProps({
        tabIndex
    }, tabbableProps, props)));
};
export { Chip, ChipAvatar, ChipColorTag, MultiValueChip };
