import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import PropTypes__default from "prop-types";
import * as React from "react";
import { s as styleInject } from "./style-inject.es.esm.js";
var css_248z = ":not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-app-layout,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-content-layout,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-app-content-layout {\n  display: grid;\n  grid-template-columns: var(--uxa-app-layout__grid_template-columns);\n  grid-template-rows: var(--uxa-app-layout__grid_template-rows);\n  width: 100%;\n  grid-template-areas: \"alerts alerts\" \"masthead masthead\" \"side-menu content\";\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-app-layout {\n  height: var(--uxa-app-layout__height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout-alerts {\n  grid-area: alerts;\n  grid-column: var(--uxa-app-layout-alerts__grid-column);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout-alerts:empty {\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout-masthead,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-content-layout-masthead {\n  grid-area: masthead;\n  display: flex;\n  flex-direction: column;\n  grid-column: var(--uxa-app-layout-masthead__grid-column);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout-side-menu,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-content-layout-side-menu {\n  grid-area: side-menu;\n  display: flex;\n  grid-column: var(--uxa-app-layout-side-menu__grid-column);\n  overflow-x: var(--uxa-app-layout__overflow-x);\n  overflow-y: var(--uxa-app-layout__overflow-y);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-layout-main-content,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-content-layout-main-content {\n  grid-area: content;\n  display: flex;\n  grid-column: var(--uxa-app-layout-main-content__grid-column);\n  overflow-x: var(--uxa-app-layout__overflow-x);\n  overflow-y: var(--uxa-app-layout__overflow-y);\n  color: var(--uxa-typography__color);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-app-content-layout,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-app-content-layout {\n  height: var(--uxa-app-content-layout__height);\n}";
styleInject(css_248z);
/**
 * The `<AppContentLayout>` component provides the ability to allow secondary navigation and/or side menu to appear on some routes
 * or have different items depending on the active route.
 */
const AppContentLayout = _a => {
    var { secondaryMasthead, sideNavigation, children } = _a, props = __rest(_a, ["secondaryMasthead", "sideNavigation", "children"]);
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-app-content-layout"
    }, props)), React.createElement("header", {
        className: "uxa-app-content-layout-masthead"
    }, secondaryMasthead), React.createElement("aside", {
        className: "uxa-app-content-layout-side-menu"
    }, sideNavigation), React.createElement("section", {
        className: "uxa-app-content-layout-main-content"
    }, children));
};
/** Define the Prop Type information */
AppContentLayout.propTypes = {
    /** The content to display in the secondary masthead region */
    secondaryMasthead: PropTypes__default.element
};
const AppLayout = _a => {
    var { masthead, secondaryMasthead, sideNavigation, alerts, children } = _a, props = __rest(_a, ["masthead", "secondaryMasthead", "sideNavigation", "alerts", "children"]);
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-app-layout"
    }, props)), React.createElement("div", {
        className: "uxa-app-layout-alerts"
    }, alerts), React.createElement("header", {
        className: "uxa-app-layout-masthead"
    }, masthead, secondaryMasthead), React.createElement("aside", {
        className: "uxa-app-layout-side-menu"
    }, sideNavigation), React.createElement("main", {
        className: "uxa-app-layout-main-content"
    }, children));
};
/** Define the Prop Type information */
AppLayout.propTypes = {
    /** The content to display in the masthead region */
    masthead: PropTypes__default.element,
    /** The content to display in the secondary masthead region */
    secondaryMasthead: PropTypes__default.element,
    /** The content to display in the alerts region */
    alerts: PropTypes__default.element
};
export { AppContentLayout, AppLayout };
