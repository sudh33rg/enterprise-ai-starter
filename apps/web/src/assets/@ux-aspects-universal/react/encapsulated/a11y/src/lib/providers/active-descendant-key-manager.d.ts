import { RefObject } from 'react';
export declare const ActiveDescendantKeyManagerContext: import("react").Context<ActiveDescendantKeyManagerContextValue>;
export interface ActiveDescendantKeyManagerContextValue {
    activeDescendant?: ActiveDescendant;
    setActiveItem?: (ref: RefObject<HTMLElement>, origin: ActiveDescendantOrigin) => void;
}
export type ActiveDescendantOrigin = 'keyboard' | 'mouse' | 'program';
export interface ActiveDescendant {
    id: string | undefined;
    origin: ActiveDescendantOrigin;
}
