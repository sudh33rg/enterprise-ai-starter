import { _ as __rest } from "./_tslib.esm.js";
import { useFocusRing, useFocusManager } from "@react-aria/focus";
import { getInteractionModality } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import * as React from "react";
import { createContext, useContext, forwardRef, useCallback } from "react";
import { u as useControlled } from "./use-controllable.esm.js";
import clsx from "clsx";
import { u as useWrappedInputId } from "./use-wrapped-input-id.esm.js";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
import { e as useFocusableControl } from "./focusable-option.esm.js";
import "./use-unique-id.esm.js";
import "./validity-provider.esm.js";
import "./context.esm.js";
var css_248z$1 = "/* Add focus outline and offset to an element */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox {\n  display: inline-flex;\n  align-items: var(--uxa-checkbox-container__align-items);\n  cursor: var(--uxa-checkbox__cursor);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  border-radius: var(--uxa-checkbox-container__border-radius);\n  min-height: var(--uxa-checkbox-container__height);\n  background-color: var(--uxa-checkbox-container__background-color);\n  padding-inline: var(--uxa-checkbox-container__padding-inline);\n  padding-block: var(--uxa-checkbox-container__padding-block);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-checkbox-container__background-color: var(\n    --uxa-checkbox-container__background-color--hover\n  );\n  --uxa-checkbox__background-color: var(--uxa-checkbox__background-color--hover);\n  --uxa-checkbox__border-color: var(--uxa-checkbox__border-color--hover);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-checkbox__background-color--checked: var(\n    --uxa-checkbox__background-color--checked-hover\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly).uxa-checkbox-indeterminate {\n  --uxa-checkbox__background-color--indeterminate: var(\n    --uxa-checkbox__background-color--indeterminate-hover\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-checkbox-container__background-color: var(\n    --uxa-checkbox-container__background-color--active\n  );\n  --uxa-checkbox__background-color: var(--uxa-checkbox__background-color--active);\n  --uxa-checkbox__border-color: var(--uxa-checkbox__border-color--active);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-checkbox__background-color--checked: var(\n    --uxa-checkbox__background-color--checked-active\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly).uxa-checkbox-indeterminate {\n  --uxa-checkbox__background-color--indeterminate: var(\n    --uxa-checkbox__background-color--indeterminate-active\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-focused {\n  z-index: 1;\n  outline-offset: 1px;\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-focused .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checked {\n  --uxa-checkbox-label__font-weight: var(--uxa-checkbox-label__font-weight--checked);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--checked);\n  border-color: var(--uxa-checkbox__border-color--checked);\n  border-width: var(--uxa-checkbox__border-width--checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checkbox-indeterminate {\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checkbox-indeterminate .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--indeterminate);\n  border-color: var(--uxa-checkbox__border-color--indeterminate);\n  border-width: var(--uxa-checkbox__border-width--indeterminate);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly {\n  cursor: var(--uxa-checkbox__cursor--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--readonly);\n  border-color: var(--uxa-checkbox__border-color--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly.uxa-checked {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-readonly\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--readonly-checked);\n  border-color: var(--uxa-checkbox__border-color--readonly-checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled {\n  cursor: var(--uxa-checkbox__cursor--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--disabled);\n  border-color: var(--uxa-checkbox__border-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled .uxa-checkbox-label {\n  color: var(--uxa-checkbox-label__color-disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checked {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-disabled\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--checked-disabled);\n  border-color: var(--uxa-checkbox__border-color--checked-disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checkbox-indeterminate {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-disabled\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checkbox-indeterminate .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--indeterminate-disabled);\n  border-color: var(--uxa-checkbox__border-color--indeterminate-disabled);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-box {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  flex: none;\n  width: var(--uxa-checkbox__width);\n  height: var(--uxa-checkbox__height);\n  border-style: var(--uxa-checkbox__border-style);\n  border-width: var(--uxa-checkbox__border-width);\n  border-color: var(--uxa-checkbox__border-color);\n  border-radius: var(--uxa-checkbox__border-radius);\n  background-color: var(--uxa-checkbox__background-color);\n  margin-block: var(--uxa-checkbox__margin-block);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-box::before {\n  content: \"\";\n  display: var(--uxa-checkbox-tick__display, none);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: var(--uxa-checkbox-tick__background-image, none);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-input {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-label {\n  color: var(--uxa-checkbox-label__color);\n  font-family: var(--uxa-checkbox-label__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-checkbox-label__font-size);\n  font-weight: var(--uxa-checkbox-label__font-weight);\n  line-height: var(--uxa-checkbox-label__line-height);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-label:not(:empty) {\n  margin-inline: var(--uxa-checkbox-label__margin-inline);\n  margin-block: var(--uxa-checkbox-label__margin-block);\n}";
styleInject(css_248z$1);
const CheckboxGroupContext = createContext(null);
function useCheckboxGroupContext() {
    return useContext(CheckboxGroupContext);
}
/**
 * The `<Checkbox>` component provides the same functionality as a native `<input type="checkbox">`
 * enhanced with Micro Focus Design styling.
 */
