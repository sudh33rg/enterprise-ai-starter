import { _ as __rest } from "./_tslib.esm.js";
import { useFloating, autoUpdate, offset, flip, shift, arrow } from "@floating-ui/react";
import { mergeProps } from "@react-aria/utils";
import clsx from "clsx";
import * as React from "react";
import { useState, useRef, useCallback, useEffect, forwardRef, useImperativeHandle } from "react";
import { u as useBodyRef, a as useBody } from "./use-body-ref.esm.js";
import { u as useIsomorphicEffect } from "./use-isomorphic-effect.esm.js";
import { u as useDirection } from "./direction.esm.js";
import { u as useControlled } from "./use-controllable.esm.js";
import "./reducer-provider.esm.js";
import PropTypes__default from "prop-types";
import { createPortal } from "react-dom";
import { s as styleInject } from "./style-inject.es.esm.js";
import { f as focusWithModality } from "./focus-key-manager.esm.js";
import { FocusScope } from "@react-aria/focus";
import { u as useEventListener } from "./use-event-listener.esm.js";
import { u as useOnClickOutside } from "./use-outside-click.esm.js";
import { u as useDebounce } from "./use-debounce.esm.js";
import "@ux-aspects-universal/core/theming";
import "./theme-region.esm.js";
import { u as useThemeFamily } from "./use-active-theme.esm.js";
import { S as Show } from "./show.esm.js";
var css_248z$3 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover {\n  display: flex;\n  position: relative;\n  min-width: var(--uxa-popover__min-width);\n  border-radius: var(--uxa-popover__border-radius);\n  filter: var(--uxa-popover__filter);\n  box-shadow: var(--uxa-popover__box-shadow);\n  border: var(--uxa-popover__border-width) var(--uxa-popover__border-style) var(--uxa-popover__border-color);\n  background-color: var(--uxa-popover__background-color);\n  color: var(--uxa-popover__color);\n  font-size: var(--uxa-popover__font-size);\n  font-family: var(--uxa-popover__font-family, var(--uxa-typography__font-family));\n  z-index: var(--uxa-popover__z-index);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--4);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--4);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--4);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-light {\n  --uxa-popover__color: var(--uxa-popover__color--light);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--light);\n  --uxa-popover__border-color: var(--uxa-popover__border-color--light);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-dark {\n  --uxa-popover__color: var(--uxa-popover__color--dark);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--dark);\n  --uxa-popover__border-color: var(--uxa-popover__background-color--dark);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-auto-inverse {\n  --uxa-popover__color: var(--uxa-popover__color--auto-inverse);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--auto-inverse);\n  --uxa-popover__border-color: var(--uxa-popover__border-color--auto-inverse);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover .uxa-arrow-background,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover .uxa-arrow-foreground {\n  content: \"\";\n  position: absolute;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below {\n  margin-block-start: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below .uxa-arrow-background {\n  top: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below .uxa-arrow-foreground {\n  top: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  transform: translateY(var(--uxa-popover__border-width));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above {\n  margin-block-end: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above .uxa-arrow-background {\n  bottom: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid transparent;\n  border-top: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above .uxa-arrow-foreground {\n  bottom: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  transform: translateY(calc(var(--uxa-popover__border-width) * -1));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before {\n  margin-inline-end: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before .uxa-arrow-background {\n  border-top: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-start: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after {\n  margin-inline-start: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after .uxa-arrow-background {\n  border-top: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--after);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover-content {\n  padding-inline: var(--uxa-popover__padding-inline);\n  padding-block: var(--uxa-popover__padding-block);\n  overflow: hidden auto;\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout {\n  background-color: var(--uxa-flyout__background-color);\n  border-color: var(--uxa-flyout__border-color);\n  color: var(--uxa-flyout__color);\n  position: relative;\n  background-clip: content-box;\n  --uxa-popover__background-color: var(--jato-cta-focus-border);\n  --uxa-popover__border-color: var(--jato-cta-focus-border);\n  --uxa-popover__border-radius: var(--uxa-flyout__border-radius);\n  --uxa-popover-arrow__size: 6px;\n  --uxa-popover-before-arrow__inline-end--before: calc(var(--uxa-popover-arrow__size) * -1);\n  --uxa-popover-before-arrow__inline-end--after: calc(var(--uxa-popover-arrow__size) * -1);\n  --uxa-popover-after-arrow__inline-start--before: calc(var(--uxa-popover-arrow__size) * -1);\n  --uxa-popover-after-arrow__inline-start--after: calc(var(--uxa-popover-arrow__size) * -1);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout .uxa-flyout-wrapper {\n  overflow: hidden;\n  border-radius: var(--uxa-flyout-wrapper__border-radius);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout.uxa-placement-below .uxa-flyout-content {\n  --uxa-popover__padding-inline: var(--uxa-flyout-content__padding-inline--below);\n  --uxa-popover__padding-block: var(--uxa-flyout-content__padding-block--below);\n  box-shadow: var(--uxa-flyout-content__box-shadow--below);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout.uxa-placement-above .uxa-flyout-content {\n  --uxa-popover__padding-inline: var(--uxa-flyout-content__padding-inline--above);\n  --uxa-popover__padding-block: var(--uxa-flyout-content__padding-block--above);\n  box-shadow: var(--uxa-flyout-content__box-shadow--above);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout.uxa-placement-after .uxa-flyout-content {\n  --uxa-popover__padding-inline: var(--uxa-flyout-content__padding-inline--after);\n  --uxa-popover__padding-block: var(--uxa-flyout-content__padding-block--after);\n  box-shadow: var(--uxa-flyout-content__box-shadow--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-flyout.uxa-placement-before .uxa-flyout-content {\n  --uxa-popover__padding-inline: var(--uxa-flyout-content__padding-inline--before);\n  --uxa-popover__padding-block: var(--uxa-flyout-content__padding-block--before);\n  box-shadow: var(--uxa-flyout-content__box-shadow--before);\n}";
styleInject(css_248z$3);
function useOnMouseOutside(triggerRef, popoverRef, handler) {
    const [insideTrigger, setInsideTrigger] = useState(false);
    const [insidePopover, setInsidePopover] = useState(false);
    useEventListener(triggerRef, "mouseenter", () => setInsideTrigger(true));
    useEventListener(triggerRef, "mouseleave", () => setInsideTrigger(false));
    useEventListener(popoverRef, "mouseenter", () => setInsidePopover(true));
    useEventListener(popoverRef, "mouseleave", () => setInsidePopover(false));
    const shouldClose = !insideTrigger && !insidePopover;
    useDebounce(() => {
        handler(shouldClose);
    }, 100, [shouldClose]);
}
/**
 * Extract the logic for the open and close trigger events
 */
function usePopoverTriggers({ popoverRef, triggerRef, openTriggers = [], closeTriggers = [], onOpenChange, delay = 0, isOpen }) {
    const bodyRef = useBodyRef();
    const { open, close } = useDelay(onOpenChange, delay);
    // the useClickOutside hook uses mousedown, however clicking on the trigger to close will cause the "open" click event to fire
    // after the "close" click event, so we need to track whether we are closing the popover due to a click on the trigger
    // and if so, prevent the "open" click event from firing
    const pendingClose = useRef(false);
    const toggle = useCallback(() => {
        // if there is a pending close event, clear the flag and return
        // this prevents the "open" click event from firing
        if (pendingClose.current) {
            pendingClose.current = false;
            return;
        }
        if (isOpen && (closeTriggers === null || closeTriggers === void 0 ? void 0 : closeTriggers.includes("click"))) {
            close();
        }
        else if (!isOpen && (openTriggers === null || openTriggers === void 0 ? void 0 : openTriggers.includes("click"))) {
            open();
        }
    }, [isOpen, closeTriggers, openTriggers, close, open]);
    const closeOnEscape = useCallback(event => {
        if (event.key === "Escape" && (closeTriggers === null || closeTriggers === void 0 ? void 0 : closeTriggers.includes("escape"))) {
            close();
            // focus the trigger element after closing the popover
            if (triggerRef.current) {
                focusWithModality(triggerRef.current, "keyboard");
            }
            // we stop propagation to avoid parent dialogs or modals from closing
            if (isOpen) {
                event.stopPropagation();
            }
        }
    }, [close, closeTriggers, isOpen, triggerRef]);
    useTriggerEvent(triggerRef, "mouseenter", open, openTriggers);
    useTriggerEvent(triggerRef, "mouseleave", close, closeTriggers);
    useTriggerEvent(triggerRef, "focus", open, openTriggers);
    useTriggerEvent(triggerRef, "blur", close, closeTriggers);
    useEventListener(triggerRef, "click", toggle);
    useTriggerEvent(triggerRef, "keydown", closeOnEscape, closeTriggers, "escape");
    useTriggerEvent(popoverRef, "keydown", closeOnEscape, closeTriggers, "escape");
    // close the popover when clicking outside the popover but not within the trigger element
    useOnClickOutside(popoverRef, event => {
        var _a;
        if (triggerRef.current !== event.target && !((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && (closeTriggers === null || closeTriggers === void 0 ? void 0 : closeTriggers.includes("clickoutside"))) {
            pendingClose.current = true;
            close();
        }
    });
    // whenever the click event finished clear the pending close flag
    useEventListener(bodyRef, "click", () => {
        pendingClose.current = false;
    });
    useOnMouseOutside(triggerRef, popoverRef, isOutside => {
        if (isOutside && (closeTriggers === null || closeTriggers === void 0 ? void 0 : closeTriggers.includes("mouseoutside"))) {
            close();
        }
    });
}
function useTriggerEvent(ref, eventName, listener, triggers, trigger) {
    useEventListener(ref, eventName, event => {
        if (triggers.includes(trigger !== null && trigger !== void 0 ? trigger : eventName)) {
            listener(event);
        }
    });
}
function useDelay(setIsOpen, delay) {
    const timerRef = useRef(null);
    const open = () => {
        // Clear any existing timers
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        // Start a new timer
        timerRef.current = window.setTimeout(() => {
            setIsOpen(true);
        }, delay);
    };
    const close = () => {
        // Clear the timer if it's still running
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        setIsOpen(false);
    };
    useEffect(() => {
        return () => {
            // Clean up any timers when the component unmounts
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
    return {
        open,
        close
    };
}
var css_248z$2 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover {\n  display: flex;\n  position: relative;\n  min-width: var(--uxa-popover__min-width);\n  border-radius: var(--uxa-popover__border-radius);\n  filter: var(--uxa-popover__filter);\n  box-shadow: var(--uxa-popover__box-shadow);\n  border: var(--uxa-popover__border-width) var(--uxa-popover__border-style) var(--uxa-popover__border-color);\n  background-color: var(--uxa-popover__background-color);\n  color: var(--uxa-popover__color);\n  font-size: var(--uxa-popover__font-size);\n  font-family: var(--uxa-popover__font-family, var(--uxa-typography__font-family));\n  z-index: var(--uxa-popover__z-index);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--4);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--4);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--4);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-light {\n  --uxa-popover__color: var(--uxa-popover__color--light);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--light);\n  --uxa-popover__border-color: var(--uxa-popover__border-color--light);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-dark {\n  --uxa-popover__color: var(--uxa-popover__color--dark);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--dark);\n  --uxa-popover__border-color: var(--uxa-popover__background-color--dark);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-auto-inverse {\n  --uxa-popover__color: var(--uxa-popover__color--auto-inverse);\n  --uxa-popover__background-color: var(--uxa-popover__background-color--auto-inverse);\n  --uxa-popover__border-color: var(--uxa-popover__border-color--auto-inverse);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover .uxa-arrow-background,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover .uxa-arrow-foreground {\n  content: \"\";\n  position: absolute;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below {\n  margin-block-start: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below .uxa-arrow-background {\n  top: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-below .uxa-arrow-foreground {\n  top: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  transform: translateY(var(--uxa-popover__border-width));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above {\n  margin-block-end: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above .uxa-arrow-background {\n  bottom: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid transparent;\n  border-top: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-above .uxa-arrow-foreground {\n  bottom: calc(var(--uxa-popover-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  transform: translateY(calc(var(--uxa-popover__border-width) * -1));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before {\n  margin-inline-end: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before .uxa-arrow-background {\n  border-top: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-start: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-before .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-start: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  inset-inline-end: var(--uxa-popover-before-arrow__inline-end--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after {\n  margin-inline-start: var(--uxa-popover-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after .uxa-arrow-background {\n  border-top: var(--uxa-popover-arrow__size) solid transparent;\n  border-bottom: var(--uxa-popover-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-popover-arrow__size) solid var(--uxa-popover__border-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover.uxa-placement-after .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-popover-arrow__size) - var(--uxa-popover__border-width)) solid var(--uxa-popover__background-color);\n  inset-inline-start: var(--uxa-popover-after-arrow__inline-start--after);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-popover-content {\n  padding-inline: var(--uxa-popover__padding-inline);\n  padding-block: var(--uxa-popover__padding-block);\n  overflow: hidden auto;\n}";
styleInject(css_248z$2);
const Popover = forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g;
    var { isOpen, isDisabled, variant = "auto", placement = "below", alignment = "center", triggerRef, openTriggers = ["click"], closeTriggers = ["clickoutside"], onOpenChange, children, className, style, offset: offset$1 = 0, delay } = _a, props = __rest(_a, ["isOpen", "isDisabled", "variant", "placement", "alignment", "triggerRef", "openTriggers", "closeTriggers", "onOpenChange", "children", "className", "style", "offset", "delay"]);
    const { isJato } = useThemeFamily();
    const body = useBody();
    const direction = useDirection();
    const [popoverOpen, setPopoverOpen] = useControlled(isOpen, onOpenChange);
    const arrowRef = useRef(null);
    const setOpen = useCallback(shouldOpen => {
        if (popoverOpen !== shouldOpen) {
            // if we are trying to open the popover but there is no content, don't open it
            if (shouldOpen && !children) {
                return;
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(shouldOpen);
            setPopoverOpen(shouldOpen);
        }
    }, [children, onOpenChange, popoverOpen, setPopoverOpen]);
    const { refs, floatingStyles, update, middlewareData, placement: resolvedPlacement } = useFloating({
        open: popoverOpen,
        onOpenChange: setOpen,
        placement: transformPlacement(direction, placement, alignment),
        elements: {
            reference: triggerRef.current
        },
        middleware: [offset({
                mainAxis: offset$1
            }), flip(), shift(), arrow({
                element: arrowRef.current
            })],
        whileElementsMounted: autoUpdate,
        transform: false
    });
    usePopoverTriggers({
        popoverRef: refs.floating,
        triggerRef,
        openTriggers,
        closeTriggers,
        onOpenChange: setOpen,
        isOpen: popoverOpen,
        delay
    });
    useImperativeHandle(ref, () => ({
        element: refs.floating,
        updatePosition: update
    }));
    useIsomorphicEffect(() => update(), [update, direction]);
    if (!popoverOpen || isDisabled || !body) {
        return null;
    }
    return createPortal(React.createElement(FocusScope, {
        contain: true,
        restoreFocus: true
    }, React.createElement("div", Object.assign({
        "data-overlay": true,
        ref: refs.setFloating
    }, mergeProps({
        role: "tooltip",
        style: floatingStyles
    }, props)), React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-popover", {
            "uxa-placement-above": resolvedPlacement.includes("top"),
            "uxa-placement-below": resolvedPlacement.includes("bottom"),
            "uxa-placement-before": direction === "ltr" ? resolvedPlacement.includes("left") : resolvedPlacement.includes("right"),
            "uxa-placement-after": direction === "ltr" ? resolvedPlacement.includes("right") : resolvedPlacement.includes("left"),
            "uxa-light": variant === "light",
            "uxa-dark": variant === "dark",
            "uxa-auto-inverse": variant === "auto-inverse"
        })
    })), React.createElement(Show, {
        when: !isJato
    }, React.createElement("div", {
        ref: arrowRef,
        className: "uxa-arrow-background",
        style: {
            left: (_b = middlewareData.arrow) === null || _b === void 0 ? void 0 : _b.x,
            top: (_c = middlewareData.arrow) === null || _c === void 0 ? void 0 : _c.y
        }
    }), React.createElement("div", {
        className: "uxa-arrow-foreground",
        style: {
            left: ((_d = middlewareData.arrow) === null || _d === void 0 ? void 0 : _d.x) ? `calc(${(_e = middlewareData.arrow) === null || _e === void 0 ? void 0 : _e.x}px + var(--uxa-popover__border-width))` : undefined,
            top: ((_f = middlewareData.arrow) === null || _f === void 0 ? void 0 : _f.y) ? `calc(${(_g = middlewareData.arrow) === null || _g === void 0 ? void 0 : _g.y}px + var(--uxa-popover__border-width))` : undefined
        }
    })), React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-popover-content"
    }, {
        className,
        style
    })), children)))), body);
});
/** Define the Prop Type information */
Popover.propTypes = {
    /** The element used to trigger Popover. The Popover will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** Determine if the Popover is open or closed. */
    isOpen: PropTypes__default.bool,
    /** The color variant of the Popover */
    variant: PropTypes__default.oneOf(["auto", "light", "dark", "auto-inverse"]),
    /** Where the Popover is positioned vertically relative to the trigger. */
    placement: PropTypes__default.oneOf(["above", "below", "before", "after"]),
    /** Where the Popover is aligned relative to the trigger. */
    alignment: PropTypes__default.oneOf(["start", "center", "end"]),
    /** Events that will cause the popover to appear */
    openTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseenter", "focus"])),
    /** Events that will cause the popover to hide. */
    closeTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseleave", "escape", "clickoutside", "blur", "mouseoutside"])),
    /** Emit whenever the popover is opened or closed. */
    onOpenChange: PropTypes__default.func,
    /** Determine if the Popover is disabled. */
    isDisabled: PropTypes__default.bool,
    /** The title of the number picker. This may be used to customize the default browser validation tooltips. */
    title: PropTypes__default.string
};
/**
 * Transform our Placement and Alignement type to the FloatingPlacement type
 * @param direction The direction of the document
 * @param placement The placement to transform
 * @param alignment The alignment to transform
 * @returns The FloatingPlacement
 */
