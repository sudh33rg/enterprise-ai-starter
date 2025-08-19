import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import { u as useProductColor } from "./use-product-color.esm.js";
import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import PropTypes__default from "prop-types";
import { s as styleInject } from "./style-inject.es.esm.js";
import { i as isReactElement } from "./react-element.esm.js";
import "./reducer-provider.esm.js";
var css_248z$7 = "/**\n * Styling for a square product icon with configurable height.\n * https://www.figma.com/file/Kt3sh9BkLw7TxCP4BG0x51/Components-Light-V-1.0?node-id=11560%3A40451&t=rCT7T80LV1Pe7tK4-0\n */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  padding-inline: var(--uxa-product-icon__padding-inline);\n  height: var(--uxa-login-icon__size);\n  min-width: var(--uxa-login-icon__size);\n  background-color: var(--uxa-product-icon__background-color, var(--uxa-color__black));\n  color: var(--uxa-product-icon__color, var(--uxa-color__white));\n  font-size: var(--uxa-login-icon__font-size);\n  font-weight: var(--uxa-product-icon__font-weight);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-black,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-black {\n  --uxa-product-icon__background-color: var(--uxa-color__black);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-steelblue,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-steelblue {\n  --uxa-product-icon__background-color: var(--uxa-color__steelblue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-dark-blue,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-dark-blue {\n  --uxa-product-icon__background-color: var(--uxa-color__dark-blue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-cerulean,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-cerulean {\n  --uxa-product-icon__background-color: var(--uxa-color__cerulean);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-skyblue,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-skyblue {\n  --uxa-product-icon__background-color: var(--uxa-color__skyblue);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-aqua,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-aqua {\n  --uxa-product-icon__background-color: var(--uxa-color__aqua);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-aquamarine,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-aquamarine {\n  --uxa-product-icon__background-color: var(--uxa-color__aquamarine);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-lime,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-lime {\n  --uxa-product-icon__background-color: var(--uxa-color__lime);\n  --uxa-product-icon__color: var(--uxa-color__black);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-forest-green,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-icon.uxa-forest-green {\n  --uxa-product-icon__background-color: var(--uxa-color__forest-green);\n  --uxa-product-icon__color: var(--uxa-color__white);\n}";
styleInject(css_248z$7);
const LoginIcon = _a => {
    var { color } = _a, props = __rest(_a, ["color"]);
    const productColor = useProductColor(color);
    return React.createElement("div", Object.assign({}, mergeProps({
        role: "presentation",
        className: clsx("uxa-login-icon", productColor)
    }, props)));
};
/** Define the Prop Type information */
LoginIcon.propTypes = {
    color: PropTypes__default.oneOf(["black", "steelblue", "dark-blue", "cerulean", "skyblue", "aqua", "aquamarine", "lime", "forest-green"]).isRequired
};
var css_248z$6 = "/* Add focus outline and offset to an element */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-link {\n  font-family: var(--uxa-typography-link__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-link__font-weight);\n  font-size: var(--uxa-typography-link__font-size);\n  text-transform: var(--uxa-typography-link__text-transform);\n  color: var(--uxa-typography-link__color);\n  line-height: var(--uxa-typography-link__line-height);\n  -webkit-text-decoration: var(--uxa-login-link__text-decoration);\n          text-decoration: var(--uxa-login-link__text-decoration);\n  display: inline-flex;\n  align-items: center;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-link-separator {\n  display: inline-block;\n  width: var(--uxa-login-link-separator__width);\n  height: var(--uxa-login-link-separator__height);\n  border-radius: var(--uxa-login-link-separator__border-radius);\n  background-color: var(--uxa-login-link-separator__background-color);\n}";
styleInject(css_248z$6);
const LoginLink = forwardRef((props, ref) => {
    return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", Object.assign({
        ref: ref
    }, mergeProps(Object.assign({
        className: "uxa-login-link"
    }, props)))));
});
var css_248z$5 = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:empty,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop:empty {\n  background-blend-mode: var(--uxa-login-page-backdrop__blend-mode);\n  background: var(--uxa-login-page-backdrop__background);\n  background-repeat: no-repeat;\n  max-height: var(--uxa-login-page-backdrop__max-height);\n  background-size: contain;\n}\n\n@container login (max-width: 527px) {\n  :not(#\\9):not(#\\9):not(#\\9) :host:empty,\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop:empty {\n    --uxa-login-page-backdrop__background: var(--uxa-login-page-backdrop__background--sm);\n  }\n}\n@container login (min-width: 528px) and (max-width: 767px) {\n  :not(#\\9):not(#\\9):not(#\\9) :host:empty,\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop:empty {\n    --uxa-login-page-backdrop__background: var(--uxa-login-page-backdrop__background--md);\n    --uxa-login-page-backdrop__max-height: calc(100% - 90px);\n  }\n}\n@container login (min-width: 768px) and (max-width: 1023px) {\n  :not(#\\9):not(#\\9):not(#\\9) :host:empty,\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop:empty {\n    --uxa-login-page-backdrop__background: var(--uxa-login-page-backdrop__background--lg);\n    --uxa-login-page-backdrop__max-height: calc(100% - 90px);\n  }\n}\n@container login (min-width: 1024px) {\n  :not(#\\9):not(#\\9):not(#\\9) :host:empty,\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-backdrop:empty {\n    --uxa-login-page-backdrop__background: var(--uxa-login-page-backdrop__background--xl);\n    --uxa-login-page-backdrop__max-height: calc(100% - 56px);\n  }\n}";
styleInject(css_248z$5);
const LoginPageBackdrop = props => {
    return React.createElement("div", Object.assign({
        className: "uxa-login-page-backdrop"
    }, props));
};
/** Define the Prop Type information */
LoginPageBackdrop.propTypes = {};
var css_248z$4 = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page {\n  display: block;\n  position: relative;\n  width: var(--uxa-login-page__width);\n  height: var(--uxa-login-page__height);\n  background-color: var(--uxa-login-page__background-color);\n  container-name: login;\n  container-type: inline-size;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-content {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-footer {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  flex-direction: var(--uxa-login-footer__flex-direction);\n  color: var(--uxa-login-footer__color);\n  justify-content: space-between;\n  align-items: center;\n  padding-block: var(--uxa-login-footer__padding-block);\n  padding-inline: var(--uxa-login-footer__padding-inline);\n  gap: var(--uxa-login-footer__gap);\n  text-wrap: balance;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-footer-leading {\n  text-align: center;\n  font-size: var(--uxa-login-footer-leading__font-size);\n  line-height: var(--uxa-login-footer-leading__line-height);\n  font-weight: var(--uxa-login-footer-leading__font-weight);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-footer-trailing {\n  display: flex;\n  align-items: center;\n  font-size: var(--uxa-login-footer-trailing__font-size);\n  line-height: var(--uxa-login-footer-trailing__line-height);\n  font-weight: var(--uxa-login-footer-trailing__font-weight);\n  gap: var(--uxa-login-footer-trailing__gap);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n@container login (min-width: 1024px) {\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-page-footer {\n    --uxa-login-footer__flex-direction: var(--uxa-login-footer__flex-direction--lg);\n  }\n}";
styleInject(css_248z$4);
const LoginPage = ({ width = "100vw", height = "100vh", backdrop = React.createElement(LoginPageBackdrop, null), leadingFooter, trailingFooter, children }) => {
    // the trailing footer may be a fragment, if it is we need extract the children
    // so we can add a separator between each item
    if (trailingFooter && isReactElement(trailingFooter) && trailingFooter.type === React.Fragment) {
        trailingFooter = trailingFooter.props.children;
    }
    return React.createElement("div", {
        className: "uxa-login-page",
        style: {
            width,
            height
        }
    }, backdrop, React.createElement("div", {
        className: "uxa-login-page-content"
    }, children), React.createElement("div", {
        className: "uxa-login-page-footer"
    }, React.createElement("div", {
        className: "uxa-login-page-footer-leading"
    }, leadingFooter), React.createElement("div", {
        className: "uxa-login-page-footer-trailing"
    }, 
    // we need to add a separator between each trailing footer item
    React.Children.map(trailingFooter, (child, index) => React.createElement(React.Fragment, {
        key: index
    }, child, index < React.Children.count(trailingFooter) - 1 && React.createElement("span", {
        className: "uxa-login-link-separator"
    }))))));
};
/** Define the Prop Type information */
LoginPage.propTypes = {
    /** Width of the container as a CSS value. Default: 100vw. */
    width: PropTypes__default.string,
    /** Height of the container as a CSS value. Default: 100vh. */
    height: PropTypes__default.string,
    /** The backdrop to display behind the login panel. */
    backdrop: PropTypes__default.element
};
var css_248z$3 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-panel {\n  display: grid;\n  grid-template-areas: var(--uxa-login-panel__grid-template-areas);\n  gap: var(--uxa-login-panel__gap);\n  width: var(--uxa-login-panel__width);\n  height: var(--uxa-login-panel__height);\n  background-color: var(--uxa-login-panel__background-color);\n  margin-inline: auto;\n  margin-block: auto;\n  box-shadow: var(--uxa-login-panel__box-shadow);\n  border: var(--uxa-login-panel__border);\n  border-radius: var(--uxa-login-panel__border-radius);\n  padding-inline: var(--uxa-login-panel__padding-inline);\n  padding-block: var(--uxa-login-panel__padding-block);\n  -webkit-backdrop-filter: var(--uxa-login-panel__backdrop-filter);\n          backdrop-filter: var(--uxa-login-panel__backdrop-filter);\n  box-sizing: border-box;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-icon {\n  grid-area: icon;\n  display: var(--uxa-login-area-icon__display, block);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-icon:empty {\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-language-select {\n  grid-area: language;\n  justify-self: var(--uxa-login-language-select__justify-self, end);\n  --uxa-button__icon-size: var(--uxa-login-language-select__size);\n  --uxa-button__color--flat-secondary: var(--uxa-login-language-select__color);\n  --uxa-button__padding-inline--flat: var(--uxa-login-language-select__padding-inline--flat);\n  --uxa-button__padding-block--flat: var(--uxa-login-language-select__padding-block--flat);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-language-select:empty {\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-title {\n  grid-area: title;\n  margin-block-end: var(--uxa-login-area-title__margin-block-end);\n  margin-block-start: var(--uxa-login-area-title__margin-block-start, 0);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-form {\n  grid-area: form;\n  margin-block-start: var(--uxa-login-area-form__margin-block-start, 0);\n  margin-block-end: var(--uxa-login-area-form__margin-block-end);\n  --uxa-text-input__background-color: var(--uxa-login-form-action-group__background-color);\n  --uxa-typography-link__font-size: var(--uxa-login-form-action-group__font-size);\n  --uxa-checkbox-label__color: var(\n    --uxa-login-form-action-group__color,\n    var(--uxa-typography-color__body)\n  );\n  --uxa-checkbox-label__font-size: var(--uxa-login-form-action-group__font-size);\n  --uxa-form-action-group__justify-content: stretch;\n  --uxa-form-action-group__margin-block-start: var(\n    --uxa-login-form-action-group__margin-block-start\n  );\n  --uxa-button__background-color--primary: var(--uxa-login-button__background-color);\n  --uxa-button__font-weight: var(--uxa-login-button__font-weight);\n  --uxa-button__height--large: var(--uxa-login-button__height);\n  --uxa-button__background-color--primary-hover: var(--uxa-login-button__background-color--hover);\n  --uxa-button__background-color--primary-active: var(--uxa-login-button__background-color--active);\n  --uxa-button__border-color--primary-active: var(--uxa-login-button__border-color--active);\n  --uxa-button__background-color--primary-disabled: var(\n    --uxa-login-button__background-color--disabled\n  );\n  --uxa-button__border-color--primary-disabled: var(--uxa-login-button__border-color--disabled);\n  --uxa-button__color--primary-disabled: var(--uxa-login-button__color--disabled);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-brand {\n  grid-area: brand;\n  align-self: center;\n  color: var(--uxa-login-brand-image__color);\n  display: var(--uxa-login-brand-image__display);\n  --uxa-logo__width: var(--uxa-login-brand-image__width);\n  --uxa-logo__height: var(--uxa-login-brand-image__height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-links {\n  grid-area: links;\n  align-self: center;\n  justify-self: end;\n  font-size: var(--uxa-login-area-links__font-size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-links:empty {\n  display: none;\n}\n\n@container login (min-width: 527px) {\n  :host:not(#\\9):not(#\\9):not(#\\9),\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-panel {\n    width: var(--uxa-login-panel__width--md);\n  }\n}\n@container login (min-width: 1024px) {\n  :host:not(#\\9):not(#\\9):not(#\\9),\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-panel {\n    width: var(--uxa-login-panel__width--lg);\n  }\n}\n@container login (max-width: 527px) {\n  :host:not(#\\9):not(#\\9):not(#\\9),\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-panel {\n    width: var(--uxa-login-panel__width--sm);\n    background-color: var(--uxa-login-panel__background-color--sm);\n    border-radius: var(--uxa-login-panel__border-radius--sm);\n    box-shadow: var(--uxa-login-panel__box-shadow--sm);\n    margin-block-start: var(--uxa-login-panel__margin-block-start--sm);\n  }\n  :not(#\\9):not(#\\9):not(#\\9) .uxa-login-area-form {\n    --uxa-form-action-group__margin-block-start: 56px;\n  }\n}";
styleInject(css_248z$3);
const LoginPanel = ({ icon, links, languageSelect, productTitle, brandImage, children }) => {
    return React.createElement("div", {
        className: "uxa-login-panel"
    }, React.createElement("div", {
        className: "uxa-login-area-icon"
    }, icon), React.createElement("div", {
        className: "uxa-login-area-language-select"
    }, languageSelect), React.createElement("div", {
        className: "uxa-login-area-title"
    }, productTitle), React.createElement("div", {
        className: "uxa-login-area-form"
    }, children), React.createElement("div", {
        className: "uxa-login-area-brand"
    }, brandImage), React.createElement("div", {
        className: "uxa-login-area-links"
    }, links));
};
/** Define the Prop Type information */
LoginPanel.propTypes = {
    /** The product icon. */
    icon: PropTypes__default.element,
    /** The product title. */
    productTitle: PropTypes__default.element,
    /** The brand logo. */
    brandImage: PropTypes__default.element,
    /** The language selector. */
    languageSelect: PropTypes__default.element,
    /** Informational links. */
    links: PropTypes__default.element
};
var css_248z$2 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n/* Add focus outline and offset to an element */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-title {\n  font-family: var(--uxa-login-title__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-login-title__font-weight);\n  font-size: var(--uxa-login-title__font-size);\n  text-transform: var(--uxa-login-title__text-transform);\n  color: var(--uxa-login-title__color);\n  line-height: var(--uxa-login-title__line-height);\n  letter-spacing: var(--uxa-login-title__letter-spacing);\n  margin-inline: var(--uxa-login-title__margin-inline);\n  margin-block: var(--uxa-login-title__margin-block);\n}";
styleInject(css_248z$2);
const LoginTitle = forwardRef((props, ref) => {
    return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    React.createElement("h1", Object.assign({
        ref: ref
    }, mergeProps(Object.assign({
        className: "uxa-login-title"
    }, props)))));
});
var css_248z$1 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n/* Add focus outline and offset to an element */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-title-secondary {\n  font-family: var(--uxa-login-title-secondary__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-login-title-secondary__font-weight);\n  font-size: var(--uxa-login-title-secondary__font-size);\n  text-transform: var(--uxa-login-title-secondary__text-transform);\n  color: var(--uxa-login-title-secondary__color);\n  line-height: var(--uxa-login-title-secondary__line-height);\n  opacity: var(--uxa-login-title-secondary__opacity, 1);\n  letter-spacing: var(--uxa-login-title-secondary__letter-spacing);\n  margin-block: var(--uxa-login-title-secondary__margin-block);\n  margin-inline: var(--uxa-login-title-secondary__margin-inline);\n}";
styleInject(css_248z$1);
const LoginTitleSecondary = forwardRef((props, ref) => {
    return React.createElement("p", Object.assign({
        ref: ref
    }, mergeProps(Object.assign({
        className: "uxa-login-title-secondary"
    }, props))));
});
var css_248z = "/* Add focus outline and offset to an element */\n:host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-login-version {\n  text-transform: var(--uxa-login-version__text-transform);\n  color: var(--uxa-login-version__color);\n  opacity: var(--uxa-login-version__opacity, 1);\n  line-height: var(--uxa-login-version__line-height);\n  font-weight: var(--uxa-login-version__font-weight);\n  font-family: var(--uxa-login-version__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-login-version__font-size);\n  letter-spacing: var(--uxa-login-version__letter-spacing);\n  margin-inline: var(--uxa-login-version__margin-inline);\n  margin-block: var(--uxa-login-version__margin-block);\n  margin-block-start: var(--uxa-login-version__margin-block-start);\n}";
styleInject(css_248z);
const LoginVersion = ({ children }) => {
    return React.createElement("p", {
        className: "uxa-login-version"
    }, children);
};
export { LoginIcon, LoginLink, LoginPage, LoginPageBackdrop, LoginPanel, LoginTitle, LoginTitleSecondary, LoginVersion };