const Checkbox = forwardRef((props, ref) => {
    var _a, _b;
    const { id, className, style, defaultChecked = false, checked, isChecked: isCheckedPropValue, isIndeterminate, isDisabled = false, isReadonly = false, onCheckedChange, children, name, inert, value = "on" } = props, htmlProps = __rest(props, ["id", "className", "style", "defaultChecked", "checked", "isChecked", "isIndeterminate", "isDisabled", "isReadonly", "onCheckedChange", "children", "name", "inert", "value"]);
    const group = useCheckboxGroupContext();
    const isInteractive = !isDisabled && !isReadonly && !(group === null || group === void 0 ? void 0 : group.isDisabled) && !(group === null || group === void 0 ? void 0 : group.isReadonly);
    const [isChecked, setChecked] = useControlled(isCheckedPropValue !== null && isCheckedPropValue !== void 0 ? isCheckedPropValue : checked, onCheckedChange, defaultChecked);
    // if the checkbox is part of a group it must have a value
    if (group && !value) {
        throw new Error("Checkbox must have a value when used in a CheckboxGroup");
    }
    const isCheckedInGroup = (_b = (_a = group === null || group === void 0 ? void 0 : group.values) === null || _a === void 0 ? void 0 : _a.includes(value)) !== null && _b !== void 0 ? _b : false;
    const { isFocusVisible, focusProps } = useFocusRing();
    const modality = getInteractionModality();
    const { wrapperId, inputId } = useWrappedInputId(id, "uxa-checkbox");
    const handleOnChange = event => {
        if (!isInteractive) {
            return;
        }
        setChecked(event.target.checked);
        if (event.target.checked) {
            group === null || group === void 0 ? void 0 : group.select(value);
        }
        else {
            group === null || group === void 0 ? void 0 : group.deselect(value);
        }
    };
    return React.createElement("label", {
        ref: ref,
        id: wrapperId,
        className: clsx("uxa-checkbox", className, {
            "uxa-checked": isChecked || isCheckedInGroup,
            "uxa-checkbox-indeterminate": isIndeterminate,
            "uxa-disabled": isDisabled || (group === null || group === void 0 ? void 0 : group.isDisabled),
            "uxa-readonly": isReadonly || (group === null || group === void 0 ? void 0 : group.isReadonly),
            // we must check modality as it can show when modality is virtual - which we don't want
            // https://gitlab.otxlab.net/cybersecurity-enterprise/ux-aspects/core/ux-aspects-universal/-/issues/2701
            "uxa-focused": isFocusVisible && modality === "keyboard"
        }),
        style: style,
        inert: inert ? "" : undefined
    }, React.createElement("input", Object.assign({}, mergeProps({
        id: inputId,
        className: "uxa-checkbox-input",
        type: "checkbox",
        checked: isChecked || isCheckedInGroup,
        disabled: isDisabled || (group === null || group === void 0 ? void 0 : group.isDisabled),
        onChange: handleOnChange,
        name: name !== null && name !== void 0 ? name : group === null || group === void 0 ? void 0 : group.name,
        value,
        tabIndex: isInteractive ? 0 : -1
    }, htmlProps, focusProps))), React.createElement("span", {
        className: "uxa-checkbox-box"
    }), React.createElement("span", {
        className: "uxa-checkbox-label"
    }, children));
});
Checkbox.propTypes = {
    /**
     * Whether the checkbox is checked.
     */
    checked: PropTypes__default.bool,
    /**
     * Whether the checkbox is checked.
     */
    isChecked: PropTypes__default.bool,
    /**
     * Whether the checkbox is disabled.
     */
    isDisabled: PropTypes__default.bool,
    /**
     * Whether the checkbox is indeterminate.
     */
    isIndeterminate: PropTypes__default.bool,
    /**
     * Emits whenever the selection state changes.
     */
    onCheckedChange: PropTypes__default.func,
    /**
     * The initial value of the component.
     */
    defaultChecked: PropTypes__default.bool
};
var css_248z = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-group {\n  display: flex;\n  flex-direction: column;\n  width: -moz-max-content;\n  width: max-content;\n  gap: var(--uxa-checkbox-group__gap);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-horizontal,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-group.uxa-horizontal {\n  flex-direction: row;\n  --uxa-checkbox-group__gap: var(--uxa-checkbox-group__gap--horizontal);\n  --uxa-checkbox-group__gap--compact: var(--uxa-checkbox-group__gap--horizontal--compact);\n  --uxa-checkbox-group__gap--spacious: var(--uxa-checkbox-group__gap--horizontal--spacious);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-compact,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-group.uxa-compact {\n  gap: var(--uxa-checkbox-group__gap--compact);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-spacious,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-group.uxa-spacious {\n  gap: var(--uxa-checkbox-group__gap--spacious);\n}";
styleInject(css_248z);
const CheckboxGroup = forwardRef((_a, ref) => {
    var { children, orientation = "vertical", isDisabled = false, isReadonly = false, name, density = "regular", value = [], onValueChange } = _a, htmlProps = __rest(_a, ["children", "orientation", "isDisabled", "isReadonly", "name", "density", "value", "onValueChange"]);
    const [selection, setSelection] = useControlled(value, onValueChange, []);
    const focusManager = useFocusManager();
    // Integrate with the Inline Edit component
    useFocusableControl({
        onFocus: () => {
            focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusFirst({
                // if there is a selected radio button, focus it, if not, focus the first radio button
                accept: el => value !== undefined && Array.isArray(value) && value.length > 0 ? el instanceof HTMLInputElement && el.checked : true
            });
        }
    });
    const select = useCallback(selectedValue => {
        const items = [...(selection !== null && selection !== void 0 ? selection : []), selectedValue];
        setSelection(items);
    }, [selection, setSelection]);
    const deselect = useCallback(deselectedValue => {
        const items = selection === null || selection === void 0 ? void 0 : selection.filter(checkboxValue => checkboxValue !== deselectedValue);
        setSelection(items !== null && items !== void 0 ? items : []);
    }, [setSelection, selection]);
    return React.createElement(CheckboxGroupContext.Provider, {
        value: {
            values: selection,
            select,
            deselect,
            isDisabled,
            name,
            isReadonly
        }
    }, React.createElement("div", Object.assign({
        role: "group",
        ref: ref
    }, mergeProps({
        className: clsx("uxa-checkbox-group", {
            "uxa-horizontal": orientation === "horizontal",
            "uxa-compact": density === "compact",
            "uxa-spacious": density === "spacious"
        })
    }, htmlProps)), children));
});
CheckboxGroup.propTypes = {
    /**
     * Disables all checkboxes.
     */
    isDisabled: PropTypes__default.bool,
    /**
     * The currently selected checkboxes
     * @default []
     */
    value: PropTypes__default.array,
    /**
     * The spacing between checkboxes
     * @default 'regular'
     */
    density: PropTypes__default.oneOf(["compact", "regular", "spacious"]),
    /**
     * The orientation of the checkbox buttons.
     * @default 'vertical'
     */
    orientation: PropTypes__default.oneOf(["horizontal", "vertical"]),
    /**
     * Function for handling updates to the selected checkboxes.
     */
    onValueChange: PropTypes__default.func
};
export { Checkbox, CheckboxGroup };
