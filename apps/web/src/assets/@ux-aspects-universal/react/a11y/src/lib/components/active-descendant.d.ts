import * as React from 'react';
import { ForwardedRef } from 'react';
interface ActiveDescendantItem<T> {
    id: string;
    disabled: boolean;
    ref: React.RefObject<HTMLElement>;
    value?: T;
}
export interface ActiveDescendantContextType<T> {
    activeId: string | undefined;
    registerItem: (item: ActiveDescendantItem<T>) => void;
    unregisterItem: (id: string) => void;
    setActiveItem: (item: string | undefined) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    addActiveDescendantListener: (fn: ActiveDescendantListener) => void;
    removeActiveDescendantListener: (fn: ActiveDescendantListener) => void;
}
type ActiveDescendantListener = (id: string | undefined) => void;
export declare function useActiveDescendant<T>(): ActiveDescendantContextType<T>;
interface ActiveDescendantProps<T> {
    onEnter?: (id: string, value: T) => void;
    loop?: boolean;
    children: React.ReactNode | ((context: ActiveDescendantContextType<T>) => React.ReactElement);
}
declare function ActiveDescendantProviderFn<T>({ children, onEnter, loop }: ActiveDescendantProps<T>, ref: ForwardedRef<ActiveDescendantContextType<T>>): React.ReactNode;
export declare const ActiveDescendantProvider: <T>(props: ActiveDescendantProps<T> & {
    ref?: React.ForwardedRef<ActiveDescendantContextType<T>>;
}) => ReturnType<typeof ActiveDescendantProviderFn>;
interface UseActiveDescendantItem<T> {
    isActive: boolean;
    itemProps: {
        id: string;
        ref: React.RefObject<T>;
        'aria-disabled': boolean | undefined;
        'aria-selected': boolean;
        className: string;
        onMouseEnter: () => void;
    };
}
interface UseActiveDescendantItemProps<T> {
    id?: string;
    disabled?: boolean;
    value?: T;
}
export declare function useActiveDescendantItem<T extends HTMLElement, U = undefined>({ id, disabled, value, }: UseActiveDescendantItemProps<U>): UseActiveDescendantItem<T>;
export {};
