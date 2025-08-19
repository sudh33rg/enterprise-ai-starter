import * as React from 'react';
import { HTMLAttributes } from 'react';
import './flyout.scss';
import { PopoverOwnProps, PopoverRef } from './popover';
export type FlyoutOwnProps = PopoverOwnProps;
export type FlyoutProps = FlyoutOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FlyoutOwnProps>;
export type FlyoutRef = PopoverRef;
export declare const Flyout: React.ForwardRefExoticComponent<PopoverOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof PopoverOwnProps> & React.RefAttributes<PopoverRef>>;