function transformPlacement(direction, placement, alignment) {
    switch (placement) {
        case "above":
            switch (alignment) {
                case "start":
                    return "top-start";
                case "center":
                    return "top";
                case "end":
                    return "top-end";
            }
            break;
        case "below":
            switch (alignment) {
                case "start":
                    return "bottom-start";
                case "center":
                    return "bottom";
                case "end":
                    return "bottom-end";
            }
            break;
        case "before":
            switch (alignment) {
                case "start":
                    return direction === "ltr" ? "left-start" : "right-start";
                case "center":
                    return direction === "ltr" ? "left" : "right";
                case "end":
                    return direction === "ltr" ? "left-end" : "right-end";
            }
            break;
        case "after":
            switch (alignment) {
                case "start":
                    return direction === "ltr" ? "right-start" : "left-start";
                case "center":
                    return direction === "ltr" ? "right" : "left";
                case "end":
                    return direction === "ltr" ? "right-end" : "left-end";
            }
            break;
    }
}
const Flyout = forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g;
    var { isOpen, isDisabled, variant = "auto", placement = "below", triggerRef, openTriggers = ["click"], closeTriggers = ["clickoutside", "escape"], onOpenChange, children, className, style, offset: offset$1 = 0, delay } = _a, props = __rest(_a, ["isOpen", "isDisabled", "variant", "placement", "triggerRef", "openTriggers", "closeTriggers", "onOpenChange", "children", "className", "style", "offset", "delay"]);
    const direction = useDirection();
    const body = useBody();
    const [flyoutOpen, setFlyoutOpen] = useControlled(isOpen, onOpenChange);
    const arrowRef = useRef(null);
    const setOpen = useCallback(shouldOpen => {
        if (flyoutOpen !== shouldOpen) {
            // if we are trying to open the flyout but there is no content, don't open it
            if (shouldOpen && !children) {
                return;
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(shouldOpen);
            setFlyoutOpen(shouldOpen);
        }
    }, [children, onOpenChange, flyoutOpen, setFlyoutOpen]);
    const { refs, floatingStyles, update, middlewareData, placement: resolvedPlacement } = useFloating({
        open: flyoutOpen,
        onOpenChange: setOpen,
        placement: transformPlacement(direction, placement, "center"),
        elements: {
            reference: triggerRef.current
        },
        middleware: [offset({
                mainAxis: offset$1
            }), flip(), shift(), arrow({
                element: arrowRef.current
            })],
        whileElementsMounted: autoUpdate,
        transform: false
    });
    usePopoverTriggers({
        popoverRef: refs.floating,
        triggerRef,
        openTriggers,
        closeTriggers,
        onOpenChange: setOpen,
        isOpen: flyoutOpen,
        delay
    });
    useImperativeHandle(ref, () => ({
        element: refs.floating,
        updatePosition: update
    }));
    useIsomorphicEffect(() => update(), [update, direction]);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    React.createElement(React.Fragment, null, flyoutOpen && !isDisabled && body && createPortal(React.createElement("div", Object.assign({
        ref: refs.setFloating,
        "data-overlay": true
    }, mergeProps({
        role: "tooltip",
        style: floatingStyles
    }, props)), React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-popover uxa-flyout", {
            "uxa-placement-above": resolvedPlacement.includes("top"),
            "uxa-placement-below": resolvedPlacement.includes("bottom"),
            "uxa-placement-before": direction === "ltr" ? resolvedPlacement.includes("left") : resolvedPlacement.includes("right"),
            "uxa-placement-after": direction === "ltr" ? resolvedPlacement.includes("right") : resolvedPlacement.includes("left"),
            "uxa-light": variant === "light",
            "uxa-dark": variant === "dark",
            "uxa-auto-inverse": variant === "auto-inverse"
        })
    })), React.createElement("div", {
        ref: arrowRef,
        className: "uxa-arrow-background",
        style: {
            left: (_b = middlewareData.arrow) === null || _b === void 0 ? void 0 : _b.x,
            top: (_c = middlewareData.arrow) === null || _c === void 0 ? void 0 : _c.y
        }
    }), React.createElement("div", {
        className: "uxa-arrow-foreground",
        style: {
            left: ((_d = middlewareData.arrow) === null || _d === void 0 ? void 0 : _d.x) ? `calc(${(_e = middlewareData.arrow) === null || _e === void 0 ? void 0 : _e.x}px + var(--uxa-popover__border-width))` : undefined,
            top: ((_f = middlewareData.arrow) === null || _f === void 0 ? void 0 : _f.y) ? `calc(${(_g = middlewareData.arrow) === null || _g === void 0 ? void 0 : _g.y}px + var(--uxa-popover__border-width))` : undefined
        }
    }), React.createElement("div", {
        className: "uxa-flyout-wrapper"
    }, React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-popover-content uxa-flyout-content"
    }, {
        className,
        style
    })), children)))), body)));
});
/** Define the Prop Type information */
Flyout.propTypes = {
    /** The element used to trigger Flyout. The Flyout will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** Determine if the Flyout is open or closed. */
    isOpen: PropTypes__default.bool,
    /** The color variant of the Flyout */
    variant: PropTypes__default.oneOf(["auto", "light", "dark", "auto-inverse"]),
    /** Where the Flyout is positioned vertically relative to the trigger. */
    placement: PropTypes__default.oneOf(["above", "below", "before", "after"]),
    /** Where the Flyout is aligned relative to the trigger. */
    alignment: PropTypes__default.oneOf(["start", "center", "end"]),
    /** Events that will cause the Flyout to appear */
    openTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseenter", "focus"])),
    /** Events that will cause the Flyout to hide. */
    closeTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseleave", "escape", "clickoutside", "blur", "mouseoutside"])),
    /** Emit whenever the Flyout is opened or closed. */
    onOpenChange: PropTypes__default.func,
    /** Determine if the Flyout is disabled. */
    isDisabled: PropTypes__default.bool,
    /** The title of the number picker. This may be used to customize the default browser validation tooltips. */
    title: PropTypes__default.string
};
var css_248z$1 = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip {\n  display: flex;\n  position: relative;\n  min-width: var(--uxa-tooltip__min-width);\n  border-radius: var(--uxa-tooltip__border-radius);\n  filter: var(--uxa-tooltip__filter);\n  box-shadow: var(--uxa-tooltip__box-shadow);\n  border: var(--uxa-tooltip__border-width) var(--uxa-tooltip__border-style) var(--uxa-tooltip__border-color);\n  background-color: var(--uxa-tooltip__background-color);\n  color: var(--uxa-tooltip__color);\n  font-size: var(--uxa-tooltip__font-size);\n  font-family: var(--uxa-tooltip__font-family, var(--uxa-typography__font-family));\n  z-index: var(--uxa-tooltip__z-index);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--4);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--4);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--4);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-light {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--light);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--light);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__border-color--light);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-dark {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--dark);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--dark);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__background-color--dark);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-auto-inverse {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--auto-inverse);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--auto-inverse);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__border-color--auto-inverse);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip .uxa-arrow-background,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip .uxa-arrow-foreground {\n  content: \"\";\n  position: absolute;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below {\n  margin-block-start: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below .uxa-arrow-background {\n  top: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below .uxa-arrow-foreground {\n  top: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  transform: translateY(var(--uxa-tooltip__border-width));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above {\n  margin-block-end: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above .uxa-arrow-background {\n  bottom: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-top: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above .uxa-arrow-foreground {\n  bottom: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  transform: translateY(calc(var(--uxa-tooltip__border-width) * -1));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before {\n  margin-inline-end: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before .uxa-arrow-background {\n  border-top: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n  inset-inline-end: var(--uxa-tooltip-before-arrow__inline-end--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  inset-inline-end: var(--uxa-tooltip-before-arrow__inline-end--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after {\n  margin-inline-start: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after .uxa-arrow-background {\n  border-top: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n  inset-inline-start: var(--uxa-tooltip-after-arrow__inline-start--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  inset-inline-start: var(--uxa-tooltip-after-arrow__inline-start--after);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip-content {\n  padding-inline: var(--uxa-tooltip__padding-inline);\n  padding-block: var(--uxa-tooltip__padding-block);\n  overflow: hidden auto;\n}";
styleInject(css_248z$1);
const Infotip = forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g;
    var { isOpen, isDisabled, variant = "auto", placement = "above", alignment = "center", triggerRef, openTriggers = ["click"], closeTriggers = ["clickoutside", "blur"], onOpenChange, children, className, style, offset: offset$1 = 0, minWidth = 160, delay } = _a, props = __rest(_a, ["isOpen", "isDisabled", "variant", "placement", "alignment", "triggerRef", "openTriggers", "closeTriggers", "onOpenChange", "children", "className", "style", "offset", "minWidth", "delay"]);
    const direction = useDirection();
    const body = useBody();
    const [infotipOpen, setInfotipOpen] = useControlled(isOpen, onOpenChange);
    const arrowRef = useRef(null);
    const setOpen = useCallback(shouldOpen => {
        if (infotipOpen !== shouldOpen) {
            // if we are trying to open the infotip but there is no content, don't open it
            if (shouldOpen && !children) {
                return;
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(shouldOpen);
            setInfotipOpen(shouldOpen);
        }
    }, [children, onOpenChange, infotipOpen, setInfotipOpen]);
    const { refs, floatingStyles, update, middlewareData, placement: resolvedPlacement } = useFloating({
        open: infotipOpen,
        onOpenChange: setOpen,
        placement: transformPlacement(direction, placement, alignment),
        elements: {
            reference: triggerRef.current
        },
        middleware: [offset({
                mainAxis: offset$1
            }), flip(), shift(), arrow({
                element: arrowRef.current
            })],
        whileElementsMounted: autoUpdate,
        transform: false
    });
    usePopoverTriggers({
        popoverRef: refs.floating,
        triggerRef,
        openTriggers,
        closeTriggers,
        onOpenChange: setOpen,
        isOpen: infotipOpen,
        delay
    });
    useImperativeHandle(ref, () => ({
        element: refs.floating,
        updatePosition: update
    }));
    useIsomorphicEffect(() => update(), [update, direction]);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    React.createElement(React.Fragment, null, infotipOpen && !isDisabled && body && createPortal(React.createElement("div", Object.assign({
        ref: refs.setFloating
    }, mergeProps({
        role: "infotip",
        style: floatingStyles
    }, props)), React.createElement("div", {
        style: {
            minWidth
        },
        className: clsx("uxa-tooltip", {
            "uxa-placement-above": resolvedPlacement.includes("top"),
            "uxa-placement-below": resolvedPlacement.includes("bottom"),
            "uxa-placement-before": direction === "ltr" ? resolvedPlacement.includes("left") : resolvedPlacement.includes("right"),
            "uxa-placement-after": direction === "ltr" ? resolvedPlacement.includes("right") : resolvedPlacement.includes("left"),
            "uxa-light": variant === "light",
            "uxa-dark": variant === "dark",
            "uxa-auto-inverse": variant === "auto-inverse"
        })
    }, React.createElement("div", {
        ref: arrowRef,
        className: "uxa-arrow-background",
        style: {
            left: (_b = middlewareData.arrow) === null || _b === void 0 ? void 0 : _b.x,
            top: (_c = middlewareData.arrow) === null || _c === void 0 ? void 0 : _c.y
        }
    }), React.createElement("div", {
        className: "uxa-arrow-foreground",
        style: {
            left: ((_d = middlewareData.arrow) === null || _d === void 0 ? void 0 : _d.x) ? `calc(${(_e = middlewareData.arrow) === null || _e === void 0 ? void 0 : _e.x}px + var(--uxa-tooltip__border-width))` : undefined,
            top: ((_f = middlewareData.arrow) === null || _f === void 0 ? void 0 : _f.y) ? `calc(${(_g = middlewareData.arrow) === null || _g === void 0 ? void 0 : _g.y}px + var(--uxa-tooltip__border-width))` : undefined
        }
    }), React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-tooltip-content"
    }, {
        className,
        style
    })), children))), body)));
});
/** Define the Prop Type information */
Infotip.propTypes = {
    /** The element used to trigger Infotip. The Infotip will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** Determine if the Infotip is open or closed. */
    isOpen: PropTypes__default.bool,
    /** The color variant of the Infotip */
    variant: PropTypes__default.oneOf(["auto", "light", "dark", "auto-inverse"]),
    /** Where the Infotip is positioned vertically relative to the trigger. */
    placement: PropTypes__default.oneOf(["above", "below", "before", "after"]),
    /** Where the Infotip is aligned relative to the trigger. */
    alignment: PropTypes__default.oneOf(["start", "center", "end"]),
    /** Events that will cause the infotip to appear */
    openTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseenter", "focus"])),
    /** Events that will cause the infotip to hide. */
    closeTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseleave", "escape", "clickoutside", "blur", "mouseoutside"])),
    /** Emit whenever the infotip is opened or closed. */
    onOpenChange: PropTypes__default.func,
    /** Determine if the Infotip is disabled. */
    isDisabled: PropTypes__default.bool,
    /** The title of the number picker. This may be used to customize the default browser validation infotips. */
    title: PropTypes__default.string
};
var css_248z = "/** Set the elevation CSS properties for a given elevation level. */\n/**\n * In certain cases we may want to display a color that matches the background color of the containing element.\n * This color may change based on the elevation of the containing element.\n * One option is to use transparent, but that may not possible. This mixin allows the elements that define elevation\n * such as toolbars, cards, panels, dialogs etc.. to define their elevation and then any children can be aware\n * of the elevation of the container they are in and use the appropriate background color\n */\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip {\n  display: flex;\n  position: relative;\n  min-width: var(--uxa-tooltip__min-width);\n  border-radius: var(--uxa-tooltip__border-radius);\n  filter: var(--uxa-tooltip__filter);\n  box-shadow: var(--uxa-tooltip__box-shadow);\n  border: var(--uxa-tooltip__border-width) var(--uxa-tooltip__border-style) var(--uxa-tooltip__border-color);\n  background-color: var(--uxa-tooltip__background-color);\n  color: var(--uxa-tooltip__color);\n  font-size: var(--uxa-tooltip__font-size);\n  font-family: var(--uxa-tooltip__font-family, var(--uxa-typography__font-family));\n  z-index: var(--uxa-tooltip__z-index);\n  --uxa-elevation__background-color: var(--uxa-elevation__background-color--4);\n  --uxa-elevation__box-shadow: var(--uxa-elevation__box-shadow--4);\n  --uxa-elevation__border-color: var(--uxa-elevation__border-color--4);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-light {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--light);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--light);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__border-color--light);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-dark {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--dark);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--dark);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__background-color--dark);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-auto-inverse {\n  --uxa-tooltip__color: var(--uxa-tooltip__color--auto-inverse);\n  --uxa-tooltip__background-color: var(--uxa-tooltip__background-color--auto-inverse);\n  --uxa-tooltip__border-color: var(--uxa-tooltip__border-color--auto-inverse);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip .uxa-arrow-background,\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip .uxa-arrow-foreground {\n  content: \"\";\n  position: absolute;\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below {\n  margin-block-start: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below .uxa-arrow-background {\n  top: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-below .uxa-arrow-foreground {\n  top: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  transform: translateY(var(--uxa-tooltip__border-width));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above {\n  margin-block-end: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above .uxa-arrow-background {\n  bottom: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-top: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-above .uxa-arrow-foreground {\n  bottom: calc(var(--uxa-tooltip-arrow__size) * -1);\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  transform: translateY(calc(var(--uxa-tooltip__border-width) * -1));\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before {\n  margin-inline-end: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before .uxa-arrow-background {\n  border-top: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-start: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n  inset-inline-end: var(--uxa-tooltip-before-arrow__inline-end--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-before .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-start: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  inset-inline-end: var(--uxa-tooltip-before-arrow__inline-end--after);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after {\n  margin-inline-start: var(--uxa-tooltip-arrow__size);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after .uxa-arrow-background {\n  border-top: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-bottom: var(--uxa-tooltip-arrow__size) solid transparent;\n  border-inline-end: var(--uxa-tooltip-arrow__size) solid var(--uxa-tooltip__border-color);\n  inset-inline-start: var(--uxa-tooltip-after-arrow__inline-start--before);\n}\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip.uxa-placement-after .uxa-arrow-foreground {\n  border-top: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-bottom: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid transparent;\n  border-inline-end: calc(var(--uxa-tooltip-arrow__size) - var(--uxa-tooltip__border-width)) solid var(--uxa-tooltip__background-color);\n  inset-inline-start: var(--uxa-tooltip-after-arrow__inline-start--after);\n}\n\n:not(#\\9):not(#\\9):not(#\\9) .uxa-tooltip-content {\n  padding-inline: var(--uxa-tooltip__padding-inline);\n  padding-block: var(--uxa-tooltip__padding-block);\n  overflow: hidden auto;\n}";
styleInject(css_248z);
const Tooltip = forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g;
    var { isOpen, isDisabled, variant = "auto", placement = "below", alignment = "center", triggerRef, openTriggers = ["mouseenter", "focus"], closeTriggers = ["mouseleave", "blur"], onOpenChange, children, className, style, offset: offset$1 = 0, delay } = _a, props = __rest(_a, ["isOpen", "isDisabled", "variant", "placement", "alignment", "triggerRef", "openTriggers", "closeTriggers", "onOpenChange", "children", "className", "style", "offset", "delay"]);
    const direction = useDirection();
    const body = useBody();
    const [tooltipOpen, setTooltipOpen] = useControlled(isOpen, onOpenChange);
    const arrowRef = useRef(null);
    const setOpen = useCallback(shouldOpen => {
        if (tooltipOpen !== shouldOpen) {
            // if we are trying to open the tooltip but there is no content, don't open it
            if (shouldOpen && !children) {
                return;
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(shouldOpen);
            setTooltipOpen(shouldOpen);
        }
    }, [children, onOpenChange, tooltipOpen, setTooltipOpen]);
    const { refs, floatingStyles, update, middlewareData, placement: resolvedPlacement } = useFloating({
        open: tooltipOpen,
        onOpenChange: setOpen,
        placement: transformPlacement(direction, placement, alignment),
        elements: {
            reference: triggerRef.current
        },
        middleware: [offset({
                mainAxis: offset$1
            }), flip(), shift(), arrow({
                element: arrowRef.current
            })],
        whileElementsMounted: autoUpdate,
        transform: false
    });
    usePopoverTriggers({
        popoverRef: refs.floating,
        triggerRef,
        openTriggers,
        closeTriggers,
        onOpenChange: setOpen,
        isOpen: tooltipOpen,
        delay
    });
    useImperativeHandle(ref, () => ({
        element: refs.floating,
        updatePosition: update
    }));
    useIsomorphicEffect(() => update(), [update, direction]);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    React.createElement(React.Fragment, null, tooltipOpen && !isDisabled && body && createPortal(React.createElement("div", Object.assign({
        ref: refs.setFloating
    }, mergeProps({
        role: "tooltip",
        style: floatingStyles
    }, props)), React.createElement("div", Object.assign({}, mergeProps({
        className: clsx("uxa-tooltip", {
            "uxa-placement-above": resolvedPlacement.includes("top"),
            "uxa-placement-below": resolvedPlacement.includes("bottom"),
            "uxa-placement-before": direction === "ltr" ? resolvedPlacement.includes("left") : resolvedPlacement.includes("right"),
            "uxa-placement-after": direction === "ltr" ? resolvedPlacement.includes("right") : resolvedPlacement.includes("left"),
            "uxa-light": variant === "light",
            "uxa-dark": variant === "dark",
            "uxa-auto-inverse": variant === "auto-inverse"
        })
    })), React.createElement("div", {
        ref: arrowRef,
        className: "uxa-arrow-background",
        style: {
            left: (_b = middlewareData.arrow) === null || _b === void 0 ? void 0 : _b.x,
            top: (_c = middlewareData.arrow) === null || _c === void 0 ? void 0 : _c.y
        }
    }), React.createElement("div", {
        className: "uxa-arrow-foreground",
        style: {
            left: ((_d = middlewareData.arrow) === null || _d === void 0 ? void 0 : _d.x) ? `calc(${(_e = middlewareData.arrow) === null || _e === void 0 ? void 0 : _e.x}px + var(--uxa-tooltip__border-width))` : undefined,
            top: ((_f = middlewareData.arrow) === null || _f === void 0 ? void 0 : _f.y) ? `calc(${(_g = middlewareData.arrow) === null || _g === void 0 ? void 0 : _g.y}px + var(--uxa-tooltip__border-width))` : undefined
        }
    }), React.createElement("div", Object.assign({}, mergeProps({
        className: "uxa-tooltip-content"
    }, {
        className,
        style
    })), children))), body)));
});
/** Define the Prop Type information */
Tooltip.propTypes = {
    /** The element used to trigger Tooltip. The Tooltip will be positioned relative to this element. */
    triggerRef: PropTypes__default.any,
    /** Determine if the Tooltip is open or closed. */
    isOpen: PropTypes__default.bool,
    /** The color variant of the Tooltip */
    variant: PropTypes__default.oneOf(["auto", "light", "dark", "auto-inverse"]),
    /** Where the Tooltip is positioned vertically relative to the trigger. */
    placement: PropTypes__default.oneOf(["above", "below", "before", "after"]),
    /** Where the Tooltip is aligned relative to the trigger. */
    alignment: PropTypes__default.oneOf(["start", "center", "end"]),
    /** Events that will cause the tooltip to appear */
    openTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseenter", "focus"])),
    /** Events that will cause the tooltip to hide. */
    closeTriggers: PropTypes__default.arrayOf(PropTypes__default.oneOf(["click", "mouseleave", "escape", "clickoutside", "blur", "mouseoutside"])),
    /** Emit whenever the tooltip is opened or closed. */
    onOpenChange: PropTypes__default.func,
    /** Determine if the Tooltip is disabled. */
    isDisabled: PropTypes__default.bool,
    /** The title of the number picker. This may be used to customize the default browser validation tooltips. */
    title: PropTypes__default.string
};
export { Flyout as F, Infotip as I, Popover as P, Tooltip as T, transformPlacement as t };
