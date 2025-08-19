import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import { Theme } from "@ux-aspects-universal/core/theming";
import { u as useTheme } from "./theme-region.esm.js";
import * as React from "react";
import clsx from "clsx";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
var css_248z = "/* stylelint-disable ux-aspects/no-host-context */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--uxa-spinner__size);\n  height: var(--uxa-spinner__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner.uxa-medium,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-medium {\n  --uxa-spinner__size: var(--uxa-spinner__size--medium);\n  --uxa-spinner-container__size: var(--uxa-spinner-container__size--medium);\n  --uxa-spinner-inner__box-shadow: var(--uxa-spinner-inner__box-shadow--medium);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner.uxa-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-large {\n  --uxa-spinner__size: var(--uxa-spinner__size--large);\n  --uxa-spinner-container__size: var(--uxa-spinner-container__size--large);\n  --uxa-spinner-inner__box-shadow: var(--uxa-spinner-inner__box-shadow--large);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: var(--uxa-spinner-container__size);\n  height: var(--uxa-spinner-container__size);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner-inner {\n  box-sizing: content-box;\n  animation-name: uxa-spinner-animation;\n  width: 100%;\n  height: 100%;\n  animation-duration: var(--uxa-spinner-inner__animation-duration);\n  animation-iteration-count: var(--uxa-spinner-inner__animation-iteration-count);\n  animation-timing-function: var(--uxa-spinner-inner__animation-timing-function);\n  will-change: transform;\n  box-shadow: var(--uxa-spinner-inner__box-shadow);\n  border-radius: var(--uxa-spinner-inner__border-radius);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner-circle {\n  fill: var(--uxa-spinner-circle__fill);\n  fill-opacity: 0.3;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner-gradient {\n  stop-color: var(--uxa-spinner-gradient__stop-color);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-spinner-gradient-clip {\n  background: conic-gradient(from 160deg at 49.99% 49.99%, rgb(0, 89, 255) 211deg, rgba(26, 106, 255, 0.75) 174.45deg, rgba(26, 106, 255, 0.6) 196.02deg, rgba(26, 106, 255, 0.25) 240.82deg, rgba(26, 106, 255, 0) 291.6deg, rgb(0, 89, 255) 360deg) border-box;\n  background-clip: border-box;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n\n@keyframes uxa-spinner-animation {\n  0% {\n    transform: var(--uxa-spinner-inner__rotate-start);\n  }\n  100% {\n    transform: var(--uxa-spinner-inner__rotate-end);\n  }\n}";
styleInject(css_248z);
const Spinner = _a => {
    var { size = "medium", style } = _a, htmlProps = __rest(_a, ["size", "style"]);
    const uniqueId = useUniqueId("uxa-spinner");
    const isPresetSize = size === "medium" || size === "large";
    const cssSize = typeof size === "number" ? `${size}px` : size;
    const theme = useTheme();
    const isJato = theme === Theme.JatoLight || theme === Theme.JatoDark;
    return React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-spinner", {
            "uxa-large": isPresetSize && size === "large",
            "uxa-medium": isPresetSize && size === "medium"
        }),
        style: Object.assign(Object.assign({}, style), {
            "--uxa-spinner__size": isPresetSize ? undefined : cssSize
        })
    }, htmlProps)), React.createElement("div", {
        className: "uxa-spinner-container"
    }, isJato ? React.createElement("svg", {
        className: "uxa-spinner-inner",
        width: "73",
        height: "73",
        viewBox: "0 0 73 73",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
        d: "M36.5 8.79752C51.7874 8.79752 64.2025 21.2126 64.2025 36.5C64.2025 51.7874 51.7874 64.2025 36.5 64.2025C21.2126 64.2025 8.79753 51.7874 8.79753 36.5C8.79753 21.2126 21.2126 8.79752 36.5 8.79752ZM72.5 36.5C72.5 16.63 56.37 0.5 36.5 0.5C16.63 0.5 0.499999 16.63 0.499999 36.5C0.499999 56.37 16.63 72.5 36.5 72.5C56.37 72.5 72.5 56.37 72.5 36.5Z",
        fill: "#CFDCFC",
        style: {
            fill: "color(display-p3 0.8118 0.8627 0.9882)",
            fillOpacity: 1
        }
    }), React.createElement("clipPath", {
        id: `${uniqueId}-spinner-clip`
    }, React.createElement("path", {
        d: "M40.6488 4.64876C40.6488 2.35746 38.7913 0.5 36.5 0.5C16.63 0.5 0.500007 16.63 0.500007 36.5C0.500007 56.37 16.63 72.5 36.5 72.5C56.37 72.5 72.5 56.37 72.5 36.5C72.5 34.2087 70.6425 32.3512 68.3512 32.3512C66.0599 32.3512 64.2025 34.2087 64.2025 36.5C64.2025 51.7874 51.7874 64.2025 36.5 64.2025C21.2126 64.2025 8.79753 51.7874 8.79753 36.5C8.79753 21.2126 21.2126 8.79752 36.5 8.79752C38.7913 8.79752 40.6488 6.94006 40.6488 4.64876Z"
    })), React.createElement("foreignObject", {
        width: "73",
        height: "73",
        clipPath: `url(#${uniqueId}-spinner-clip)`
    }, React.createElement("div", {
        className: "uxa-spinner-gradient-clip"
    }))) : React.createElement("svg", {
        className: "uxa-spinner-inner",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("g", {
        clipPath: `url(#${uniqueId}-clip)`
    }, React.createElement("path", {
        className: "uxa-spinner-circle",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M32 10.6667C20.2179 10.6667 10.6667 20.2179 10.6667 32C10.6667 43.7821 20.2179 53.3333 32 53.3333C43.7821 53.3333 53.3333 43.7821 53.3333 32C53.3333 20.2179 43.7821 10.6667 32 10.6667ZM0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
    }), React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M46.9261 16.858C38.6231 8.55492 25.1611 8.55492 16.858 16.858C8.55492 25.1611 8.55492 38.6231 16.858 46.9261C18.9338 49.0019 18.9338 52.3674 16.858 54.4432C14.7822 56.5189 11.4167 56.5189 9.34097 54.4432C-3.11366 41.9885 -3.11366 21.7956 9.34097 9.34097C21.7956 -3.11366 41.9885 -3.11366 54.4432 9.34097C56.5189 11.4167 56.5189 14.7822 54.4432 16.858C52.3674 18.9338 49.0019 18.9338 46.9261 16.858Z",
        fill: `url(#${uniqueId}-paint)`
    })), React.createElement("defs", null, React.createElement("linearGradient", {
        id: `${uniqueId}-paint`,
        x1: "41.2884",
        y1: "3.70332",
        x2: "5.31534",
        y2: "37.2074",
        gradientUnits: "userSpaceOnUse"
    }, React.createElement("stop", {
        className: "uxa-spinner-gradient"
    }), React.createElement("stop", {
        className: "uxa-spinner-gradient",
        offset: "1",
        stopOpacity: "0"
    })), React.createElement("clipPath", {
        id: `${uniqueId}-clip`
    }, React.createElement("rect", {
        width: "64",
        height: "64",
        fill: "white"
    }))))));
};
/** Define the Prop Type information */
Spinner.propTypes = {
    /** Define the size of the spinner. */
    size: PropTypes__default.oneOfType([PropTypes__default.oneOf(["medium", "large"]), PropTypes__default.number, PropTypes__default.string])
};
export { Spinner as S };
