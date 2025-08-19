export { M as Menu, c as MenuDivider, a as MenuItem, b as MenuToggleItem, u as useMenuTrigger } from "./menu-divider.esm.js";
import { mergeProps } from "@react-aria/utils";
import * as React from "react";
import "./use-controllable.esm.js";
import "clsx";
import "./_tslib.esm.js";
import "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import "@react-aria/focus";
import "@react-aria/interactions";
import "@ux-aspects-universal/core/popover";
import "./focus-key-manager.esm.js";
import "prop-types";
import "./style-inject.es.esm.js";
import "react-dom";
import "./direction.esm.js";
import "./use-mutation-observer.esm.js";
import "./use-isomorphic-effect.esm.js";
import "./use-outside-click.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import "./use-active-theme.esm.js";
import "@react-aria/overlays";
import "./zoom-out.esm.js";
import "./prop-types.esm.js";
import "./use-tabbable.esm.js";
const MenuGroup = props => {
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-menu-group"
    }, props)));
};
const MenuGroupHeader = props => {
    return React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-menu-group-header"
    }, props)));
};
export { MenuGroup, MenuGroupHeader };
