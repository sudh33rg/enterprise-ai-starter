import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import PropTypes__default from "prop-types";
import * as React from "react";
import { forwardRef, createElement } from "react";
import { s as styleInject } from "./style-inject.es.esm.js";
import clsx from "clsx";
function useTypographyStyles(_a) {
    var { color, fontSize, fontWeight, style } = _a, otherProps = __rest(_a, ["color", "fontSize", "fontWeight", "style"]);
    style = mergeProps({
        color,
        fontSize,
        fontWeight
    }, style !== null && style !== void 0 ? style : {});
    return [style, otherProps];
}
var css_248z = "/* Add focus outline and offset to an element */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-1,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-1 {\n  font-family: var(--uxa-typography-heading-1__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-1__font-weight);\n  font-size: var(--uxa-typography-heading-1__font-size);\n  text-transform: var(--uxa-typography-heading-1__text-transform);\n  color: var(--uxa-typography-heading-1__color);\n  line-height: var(--uxa-typography-heading-1__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-2,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-2 {\n  font-family: var(--uxa-typography-heading-2__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-2__font-weight);\n  font-size: var(--uxa-typography-heading-2__font-size);\n  text-transform: var(--uxa-typography-heading-2__text-transform);\n  color: var(--uxa-typography-heading-2__color);\n  line-height: var(--uxa-typography-heading-2__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-3,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-3 {\n  font-family: var(--uxa-typography-heading-3__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-3__font-weight);\n  font-size: var(--uxa-typography-heading-3__font-size);\n  text-transform: var(--uxa-typography-heading-3__text-transform);\n  color: var(--uxa-typography-heading-3__color);\n  line-height: var(--uxa-typography-heading-3__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-4,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-4 {\n  font-family: var(--uxa-typography-heading-4__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-4__font-weight);\n  font-size: var(--uxa-typography-heading-4__font-size);\n  text-transform: var(--uxa-typography-heading-4__text-transform);\n  color: var(--uxa-typography-heading-4__color);\n  line-height: var(--uxa-typography-heading-4__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-5,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-5 {\n  font-family: var(--uxa-typography-heading-5__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-5__font-weight);\n  font-size: var(--uxa-typography-heading-5__font-size);\n  text-transform: var(--uxa-typography-heading-5__text-transform);\n  color: var(--uxa-typography-heading-5__color);\n  line-height: var(--uxa-typography-heading-5__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-heading-6,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-heading-6 {\n  font-family: var(--uxa-typography-heading-6__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-6__font-weight);\n  font-size: var(--uxa-typography-heading-6__font-size);\n  text-transform: var(--uxa-typography-heading-6__text-transform);\n  color: var(--uxa-typography-heading-6__color);\n  line-height: var(--uxa-typography-heading-6__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-body,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-body {\n  font-family: var(--uxa-typography-body__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body__font-weight);\n  font-size: var(--uxa-typography-body__font-size);\n  text-transform: var(--uxa-typography-body__text-transform);\n  color: var(--uxa-typography-body__color);\n  line-height: var(--uxa-typography-body__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-body-small,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-body-small {\n  font-family: var(--uxa-typography-body-small__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body-small__font-weight);\n  font-size: var(--uxa-typography-body-small__font-size);\n  text-transform: var(--uxa-typography-body-small__text-transform);\n  color: var(--uxa-typography-body-small__color);\n  line-height: var(--uxa-typography-body-small__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-body-large,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-body-large {\n  font-family: var(--uxa-typography-body-large__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body-large__font-weight);\n  font-size: var(--uxa-typography-body-large__font-size);\n  text-transform: var(--uxa-typography-body-large__text-transform);\n  color: var(--uxa-typography-body-large__color);\n  line-height: var(--uxa-typography-body-large__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-label,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-label {\n  font-family: var(--uxa-typography-label__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-label__font-weight);\n  font-size: var(--uxa-typography-label__font-size);\n  text-transform: var(--uxa-typography-label__text-transform);\n  color: var(--uxa-typography-label__color);\n  line-height: var(--uxa-typography-label__line-height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link {\n  font-family: var(--uxa-typography-link__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-link__font-weight);\n  font-size: var(--uxa-typography-link__font-size);\n  text-transform: var(--uxa-typography-link__text-transform);\n  color: var(--uxa-typography-link__color);\n  line-height: var(--uxa-typography-link__line-height);\n  -webkit-text-decoration: var(--uxa-typography-link__text-decoration);\n          text-decoration: var(--uxa-typography-link__text-decoration);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:hover,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:hover {\n  color: var(--uxa-typography-link__color--hover);\n  opacity: var(--uxa-typography-link__opacity--hover);\n  -webkit-text-decoration: var(--uxa-typography-link__text-decoration--hover);\n          text-decoration: var(--uxa-typography-link__text-decoration--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:focus-visible,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:focus-visible {\n  border-radius: var(--uxa-typography-link__border-radius--focus);\n  z-index: 1;\n  outline-offset: var(--uxa-typography-link__outline-offset--focus);\n  outline: var(--uxa-typography-link__outline-color--focus) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:active,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:active {\n  color: var(--uxa-typography-link__color--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:visited,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:visited {\n  color: var(--uxa-typography-link__color--visited);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:visited:hover,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:visited:hover {\n  color: var(--uxa-typography-link__color--visited-hover);\n  -webkit-text-decoration: var(--uxa-typography-link__text-decoration--visited-hover);\n          text-decoration: var(--uxa-typography-link__text-decoration--visited-hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-typography-link:visited:active,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-typography-link:visited:active {\n  color: var(--uxa-typography-link__color--visited-active);\n}";
styleInject(css_248z);
const Heading = forwardRef((_a, ref) => {
    var { level } = _a, props = __rest(_a, ["level"]);
    const [style, otherProps] = useTypographyStyles(props);
    return createElement(`h${level}`, mergeProps({
        style,
        className: `uxa-typography-heading-${level}`,
        ref
    }, otherProps));
});
Heading.propTypes = {
    /** Define the heading size. */
    level: PropTypes__default.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    /** Define the type of element. */
    color: PropTypes__default.string,
    /** Define the text size. */
    fontSize: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
    /** Define the text weight. */
    fontWeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
const InlineText = forwardRef((_a, ref) => {
    var { is, size, children } = _a, props = __rest(_a, ["is", "size", "children"]);
    const component = is || "span";
    const [style, otherProps] = useTypographyStyles(props);
    const className = clsx({
        "uxa-typography-body": !size || size === "medium",
        "uxa-typography-body-small": size === "small",
        "uxa-typography-body-large": size === "large"
    });
    return React.createElement(component, mergeProps({
        style,
        className,
        ref
    }, otherProps), children);
});
InlineText.propTypes = {
    /** Define the text size. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** Define the text color. */
    color: PropTypes__default.string,
    /** Define the text size. */
    fontSize: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
    /** Define the text weight. */
    fontWeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
const Label = forwardRef((_a, ref) => {
    var { is, children } = _a, props = __rest(_a, ["is", "children"]);
    const component = is || "label";
    const [style, otherProps] = useTypographyStyles(props);
    return React.createElement(component, mergeProps({
        style,
        className: "uxa-typography-label",
        ref
    }, otherProps), children);
});
Label.propTypes = {
    /** Define the text color. */
    color: PropTypes__default.string,
    /** Define the text size. */
    fontSize: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
    /** Define the text weight. */
    fontWeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
const Link = forwardRef((_a, ref) => {
    var { is, children } = _a, props = __rest(_a, ["is", "children"]);
    const component = is || "a";
    const [style, otherProps] = useTypographyStyles(props);
    return React.createElement(component, mergeProps({
        style,
        className: "uxa-typography-link",
        ref
    }, otherProps), children);
});
Link.propTypes = {
    /** Define the text color. */
    color: PropTypes__default.string,
    /** Define the text size. */
    fontSize: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
    /** Define the text weight. */
    fontWeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
const Text = forwardRef((_a, ref) => {
    var { is, size, children } = _a, props = __rest(_a, ["is", "size", "children"]);
    const component = is || "p";
    const [style, otherProps] = useTypographyStyles(props);
    const className = clsx({
        "uxa-typography-body": !size || size === "medium",
        "uxa-typography-body-small": size === "small",
        "uxa-typography-body-large": size === "large"
    });
    return React.createElement(component, mergeProps({
        style,
        className,
        ref
    }, otherProps), children);
});
Text.propTypes = {
    /** Define the text size. */
    size: PropTypes__default.oneOf(["small", "medium", "large"]),
    /** Define the text color. */
    color: PropTypes__default.string,
    /** Define the text size. */
    fontSize: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
    /** Define the text weight. */
    fontWeight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
export { Heading, InlineText, Label, Link, Text };
