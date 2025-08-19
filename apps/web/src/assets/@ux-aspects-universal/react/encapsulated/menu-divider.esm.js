import * as React from "react";
import { useRef, useEffect, createContext, useContext, useState, useCallback, forwardRef } from "react";
import { u as useControlled } from "./use-controllable.esm.js";
import { mergeProps } from "@react-aria/utils";
import clsx from "clsx";
import { _ as __rest } from "./_tslib.esm.js";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { useFocusWithin } from "@react-aria/interactions";
import { getArrowPosition } from "@ux-aspects-universal/core/popover";
import { c as FocusKeyManager } from "./focus-key-manager.esm.js";
import { u as useDirection } from "./direction.esm.js";
import { u as useIsomorphicEffect } from "./use-isomorphic-effect.esm.js";
import { u as useOnClickOutside } from "./use-outside-click.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import { u as useThemeFamily } from "./use-active-theme.esm.js";
import PropTypes__default from "prop-types";
import { useOverlayPosition } from "@react-aria/overlays";
import { s as styleInject } from "./style-inject.es.esm.js";
import { f as ChevronSmallRightIcon } from "./zoom-out.esm.js";
import { b as useTabbable } from "./use-tabbable.esm.js";
function useMenuTrigger(options = {}) {
    var _a, _b;
    const [isOpen, setIsOpen] = useControlled(options.isOpen, options.onOpenChange, false);
    const internalRef = useRef(null);
    const menuId = useUniqueId("menu", options.menuId);
    const triggerId = useUniqueId("menu-trigger", options.triggerId);
    // If the user doesn't provide a ref, we'll use our own, we can't use the hook inline as hooks can't be conditionally called
    const triggerRef = (_a = options.triggerRef) !== null && _a !== void 0 ? _a : internalRef;
    const anchorRef = (_b = options.anchorRef) !== null && _b !== void 0 ? _b : triggerRef;
    const triggerProps = {
        id: triggerId,
        "aria-haspopup": true,
        "aria-controls": menuId,
        "aria-expanded": isOpen !== null && isOpen !== void 0 ? isOpen : false,
        ref: triggerRef,
        onClick: () => setIsOpen(!isOpen),
        onKeyDown: event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsOpen(!isOpen);
            }
        }
    };
    const menuProps = {
        id: menuId,
        "aria-labelledby": triggerId,
        triggerRef,
        anchorRef,
        isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
        onClose: event => {
            // if there is an event, check if the target or the related target is the trigger element, if so, don't close the menu
            // as it will be handled by the trigger click event
            if (event && (event.target === triggerRef.current || event.relatedTarget === triggerRef.current)) {
                return;
            }
            setIsOpen(false);
        }
    };
    return {
        isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
        setIsOpen,
        triggerProps,
        menuProps
    };
}
/**
 * Extract the logic for the menu position
 */
