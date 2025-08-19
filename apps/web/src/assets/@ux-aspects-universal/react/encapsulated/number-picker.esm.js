import { mergeProps } from "@react-aria/utils";
import PropTypes__default from "prop-types";
import * as React from "react";
import { useRef, useMemo, useCallback, useEffect, forwardRef } from "react";
import { _ as __rest } from "./_tslib.esm.js";
import { useFocusRing } from "@react-aria/focus";
import { u as useControlled } from "./use-controllable.esm.js";
import clsx from "clsx";
import { u as usePropEffect } from "./use-prop-effect.esm.js";
import { u as useWheel } from "./use-wheel.esm.js";
import { u as useWrappedInputId } from "./use-wrapped-input-id.esm.js";
import "./reducer-provider.esm.js";
import { u as useValidity } from "./validity-provider.esm.js";
import { s as styleInject } from "./style-inject.es.esm.js";
import { d as ChevronSmallDownIcon, bF as RemoveSmallIcon, h as ChevronSmallUpIcon, a2 as AddSmallIcon } from "./zoom-out.esm.js";
import "./use-unique-id.esm.js";
import "./prop-types.esm.js";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
/** Hook applying main number picker functionality */
function useNumberPicker(_a) {
    var { id, className, style, defaultValue = "", value, step = 1, min, max, onChange, onValueChange, isDisabled, isInvalid, stepperType = "chevron", size = "medium", title } = _a, props = __rest(_a, ["id", "className", "style", "defaultValue", "value", "step", "min", "max", "onChange", "onValueChange", "isDisabled", "isInvalid", "stepperType", "size", "title"]);
    const inputRef = useRef(null);
    const { isFocused, focusProps } = useFocusRing({
        isTextInput: true
    });
    // handle both controlled and uncontrolled
    [value, onValueChange] = useControlled(value, onValueChange, defaultValue);
    const { isValid } = useValidity();
    const { wrapperId, inputId } = useWrappedInputId(id, "uxa-number-picker");
    const canStepUp = useMemo(() => typeof value !== "number" || max === undefined || value + step <= max, [value, step, max]);
    const canStepDown = useMemo(() => typeof value !== "number" || min === undefined || value - step >= min, [value, step, min]);
    // the actual input itself cannot be controlled so we need to update it manually.
    // if the input is controlled we get various issues, such as cursor jumps to the end of the input etc..
    usePropEffect(value, newValue => {
        var _a, _b;
        if (typeof newValue === "number" && newValue !== Number((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value)) {
            inputRef.current.value = newValue.toString();
        }
        else {
            inputRef.current.value = (_b = newValue) !== null && _b !== void 0 ? _b : "";
        }
    });
    // store the last known keyboard event - this is because we can't get the key from the change event
    const lastKeyboardEvent = useRef(null);
    const normalizeInputValue = useCallback(() => {
        let inputValue = inputRef.current.value; // Remove leading zeros unless it's "0" or starts with "0." (decimal)
        if (/^-?0\d+/.test(inputValue)) {
            inputValue = inputValue.replace(/^(-?)0+(\d)/, "$1$2");
        }
        inputRef.current.value = inputValue;
    }, []);
    const handleOnChange = useCallback(event => {
        normalizeInputValue();
        const valueAsNumber = Number(inputRef.current.value);
        // if the input is empty then set the value to undefined
        if (inputRef.current.value.length === 0) {
            onValueChange("");
            // dispatch a synthetic change event to the input to allow form libraries to update validation etc..
            if (onChange && event) {
                onChange(event);
            }
            return;
        }
        // if the value is not a number or the converted number is a different length than the text
        // then stop here as it may be an intermediate value, for example
        // the user may have typed a decimal point but not yet entered a number, or they may have
        // entered a hyphen but not yet entered a number.
        if (isNaN(valueAsNumber) || valueAsNumber.toString().length !== inputRef.current.value.length) {
            return;
        }
        // clamp the value between the min and max
        const clampedValue = Math.max(Math.min(valueAsNumber, max !== null && max !== void 0 ? max : Infinity), min !== null && min !== void 0 ? min : -Infinity);
        const numberValue = isNaN(clampedValue) || inputRef.current.value.length === 0 ? "" : clampedValue;
        inputRef.current.value = numberValue.toString();
        onValueChange(numberValue);
        // dispatch a synthetic change event to the input to allow form libraries to update validation etc..
        if (onChange && event) {
            // to avoid breaking changes we must emit the change event with a number value
            const numberInput = inputRef.current.cloneNode();
            numberInput.type = "number";
            onChange(Object.assign(Object.assign({}, event), {
                target: numberInput
            }));
        }
    }, [max, min, normalizeInputValue, onChange, onValueChange]);
    // prevent the scrolling on the input to scroll the page
    useWheel(inputRef, event => {
        if (!isFocused) {
            return;
        }
        // increment or decrement accordingly
        event.deltaY < 0 ? increment() : decrement();
        event.preventDefault();
    });
    // the number picker root element props
    const numberPickerProps = {
        id: wrapperId,
        "data-size": size,
        className: clsx(className, {
            "uxa-disabled": isDisabled,
            "uxa-invalid": isValid === false || isInvalid
        }),
        style
    };
    const stepBy = useCallback(amount => {
        var _a;
        // if the value is not a number then set it to the step value, otherwise change the value by the step amount
        let newValue = typeof value !== "number" ? amount : value + amount;
        // clamp the value between the min and max
        newValue = Math.max(Math.min(newValue, max !== null && max !== void 0 ? max : Infinity), min !== null && min !== void 0 ? min : -Infinity);
        // handle any number picker floating point precision issues - we round to 14, as 15 is where the precision issue occurs
        const factor = Math.pow(10, 14);
        newValue = Math.round((newValue + Number.EPSILON) * factor) / factor;
        // set the value directly on the input element and trigger the input event
        // this will in turn trigger the handleOnChange function which will emit the new value
        inputRef.current.value = newValue.toString();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event("input", {
            bubbles: true
        }));
    }, [max, min, value]);
    const increment = useCallback(() => stepBy(step !== null && step !== void 0 ? step : 1), [stepBy, step]);
    const decrement = useCallback(() => stepBy(-(step !== null && step !== void 0 ? step : 1)), [stepBy, step]);
    const preventNonNumericCharacters = useCallback(event => {
        const navigationKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Home", "End"];
        // const inputRef = event.target as HTMLInputElement;
        const inputValue = inputRef.current.value;
        const key = event.key;
        const isControlKey = event.ctrlKey || event.metaKey || event.altKey;
        const isDecimal = key === "." && !inputValue.includes(".");
        const isNegativeSign = key === "-" && inputRef.current.selectionStart === 0 && !inputValue.includes("-");
        const isDigit = /\d/.test(key);
        if (navigationKeys.includes(key) || isDigit || isControlKey || isDecimal || isNegativeSign) {
            return; // allow it
        }
        event.preventDefault(); // block anything else
    }, []);
    /**
     * We previously relied in the built in browser validation for number picker, however now we use type=text
     * which does not have built in validation, so we must manually validate the input to prevent breaking changes.
     * Instead we should remove this and validation should be carried out using Angular Forms.
     * TODO: Remove this in the next major version
     */
    useEffect(() => {
        if (typeof value === "string") {
            inputRef.current.setCustomValidity("");
            return;
        }
        const maxValue = max !== null && max !== void 0 ? max : Number.MAX_SAFE_INTEGER;
        const minValue = min !== null && min !== void 0 ? min : Number.MIN_SAFE_INTEGER;
        // if the value is greater than the max then set the input to invalid
        if (value > maxValue) {
            inputRef.current.setCustomValidity(`Value must be less than or equal to ${maxValue}.`);
            return;
        }
        // if the value is less than the min then set the input to invalid
        if (value < minValue) {
            inputRef.current.setCustomValidity(`Value must be greater than or equal to ${minValue}.`);
            return;
        }
        const remainder = value / step;
        // Check if it's close enough to an integer (floating point safe)
        if (remainder !== Math.round(remainder)) {
            inputRef.current.setCustomValidity("Please enter a valid value.");
            return;
        }
        // clear the validity if the value is valid
        inputRef.current.setCustomValidity("");
    }, [max, min, step, value]);
    // whenever the user types in the input ensure that is is a number or an acceptable string e.g. decimal point or minus sign
    const onKeyDown = useCallback(event => {
        // store the last known keyboard event
        lastKeyboardEvent.current = event;
        preventNonNumericCharacters(event);
        if (event.key === "ArrowUp") {
            increment();
            event.preventDefault();
        }
        if (event.key === "ArrowDown") {
            decrement();
            event.preventDefault();
        }
    }, [decrement, increment, preventNonNumericCharacters]);
    // the input element props
    const inputProps = mergeProps(focusProps, {
        ref: inputRef,
        type: "text",
        inputMode: "numeric",
        autoComplete: "off",
        spellCheck: "false",
        id: inputId,
        title,
        disabled: isDisabled,
        onInput: handleOnChange,
        onKeyDown,
        onKeyUp: () => lastKeyboardEvent.current = null
    }, props);
    // the props for the step up button
    const stepUpButtonProps = {
        direction: "up",
        isDisabled: !canStepUp,
        onClick: increment,
        stepperType
    };
    // the props for the step down button
    const stepDownButtonProps = {
        direction: "down",
        isDisabled: !canStepDown,
        onClick: decrement,
        stepperType
    };
    return {
        numberPickerProps,
        inputProps,
        stepUpButtonProps,
        stepDownButtonProps
    };
}
var css_248z = ":not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker {\n  height: var(--uxa-number-picker__height);\n  display: inline-flex;\n  background-color: var(--uxa-number-picker__background-color);\n  width: var(--uxa-number-picker__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-disabled .uxa-number-picker-input,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-disabled .uxa-number-picker-input,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input {\n  cursor: var(--uxa-text-input__cursor--disabled);\n  color: var(--uxa-text-input__color--disabled);\n  border-color: var(--uxa-text-input__border-color--disabled);\n  background-color: var(--uxa-text-input__background-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-disabled .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-disabled .uxa-number-picker-down,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-disabled .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-disabled .uxa-number-picker-down,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-down,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-disabled .uxa-number-picker-down {\n  pointer-events: none;\n  color: var(--uxa-number-picker-button__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker.uxa-invalid .uxa-number-picker-input:not(:focus) {\n  border-color: var(--uxa-number-picker-input__border-color--invalid);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker[data-size=small] {\n  --uxa-text-input__height: var(--uxa-number-picker-input__height--small);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker[data-size=large] {\n  --uxa-text-input__height: var(--uxa-number-picker-input__height--large);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker {\n  --uxa-number-picker-button__height: 50%;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker[data-size=small] {\n  --uxa-number-picker__height: var(--uxa-number-picker__height--small);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-number-picker[data-size=large] {\n  --uxa-number-picker__height: var(--uxa-number-picker__height--large);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input {\n  font-family: var(--uxa-text-input__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-text-input__font-weight);\n  font-size: var(--uxa-text-input__font-size);\n  color: var(--uxa-text-input__color);\n  background-color: var(--uxa-text-input__background-color);\n  padding-inline: var(--uxa-text-input__padding-inline);\n  padding-block-start: var(--uxa-text-input__padding-block-start);\n  padding-block-end: var(--uxa-text-input__padding-block-end);\n  height: var(--uxa-text-input__height);\n  width: var(--uxa-text-input__width);\n  border-style: var(--uxa-text-input__border-style);\n  border-width: var(--uxa-text-input__border-width);\n  border-color: var(--uxa-text-input__border-color);\n  border-radius: var(--uxa-text-input__border-radius);\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n  text-align: var(--uxa-number-picker-input__text-align);\n  padding-inline-start: var(--uxa-number-picker-input__padding-inline-start);\n  padding-inline-end: var(--uxa-number-picker-input__padding-inline-end);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input:focus {\n  outline: none;\n  border-color: var(--uxa-text-input__border-color--focused);\n  box-shadow: var(--uxa-text-input__box-shadow--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover);\n  background-color: var(--uxa-text-input__background-color--hover);\n  box-shadow: var(--uxa-text-input__box-shadow--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input.uxa-invalid {\n  border-color: var(--uxa-text-input__border-color--invalid);\n  background-color: var(--uxa-text-input__background-color--invalid);\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input.uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover-invalid);\n  background-color: var(--uxa-text-input__background-color--hover-invalid);\n  box-shadow: var(--uxa-text-input__box-shadow--hover-invalid);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-input:invalid {\n  border-color: var(--uxa-number-picker-input__border-color--invalid);\n  box-shadow: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-buttons {\n  display: flex;\n  flex-direction: column;\n  flex: none;\n  height: 100%;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-down {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: var(--uxa-number-picker-button__width);\n  color: var(--uxa-number-picker-button__color);\n  height: var(--uxa-number-picker-button__height);\n  --uxa-icon__size: var(--uxa-number-picker-button-icon__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-up:hover,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-down:hover {\n  background-color: var(--uxa-number-picker-button__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-up.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-down.uxa-disabled {\n  pointer-events: none;\n  color: var(--uxa-number-picker-button__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-up uxa-icon,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-number-picker-down uxa-icon {\n  display: inline-flex;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height);\n  --uxa-number-picker-input__text-align: var(--uxa-vertical-number-picker-input__text-align);\n  flex-wrap: wrap;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker .uxa-number-picker-down,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker .uxa-number-picker-up,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker .uxa-number-picker-down {\n  height: var(--uxa-vertical-number-picker-button__height);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker[data-size=small] {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height--small);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-vertical-number-picker[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-vertical-number-picker[data-size=large] {\n  --uxa-number-picker__height: var(--uxa-vertical-number-picker__height--large);\n}";
styleInject(css_248z);
const StepButton = _a => {
    var { direction, isDisabled, stepperType } = _a, props = __rest(_a, ["direction", "isDisabled", "stepperType"]);
    let icon;
    switch (direction) {
        case "up":
            icon = stepperType === "chevron" ? React.createElement(ChevronSmallUpIcon, null) : React.createElement(AddSmallIcon, null);
            break;
        case "down":
            icon = stepperType === "chevron" ? React.createElement(ChevronSmallDownIcon, null) : React.createElement(RemoveSmallIcon, null);
            break;
    }
    return React.createElement("div", Object.assign({
        className: clsx({
            "uxa-number-picker-up": direction === "up",
            "uxa-number-picker-down": direction === "down",
            "uxa-disabled": isDisabled
        })
    }, props), icon);
};
/**
 * The `NumberPicker` component provides the same functionality as a native `<input type="number">`
 * enhanced with Micro Focus Design styling.
 */
