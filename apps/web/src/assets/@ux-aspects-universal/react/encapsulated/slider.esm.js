import { _ as __rest } from "./_tslib.esm.js";
import { mergeRefs, mergeProps } from "@react-aria/utils";
import { DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, PAGE_DOWN, PAGE_UP, END, HOME } from "./keycodes.esm.js";
import * as React from "react";
import { useState, useEffect, useRef, useCallback, forwardRef, useMemo } from "react";
import { u as useControlled } from "./use-controllable.esm.js";
import clsx from "clsx";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
import { useFocusRing, focusSafely } from "@react-aria/focus";
import { u as useDirection } from "./direction.esm.js";
import { u as useEventListener } from "./use-event-listener.esm.js";
import { s as styleInject } from "./style-inject.es.esm.js";
import "@ux-aspects-universal/core/theming";
import { u as useTheme, b as useThemeLoading } from "./theme-region.esm.js";
import { a as useElementRect } from "./use-element-rect.esm.js";
import { u as useBodyRef } from "./use-body-ref.esm.js";
import { T as Tooltip } from "./tooltip.esm.js";
import { createPortal } from "react-dom";
import { e as emitChangeOnElement, u as useHiddenInputHtmlProps } from "./use-hidden-input-html-props.esm.js";
import { u as useWrappedInputId } from "./use-wrapped-input-id.esm.js";
import "./use-mutation-observer.esm.js";
import "./use-isomorphic-effect.esm.js";
import "@floating-ui/react";
import "./focus-key-manager.esm.js";
import "./use-unique-id.esm.js";
import "@react-aria/interactions";
import "./use-outside-click.esm.js";
import "./use-debounce.esm.js";
import "./use-active-theme.esm.js";
import "./show.esm.js";
function valueToPercent(value, min, max) {
    return (value - min) * 100 / (max - min);
}
function usePercentage(value, min = 0, max = 100) {
    // ensure the values are within a valid range
    min = Math.min(min, max);
    max = Math.max(min, max);
    value = Math.min(Math.max(value, min), max);
    const [percentage, setPercentage] = useState(valueToPercent(value, min, max));
    useEffect(() => setPercentage(valueToPercent(value, min, max)), [value, min, max]);
    return percentage;
}
function useRangeSliderTrack(low, high, min = 0, max = 100) {
    const lowPercentage = usePercentage(low, min, max);
    const highPercentage = usePercentage(high, min, max);
    return {
        style: {
            insetInlineStart: lowPercentage + "%",
            width: highPercentage - lowPercentage + "%"
        }
    };
}
function useSliderThumb({ sliderRef, value, min, max, lowerBound, upperBound, ariaDescribedby, ariaLabel, ariaLabelledby, isDisabled, onValueChange, onDragEnd, onKeyUp }) {
    // eslint-disable-next-line prefer-const
    let [bounds, setBounds] = useState();
    const direction = useDirection();
    const percentage = usePercentage(value, min, max);
    const { isFocusVisible, focusProps } = useFocusRing();
    const [isDragging, setIsDragging] = useState(false);
    const thumbRef = useRef(null);
    const onMouseMove = useCallback(event => {
        const eventPosition = event.clientX;
        if (!eventPosition || !bounds) {
            return;
        }
        // get mouse position
        const mouseX = window.pageXOffset + eventPosition;
        // restrict the value within the range size
        const position = clamp(direction === "ltr" ? mouseX - bounds.left : bounds.right - mouseX, lowerBound ? bounds.width * valueToPercent(lowerBound, min, max) / 100 : 0, upperBound ? bounds.width * valueToPercent(upperBound, min, max) / 100 : bounds.width);
        // get fraction representation of location within the track
        const fraction = position / bounds.width;
        // convert to value within the range
        const newValue = ((max !== null && max !== void 0 ? max : 100) - (min !== null && min !== void 0 ? min : 0)) * fraction + (min !== null && min !== void 0 ? min : 0);
        // emit the latest value
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    }, [bounds, direction, max, min, onValueChange, lowerBound, upperBound]);
    const onMouseUp = useCallback(() => {
        setIsDragging(false);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mouseleave", onMouseUp);
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onMouseMove, setIsDragging]);
    const onDragStart = useCallback(event => {
        var _a;
        if (isDisabled) {
            return;
        }
        event.preventDefault();
        setIsDragging(true);
        // get the latest dimensions
        const dimensions = (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (dimensions && (dimensions.width !== (bounds === null || bounds === void 0 ? void 0 : bounds.width) || dimensions.left !== (bounds === null || bounds === void 0 ? void 0 : bounds.left) || dimensions.right !== (bounds === null || bounds === void 0 ? void 0 : bounds.right))) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            bounds = dimensions;
            setBounds(dimensions);
        }
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp, {
            once: true
        });
        // if the mouse leaves the window then stop dragging, otherwise if they
        // mouse up outside the window dragging will continue even when the mouse
        // is up
        document.addEventListener("mouseleave", onMouseUp, {
            once: true
        });
        if (thumbRef.current) {
            focusSafely(thumbRef.current);
        }
    }, [bounds === null || bounds === void 0 ? void 0 : bounds.left, bounds === null || bounds === void 0 ? void 0 : bounds.right, bounds === null || bounds === void 0 ? void 0 : bounds.width, isDisabled, onMouseMove, onMouseUp, sliderRef, thumbRef, setIsDragging]);
    const handleKeyDown = useCallback(event => {
        var _a, _b;
        if (isDisabled) {
            return;
        }
        const tenPercents = ((max !== null && max !== void 0 ? max : 100) - (min !== null && min !== void 0 ? min : 0)) / 10;
        let newValue = value;
        const minValue = (_a = lowerBound !== null && lowerBound !== void 0 ? lowerBound : min) !== null && _a !== void 0 ? _a : 0;
        const maxValue = (_b = upperBound !== null && upperBound !== void 0 ? upperBound : max) !== null && _b !== void 0 ? _b : 100;
        switch (event.keyCode) {
            case HOME:
                newValue = minValue;
                break;
            case END:
                newValue = maxValue;
                break;
            case PAGE_UP:
                newValue = value + tenPercents;
                break;
            case PAGE_DOWN:
                newValue = value - tenPercents;
                break;
            case RIGHT_ARROW:
                newValue = direction === "ltr" ? value + 1 : value - 1;
                break;
            case LEFT_ARROW:
                newValue = direction === "ltr" ? value - 1 : value + 1;
                break;
            case UP_ARROW:
                newValue = value + 1;
                break;
            case DOWN_ARROW:
                newValue = value - 1;
                break;
            default:
                // if the value has not changed then do nothing
                return;
        }
        // Prevent scroll of the page
        event.preventDefault();
        newValue = clamp(newValue, minValue, maxValue);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    }, [isDisabled, max, min, value, lowerBound, upperBound, onValueChange, direction]);
    return Object.assign(Object.assign({
        ref: thumbRef,
        role: "slider",
        tabIndex: isDisabled ? -1 : 0,
        "aria-describedby": ariaDescribedby,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        "aria-valuemax": upperBound !== null && upperBound !== void 0 ? upperBound : max,
        "aria-valuemin": lowerBound !== null && lowerBound !== void 0 ? lowerBound : min,
        "aria-valuenow": value,
        style: {
            insetInlineStart: `${percentage}%`
        },
        onMouseDown: onDragStart,
        onKeyDown: handleKeyDown,
        onKeyUp: onKeyUp,
        isDragging
    }, focusProps), {
        isFocusVisible,
        className: clsx({
            "uxa-focused": isFocusVisible,
            "uxa-dragging": isDragging
        })
    });
}
function clamp(value, min = 0, max = 100) {
    return Math.min(Math.max(value, min), max);
}
function useSliderTrack({ ref, min, max, isDisabled, onChange, thumbRefLow, thumbRefHigh }) {
    const dir = useDirection();
    // whenever the track is clicked we want to move the thumb to that location
    useEventListener(ref, "mousedown", event => {
        var _a, _b;
        // if the slider is disabled do nothing
        if (isDisabled || !ref.current) {
            return;
        }
        // check if a thumb has been clicked and do nothing
        if (((_a = thumbRefLow === null || thumbRefLow === void 0 ? void 0 : thumbRefLow.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = thumbRefHigh === null || thumbRefHigh === void 0 ? void 0 : thumbRefHigh.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
            return;
        }
        // determine the width and position of the track
        const { width, left } = ref.current.getBoundingClientRect();
        // determine the position of the click
        const position = event.clientX - left;
        const range = max - min;
        let percentage = position / width;
        // invert the percentage if we are in rtl mode
        if (dir === "rtl") {
            percentage = 1 - percentage;
        }
        const value = min + range * percentage;
        onChange(clamp(value, min, max));
    });
}
const RangeHandle = forwardRef((_a, ref) => {
    var { isActive, isDisabled, isHovered } = _a, props = __rest(_a, ["isActive", "isDisabled", "isHovered"]);
    return React.createElement("span", Object.assign({
        ref: ref
    }, props), React.createElement("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        width: 16
    }, (isHovered || isActive) && !isDisabled ? React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M1.52643 8.41603L10.7237 14.5475C11.0559 14.769 11.501 14.5308 11.501 14.1315L11.501 1.86852C11.501 1.46917 11.0559 1.23097 10.7237 1.45249L1.52643 7.58397C1.22957 7.78189 1.22957 8.21811 1.52643 8.41603Z",
        fill: "var(--uxa-range-handle__fill)",
        stroke: "var(--uxa-range-handle__stroke)"
    }), React.createElement("rect", {
        x: "0.751007",
        y: "12.75",
        width: "0.5",
        height: "9.5",
        rx: "0.25",
        transform: "rotate(-180 0.751007 12.75)",
        stroke: "var(--uxa-range-handle-pipe__stroke)",
        fill: "var(--uxa-range-handle-pipe__stroke)",
        strokeWidth: "0.5"
    })) : React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M1.70807 8.40962L8.96427 13.489C9.29566 13.7209 9.75101 13.4839 9.75101 13.0793L9.75101 2.92066C9.75101 2.51614 9.29566 2.27907 8.96428 2.51104L1.70807 7.59038C1.42371 7.78943 1.42371 8.21057 1.70807 8.40962Z",
        fill: "var(--uxa-range-handle__fill)",
        stroke: "var(--uxa-range-handle__stroke)"
    }), React.createElement("rect", {
        x: "0.751007",
        y: "12.75",
        width: "0.5",
        height: "9.5",
        rx: "0.25",
        transform: "rotate(-180 0.751007 12.75)",
        stroke: "var(--uxa-range-handle-pipe__stroke)",
        fill: "var(--uxa-range-handle-pipe__stroke)",
        strokeWidth: "0.5"
    }))));
});
var css_248z$1 = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-width: var(--uxa-slider__min-width);\n  justify-content: center;\n  width: 100%;\n  row-gap: var(--uxa-slider__row-gap);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-track {\n  background-color: var(--uxa-slider-track__background-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb-container {\n  cursor: default;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging) {\n  cursor: default;\n  width: var(--uxa-slider-thumb__width--disabled);\n  height: var(--uxa-slider-thumb__height--disabled);\n  margin-inline-start: 0;\n  background-color: var(--uxa-slider-thumb__background-color--disabled);\n  border-width: var(--uxa-slider-thumb__border-width--disabled);\n  border-style: var(--uxa-slider-thumb__border-style--disabled);\n  border-color: var(--uxa-slider-thumb__border-color--disabled);\n  transform: var(--uxa-slider-thumb__transform--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider input[type=range] {\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-rail {\n  position: relative;\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: var(--uxa-slider-rail__height);\n  background-color: var(--uxa-slider-rail__background-color);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-rail__padding-inline);\n  padding-block: var(--uxa-slider-rail__padding-block);\n  box-sizing: border-box;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-track {\n  position: absolute;\n  top: 0;\n  display: flex;\n  height: var(--uxa-slider-track__height);\n  background-color: var(--uxa-slider-track__background-color);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-track__padding-inline);\n  padding-block: var(--uxa-slider-track__padding-block);\n  box-sizing: border-box;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-box {\n  height: var(--uxa-slider-thumb-box__height);\n  width: var(--uxa-slider-thumb-box__width);\n  align-items: var(--uxa-slider-thumb-box__align-items);\n  justify-content: var(--uxa-slider-thumb-box__justify-content);\n  transform: var(--uxa-slider-thumb-box__transform);\n  transform-origin: var(--uxa-slider-thumb-box__transform-origin);\n  top: var(--uxa-slider-thumb-box__top);\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging) {\n  background-color: var(--uxa-slider-thumb__background-color--hover);\n  border-width: var(--uxa-slider-thumb__border-width--hover);\n  border-style: var(--uxa-slider-thumb__border-style--hover);\n  border-color: var(--uxa-slider-thumb__border-color--hover);\n  transform: var(--uxa-slider-thumb__transform--hover);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb {\n  cursor: var(--uxa-slider-thumb__cursor);\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  width: var(--uxa-slider-thumb__width);\n  height: var(--uxa-slider-thumb__height);\n  background-color: var(--uxa-slider-thumb__background-color);\n  border-width: var(--uxa-slider-thumb__border-width);\n  border-style: var(--uxa-slider-thumb__border-style);\n  border-color: var(--uxa-slider-thumb__border-color);\n  border-radius: var(--uxa-slider-thumb__border-radius);\n  transform: var(--uxa-slider-thumb__transform);\n  transform-origin: center;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-dragging {\n  width: var(--uxa-slider-thumb__width--dragging);\n  height: var(--uxa-slider-thumb__height--dragging);\n  background-color: var(--uxa-slider-thumb__background-color--dragging);\n  border-width: var(--uxa-slider-thumb__border-width--dragging);\n  border-style: var(--uxa-slider-thumb__border-style--dragging);\n  border-color: var(--uxa-slider-thumb__border-color--dragging);\n  transform: var(--uxa-slider-thumb__transform--dragging);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-focused {\n  width: var(--uxa-slider-thumb__width--focused);\n  height: var(--uxa-slider-thumb__height--focused);\n  box-shadow: var(--uxa-slider-thumb__box-shadow--focused);\n  background-color: var(--uxa-slider-thumb__background-color--focused);\n  border-width: var(--uxa-slider-thumb__border-width--focused);\n  border-style: var(--uxa-slider-thumb__border-style--focused);\n  border-color: var(--uxa-slider-thumb__border-color--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-in-front {\n  z-index: 1;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-container {\n  position: absolute;\n  height: 100%;\n  box-sizing: border-box;\n  margin-inline: var(--uxa-slider-thumb-container__margin-inline);\n  width: var(--uxa-slider-thumb-container__width);\n  cursor: var(--uxa-slider-thumb-container__cursor);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-thumb-container__padding-inline);\n  padding-block: var(--uxa-slider-thumb-container__padding-block);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-ticks {\n  position: relative;\n  width: 100%;\n  top: var(--uxa-slider-ticks__top);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-tick {\n  position: absolute;\n  transform: var(--uxa-slider-tick__transform);\n  font-weight: var(--uxa-slider-tick__font-weight);\n  font-size: var(--uxa-slider-tick__font-size);\n  line-height: var(--uxa-slider-tick__line-height);\n  color: var(--uxa-slider-tick__color);\n  width: -moz-max-content;\n  width: max-content;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl],\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}\n\n/* Add focus outline and offset to an element */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider {\n  --uxa-slider-thumb-container__margin-inline: 0;\n  --uxa-slider-thumb-container__width: 100%;\n  --uxa-slider-ticks__top: 0;\n  --uxa-slider-thumb__width: var(--uxa-range-slider-thumb__width);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled {\n  --uxa-range-handle__fill: var(--uxa-range-handle__fill--disabled);\n  --uxa-range-handle__stroke: var(--uxa-range-handle__stroke--disabled);\n  --uxa-range-handle-pipe__stroke: var(--uxa-range-handle-pipe__stroke--disabled);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-container {\n  position: relative;\n  display: flex;\n  margin-inline: var(--uxa-range-slider-container__margin-inline);\n  margin-block: var(--uxa-range-slider-container__margin-block);\n  justify-content: var(--uxa-range-slider-container__justify-content);\n  flex-direction: var(--uxa-range-slider-container__flex-direction);\n  width: var(--uxa-range-slider-container__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-container .uxa-range-slider-thumb-low-box {\n  transform: var(--uxa-range-slider-thumb-low-box__transform);\n  justify-content: var(--uxa-range-slider-thumb-low-box__justify-content);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-container .uxa-range-slider-thumb-high-box {\n  transform: var(--uxa-range-slider-thumb-high-box__transform);\n  justify-content: var(--uxa-range-slider-thumb-high-box__justify-content);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb {\n  --uxa-icon__size: 16px;\n  display: flex;\n  align-items: var(--uxa-range-slider-thumb__align-items);\n  justify-content: var(--uxa-slider-thumb__justify-content);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb.uxa-active {\n  --uxa-range-handle__fill: var(--uxa-range-handle__fill--active);\n  --uxa-range-handle__stroke: var(--uxa-range-handle__stroke--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb.uxa-focused {\n  z-index: 1;\n  outline-offset: var(--uxa-focus-outline__offset);\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n  outline-offset: 0;\n  --uxa-range-handle__fill: var(--uxa-range-handle__fill--active);\n  --uxa-range-handle__stroke: var(--uxa-range-handle__stroke--active);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb-start {\n  transform: var(--uxa-range-slider-thumb-start__transform);\n  --uxa-icon__transform: var(--uxa-range-slider-thumb-start__transform);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-thumb-end {\n  transform: var(--uxa-range-slider-thumb-end__transform);\n  --uxa-icon__transform: var(--uxa-range-slider-thumb-end__transform);\n  justify-content: var(--uxa-range-slider-thumb-end__justify-content);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider-tooltip-anchor {\n  height: 100%;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl],\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) {\n  --uxa-range-slider-thumb-start__transform: var(--uxa-range-slider-thumb-start__transform--rtl);\n  --uxa-range-slider-thumb-end__transform: var(--uxa-range-slider-thumb-end__transform--rtl);\n  --uxa-range-slider-thumb-low-box__transform: var(\n    --uxa-range-slider-thumb-low-box__transform--rtl\n  );\n  --uxa-slider-thumb__justify-content: var(--uxa-slider-thumb__justify-content--rtl);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] {\n  --uxa-range-slider-thumb-start__transform: var(--uxa-range-slider-thumb-start__transform--rtl);\n  --uxa-range-slider-thumb-end__transform: var(--uxa-range-slider-thumb-end__transform--rtl);\n  --uxa-range-slider-thumb-low-box__transform: var(\n    --uxa-range-slider-thumb-low-box__transform--rtl\n  );\n  --uxa-slider-thumb__justify-content: var(--uxa-slider-thumb__justify-content--rtl);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) {\n  --uxa-range-slider-thumb-start__transform: var(--uxa-range-slider-thumb-start__transform--rtl);\n  --uxa-range-slider-thumb-end__transform: var(--uxa-range-slider-thumb-end__transform--rtl);\n  --uxa-range-slider-thumb-low-box__transform: var(\n    --uxa-range-slider-thumb-low-box__transform--rtl\n  );\n  --uxa-slider-thumb__justify-content: var(--uxa-slider-thumb__justify-content--rtl);\n}";
styleInject(css_248z$1);
const SliderTicks = ({ slider, tick, min, max }) => {
    var _a;
    // we need to re-trigger the calculation any time the theme is loading or the theme changes
    const theme = useTheme();
    const loading = useThemeLoading();
    const tickRef = useRef(null);
    const percentage = (tick.value - min) / (max - min) * 100;
    const { rect: sliderRect } = useElementRect(slider);
    const { rect: tickRect } = useElementRect(tickRef);
    const offset = useMemo(() => {
        if (sliderRect.width && tickRect.width) {
            const tickPosition = sliderRect.width * (percentage / 100);
            // get half the width of the tick and see if it's outside the slider
            const tickHalfWidth = tickRect.width / 2;
            // if the tick is outside the slider (start), we need to offset it
            if (tickPosition - tickHalfWidth < 0) {
                return tickHalfWidth - tickPosition;
            }
            // if the tick is outside the slider (end), we need to offset it
            if (tickPosition + tickHalfWidth > sliderRect.width) {
                return -(tickPosition + tickHalfWidth - sliderRect.width);
            }
        }
        return 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [percentage, sliderRect.width, tickRect.width, theme, loading]);
    return React.createElement("span", {
        ref: tickRef,
        className: "uxa-slider-tick",
        style: {
            insetInlineStart: `calc(${percentage}% + ${offset}px)`
        }
    }, (_a = tick.label) !== null && _a !== void 0 ? _a : tick.value);
};
const SliderTooltip = ({ isDisabled, value, triggerRef, range, tooltipRender, offset = 0 }) => {
    const bodyRef = useBodyRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const tooltipRef = useRef(null);
    // any time the value changes we need to update the tooltip position
    useEffect(() => {
        var _a;
        (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.updatePosition();
    }, [value]);
    const label = useMemo(() => {
        return range.min + (range.max - range.min) * Math.round(value) / 100;
    }, [range.min, range.max, value]);
    const mouseEnter = useCallback(() => {
        !isDragging && setIsOpen(true);
    }, [isDragging]);
    const mouseLeave = useCallback(() => {
        !isDragging && setIsOpen(false);
    }, [isDragging]);
    const mouseDown = useCallback(() => {
        setIsDragging(true);
        setIsOpen(true);
    }, []);
    const mouseUp = useCallback(() => {
        setIsDragging(false);
        setIsOpen(false);
    }, []);
    const onFocus = useCallback(() => setIsOpen(true), []);
    const onBlur = useCallback(() => setIsOpen(false), []);
    useEffect(() => {
        var _a;
        const thumbBox = (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (thumbBox) {
            thumbBox.addEventListener("mouseenter", mouseEnter);
            thumbBox.addEventListener("mouseleave", mouseLeave);
            thumbBox.addEventListener("mousedown", mouseDown);
            thumbBox.addEventListener("focusin", onFocus);
            thumbBox.addEventListener("focusout", onBlur);
            document.addEventListener("mouseup", mouseUp);
        }
        return () => {
            if (thumbBox) {
                thumbBox.removeEventListener("mouseenter", mouseEnter);
                thumbBox.removeEventListener("mouseleave", mouseLeave);
                thumbBox.removeEventListener("mousedown", mouseDown);
                thumbBox.removeEventListener("focusin", onFocus);
                thumbBox.removeEventListener("focusout", onBlur);
                document.removeEventListener("mouseup", mouseUp);
            }
        };
    }, [triggerRef, tooltipRef, mouseEnter, mouseLeave, value, isOpen, isDisabled, mouseDown, onFocus, onBlur, mouseUp]);
    return bodyRef.current ? createPortal(React.createElement(Tooltip, {
        ref: tooltipRef,
        isDisabled: isDisabled,
        isOpen: isOpen,
        placement: "above",
        variant: "auto-inverse",
        triggerRef: triggerRef,
        style: {
            pointerEvents: "none"
        },
        offset: offset
    }, tooltipRender ? tooltipRender(value) : Math.round(label)), bodyRef.current) : null;
};
SliderTooltip.propTypes = {};
var SliderThumb;
(function (SliderThumb) {
    SliderThumb[SliderThumb["Lower"] = 0] = "Lower";
    SliderThumb[SliderThumb["Upper"] = 1] = "Upper";
})(SliderThumb || (SliderThumb = {}));
const RangeSlider = forwardRef((_a, ref) => {
    var { isDisabled, ariaLabelLow, ariaLabelHigh, ariaLabelledbyLow, ariaLabelledbyHigh, low, high, min = 0, max = 100, ticks, tooltip, lowTooltipRender, highTooltipRender, onLowChange, onHighChange } = _a, htmlProps = __rest(_a, ["isDisabled", "ariaLabelLow", "ariaLabelHigh", "ariaLabelledbyLow", "ariaLabelledbyHigh", "low", "high", "min", "max", "ticks", "tooltip", "lowTooltipRender", "highTooltipRender", "onLowChange", "onHighChange"]);
    [low, onLowChange] = useControlled(low, onLowChange);
    [high, onHighChange] = useControlled(high, onHighChange);
    const sliderContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbBoxRefLow = useRef(null);
    const thumbBoxRefHigh = useRef(null);
    const thumbBoxAnchorLowRef = useRef(null);
    const thumbBoxAnchorHighRef = useRef(null);
    const sliderTrackProps = useRangeSliderTrack(low, high, min, max);
    const [thumbInFront, setThumbInFront] = useState(SliderThumb.Upper);
    const lowPercentage = usePercentage(low, min, max);
    const highPercentage = usePercentage(high, min, max);
    const [hoveredThumb, setHoveredThumb] = useState(null);
    const _b = useSliderThumb({
        sliderRef,
        value: low,
        upperBound: high,
        min,
        max,
        isDisabled,
        onValueChange: onLowChange,
        ariaLabel: ariaLabelLow,
        ariaLabelledby: ariaLabelledbyLow,
        onDragEnd: () => setThumbInFront(SliderThumb.Lower),
        onKeyUp: event => onKeyUp(event, SliderThumb.Lower)
    }), { onMouseDown: onMouseDownLow, style: styleLow, isDragging: isDraggingLow, isFocusVisible: isFocusVisibleLow } = _b, lowThumbProps = __rest(_b, ["onMouseDown", "style", "isDragging", "isFocusVisible"]);
    const _c = useSliderThumb({
        sliderRef,
        value: high,
        lowerBound: low,
        min,
        max,
        isDisabled,
        onValueChange: onHighChange,
        ariaLabel: ariaLabelHigh,
        ariaLabelledby: ariaLabelledbyHigh,
        onDragEnd: () => setThumbInFront(SliderThumb.Upper),
        onKeyUp: event => onKeyUp(event, SliderThumb.Upper)
    }), { onMouseDown: onMouseDownHigh, style: styleHigh, isDragging: isDraggingHigh, isFocusVisible: isFocusedVisibleHigh } = _c, highThumbProps = __rest(_c, ["onMouseDown", "style", "isDragging", "isFocusVisible"]);
    useEffect(() => {
        if (max !== undefined && min !== undefined) {
            const range = max - min;
            const median = range / 100 * 50 + min;
            if (high !== undefined && high <= median) {
                setThumbInFront(SliderThumb.Upper);
            }
            if (low !== undefined && low > median) {
                setThumbInFront(SliderThumb.Lower);
            }
        }
    }, [min, max, low, high]);
    const onKeyUp = (event, thumb) => {
        const keyCodes = [RIGHT_ARROW, LEFT_ARROW, UP_ARROW, DOWN_ARROW, PAGE_UP, PAGE_DOWN, END, HOME];
        if (keyCodes.includes(event.keyCode)) {
            setThumbInFront(thumb);
        }
    };
    useSliderTrack({
        ref: sliderRef,
        min,
        max,
        isDisabled,
        onChange: value => {
            var _a, _b;
            // find the closest thumb
            const lowDistance = Math.abs(value - low);
            const highDistance = Math.abs(value - high);
            const closestThumb = lowDistance < highDistance ? SliderThumb.Lower : SliderThumb.Upper;
            const minValue = (_a = low !== null && low !== void 0 ? low : min) !== null && _a !== void 0 ? _a : 0;
            const maxValue = (_b = high !== null && high !== void 0 ? high : max) !== null && _b !== void 0 ? _b : 100;
            if (closestThumb === SliderThumb.Lower) {
                onLowChange === null || onLowChange === void 0 ? void 0 : onLowChange(clamp(value, min, maxValue));
            }
            else {
                onHighChange === null || onHighChange === void 0 ? void 0 : onHighChange(clamp(value, minValue, max));
            }
        },
        thumbRefLow: thumbBoxRefLow,
        thumbRefHigh: thumbBoxRefHigh
    });
    return React.createElement("div", Object.assign({
        ref: mergeRefs(sliderContainerRef, ref)
    }, mergeProps({
        className: clsx("uxa-range-slider", {
            "uxa-disabled": isDisabled
        })
    }, htmlProps)), React.createElement("div", {
        className: "uxa-range-slider-container"
    }, React.createElement("div", {
        className: "uxa-slider-rail"
    }), React.createElement("div", Object.assign({
        className: "uxa-slider-track"
    }, sliderTrackProps)), React.createElement("div", {
        className: "uxa-slider-thumb-container",
        ref: sliderRef
    }, React.createElement("div", Object.assign({
        className: "uxa-slider-thumb-box uxa-range-slider-thumb-low-box",
        ref: thumbBoxRefLow
    }, mergeProps({
        onMouseDown: onMouseDownLow,
        style: styleLow,
        onMouseEnter: () => setHoveredThumb(SliderThumb.Lower),
        onMouseLeave: () => setHoveredThumb(null)
    })), React.createElement(RangeHandle, Object.assign({}, mergeProps({
        isActive: isDraggingLow || isFocusVisibleLow,
        isDisabled,
        isHovered: hoveredThumb === SliderThumb.Lower,
        className: clsx("uxa-range-slider-thumb uxa-range-slider-thumb-start", {
            "uxa-in-front": thumbInFront === SliderThumb.Lower,
            "uxa-active": (isDraggingLow || isFocusVisibleLow) && !isDisabled
        })
    }, lowThumbProps))), React.createElement("div", {
        className: "uxa-range-slider-tooltip-anchor",
        ref: thumbBoxAnchorLowRef
    })), tooltip && React.createElement(SliderTooltip, {
        isDisabled: isDisabled,
        triggerRef: thumbBoxAnchorLowRef,
        value: lowPercentage,
        tooltipRender: lowTooltipRender,
        range: {
            min,
            max
        }
    }), React.createElement("div", Object.assign({
        className: "uxa-slider-thumb-box uxa-range-slider-thumb-high-box",
        ref: thumbBoxRefHigh
    }, mergeProps({
        onMouseDown: onMouseDownHigh,
        style: styleHigh,
        onMouseEnter: () => setHoveredThumb(SliderThumb.Upper),
        onMouseLeave: () => setHoveredThumb(null)
    })), React.createElement("div", {
        className: "uxa-range-slider-tooltip-anchor",
        ref: thumbBoxAnchorHighRef
    }), React.createElement(RangeHandle, Object.assign({}, mergeProps({
        isActive: isDraggingHigh || isFocusedVisibleHigh,
        isDisabled,
        isHovered: hoveredThumb === SliderThumb.Upper,
        className: clsx("uxa-range-slider-thumb uxa-range-slider-thumb-end", {
            "uxa-in-front": thumbInFront === SliderThumb.Upper,
            "uxa-active": (isDraggingHigh || isFocusedVisibleHigh) && !isDisabled
        })
    }, highThumbProps)))), tooltip && React.createElement(SliderTooltip, {
        isDisabled: isDisabled,
        triggerRef: thumbBoxAnchorHighRef,
        value: highPercentage,
        tooltipRender: highTooltipRender,
        range: {
            min,
            max
        }
    })), ticks && React.createElement("div", {
        className: "uxa-slider-ticks"
    }, ticks.map(tick => React.createElement(SliderTicks, {
        slider: sliderContainerRef,
        min: min,
        max: max,
        tick: tick,
        key: tick.value
    })))));
});
RangeSlider.propTypes = {
    /**
     * The low range value.
     */
    low: PropTypes__default.number.isRequired,
    /**
     * The high range value.
     */
    high: PropTypes__default.number.isRequired,
    /**
     * The minimum slider value.
     */
    min: PropTypes__default.number,
    /**
     * The maximum slider value.
     */
    max: PropTypes__default.number,
    /**
     * The disabled state of the slider.
     */
    isDisabled: PropTypes__default.bool,
    /**
     * Show the drag handle tooltip when dragged and on hover.
     */
    tooltip: PropTypes__default.bool,
    /**
     * Ticks shown beneath the slider bar.
     */
    ticks: PropTypes__default.arrayOf(PropTypes__default.shape({
        value: PropTypes__default.number.isRequired,
        label: PropTypes__default.string
    })),
    /**
     * The aria-label value for the low slider thumb.
     */
    ariaLabelLow: PropTypes__default.string,
    /**
     * The aria-label value for the high slider thumb.
     */
    ariaLabelHigh: PropTypes__default.string,
    /**
     * The aria-labelledby value for the low slider thumb.
     */
    ariaLabelledbyLow: PropTypes__default.string,
    /**
     * The aria-labelledby value for the high slider thumb.
     */
    ariaLabelledbyHigh: PropTypes__default.string,
    /**
     * Define a custom renderer for the low tooltip value.
     * */
    lowTooltipRender: PropTypes__default.func,
    /**
     * Define a custom renderer for the high tooltip value.
     * */
    highTooltipRender: PropTypes__default.func,
    /**
     * Emits whenever the low value changes.
     */
    onLowChange: PropTypes__default.func,
    /**
     * Emits whenever the high value changes.
     */
    onHighChange: PropTypes__default.func
};
var css_248z = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-width: var(--uxa-slider__min-width);\n  justify-content: center;\n  width: 100%;\n  row-gap: var(--uxa-slider__row-gap);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-track,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-track {\n  background-color: var(--uxa-slider-track__background-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb-container,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb-container {\n  cursor: default;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging),\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider.uxa-disabled .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging) {\n  cursor: default;\n  width: var(--uxa-slider-thumb__width--disabled);\n  height: var(--uxa-slider-thumb__height--disabled);\n  margin-inline-start: 0;\n  background-color: var(--uxa-slider-thumb__background-color--disabled);\n  border-width: var(--uxa-slider-thumb__border-width--disabled);\n  border-style: var(--uxa-slider-thumb__border-style--disabled);\n  border-color: var(--uxa-slider-thumb__border-color--disabled);\n  transform: var(--uxa-slider-thumb__transform--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) .uxa-range-slider input[type=range],\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-range-slider input[type=range] {\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-rail {\n  position: relative;\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: var(--uxa-slider-rail__height);\n  background-color: var(--uxa-slider-rail__background-color);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-rail__padding-inline);\n  padding-block: var(--uxa-slider-rail__padding-block);\n  box-sizing: border-box;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-track {\n  position: absolute;\n  top: 0;\n  display: flex;\n  height: var(--uxa-slider-track__height);\n  background-color: var(--uxa-slider-track__background-color);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-track__padding-inline);\n  padding-block: var(--uxa-slider-track__padding-block);\n  box-sizing: border-box;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-box {\n  height: var(--uxa-slider-thumb-box__height);\n  width: var(--uxa-slider-thumb-box__width);\n  align-items: var(--uxa-slider-thumb-box__align-items);\n  justify-content: var(--uxa-slider-thumb-box__justify-content);\n  transform: var(--uxa-slider-thumb-box__transform);\n  transform-origin: var(--uxa-slider-thumb-box__transform-origin);\n  top: var(--uxa-slider-thumb-box__top);\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-box:hover .uxa-slider-thumb:not(.uxa-focused, .uxa-dragging) {\n  background-color: var(--uxa-slider-thumb__background-color--hover);\n  border-width: var(--uxa-slider-thumb__border-width--hover);\n  border-style: var(--uxa-slider-thumb__border-style--hover);\n  border-color: var(--uxa-slider-thumb__border-color--hover);\n  transform: var(--uxa-slider-thumb__transform--hover);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb {\n  cursor: var(--uxa-slider-thumb__cursor);\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  width: var(--uxa-slider-thumb__width);\n  height: var(--uxa-slider-thumb__height);\n  background-color: var(--uxa-slider-thumb__background-color);\n  border-width: var(--uxa-slider-thumb__border-width);\n  border-style: var(--uxa-slider-thumb__border-style);\n  border-color: var(--uxa-slider-thumb__border-color);\n  border-radius: var(--uxa-slider-thumb__border-radius);\n  transform: var(--uxa-slider-thumb__transform);\n  transform-origin: center;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb:focus {\n  outline: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-dragging {\n  width: var(--uxa-slider-thumb__width--dragging);\n  height: var(--uxa-slider-thumb__height--dragging);\n  background-color: var(--uxa-slider-thumb__background-color--dragging);\n  border-width: var(--uxa-slider-thumb__border-width--dragging);\n  border-style: var(--uxa-slider-thumb__border-style--dragging);\n  border-color: var(--uxa-slider-thumb__border-color--dragging);\n  transform: var(--uxa-slider-thumb__transform--dragging);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-focused {\n  width: var(--uxa-slider-thumb__width--focused);\n  height: var(--uxa-slider-thumb__height--focused);\n  box-shadow: var(--uxa-slider-thumb__box-shadow--focused);\n  background-color: var(--uxa-slider-thumb__background-color--focused);\n  border-width: var(--uxa-slider-thumb__border-width--focused);\n  border-style: var(--uxa-slider-thumb__border-style--focused);\n  border-color: var(--uxa-slider-thumb__border-color--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb.uxa-in-front {\n  z-index: 1;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-thumb-container {\n  position: absolute;\n  height: 100%;\n  box-sizing: border-box;\n  margin-inline: var(--uxa-slider-thumb-container__margin-inline);\n  width: var(--uxa-slider-thumb-container__width);\n  cursor: var(--uxa-slider-thumb-container__cursor);\n  background-clip: content-box;\n  padding-inline: var(--uxa-slider-thumb-container__padding-inline);\n  padding-block: var(--uxa-slider-thumb-container__padding-block);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-ticks {\n  position: relative;\n  width: 100%;\n  top: var(--uxa-slider-ticks__top);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-slider-tick {\n  position: absolute;\n  transform: var(--uxa-slider-tick__transform);\n  font-weight: var(--uxa-slider-tick__font-weight);\n  font-size: var(--uxa-slider-tick__font-size);\n  line-height: var(--uxa-slider-tick__line-height);\n  color: var(--uxa-slider-tick__color);\n  width: -moz-max-content;\n  width: max-content;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl],\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) {\n  --uxa-slider-tick__transform: var(--uxa-slider-tick__transform-rtl);\n  --uxa-slider-thumb-box__transform: var(--uxa-slider-thumb-box__transform--rtl);\n}";
styleInject(css_248z);
const Slider = forwardRef((_a, ref) => {
    var { id, isDisabled, defaultValue = 0, value, min = 0, max = 100, tooltip, ticks, "aria-describedby": ariaDescribedby, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, tooltipRender, onValueChange } = _a, htmlProps = __rest(_a, ["id", "isDisabled", "defaultValue", "value", "min", "max", "tooltip", "ticks", "aria-describedby", "aria-label", "aria-labelledby", "tooltipRender", "onValueChange"]);
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);
    const inputRef = useRef(null);
    [value, onValueChange] = useControlled(value, onValueChange, defaultValue);
    const { wrapperId, inputId } = useWrappedInputId(id, "uxa-slider");
    const direction = useDirection();
    useSliderTrack({
        ref: sliderRef,
        min,
        max,
        isDisabled,
        onChange: onValueChange
    });
    const handleOnValueChange = useCallback(_value => {
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(_value);
        if (inputRef.current) {
            emitChangeOnElement(inputRef.current, `${_value}`);
        }
    }, [onValueChange]);
    const _b = useSliderThumb({
        sliderRef,
        value,
        min,
        max,
        isDisabled,
        ariaDescribedby,
        ariaLabel,
        ariaLabelledby,
        onValueChange: handleOnValueChange
    }), { onMouseDown, style } = _b, thumbProps = __rest(_b, ["onMouseDown", "style"]);
    const percentage = usePercentage(value, min, max);
    const { inputHtmlProps, wrapperHtmlProps } = useHiddenInputHtmlProps(htmlProps);
    return React.createElement("div", Object.assign({
        ref: mergeRefs(sliderContainerRef, ref)
    }, mergeProps({
        id: wrapperId,
        className: clsx("uxa-slider", {
            "uxa-disabled": isDisabled
        })
    }, wrapperHtmlProps), {
        dir: direction
    }), React.createElement("div", {
        className: "uxa-slider-rail"
    }), React.createElement("div", {
        className: "uxa-slider-track",
        style: {
            width: `${percentage}%`
        }
    }), React.createElement("input", Object.assign({}, mergeProps({
        ref: inputRef,
        type: "range",
        id: inputId,
        value,
        step: "any",
        readOnly: true,
        tabIndex: "-1",
        "aria-hidden": "true"
    }, inputHtmlProps))), React.createElement("div", {
        className: "uxa-slider-thumb-container",
        ref: sliderRef
    }, React.createElement("div", Object.assign({
        className: "uxa-slider-thumb-box"
    }, mergeProps({
        onMouseDown,
        style
    })), React.createElement("span", Object.assign({}, mergeProps({
        className: "uxa-slider-thumb"
    }, thumbProps)))), tooltip ? React.createElement(SliderTooltip, {
        isDisabled: isDisabled,
        triggerRef: thumbProps.ref,
        value: percentage,
        tooltipRender: tooltipRender,
        range: {
            min,
            max
        },
        offset: 4
    }) : null), ticks && React.createElement("div", {
        className: "uxa-slider-ticks"
    }, ticks.map(tick => React.createElement(SliderTicks, {
        slider: sliderContainerRef,
        min: min,
        max: max,
        tick: tick,
        key: tick.value
    }))));
});
Slider.propTypes = {
    /**
     * The slider value.
     */
    value: PropTypes__default.number,
    /**
     * The minimum slider value.
     */
    min: PropTypes__default.number,
    /**
     * The maximum slider value.
     */
    max: PropTypes__default.number,
    /**
     * The disabled state of the slider.
     */
    isDisabled: PropTypes__default.bool,
    /**
     * Show the drag handle tooltip when dragged and on hover.
     */
    tooltip: PropTypes__default.bool,
    /**
     * Ticks shown beneath the slider bar.
     */
    ticks: PropTypes__default.arrayOf(PropTypes__default.shape({
        value: PropTypes__default.number.isRequired,
        label: PropTypes__default.string
    })),
    /**
     * The initial value of the component.
     */
    defaultValue: PropTypes__default.number,
    /**
     * Define a custom renderer for the tooltip value.
     * */
    tooltipRender: PropTypes__default.func,
    /**
     * Emits whenever the value changes.
     */
    onValueChange: PropTypes__default.func
};
export { RangeSlider, Slider };
