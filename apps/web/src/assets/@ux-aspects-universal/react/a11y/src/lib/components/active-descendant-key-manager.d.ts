import * as React from 'react';
import { RefObject } from 'react';
import { ActiveDescendantOrigin } from '../providers/active-descendant-key-manager';
export interface ActiveDescendantKeyManagerOptions {
    listRef: RefObject<HTMLElement>;
    children: (props: ActiveDescendantProps) => React.ReactNode;
    isOpen?: boolean;
    ref?: RefObject<ActiveDescendantKeyManagerController>;
}
export interface ActiveDescendantKeyManagerController {
    setActiveItem: (item: RefObject<HTMLElement>, origin: ActiveDescendantOrigin) => void;
    getActiveItem: () => HTMLElement | undefined;
    getDescendants: () => Array<HTMLElement>;
    getDescendantAtIndex: (index: number) => HTMLElement | undefined;
    activateFirstItem: (origin: ActiveDescendantOrigin) => void;
    activateLastItem: (origin: ActiveDescendantOrigin) => void;
    activateNextItem: (origin: ActiveDescendantOrigin) => void;
    activatePreviousItem: (origin: ActiveDescendantOrigin) => void;
    ensureActiveItem: () => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    addActiveItemListener: (listener: (id: string) => void) => void;
    removeActiveItemListener: (listener: (id: string) => void) => void;
}
export interface ActiveDescendantProps {
    'aria-activedescendant': string | undefined;
    onKeyDown: (event: React.KeyboardEvent) => void;
}
export declare const LegacyActiveDescendantKeyManager: React.ForwardRefExoticComponent<Omit<ActiveDescendantKeyManagerOptions, "ref"> & React.RefAttributes<ActiveDescendantKeyManagerController>>;
