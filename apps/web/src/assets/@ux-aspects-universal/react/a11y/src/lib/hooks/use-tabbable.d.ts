import { HTMLAttributes, RefObject } from 'react';
export declare function useTabbable<TElement extends HTMLElement, TData = unknown>(ref: RefObject<TElement>, { id, isDisabled, value }?: TabbableOptions<TData>): TababbleHookReturn;
export interface TababbleHookReturn {
    tabIndex: number;
    tabbableProps: HTMLAttributes<HTMLElement>;
    setActive: () => void;
}
export interface TabbableOptions<TData = unknown> {
    id?: string;
    isDisabled?: boolean;
    value?: TData;
}
