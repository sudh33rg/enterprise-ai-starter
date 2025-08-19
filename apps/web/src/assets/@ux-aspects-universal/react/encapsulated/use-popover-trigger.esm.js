import { _ as __rest } from "./_tslib.esm.js";
import { useRef, useState } from "react";
import { u as useControlled } from "./use-controllable.esm.js";
import "@react-aria/utils";
import "clsx";
import { u as useUniqueId } from "./use-unique-id.esm.js";
import "./reducer-provider.esm.js";
function usePopoverTrigger(options = {}) {
    var _a, _b;
    const [isOpen, setIsOpen] = useControlled(options.isOpen, options.onOpenChange, false);
    const popoverId = useUniqueId("popover", options.popoverId);
    const triggerId = useUniqueId("trigger", options.triggerId);
    const internalTriggerRef = useRef();
    // this is only here to trigger a re-render when the ref changes, otherwise the tooltip wont show if the
    // element is removed and re-added to the DOM (e.g. a button in the inline edit)
    const [_, setRef] = useState();
    const defaultRef = ref => {
        internalTriggerRef.current = ref;
        setRef(ref);
    };
    const triggerProps = {
        id: triggerId,
        "aria-describedby": isOpen ? popoverId : undefined,
        ref: (_a = options.triggerRef) !== null && _a !== void 0 ? _a : defaultRef
    };
    const popoverProps = {
        id: popoverId,
        isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
        onOpenChange: setIsOpen,
        triggerRef: (_b = options.triggerRef) !== null && _b !== void 0 ? _b : internalTriggerRef
    };
    return {
        isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
        setIsOpen,
        triggerProps,
        popoverProps
    };
}
// a simple wrapper around the usePopoverTrigger hook to make it more obvious to users using a tooltip
function useTooltipTrigger(options = {}) {
    const _a = usePopoverTrigger(options), { popoverProps } = _a, popoverTrigger = __rest(_a, ["popoverProps"]);
    return Object.assign(Object.assign({}, popoverTrigger), {
        tooltipProps: popoverProps
    });
}
// a simple wrapper around the usePopoverTrigger hook to make it more obvious to users using a flyout
function useFlyoutTrigger(options = {}) {
    const _a = usePopoverTrigger(options), { popoverProps } = _a, popoverTrigger = __rest(_a, ["popoverProps"]);
    return Object.assign(Object.assign({}, popoverTrigger), {
        flyoutProps: popoverProps
    });
}
// a simple wrapper around the usePopoverTrigger hook to make it more obvious to users using an infotip
function useInfotipTrigger(options = {}) {
    const _a = usePopoverTrigger(options), { popoverProps } = _a, popoverTrigger = __rest(_a, ["popoverProps"]);
    return Object.assign(Object.assign({}, popoverTrigger), {
        infotipProps: popoverProps
    });
}
export { useTooltipTrigger as a, useFlyoutTrigger as b, useInfotipTrigger as c, usePopoverTrigger as u };