const NumberPicker = forwardRef((props, ref) => {
    const { inputProps, numberPickerProps, stepUpButtonProps, stepDownButtonProps } = useNumberPicker(props);
    return React.createElement("div", Object.assign({
        ref: ref
    }, mergeProps(numberPickerProps, {
        className: "uxa-number-picker"
    })), React.createElement("input", Object.assign({
        className: "uxa-number-picker-input"
    }, inputProps)), React.createElement("div", {
        className: "uxa-number-picker-buttons"
    }, React.createElement(StepButton, Object.assign({}, stepUpButtonProps)), React.createElement(StepButton, Object.assign({}, stepDownButtonProps))));
});
NumberPicker.propTypes = {
    /** The value for the control. */
    value: PropTypes__default.number,
    /** The minimum allowed value for the control. */
    min: PropTypes__default.number,
    /** The maximum allowed value for the control. */
    max: PropTypes__default.number,
    /** The stepping interval to use when incrementing or decrementing the value. */
    step: PropTypes__default.number,
    /** The size of the number picker. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** Whether the control is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Whether the input is invalid. */
    isInvalid: PropTypes__default.bool,
    /** Fired when the value is updated. */
    onValueChange: PropTypes__default.func,
    /** The appearance of the stepper buttons. */
    stepperType: PropTypes__default.oneOf(["chevron", "plus-minus"]),
    /** The initial value of the component. */
    defaultValue: PropTypes__default.number,
    /** The title of the number picker. This may be used to customize the default browser validation tooltips. */
    title: PropTypes__default.string
};
/**
 * The `VerticalNumberPicker` component provides the same functionality as a native `<input type="number">`
 * enhanced with Micro Focus Design styling.
 */
