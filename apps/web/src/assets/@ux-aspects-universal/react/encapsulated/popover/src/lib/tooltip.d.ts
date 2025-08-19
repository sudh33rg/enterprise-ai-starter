import { Alignment, Placement, Variant } from '@ux-aspects-universal/core/popover';
import * as React from 'react';
import { HTMLAttributes, RefObject } from 'react';
import './tooltip.scss';
import { PopoverCloseTrigger } from './types/popover-close-trigger';
import { PopoverOpenTrigger } from './types/popover-open-trigger';
export interface TooltipOwnProps {
    isOpen?: boolean;
    placement?: Placement;
    alignment?: Alignment;
    variant?: Variant;
    triggerRef: RefObject<HTMLElement>;
    openTriggers?: PopoverOpenTrigger[];
    closeTriggers?: PopoverCloseTrigger[];
    onOpenChange?: (isOpen: boolean) => void;
    isDisabled?: boolean;
    offset?: number;
    delay?: number;
}
export type TooltipProps = TooltipOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TooltipOwnProps>;
export interface TooltipRef {
    element: RefObject<HTMLElement | null>;
    updatePosition: () => void;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof TooltipOwnProps> & React.RefAttributes<TooltipRef>>;
