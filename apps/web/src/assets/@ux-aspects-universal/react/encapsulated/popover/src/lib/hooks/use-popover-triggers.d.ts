import { MutableRefObject, RefObject } from 'react';
import { PopoverCloseTrigger } from '../types/popover-close-trigger';
import { PopoverOpenTrigger } from '../types/popover-open-trigger';
interface UsePopoverTriggersOptions {
    popoverRef: MutableRefObject<HTMLElement>;
    triggerRef: RefObject<HTMLElement>;
    openTriggers: PopoverOpenTrigger[];
    closeTriggers: PopoverCloseTrigger[];
    isOpen?: boolean;
    onOpenChange: (isOpen: boolean) => void;
    delay?: number;
}
/**
 * Extract the logic for the open and close trigger events
 */
export declare function usePopoverTriggers({ popoverRef, triggerRef, openTriggers, closeTriggers, onOpenChange, delay, isOpen, }: UsePopoverTriggersOptions): void;
export {};
