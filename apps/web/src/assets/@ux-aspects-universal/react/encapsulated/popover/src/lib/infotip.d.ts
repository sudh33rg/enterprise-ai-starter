import { Alignment, Placement, Variant } from '@ux-aspects-universal/core/popover';
import * as React from 'react';
import { HTMLAttributes, RefObject } from 'react';
import './infotip.scss';
import { PopoverCloseTrigger } from './types/popover-close-trigger';
import { PopoverOpenTrigger } from './types/popover-open-trigger';
export interface InfotipOwnProps {
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
    minWidth?: number;
}
export type InfotipProps = InfotipOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof InfotipOwnProps>;
export interface InfotipRef {
    element: RefObject<HTMLElement | null>;
    updatePosition: () => void;
}
export declare const Infotip: React.ForwardRefExoticComponent<InfotipOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof InfotipOwnProps> & React.RefAttributes<InfotipRef>>;
