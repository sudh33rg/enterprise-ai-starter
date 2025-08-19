export { C as Combobox, a as ComboboxI18nContext, c as Select, S as SelectI18nContext, d as SelectOption, u as useComboboxI18n, b as useSelectI18n } from "./select-group.esm.js";
import * as React from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import "./_tslib.esm.js";
import "@react-aria/ssr";
import "@react-aria/utils";
import "./focus-key-manager.esm.js";
import "clsx";
import "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import "@react-aria/focus";
import "prop-types";
import "./style-inject.es.esm.js";
import "@react-aria/interactions";
import "react-dom";
import "./use-wrapped-input-id.esm.js";
import "./focusable-option.esm.js";
import "./validity-provider.esm.js";
import "./context.esm.js";
import "./zoom-out.esm2.js";
import "./prop-types.esm.js";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "@ux-aspects-universal/core/i18n";
import "./use-children.esm.js";
import "./react-element.esm.js";
import "./use-hidden-input-html-props.esm.js";
import "./zoom-out.esm.js";
import "@react-aria/overlays";
import "./use-controllable.esm.js";
import "./use-isomorphic-effect.esm.js";
import "./use-slots.esm.js";
import "./use-active-descendant-item.esm.js";
import "./use-intersection-observer.esm.js";
function useSelectOptionNavigator(ref) {
    const controllerRef = useRef();
    const [activeDescendant, setActiveDescendant] = useState(undefined);
    const onOpen = useCallback(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref]);
    useEffect(() => {
        var _a;
        const selectController = controllerRef.current;
        if (selectController) {
            (_a = selectController.activeDecendantRef.current) === null || _a === void 0 ? void 0 : _a.addActiveItemListener(setActiveDescendant);
        }
        return () => {
            var _a;
            (_a = selectController === null || selectController === void 0 ? void 0 : selectController.activeDecendantRef.current) === null || _a === void 0 ? void 0 : _a.removeActiveItemListener(setActiveDescendant);
        };
    }, []);
    useEffect(() => {
        // this is used to retain the reference after the component has unmounted
        const selectController = controllerRef.current;
        selectController === null || selectController === void 0 ? void 0 : selectController.addOpenListener(onOpen);
        return () => selectController === null || selectController === void 0 ? void 0 : selectController.removeOpenListener(onOpen);
    }, [onOpen]);
    return {
        navigatorProps: {
            "aria-activedescendant": activeDescendant,
            onKeyDown: event => {
                var _a;
                return (_a = controllerRef.current) === null || _a === void 0 ? void 0 : _a.onKeyDown(event);
            }
        },
        selectProps: {
            controllerRef: controllerRef
        }
    };
}
const SelectFeedback = ({ children }) => {
    return React.createElement("div", {
        className: "uxa-select-feedback"
    }, children);
};
const SelectGroup = ({ children }) => {
    return React.createElement("div", {
        className: "uxa-select-group"
    }, children);
};
const SelectGroupHeader = ({ children }) => {
    return React.createElement("div", {
        className: "uxa-select-group-header"
    }, children);
};
export { SelectFeedback, SelectGroup, SelectGroupHeader, useSelectOptionNavigator };
