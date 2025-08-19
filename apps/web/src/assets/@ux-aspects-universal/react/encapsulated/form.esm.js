import { F as FormField } from "./focusable-option.esm.js";
export { d as FocusableControlProvider, a as Form, b as FormFieldFeedback, c as FormFieldLabel, R as RequiredIndicator, e as useFocusableControl, u as useFocusableControlContext } from "./focusable-option.esm.js";
import { _ as __rest } from "./_tslib.esm.js";
import { mergeProps } from "@react-aria/utils";
import * as React from "react";
import { Children } from "react";
import { a as isReactElementType } from "./react-element.esm.js";
import clsx from "clsx";
import "./reducer-provider.esm.js";
import "prop-types";
import "./style-inject.es.esm.js";
import "./validity-provider.esm.js";
import "./context.esm.js";
const FormActionGroup = _a => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-form-action-group"
    }, props)), children);
};
const FormFieldGroup = _a => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const withLabels = containsFormField(children);
    return React.createElement("div", Object.assign({}, mergeProps({
        role: "group",
        className: clsx("uxa-form-field-group", {
            "uxa-with-labels": withLabels
        })
    }, props)), children);
};
function containsFormField(children) {
    return Children.toArray(children).some(node => isReactElementType(node, FormField));
}
const FormFieldGroupLabel = _a => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-form-field-group-label"
    }, props)), children);
};
export { FormActionGroup, FormField, FormFieldGroup, FormFieldGroupLabel };
