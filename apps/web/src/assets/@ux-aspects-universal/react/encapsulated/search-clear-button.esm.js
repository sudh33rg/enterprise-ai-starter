import { _ as __rest } from "./_tslib.esm.js";
import { mergeRefs, mergeProps } from "@react-aria/utils";
import { I as InputContext, u as useInputState$1 } from "./textarea.esm.js";
import { u as useValidity } from "./validity-provider.esm.js";
import clsx from "clsx";
import PropTypes__default from "prop-types";
import * as React from "react";
import { forwardRef, useRef, useState, useCallback } from "react";
import { s as styleInject } from "./style-inject.es.esm.js";
import { I as IconButton } from "./split-button-group.esm.js";
import "./reducer-provider.esm.js";
var css_248z = ":not(#\\9):not(#\\9):not(#\\9) .uxa-input-group,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group {\n  display: inline-flex;\n  box-sizing: border-box;\n  width: var(--uxa-input-group__width);\n  height: var(--uxa-input-group__height);\n  gap: var(--uxa-input-group__column-gap);\n  padding-inline: var(--uxa-input-group__padding-inline);\n  padding-block: var(--uxa-input-group__padding-block-start) var(--uxa-input-group__padding-block-end);\n  border-radius: var(--uxa-input-group__border-radius);\n  border-style: var(--uxa-input-group__border-style);\n  border-width: var(--uxa-input-group__border-width);\n  border-color: var(--uxa-input-group__border-color);\n  --uxa-text-input__border-style: none;\n  --uxa-text-input__height: 100%;\n  --uxa-text-input__height--large: 100%;\n  --uxa-text-input__padding-inline: 0;\n  --uxa-text-input__border--disabled: none;\n  --uxa-text-input__border--focused: none;\n  --uxa-text-input__border--hover: none;\n  --uxa-text-input__background-color: transparent;\n  --uxa-text-input__background-color--disabled: transparent;\n  --uxa-text-input__background-color--hover: transparent;\n  --uxa-text-input__box-shadow--hover: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group:focus-within, :not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):focus-within, :not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):focus, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group:focus-within, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):focus-within, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):focus {\n  outline: none;\n  border-color: var(--uxa-input-group__border-color--focused);\n  box-shadow: var(--uxa-input-group__box-shadow--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group:hover:not(.uxa-disabled):not(:has(> input.uxa-disabled)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group:hover:not(.uxa-disabled):not(:has(> input.uxa-disabled)) {\n  border-color: var(--uxa-input-group__border-color--hover);\n  box-shadow: var(--uxa-input-group__box-shadow--hover);\n  background-color: var(--uxa-input-group__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-invalid,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-invalid {\n  border-color: var(--uxa-input-group__border-color--invalid);\n  background-color: var(--uxa-input-group__background-color--invalid);\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-invalid:hover:not(.uxa-disabled):not(:has(> input.uxa-disabled)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-invalid:hover:not(.uxa-disabled):not(:has(> input.uxa-disabled)) {\n  border-color: var(--uxa-input-group__border-color--hover-invalid);\n  background-color: var(--uxa-input-group__background-color--hover-invalid);\n  box-shadow: var(--uxa-input-group__box-shadow--hover-invalid);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-disabled, :not(#\\9):not(#\\9):not(#\\9) .uxa-input-group:has(> input.uxa-disabled), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-disabled, :not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group:has(> input.uxa-disabled) {\n  cursor: var(--uxa-input-group__cursor--disabled);\n  color: var(--uxa-input-group__color--disabled);\n  border-color: var(--uxa-input-group__border-color--disabled);\n  background-color: var(--uxa-input-group__background-color--disabled);\n  --uxa-input-group-addon-button__color: var(--uxa-input-group-addon-button__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group[data-size=small],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group[data-size=small] {\n  height: var(--uxa-input-group__height--small);\n  border-radius: var(--uxa-input-group__border-radius--small);\n  --uxa-text-input-placeholder__background-position--search: var(\n    --uxa-text-input-placeholder__background-position--search-small\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group[data-size=large],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group[data-size=large] {\n  --uxa-text-input__padding-inline: 0;\n  --uxa-text-input__padding-block: var(--uxa-text-input__padding-block-start--large)\n    var(--uxa-text-input__padding-block-end--large);\n  height: var(--uxa-input-group__height--large);\n  --uxa-input-group-addon-button__height: var(--uxa-input-group-addon-button__height--large);\n  --uxa-input-group-addon-button__padding-inline: var(\n    --uxa-input-group-addon-button__padding-inline--large\n  );\n  --uxa-input-group-addon-button__padding-block: var(\n    --uxa-input-group-addon-button__padding-block--large\n  );\n  --uxa-text-input-placeholder__background-position--search: var(\n    --uxa-text-input-placeholder__background-position--search-large\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-input-group-leading-addon,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-input-group-leading-addon {\n  padding-inline-start: var(--uxa-input-group__padding-inline-start--leading-addon, 0);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-input-group-trailing-addon,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-input-group-trailing-addon {\n  padding-inline-end: var(--uxa-input-group__padding-inline-end--trailing-addon, 0);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-search-group,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-search-group {\n  --uxa-text-input__padding-inline-start: var(--uxa-text-input__padding-inline-start--search);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)) {\n  --uxa-text-input__background-color: transparent;\n  background-color: var(--uxa-search-group__background-color);\n  border-color: var(--uxa-search-group__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):hover,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group.uxa-search-group:not(.uxa-disabled):not(:has(> input.uxa-disabled)):hover {\n  background-color: var(--uxa-input-group__background-color--hover);\n  border-color: var(--uxa-input-group__border-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-input-group .uxa-text-input,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-input-group .uxa-text-input {\n  flex-grow: 1;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-leading-addon,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-trailing-addon,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-leading-addon,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-trailing-addon {\n  display: flex;\n  align-items: center;\n  color: var(--uxa-input-group-addon-button__color, currentColor);\n  gap: var(--uxa-input-group-addon-button__gap);\n  --uxa-button__height: var(--uxa-input-group-addon-button__height);\n  --uxa-button__height--flat: var(--uxa-button__height);\n  --uxa-button__padding-inline: var(--uxa-input-group-addon-button__padding-inline);\n  --uxa-button__padding-block: var(--uxa-input-group-addon-button__padding-block);\n  --uxa-button__padding-inline--flat: var(--uxa-input-group-addon-button__padding-inline);\n  --uxa-button__padding-block--flat: var(--uxa-input-group-addon-button__padding-block);\n  --uxa-button__color--flat-secondary: var(--uxa-input-group-addon-button__color);\n  --uxa-button__border-color--flat-secondary: transparent;\n  --uxa-button__background-color--flat-secondary: transparent;\n  --uxa-button__border-color--flat-secondary-hover: transparent;\n  --uxa-button__border-color--flat-secondary-active: transparent;\n  --uxa-button__background-color--flat-secondary-active: var(\n    --uxa-input-group-addon-button__background-color--active\n  );\n  --uxa-icon-button__padding-inline: var(--uxa-button__padding-inline);\n  --uxa-icon-button__padding-block: var(--uxa-button__padding-block);\n  --uxa-icon-button-icon__size: 16px;\n}";
styleInject(css_248z);
const InputGroup = forwardRef((_a, ref) => {
    var { size = "medium", isDisabled, leadingAddon, trailingAddon, children } = _a, htmlProps = __rest(_a, ["size", "isDisabled", "leadingAddon", "trailingAddon", "children"]);
    const inputGroupRef = useRef(null);
    const state = useInputState(size);
    const { isValid } = useValidity();
    return React.createElement(InputContext.Provider, {
        value: state
    }, React.createElement("div", Object.assign({
        ref: mergeRefs(inputGroupRef, ref),
        "data-size": size
    }, mergeProps({
        className: clsx("uxa-input-group", {
            "uxa-search-group": state.type === "search",
            "uxa-input-group-leading-addon": Boolean(leadingAddon),
            "uxa-input-group-trailing-addon": Boolean(trailingAddon),
            "uxa-invalid": isValid === false,
            "uxa-disabled": isDisabled
        }),
        onFocus: () => state.setFocused(true),
        onBlur: e => {
            var _a;
            // only set focused to false if the blur event is not caused by a focus event on a child element
            if (!((_a = inputGroupRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
                state.setFocused(false);
            }
        }
    }, htmlProps)), leadingAddon ? React.createElement("div", {
        className: "uxa-leading-addon"
    }, leadingAddon) : null, children, trailingAddon ? React.createElement("div", {
        className: "uxa-trailing-addon"
    }, trailingAddon) : null));
});
InputGroup.propTypes = {
    /** Define the disabled state of the input group. */
    isDisabled: PropTypes__default.bool,
    /** Define the size of the input group. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** Define a leading addon. */
    leadingAddon: PropTypes__default.element,
    /** Define a trailing addon. */
    trailingAddon: PropTypes__default.element
};
function useInputState(size) {
    const [type, setType] = useState();
    const [value, setValue] = useState();
    const [focused, setFocused] = useState(false);
    const clearListeners = useRef([]);
    const focusListeners = useRef([]);
    const clear = useCallback(() => {
        clearListeners.current.forEach(listener => listener());
    }, []);
    const onClear = useCallback(callback => {
        clearListeners.current.push(callback);
        return () => {
            clearListeners.current = clearListeners.current.filter(listener => listener !== callback);
        };
    }, []);
    const focus = useCallback(() => {
        focusListeners.current.forEach(listener => listener());
    }, []);
    const onFocus = useCallback(callback => {
        focusListeners.current.push(callback);
        return () => {
            focusListeners.current = focusListeners.current.filter(listener => listener !== callback);
        };
    }, []);
    return {
        type,
        setType,
        value,
        setValue,
        focused,
        setFocused,
        clear,
        onClear,
        size,
        focus,
        onFocus
    };
}
const SearchButton = forwardRef((_a, ref) => {
    var { icon } = _a, props = __rest(_a, ["icon"]);
    const { value, focused, size } = useInputState$1();
    if (!value) {
        return null;
    }
    let buttonSize;
    switch (size) {
        case "small":
            buttonSize = "extra-small";
            break;
        case "medium":
            buttonSize = "small";
            break;
        case "large":
            buttonSize = "medium";
            break;
    }
    return React.createElement(IconButton, Object.assign({
        ref: ref
    }, mergeProps(props, {
        icon,
        primary: focused,
        secondary: !focused,
        flat: !focused,
        size: buttonSize
    })));
});
const SearchClearButton = forwardRef((_a, ref) => {
    var { icon } = _a, props = __rest(_a, ["icon"]);
    const { value, clear, focus, size } = useInputState$1();
    if (!value) {
        return null;
    }
    let buttonSize;
    switch (size) {
        case "small":
            buttonSize = "extra-small";
            break;
        case "medium":
            buttonSize = "small";
            break;
        case "large":
            buttonSize = "medium";
            break;
    }
    return React.createElement(IconButton, Object.assign({
        ref: ref
    }, mergeProps(props, {
        icon,
        secondary: true,
        flat: true,
        onClick: () => {
            clear();
            focus();
        },
        size: buttonSize
    })));
});
export { InputGroup as I, SearchButton as S, SearchClearButton as a };