function useMenuPlacement(menuRef, anchorRef, alignment = "start", placement = "below", hasArrow = true, isOpen = false, onClose, offsetX = 0, offsetY = 0) {
    var _a, _b;
    const direction = useDirection();
    const menuPlacement = usePlacement(direction, alignment, placement);
    // use React Aria overlay utils to determine the position of the menu
    const { overlayProps, updatePosition } = useOverlayPosition({
        overlayRef: menuRef,
        targetRef: anchorRef,
        isOpen,
        onClose,
        placement: menuPlacement,
        shouldFlip: true
    });
    // this will ensure the menu is positioned correctly once it is rendered
    // in the DOM, otherwise it can flicker as it shifts to the correct position
    useIsomorphicEffect(updatePosition, [updatePosition]);
    // apply the classes based on the position of the menu
    const className = clsx({
        "uxa-align-start": alignment === "start",
        "uxa-align-end": alignment === "end",
        "uxa-placement-below": (_a = overlayProps.style) === null || _a === void 0 ? void 0 : _a.top,
        "uxa-placement-above": (_b = overlayProps.style) === null || _b === void 0 ? void 0 : _b.bottom,
        "uxa-with-arrow": hasArrow
    });
    // if there is any offset to apply do so with translate.
    // react-aria does support offsets, but surprise surprise it doesn't work well in some cases... so we do it ourselves
    // using transforms to match how the Angular CDK does it
    if (offsetX || offsetY) {
        overlayProps.style = Object.assign(Object.assign({}, overlayProps.style), {
            transform: `translate(${direction === "rtl" ? -offsetX : offsetX}px, ${offsetY}px)`
        });
    }
    // if the direction of the document changes we should update the menu position
    useEffect(updatePosition, [updatePosition, direction]);
    return Object.assign(Object.assign({}, overlayProps), {
        className
    });
}
/** Convert our alignment and placement props into the format expected by React Aria */
function usePlacement(direction, alignment, placement) {
    let xAxis;
    switch (alignment) {
        case "start":
            xAxis = direction === "ltr" ? "left" : "right";
            break;
        case "end":
            xAxis = direction === "ltr" ? "right" : "left";
            break;
    }
    const yAxis = placement === "above" ? "top" : "bottom";
    return `${yAxis} ${xAxis}`;
}
const MenuProvider = createContext({});
function useMenu() {
    return useContext(MenuProvider);
}
var css_248z$8 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  padding-inline: var(--uxa-menu__padding-inline);\n  padding-block: var(--uxa-menu__padding-block);\n  min-width: var(--uxa-menu__min-width);\n  filter: var(--uxa-menu__filter);\n  box-shadow: var(--uxa-menu__box-shadow);\n  border-radius: var(--uxa-menu__border-radius);\n  border: var(--uxa-menu__border);\n  background-color: var(--uxa-menu__background-color);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--4);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--4);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--4);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-with-arrow .uxa-menu-arrow-background, :not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-with-arrow .uxa-menu-arrow-foreground {\n  display: block;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-below.uxa-with-arrow {\n  margin-block-start: var(--uxa-menu-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-below.uxa-with-arrow .uxa-menu-arrow-background {\n  top: calc(var(--uxa-menu-arrow__size) * -1);\n  border-inline-start: var(--uxa-menu-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-menu-arrow__size) solid transparent;\n  border-bottom: var(--uxa-menu-arrow__size) solid var(--uxa-menu__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-below.uxa-with-arrow .uxa-menu-arrow-foreground {\n  top: calc(var(--uxa-menu-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid var(--uxa-menu__background-color);\n  transform: translateY(var(--uxa-menu__border-width));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-above.uxa-with-arrow {\n  margin-block-end: var(--uxa-menu-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-above.uxa-with-arrow .uxa-menu-arrow-background {\n  bottom: calc(var(--uxa-menu-arrow__size) * -1);\n  border-inline-start: var(--uxa-menu-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-menu-arrow__size) solid transparent;\n  border-top: var(--uxa-menu-arrow__size) solid var(--uxa-menu__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-above.uxa-with-arrow .uxa-menu-arrow-foreground {\n  bottom: calc(var(--uxa-menu-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-top: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid var(--uxa-menu__background-color);\n  transform: translateY(calc(var(--uxa-menu__border-width) * -1));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-before.uxa-with-arrow {\n  margin-inline-end: var(--uxa-menu-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-before.uxa-with-arrow .uxa-menu-arrow-background {\n  border-top: var(--uxa-menu-arrow__size) solid transparent;\n  border-bottom: var(--uxa-menu-arrow__size) solid transparent;\n  border-inline-start: var(--uxa-menu-arrow__size) solid var(--uxa-menu__border-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-before.uxa-with-arrow .uxa-menu-arrow-foreground {\n  border-top: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-inline-start: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid var(--uxa-menu__background-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-after.uxa-with-arrow {\n  margin-inline-start: var(--uxa-menu-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-after.uxa-with-arrow .uxa-menu-arrow-background {\n  border-top: var(--uxa-menu-arrow__size) solid transparent;\n  border-bottom: var(--uxa-menu-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-menu-arrow__size) solid var(--uxa-menu__border-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu.uxa-placement-after.uxa-with-arrow .uxa-menu-arrow-foreground {\n  border-top: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-menu-arrow__size) - var(--uxa-menu__border-width)) solid var(--uxa-menu__background-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--after);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-arrow-background,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-arrow-foreground {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-submenu {\n  margin-inline: var(--uxa-menu-submenu__margin-inline);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-content,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: var(--uxa-menu-content__min-width, var(--uxa-menu__min-width));\n  gap: var(--uxa-menu-content__gap);\n  overflow: auto;\n}";
styleInject(css_248z$8);
const Menu = _a => {
    var _b;
    var { isOpen, onClose, placement = "below", alignment = "start", hasArrow, triggerRef, anchorRef, offsetX, offsetY, closeOnBlur = true, children } = _a, props = __rest(_a, ["isOpen", "onClose", "placement", "alignment", "hasArrow", "triggerRef", "anchorRef", "offsetX", "offsetY", "closeOnBlur", "children"]);
    const { isJato } = useThemeFamily();
    // the arrow should be hidden by default in a JATO theme
    hasArrow !== null && hasArrow !== void 0 ? hasArrow : hasArrow = !isJato;
    // if no offest is provided, default to 0 unless in JATO theme in which case default to 4
    offsetY !== null && offsetY !== void 0 ? offsetY : offsetY = isJato ? 4 : 0;
    // this is only required to force an update in storybook as there can be a slight dely causing screenshot tests to fail
    const direction = useDirection();
    const menuRef = useRef(null);
    const arrowBg = useRef(null);
    const arrowFg = useRef(null);
    const menuPlacement = useMenuPlacement(menuRef, anchorRef !== null && anchorRef !== void 0 ? anchorRef : triggerRef, alignment, placement, hasArrow, isOpen, onClose, offsetX, offsetY);
    // close the menu if the escape key is pressed
    const onKeyDown = event => {
        if (event.key === "Escape") {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    };
    // close the menu when clicking outside the menu but not within the trigger element
    useOnClickOutside(menuRef, event => {
        var _a;
        if (isOpen && triggerRef.current !== event.target && !((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            onClose === null || onClose === void 0 ? void 0 : onClose(event);
        }
    });
    const { focusWithinProps } = useFocusWithin({
        onBlurWithin: event => {
            if (closeOnBlur === true) {
                onClose === null || onClose === void 0 ? void 0 : onClose(event);
            }
        }
    });
    const [arrowBgStyle, setArrowBgStyle] = useState({});
    const [arrowFgStyle, setArrowFgStyle] = useState({});
    useIsomorphicEffect(() => {
        if (!isOpen || !hasArrow || !triggerRef.current || !menuRef.current || !arrowBg.current || !arrowFg.current) {
            return;
        }
        const { arrowBgStyle: bgStyle, arrowFgStyle: fgStyle } = getArrowPosition(triggerRef.current, menuRef.current, arrowBg.current, arrowFg.current, placement, alignment);
        setArrowBgStyle(bgStyle);
        setArrowFgStyle(fgStyle);
    }, [alignment, hasArrow, isOpen, placement, triggerRef.current, menuRef.current, arrowBg.current, arrowFg.current, direction]);
    return React.createElement(MenuProvider.Provider, {
        value: {
            onClose
        }
    }, isOpen && React.createElement(FocusScope, {
        restoreFocus: true
    }, React.createElement(FocusKeyManager, {
        wrap: true,
        autoFocus: true
    }, React.createElement("div", Object.assign({
        ref: menuRef,
        role: "menu",
        "data-overlay": true
    }, mergeProps(menuPlacement, props, Object.assign({
        className: "uxa-menu",
        onKeyDown,
        style: Object.assign(Object.assign(Object.assign({}, menuPlacement.style), props.style), {
            "--uxa-menu-content__min-width": (_b = props.style) === null || _b === void 0 ? void 0 : _b.minWidth
        })
    }, focusWithinProps))), React.createElement("div", {
        ref: arrowBg,
        className: "uxa-menu-arrow-background",
        style: arrowBgStyle
    }), React.createElement("div", {
        ref: arrowFg,
        className: "uxa-menu-arrow-foreground",
        style: arrowFgStyle
    }), React.createElement("div", {
        className: "uxa-menu-content"
    }, children)))));
};
/** Define the Prop Type information */
Menu.propTypes = {
    /** The element used to trigger menu. The menu will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** The element used to anchor the menu. The menu will be positioned relative to this element. */
    anchorRef: PropTypes__default.any,
    /** Determine if the menu is open or closed. */
    isOpen: PropTypes__default.bool,
    /** Where the Menu is positioned vertically relative to the trigger. */
    placement: PropTypes__default.oneOf(["above", "below"]),
    /** Where the Menu is positioned horizontally relative to the trigger. */
    alignment: PropTypes__default.oneOf(["start", "end"]),
    /** Whether the menu should include a callout arrow. */
    hasArrow: PropTypes__default.bool,
    /** Emits when the menu is closed. */
    onClose: PropTypes__default.func,
    /** The horizontal offset of the menu relative to the trigger. */
    offsetX: PropTypes__default.number,
    /** The vertical offset of the menu relative to the trigger. */
    offsetY: PropTypes__default.number,
    /** Whether the menu should close when the user tabs out of the menu. */
    closeOnBlur: PropTypes__default.bool
};
var css_248z$7 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-menu-group,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n  flex-direction: column;\n}";
styleInject(css_248z$7);
var css_248z$6 = "/**\n * Menus and Select components can have group headers.\n * The styling for these can be shared across components\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-group-header,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: flex;\n  padding-inline: var(--uxa-menu-group-header__padding-inline);\n  padding-block: var(--uxa-menu-group-header__padding-block);\n  color: var(--uxa-menu-group-header__color);\n  font-family: var(--uxa-menu-group-header__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-menu-group-header__font-size);\n  font-weight: var(--uxa-menu-group-header__font-weight);\n  line-height: var(--uxa-menu-group-header__line-height);\n  cursor: var(--uxa-menu-group-header__cursor);\n}";
styleInject(css_248z$6);
const SubMenuProvider = createContext({});
function useSubMenu() {
    return useContext(SubMenuProvider);
}
function useMenuItem({ isDisabled, hasSubMenu, onClick: customOnClick }) {
    const ref = useRef(null);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [isHovered, setHovered] = useState(false);
    const { onClose: closeMenu } = useMenu();
    const { onClose: closeSubMenu } = useSubMenu();
    const subMenuId = useUniqueId("uxa-submenu");
    const direction = useDirection();
    const { tabIndex, tabbableProps } = useTabbable(ref, {
        isDisabled
    });
    const { focusProps, isFocusVisible } = useFocusRing();
    // Click and Enter should close the menu, unless otherwise configured
    const onClick = customOnClick !== null && customOnClick !== void 0 ? customOnClick : closeMenu;
    // Convert isHovered state into isSubMenuOpen using a timeout to avoid accidentally collapsing the menu
    useEffect(() => {
        if (isHovered) {
            setSubMenuOpen(true);
        }
        const timer = setTimeout(() => {
            if (!isHovered) {
                setSubMenuOpen(false);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [isHovered]);
    const onKeyDown = event => {
        const forwardArrow = direction === "ltr" ? "ArrowRight" : "ArrowLeft";
        const backwardArrow = direction === "ltr" ? "ArrowLeft" : "ArrowRight";
        switch (event.key) {
            case "Enter":
            case " ":
                onEnterOrSpace(event);
                break;
            case forwardArrow:
                setSubMenuOpen(true);
                break;
            case backwardArrow:
                closeSubMenu === null || closeSubMenu === void 0 ? void 0 : closeSubMenu();
                break;
        }
    };
    const onMouseEnter = () => {
        setHovered(true);
    };
    const onMouseLeave = () => {
        setHovered(false);
    };
    const onEnterOrSpace = event => {
        var _a;
        event.preventDefault();
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return {
        ref,
        buttonProps: mergeProps({
            ref,
            role: "menuitem",
            disabled: isDisabled,
            className: clsx("uxa-menu-item", {
                "uxa-focused": isFocusVisible,
                "uxa-submenu-item": hasSubMenu,
                "uxa-disabled": isDisabled
            }),
            "aria-haspopup": hasSubMenu,
            "aria-controls": hasSubMenu ? subMenuId : undefined,
            "aria-expanded": hasSubMenu ? isSubMenuOpen : undefined,
            tabIndex,
            onClick,
            onKeyDown,
            onMouseEnter,
            onMouseLeave
        }, tabbableProps, focusProps),
        subMenuProps: {
            triggerRef: ref,
            isOpen: isSubMenuOpen,
            onClose: () => setSubMenuOpen(false),
            id: subMenuId,
            onMouseEnter,
            onMouseLeave
        },
        subMenuProviderProps: {
            onClose: () => setSubMenuOpen(false)
        }
    };
}
/**
 * Extract the logic for the menu position
 */
function useSubMenuPlacement(menuRef, triggerRef, isOpen = false, onClose) {
    const { isJato } = useThemeFamily();
    const direction = useDirection();
    // use React Aria overlay utils to determine the position of the menu
    const { overlayProps, updatePosition } = useOverlayPosition({
        overlayRef: menuRef,
        targetRef: triggerRef,
        isOpen,
        onClose,
        placement: "end top",
        containerPadding: 0,
        offset: isJato ? 0 : -2,
        // in JATO the offset is handled by the theme
        crossOffset: isJato ? -3 : -1,
        shouldFlip: true
    });
    // this will ensure the menu is positioned correctly once it is rendered
    // in the DOM, otherwise it can flicker as it shifts to the correct position
    useIsomorphicEffect(updatePosition, [updatePosition]);
    // if the direction of the document changes we should update the menu position
    useEffect(updatePosition, [updatePosition, direction]);
    return overlayProps;
}
var css_248z$5 = ":not(#\\9):not(#\\9):not(#\\9) .uxa-submenu {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  padding-inline: var(--uxa-menu__padding-inline);\n  padding-block: var(--uxa-menu__padding-block);\n  min-width: var(--uxa-menu__min-width);\n  filter: var(--uxa-menu__filter);\n  box-shadow: var(--uxa-menu__box-shadow);\n  border-radius: var(--uxa-menu__border-radius);\n  border: var(--uxa-menu__border);\n  background-color: var(--uxa-menu__background-color);\n}";
styleInject(css_248z$5);
const SubMenu = _a => {
    var { isOpen, onClose, triggerRef, children } = _a, props = __rest(_a, ["isOpen", "onClose", "triggerRef", "children"]);
    const menuRef = useRef(null);
    const menuPlacement = useSubMenuPlacement(menuRef, triggerRef, isOpen, onClose);
    // close the menu if the escape key is pressed
    const onKeyDown = event => {
        if (event.key === "Escape") {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    };
    // close the menu when clicking outside the menu but not within the trigger element
    useOnClickOutside(menuRef, event => {
        var _a;
        if (isOpen && triggerRef.current !== event.target && !((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    });
    if (!isOpen) {
        return null;
    }
    return React.createElement(FocusScope, {
        restoreFocus: true
    }, React.createElement(FocusKeyManager, {
        wrap: true,
        autoFocus: true
    }, React.createElement("div", Object.assign({
        ref: menuRef,
        role: "menu"
    }, mergeProps({
        className: "uxa-submenu uxa-menu-content",
        onKeyDown
    }, menuPlacement, props)), children)));
};
/** Define the Prop Type information */
SubMenu.propTypes = {
    /** The element used to trigger menu. The menu will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** Determine if the menu is open or closed. */
    isOpen: PropTypes__default.bool,
    /** Emits when the menu is closed. */
    onClose: PropTypes__default.func
};
var css_248z$4 = "/* stylelint-disable ux-aspects/no-host-context */\n/**\n * Menus and Select components can have group headers.\n * The styling for these can be shared across components\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item,\n:host:not(#\\9):not(#\\9):not(#\\9) {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: var(--uxa-menu-item__border-radius);\n  height: var(--uxa-menu-item__height);\n  min-height: var(--uxa-menu-item__min-height);\n  padding-inline: var(--uxa-menu-item__padding-inline);\n  padding-block: var(--uxa-menu-item__padding-block);\n  background-color: var(--uxa-menu-item__background-color);\n  border: var(--uxa-menu-item__border);\n  color: var(--uxa-menu-item__color);\n  cursor: var(--uxa-menu-item__cursor);\n  font-family: var(--uxa-menu-item__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-menu-item__font-size);\n  font-weight: var(--uxa-menu-item__font-weight);\n  box-sizing: border-box;\n  white-space: var(--uxa-menu-item__white-space);\n  overflow: var(--uxa-menu-item__overflow);\n  text-overflow: var(--uxa-menu-item__text-overflow);\n  line-height: var(--uxa-menu-item__line-height);\n  -moz-column-gap: var(--uxa-menu-item__column-gap);\n       column-gap: var(--uxa-menu-item__column-gap);\n  --uxa-checkbox-container__height: auto;\n  --uxa-checkbox-container__padding-inline: 0;\n  --uxa-checkbox-container__background-color--hover: transparent;\n  --uxa-checkbox-container__background-color--active: transparent;\n  --uxa-checkbox-label__font-size: var(--uxa-menu-item__font-size);\n  --uxa-checkbox-label__font-weight: var(--uxa-menu-item__font-weight);\n  --uxa-checkbox-label__line-height: var(--uxa-menu-item__line-height);\n  --uxa-checkbox-label__color: var(--uxa-menu-item__color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item > span,\n:not(#\\9):not(#\\9):not(#\\9) :host > span {\n  white-space: inherit;\n  overflow: inherit;\n  text-overflow: inherit;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item.uxa-active, :not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item:hover:not(.uxa-disabled):not(.uxa-selected):not(.uxa-readonly):not(:active), :not(#\\9):not(#\\9):not(#\\9) :host.uxa-active, :not(#\\9):not(#\\9):not(#\\9) :host:hover:not(.uxa-disabled):not(.uxa-selected):not(.uxa-readonly):not(:active) {\n  background-color: var(--uxa-menu-item__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item:focus,\n:not(#\\9):not(#\\9):not(#\\9) :host:focus {\n  outline: none;\n  box-shadow: none;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item:active:not(.uxa-disabled),\n:not(#\\9):not(#\\9):not(#\\9) :host:active:not(.uxa-disabled) {\n  background-color: var(--uxa-menu-item__background-color--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item.uxa-focused,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-focused {\n  box-shadow: var(--uxa-menu-item__box-shadow--focus);\n  background-color: var(--uxa-menu-item__background-color--focus);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item.uxa-selected,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-selected {\n  background-color: var(--uxa-menu-item__background-color--selected);\n  font-weight: var(--uxa-menu-item__font-weight--selected);\n  color: var(--uxa-menu-item__color--selected);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item.uxa-disabled,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-disabled {\n  color: var(--uxa-menu-item__color--disabled);\n  cursor: var(--uxa-menu-item__cursor--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item[aria-expanded=true],\n:not(#\\9):not(#\\9):not(#\\9) :host[aria-expanded=true] {\n  --uxa-menu-item__background-color: var(--uxa-menu-item__background-color--submenu-expanded);\n  --uxa-menu-item__background-color--hover: var(\n    --uxa-menu-item__background-color--submenu-expanded-hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item.uxa-submenu-item,\n:not(#\\9):not(#\\9):not(#\\9) :host.uxa-submenu-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--uxa-menu-item__gap--submenu);\n  --uxa-menu-item__padding-inline: var(--uxa-menu-item__padding-inline--submenu);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-item .uxa-menu-item-container,\n:not(#\\9):not(#\\9):not(#\\9) :host .uxa-menu-item-container {\n  width: var(--uxa-menu-item-container__width);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-submenu-item-indicator {\n  --uxa-icon__size: var(--uxa-submenu-item-indicator__size);\n  margin-inline-end: var(--uxa-submenu-item-indicator__margin-inline-end);\n}\n\n/* stylelint-disable selector-pseudo-element-no-unknown */\n:not(#\\9):not(#\\9):not(#\\9) ::ng-deep[dir=rtl] .uxa-submenu-item-indicator,\n:not(#\\9):not(#\\9):not(#\\9) :host-context([dir=rtl]) .uxa-submenu-item-indicator {\n  --uxa-icon__transform: scaleX(-1);\n}\n\n/**\n  * Chrome support (react)\n */\n:not(#\\9):not(#\\9):not(#\\9) [dir=rtl] .uxa-submenu-item-indicator {\n  --uxa-icon__transform: scaleX(-1);\n}\n\n/**\n * firefox support\n * note: this needs to be a separate block from the one above or it breaks in chrome\n * this also does not require the `:host-content` to work in Angular\n */\n:not(#\\9):not(#\\9):not(#\\9) :dir(rtl) .uxa-submenu-item-indicator {\n  --uxa-icon__transform: scaleX(-1);\n}";
styleInject(css_248z$4);
const MenuItem = _a => {
    var { icon, isDisabled, subMenu, children } = _a, props = __rest(_a, ["icon", "isDisabled", "subMenu", "children"]);
    const { buttonProps, subMenuProps, subMenuProviderProps } = useMenuItem({
        isDisabled,
        hasSubMenu: !!subMenu
    });
    return React.createElement(React.Fragment, null, React.createElement("button", Object.assign({
        type: "button"
    }, mergeProps(buttonProps, props)), icon, React.createElement("span", {
        className: "uxa-menu-item-container"
    }, children), subMenu ? React.createElement(ChevronSmallRightIcon, {
        className: "uxa-submenu-item-indicator"
    }) : undefined), subMenu ? React.createElement(SubMenuProvider.Provider, {
        value: subMenuProviderProps
    }, React.createElement(SubMenu, Object.assign({}, subMenuProps), subMenu)) : undefined);
};
/** Define the Prop Type information */
MenuItem.propTypes = {
    isDisabled: PropTypes__default.bool,
    subMenu: PropTypes__default.element
};
var css_248z$3 = "/* Add focus outline and offset to an element */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox {\n  display: inline-flex;\n  align-items: var(--uxa-checkbox-container__align-items);\n  cursor: var(--uxa-checkbox__cursor);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  border-radius: var(--uxa-checkbox-container__border-radius);\n  min-height: var(--uxa-checkbox-container__height);\n  background-color: var(--uxa-checkbox-container__background-color);\n  padding-inline: var(--uxa-checkbox-container__padding-inline);\n  padding-block: var(--uxa-checkbox-container__padding-block);\n  box-sizing: border-box;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-checkbox-container__background-color: var(\n    --uxa-checkbox-container__background-color--hover\n  );\n  --uxa-checkbox__background-color: var(--uxa-checkbox__background-color--hover);\n  --uxa-checkbox__border-color: var(--uxa-checkbox__border-color--hover);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-checkbox__background-color--checked: var(\n    --uxa-checkbox__background-color--checked-hover\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:hover:not(.uxa-disabled):not(.uxa-readonly).uxa-checkbox-indeterminate {\n  --uxa-checkbox__background-color--indeterminate: var(\n    --uxa-checkbox__background-color--indeterminate-hover\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly) {\n  --uxa-checkbox-container__background-color: var(\n    --uxa-checkbox-container__background-color--active\n  );\n  --uxa-checkbox__background-color: var(--uxa-checkbox__background-color--active);\n  --uxa-checkbox__border-color: var(--uxa-checkbox__border-color--active);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly).uxa-checked {\n  --uxa-checkbox__background-color--checked: var(\n    --uxa-checkbox__background-color--checked-active\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox:active:not(.uxa-disabled):not(.uxa-readonly).uxa-checkbox-indeterminate {\n  --uxa-checkbox__background-color--indeterminate: var(\n    --uxa-checkbox__background-color--indeterminate-active\n  );\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-focused {\n  z-index: 1;\n  outline-offset: 1px;\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-focused .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--focused);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checked {\n  --uxa-checkbox-label__font-weight: var(--uxa-checkbox-label__font-weight--checked);\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(--uxa-checkbox-tick__background-image--checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--checked);\n  border-color: var(--uxa-checkbox__border-color--checked);\n  border-width: var(--uxa-checkbox__border-width--checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checkbox-indeterminate {\n  --uxa-checkbox-tick__display: block;\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-checkbox-indeterminate .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--indeterminate);\n  border-color: var(--uxa-checkbox__border-color--indeterminate);\n  border-width: var(--uxa-checkbox__border-width--indeterminate);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly {\n  cursor: var(--uxa-checkbox__cursor--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--readonly);\n  border-color: var(--uxa-checkbox__border-color--readonly);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly.uxa-checked {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-readonly\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-readonly.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--readonly-checked);\n  border-color: var(--uxa-checkbox__border-color--readonly-checked);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled {\n  cursor: var(--uxa-checkbox__cursor--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--disabled);\n  border-color: var(--uxa-checkbox__border-color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled .uxa-checkbox-label {\n  color: var(--uxa-checkbox-label__color-disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checked {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--checked-disabled\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checked .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--checked-disabled);\n  border-color: var(--uxa-checkbox__border-color--checked-disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checkbox-indeterminate {\n  --uxa-checkbox-tick__background-image: var(\n    --uxa-checkbox-tick__background-image--indeterminate-disabled\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox.uxa-disabled.uxa-checkbox-indeterminate .uxa-checkbox-box {\n  background-color: var(--uxa-checkbox__background-color--indeterminate-disabled);\n  border-color: var(--uxa-checkbox__border-color--indeterminate-disabled);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-box {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  flex: none;\n  width: var(--uxa-checkbox__width);\n  height: var(--uxa-checkbox__height);\n  border-style: var(--uxa-checkbox__border-style);\n  border-width: var(--uxa-checkbox__border-width);\n  border-color: var(--uxa-checkbox__border-color);\n  border-radius: var(--uxa-checkbox__border-radius);\n  background-color: var(--uxa-checkbox__background-color);\n  margin-block: var(--uxa-checkbox__margin-block);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-box::before {\n  content: \"\";\n  display: var(--uxa-checkbox-tick__display, none);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: var(--uxa-checkbox-tick__background-image, none);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-input {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-label {\n  color: var(--uxa-checkbox-label__color);\n  font-family: var(--uxa-checkbox-label__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-checkbox-label__font-size);\n  font-weight: var(--uxa-checkbox-label__font-weight);\n  line-height: var(--uxa-checkbox-label__line-height);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-checkbox-label:not(:empty) {\n  margin-inline: var(--uxa-checkbox-label__margin-inline);\n  margin-block: var(--uxa-checkbox-label__margin-block);\n}";
styleInject(css_248z$3);
const MenuToggleItemCheck = ({ isChecked, isDisabled, children }) => {
    return React.createElement("div", {
        className: clsx("uxa-checkbox", {
            "uxa-checked": isChecked,
            "uxa-disabled": isDisabled
        })
    }, React.createElement("span", {
        className: "uxa-checkbox-box"
    }), React.createElement("span", {
        className: "uxa-checkbox-label"
    }, children));
};
var css_248z$2 = ":host:not(#\\9):not(#\\9):not(#\\9) {\n  display: inline-flex;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: var(--uxa-toggle-switch__spacing);\n  line-height: normal;\n  min-height: var(--uxa-toggle-switch__min-height);\n  max-width: var(--uxa-toggle-switch__max-width);\n  box-shadow: var(--uxa-toggle-switch__box-shadow);\n  cursor: var(--uxa-toggle-switch__cursor);\n  padding-inline: var(--uxa-toggle-switch__padding-inline);\n  padding-block: var(--uxa-toggle-switch__padding-block);\n  border-radius: var(--uxa-toggle-switch__border-radius);\n  background-color: var(--uxa-toggle-switch__background-color);\n  transition: var(--uxa-toggle-switch__transition);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:hover:not(.uxa-disabled) {\n  --uxa-toggle-switch__background-color: var(--uxa-toggle-switch__background-color--hover);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:hover:not(.uxa-disabled):not(.uxa-checked) {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--hover\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--hover);\n  --uxa-toggle-switch-thumb__inset-inline-end: var(\n    --uxa-toggle-switch-thumb__inset-inline-end--hover\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:hover:not(.uxa-disabled).uxa-checked {\n  --uxa-toggle-switch-track__background-color--checked: var(\n    --uxa-toggle-switch-track__background-color--checked-hover\n  );\n  --uxa-toggle-switch-track__border-color--checked: var(\n    --uxa-toggle-switch-track__border-color--checked-hover\n  );\n  --uxa-toggle-switch-thumb__inset-inline-start: var(\n    --uxa-toggle-switch-thumb__inset-inline-start--hover-checked\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:active:not(.uxa-disabled) {\n  --uxa-toggle-switch__background-color: var(--uxa-toggle-switch__background-color--active);\n  --uxa-toggle-switch-thumb__transform: var(--uxa-toggle-switch-thumb__transform--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:active:not(.uxa-disabled):not(.uxa-checked) {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--active\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--active);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch:active:not(.uxa-disabled).uxa-checked {\n  --uxa-toggle-switch-track__background-color--checked: var(\n    --uxa-toggle-switch-track__background-color--checked-active\n  );\n  --uxa-toggle-switch-track__border-color--checked: var(\n    --uxa-toggle-switch-track__border-color--checked-active\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch.uxa-checked {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--checked\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--checked);\n  --uxa-toggle-switch-thumb__inset-inline-start: var(\n    --uxa-toggle-switch-thumb__inset-inline-start--checked\n  );\n  --uxa-toggle-switch-thumb__inset-inline-end: var(\n    --uxa-toggle-switch-thumb__inset-inline-end--checked\n  );\n  --uxa-toggle-switch-thumb__border-color: var(--uxa-toggle-switch-thumb__border-color--checked);\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--checked\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch.uxa-disabled {\n  --uxa-toggle-switch__cursor: var(--uxa-toggle-switch__cursor--disabled);\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--disabled\n  );\n  --uxa-toggle-switch-track__border-color: var(--uxa-toggle-switch-track__border-color--disabled);\n  --uxa-toggle-switch-thumb__border-color: var(--uxa-toggle-switch-thumb__border-color--disabled);\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--disabled\n  );\n  --uxa-toggle-switch-thumb__box-shadow: var(--uxa-toggle-switch-thumb__box-shadow--disabled);\n  --uxa-toggle-switch-label__color: var(--uxa-toggle-switch-label__color--disabled);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch.uxa-disabled.uxa-checked {\n  --uxa-toggle-switch-track__background-color: var(\n    --uxa-toggle-switch-track__background-color--disabled-checked\n  );\n  --uxa-toggle-switch-track__border-color: var(\n    --uxa-toggle-switch-track__border-color--disabled-checked\n  );\n  --uxa-toggle-switch-track__background-clip: var(\n    --uxa-toggle-switch-track__background-clip--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__border-color: var(\n    --uxa-toggle-switch-thumb__border-color--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__background-color: var(\n    --uxa-toggle-switch-thumb__background-color--disabled-checked\n  );\n  --uxa-toggle-switch-thumb__box-shadow: var(\n    --uxa-toggle-switch-thumb__box-shadow--disabled-checked\n  );\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch.uxa-focused {\n  --uxa-toggle-switch__box-shadow: var(--uxa-toggle-switch__box-shadow--focused);\n  --uxa-toggle-switch-thumb__box-shadow: var(--uxa-toggle-switch-thumb__box-shadow--focused);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-input {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin-inline: -1px;\n  margin-block: -1px;\n  overflow: hidden;\n  padding-inline: 0;\n  padding-block: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-control {\n  flex: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: var(--uxa-toggle-switch-control__width);\n  height: var(--uxa-toggle-switch-control__height);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-track {\n  width: var(--uxa-toggle-switch-track__width);\n  height: var(--uxa-toggle-switch-track__height);\n  border-radius: var(--uxa-toggle-switch-track__border-radius);\n  background-color: var(--uxa-toggle-switch-track__background-color);\n  border: var(--uxa-toggle-switch-track__border-width) solid var(--uxa-toggle-switch-track__border-color);\n  transition: var(--uxa-toggle-switch-track__transition);\n  background-clip: var(--uxa-toggle-switch-track__background-clip, initial);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-thumb {\n  box-sizing: border-box;\n  position: absolute;\n  inset-inline-start: var(--uxa-toggle-switch-thumb__inset-inline-start);\n  inset-inline-end: var(--uxa-toggle-switch-thumb__inset-inline-end);\n  width: var(--uxa-toggle-switch-thumb__width);\n  height: var(--uxa-toggle-switch-thumb__height);\n  box-shadow: var(--uxa-toggle-switch-thumb__box-shadow);\n  border-width: var(--uxa-toggle-switch-thumb__border-width);\n  border-style: var(--uxa-toggle-switch-thumb__border-style);\n  border-color: var(--uxa-toggle-switch-thumb__border-color);\n  border-radius: var(--uxa-toggle-switch-thumb__border-radius);\n  background-color: var(--uxa-toggle-switch-thumb__background-color);\n  transform: var(--uxa-toggle-switch-thumb__transform);\n  transition: var(--uxa-toggle-switch-thumb__transition);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-label {\n  flex: 1;\n  font-family: var(--uxa-toggle-switch-label__font-family, var(--uxa-typography__font-family));\n  font-size: var(--uxa-toggle-switch-label__font-size);\n  font-weight: var(--uxa-toggle-switch-label__font-weight);\n  color: var(--uxa-toggle-switch-label__color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-toggle-switch-label:empty {\n  display: none;\n}";
styleInject(css_248z$2);
const MenuToggleItemSwitch = ({ isChecked, isDisabled, children }) => {
    return React.createElement("div", {
        className: clsx("uxa-toggle-switch", {
            "uxa-checked": isChecked,
            "uxa-disabled": isDisabled
        })
    }, React.createElement("span", {
        className: "uxa-toggle-switch-control"
    }, React.createElement("span", {
        className: "uxa-toggle-switch-track"
    }), React.createElement("span", {
        className: "uxa-toggle-switch-thumb"
    })), React.createElement("span", {
        className: "uxa-toggle-switch-label"
    }, children));
};
var css_248z$1 = "";
styleInject(css_248z$1);
const MenuToggleItem = _a => {
    var { controlType = "check", isChecked: isCheckedProp, isDisabled, onCheckedChange, children } = _a, props = __rest(_a, ["controlType", "isChecked", "isDisabled", "onCheckedChange", "children"]);
    const [isChecked, setChecked] = useControlled(isCheckedProp, onCheckedChange);
    const toggleChecked = useCallback(() => setChecked(!isChecked), [isChecked, setChecked]);
    const { buttonProps } = useMenuItem({
        isDisabled,
        onClick: toggleChecked
    });
    const Control = controlType === "switch" ? MenuToggleItemSwitch : MenuToggleItemCheck;
    return React.createElement("button", Object.assign({}, mergeProps(buttonProps, {
        type: "button",
        role: "menuitemcheckbox",
        "aria-checked": isChecked
    }, props)), React.createElement(Control, {
        isChecked: isChecked,
        isDisabled: isDisabled
    }, children));
};
MenuToggleItem.propTypes = {
    /** Whether to use a checkbox or a toggle switch appearance. */
    controlType: PropTypes__default.oneOf(["check", "switch"]),
    /** The state of the toggle. */
    isChecked: PropTypes__default.bool,
    /** Whether the menu item is disabled. */
    isDisabled: PropTypes__default.bool,
    /** Emits when the user changes the state of the toggle. */
    onCheckedChange: PropTypes__default.func
};
var css_248z = ":host:not(#\\9):not(#\\9):not(#\\9),\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-divider {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: var(--uxa-menu-divider__height);\n}\n:not(#\\9):not(#\\9):not(#\\9) :host:before,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-menu-divider:before {\n  content: \"\";\n  display: block;\n  height: var(--uxa-menu-divider__thickness);\n  width: 100%;\n  background: var(--uxa-menu-divider__background-color);\n}";
styleInject(css_248z);
const MenuDivider = forwardRef((props, ref) => {
    return React.createElement("div", Object.assign({
        ref: ref,
        "aria-orientation": "horizontal"
    }, mergeProps({
        className: "uxa-menu-divider",
        role: "separator"
    }, props)));
});
/** Define the Prop Type information */
MenuDivider.propTypes = {};
export { Menu as M, MenuItem as a, MenuToggleItem as b, MenuDivider as c, useMenuTrigger as u };