const VerticalNumberPicker = forwardRef((props, ref) => {
    const { numberPickerProps, inputProps, stepDownButtonProps, stepUpButtonProps } = useNumberPicker(props);
    return React.createElement("div", Object.assign({
        ref: ref
    }, mergeProps(numberPickerProps, {
        className: "uxa-vertical-number-picker"
    })), React.createElement(StepButton, Object.assign({}, stepUpButtonProps)), React.createElement("input", Object.assign({
        className: "uxa-number-picker-input"
    }, inputProps)), React.createElement(StepButton, Object.assign({}, stepDownButtonProps)));
});
VerticalNumberPicker.propTypes = {
    /** The value for the control. */
    value: PropTypes__default.number,
    /** The minimum allowed value for the control. */
    min: PropTypes__default.number,
    /** The maximum allowed value for the control. */
    max: PropTypes__default.number,
    /** The stepping interval to use when incrementing or decrementing the value. */
    step: PropTypes__default.number,
    /** The size of the number picker. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** Whether the control is disabled. */
    isDisabled: PropTypes__default.bool,
    /** The appearance of the stepper buttons. */
    stepperType: PropTypes__default.oneOf(["chevron", "plus-minus"]),
    /** The title of the number picker. This may be used to customize the default browser validation tooltips. */
    title: PropTypes__default.string
};
export { NumberPicker, VerticalNumberPicker };
