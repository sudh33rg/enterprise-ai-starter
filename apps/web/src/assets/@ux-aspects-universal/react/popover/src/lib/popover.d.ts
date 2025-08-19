import { Placement as FloatingPlacement } from '@floating-ui/react';
import { Alignment, Placement, Variant } from '@ux-aspects-universal/core/popover';
import * as React from 'react';
import { HTMLAttributes, RefObject } from 'react';
import './popover.scss';
import { PopoverCloseTrigger } from './types/popover-close-trigger';
import { PopoverOpenTrigger } from './types/popover-open-trigger';
export interface PopoverOwnProps {
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
export type PopoverProps = PopoverOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof PopoverOwnProps>;
export interface PopoverRef {
    element: RefObject<HTMLElement | null>;
    updatePosition: () => void;
}
export declare const Popover: React.ForwardRefExoticComponent<PopoverOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof PopoverOwnProps> & React.RefAttributes<PopoverRef>>;
/**
 * Transform our Placement and Alignement type to the FloatingPlacement type
 * @param direction The direction of the document
 * @param placement The placement to transform
 * @param alignment The alignment to transform
 * @returns The FloatingPlacement
 */
export declare function transformPlacement(direction: 'ltr' | 'rtl', placement: Placement, alignment: Alignment): FloatingPlacement;
