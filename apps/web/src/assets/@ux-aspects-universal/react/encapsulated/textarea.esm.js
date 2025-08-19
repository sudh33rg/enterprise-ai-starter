import { _ as __rest } from "./_tslib.esm.js";
import { mergeRefs, mergeProps } from "@react-aria/utils";
import { e as useFocusableControl } from "./focusable-option.esm.js";
import * as React from "react";
import { createContext, useState, useCallback, useContext, forwardRef, useRef, useEffect } from "react";
import clsx from "clsx";
import "./reducer-provider.esm.js";
import { u as useValidity } from "./validity-provider.esm.js";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
/* eslint-disable @typescript-eslint/no-empty-function */
const InputContext = createContext(undefined);
function useInputState() {
    var _a;
    const [type, setType] = useState();
    const [value, setValue] = useState();
    const [focused, setFocused] = useState(false);
    const clear = useCallback(() => { }, []);
    const focus = useCallback(() => { }, []);
    const onClear = useCallback(() => {
        return () => { };
    }, []);
    const onFocus = useCallback(() => {
        return () => { };
    }, []);
    return (_a = useContext(InputContext)) !== null && _a !== void 0 ? _a : {
        type,
        setType,
        value,
        setValue,
        focused,
        setFocused,
        clear,
        focus,
        onClear,
        onFocus,
        size: "medium"
    };
}
var css_248z$1 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-text-input,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input {\n  font-family: var(--uxa-text-input__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-text-input__font-weight);\n  font-size: var(--uxa-text-input__font-size);\n  color: var(--uxa-text-input__color);\n  background-color: var(--uxa-text-input__background-color);\n  padding-inline: var(--uxa-text-input__padding-inline);\n  padding-block-start: var(--uxa-text-input__padding-block-start);\n  padding-block-end: var(--uxa-text-input__padding-block-end);\n  height: var(--uxa-text-input__height);\n  width: var(--uxa-text-input__width);\n  border-style: var(--uxa-text-input__border-style);\n  border-width: var(--uxa-text-input__border-width);\n  border-color: var(--uxa-text-input__border-color);\n  border-radius: var(--uxa-text-input__border-radius);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input::placeholder {\n  color: var(--uxa-text-input-placeholder__color);\n  font-weight: var(--uxa-text-input-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input:focus {\n  outline: none;\n  border-color: var(--uxa-text-input__border-color--focused);\n  box-shadow: var(--uxa-text-input__box-shadow--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input:hover:not(:disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover);\n  background-color: var(--uxa-text-input__background-color--hover);\n  box-shadow: var(--uxa-text-input__box-shadow--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-invalid,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-invalid {\n  border-color: var(--uxa-text-input__border-color--invalid);\n  background-color: var(--uxa-text-input__background-color--invalid);\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-invalid:hover:not(:disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-text-input__border-color--hover-invalid);\n  background-color: var(--uxa-text-input__background-color--hover-invalid);\n  box-shadow: var(--uxa-text-input__box-shadow--hover-invalid);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-readonly, :not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-readonly:hover, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-readonly, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-readonly:hover {\n  cursor: var(--uxa-text-input__cursor--readonly);\n  border-color: var(--uxa-text-input__border-color--readonly);\n  background-color: var(--uxa-text-input__background-color--readonly);\n  padding-inline: var(--uxa-text-input__padding-inline--readonly);\n  box-shadow: var(--uxa-text-input__box-shadow--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-disabled {\n  cursor: var(--uxa-text-input__cursor--disabled);\n  color: var(--uxa-text-input__color--disabled);\n  border-color: var(--uxa-text-input__border-color--disabled);\n  background-color: var(--uxa-text-input__background-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-disabled::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-disabled::-moz-placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-disabled::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-disabled::placeholder {\n  color: var(--uxa-text-input-placeholder__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-large {\n  height: var(--uxa-text-input__height--large);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input.uxa-small,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input.uxa-small {\n  height: var(--uxa-text-input__height--small);\n  border-radius: var(--uxa-text-input__border-radius--small);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input[type=search]::-webkit-search-cancel-button,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input[type=search]::-webkit-search-cancel-button {\n  display: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input[type=search]:-moz-placeholder-shown:not(:focus), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input[type=search]:-moz-placeholder-shown:not(:focus) {\n  background-image: var(--uxa-text-input-placeholder__background-image--search);\n  background-position: var(--uxa-text-input-placeholder__background-position--search);\n  background-size: var(--uxa-text-input-placeholder__background-size--search);\n  background-repeat: no-repeat;\n  padding-inline-start: var(--uxa-text-input__padding-inline-start);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-text-input[type=search]:placeholder-shown:not(:focus),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-text-input[type=search]:placeholder-shown:not(:focus) {\n  background-image: var(--uxa-text-input-placeholder__background-image--search);\n  background-position: var(--uxa-text-input-placeholder__background-position--search);\n  background-size: var(--uxa-text-input-placeholder__background-size--search);\n  background-repeat: no-repeat;\n  padding-inline-start: var(--uxa-text-input__padding-inline-start);\n}";
styleInject(css_248z$1);
const TextInput = forwardRef((_a, ref) => {
    var { className, size = "medium", type = "text", isDisabled, isReadonly, value, onValueChange, defaultValue } = _a, props = __rest(_a, ["className", "size", "type", "isDisabled", "isReadonly", "value", "onValueChange", "defaultValue"]);
    const inputRef = useRef(null);
    const { setType, setValue, onClear, onFocus } = useInputState();
    const { isValid } = useValidity();
    // integrate with the `InlineEdit` component
    useFocusableControl({
        onFocus: () => {
            var _a;
            return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    // Make the `type` and `value` prop available to containing components.
    useEffect(() => setType(type), [setType, type]);
    useEffect(() => setValue(value !== null && value !== void 0 ? value : defaultValue), [setValue, value, defaultValue]);
    // if a clear is requested, clear the value
    useEffect(() => onClear === null || onClear === void 0 ? void 0 : onClear(() => onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange("")), [onClear, onValueChange]);
    // if a focus is requested, focus the input
    useEffect(() => onFocus === null || onFocus === void 0 ? void 0 : onFocus(() => {
        var _a;
        return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }), [onFocus]);
    return React.createElement("input", Object.assign({
        ref: mergeRefs(inputRef, ref)
    }, mergeProps({
        className: clsx("uxa-text-input", className, {
            "uxa-disabled": isDisabled,
            "uxa-readonly": isReadonly,
            "uxa-invalid": isValid === false,
            "uxa-large": size === "large",
            "uxa-small": size === "small"
        }),
        type,
        value,
        defaultValue,
        disabled: isDisabled,
        readOnly: isReadonly,
        onChange: e => onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(e.currentTarget.value)
    }, props)));
});
/** Define the Prop Type information */
TextInput.propTypes = {
    /** Define the size of the text input. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** The HTML `type` of the input. */
    type: PropTypes__default.string,
    /** Whether the text input is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Whether the text input is read-only. */
    isReadonly: PropTypes__default.bool,
    /** Text input value */
    value: PropTypes__default.string,
    /** Returns current value on change event */
    onValueChange: PropTypes__default.func
};
var css_248z = ":not(#\\9):not(#\\9):not(#\\9) .uxa-textarea,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea] {\n  font-family: var(--uxa-textarea__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-textarea__font-weight);\n  font-size: var(--uxa-textarea__font-size);\n  line-height: var(--uxa-textarea__line-height);\n  padding-inline: var(--uxa-textarea__padding-inline);\n  padding-block-start: var(--uxa-textarea__padding-block-start);\n  padding-block-end: var(--uxa-textarea__padding-block-end);\n  color: var(--uxa-textarea__color);\n  background-color: var(--uxa-textarea__background-color);\n  border-width: var(--uxa-textarea__border-width);\n  border-style: var(--uxa-textarea__border-style);\n  border-color: var(--uxa-textarea__border-color);\n  border-radius: var(--uxa-textarea__border-radius);\n  width: var(--uxa-textarea__width);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea]::-moz-placeholder {\n  color: var(--uxa-textarea-placeholder__color);\n  font-weight: var(--uxa-textarea-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea]::placeholder {\n  color: var(--uxa-textarea-placeholder__color);\n  font-weight: var(--uxa-textarea-placeholder__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea:hover:not(:disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea]:hover:not(:disabled) {\n  border-color: var(--uxa-textarea__border-color--hover);\n  background-color: var(--uxa-textarea__background-color--hover);\n  box-shadow: var(--uxa-textarea__box-shadow--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea]:focus {\n  outline: var(--uxa-textarea__outline--focused);\n  box-shadow: var(--uxa-textarea__box-shadow--focused);\n  border-color: var(--uxa-textarea__border-color--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-invalid,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-invalid {\n  border-color: var(--uxa-textarea__border-color--invalid);\n  background-color: var(--uxa-textarea__background-color--invalid);\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-invalid:hover:not(:disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-invalid:hover:not(:disabled) {\n  border-color: var(--uxa-textarea__border-color--hover-invalid);\n  background-color: var(--uxa-textarea__background-color--hover-invalid);\n  box-shadow: var(--uxa-textarea__box-shadow--hover-invalid);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-readonly, :not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-readonly:hover, :not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-readonly, :not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-readonly:hover {\n  cursor: var(--uxa-textarea__cursor--readonly);\n  background-color: var(--uxa-textarea__background-color--readonly);\n  border-color: var(--uxa-textarea__border-color--readonly);\n  padding-inline: var(--uxa-textarea__padding-inline--readonly);\n  box-shadow: var(--uxa-textarea__box-shadow--readonly);\n  resize: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-disabled {\n  cursor: var(--uxa-textarea__cursor--disabled);\n  color: var(--uxa-textarea__color--disabled);\n  border-color: var(--uxa-textarea__border-color--disabled);\n  background-color: var(--uxa-textarea__background-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-disabled::-moz-placeholder, :not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-disabled::-moz-placeholder {\n  color: var(--uxa-textarea-placeholder__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-textarea.uxa-disabled::placeholder,\n:not(#\\9):not(#\\9):not(#\\9) :host[uxa-textarea].uxa-disabled::placeholder {\n  color: var(--uxa-textarea-placeholder__color--disabled);\n}";
styleInject(css_248z);
const TextArea = React.forwardRef((_a, ref) => {
    var { isDisabled, onValueChange } = _a, props = __rest(_a, ["isDisabled", "onValueChange"]);
    const textareaRef = useRef(null);
    const { isValid } = useValidity();
    // Integrate with the Inline Edit component
    useFocusableControl({
        onFocus: () => {
            var _a, _b, _c, _d;
            (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            (_b = textareaRef.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange((_c = textareaRef.current) === null || _c === void 0 ? void 0 : _c.value.length, (_d = textareaRef.current) === null || _d === void 0 ? void 0 : _d.value.length);
        }
    });
    return React.createElement("textarea", Object.assign({
        ref: mergeRefs(textareaRef, ref)
    }, mergeProps({
        className: clsx("uxa-textarea", {
            "uxa-disabled": isDisabled,
            "uxa-invalid": isValid === false
        }),
        disabled: isDisabled,
        onChange: e => onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(e.currentTarget.value)
    }, props)));
});
/** Define the Prop Type information */
TextArea.propTypes = {
    /** Whether the textarea is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Text Area input value */
    value: PropTypes__default.string,
    /** Called when the value changes */
    onValueChange: PropTypes__default.func
};
export { InputContext as I, TextInput as T, TextArea as a, useInputState as u };
