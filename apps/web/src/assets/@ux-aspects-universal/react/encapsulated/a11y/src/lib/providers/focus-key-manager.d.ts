/** eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { ReactNode, RefObject } from 'react';
export interface FocusKeyManagerContextValue<TData> {
    addItem: (item: FocusableItem<TData>) => void;
    removeItem: (item: FocusableItem<TData>) => void;
    setActiveItem: (item: string | undefined) => void;
    setDisabled: (item: FocusableItem<TData>, isDisabled: boolean) => void;
    focusFirst: () => void;
    focusLast: () => void;
    focusNext: () => void;
    focusBelow: () => void;
    focusAbove: () => void;
    focusPrevious: () => void;
    goToPreviousPage: (delta: number) => void;
    goToNextPage: (delta: number) => void;
    onFocusItemChange: (callback: (item: FocusableItem<TData>) => void) => () => void;
    activeItem: Partial<FocusableItem<TData>> | undefined;
    activeItemRef: RefObject<Partial<FocusableItem<TData>> | undefined>;
    orientation: 'horizontal' | 'vertical' | 'grid';
}
export declare const FocusKeyManagerContext: React.Context<FocusKeyManagerContextValue<any> | null>;
export interface FocusKeyManagerProps<TData> {
    wrap?: boolean;
    autoFocus?: boolean;
    orientation?: 'horizontal' | 'vertical' | 'grid';
    columns?: number;
    onGoToPreviousPage?: (delta: number, data?: TData) => TData | void;
    onGoToNextPage?: (delta: number, data?: TData) => TData | void;
    comparator?: (dataOne?: TData, dataTwo?: TData) => boolean;
    sort?: (a: FocusableItem<TData>, b: FocusableItem<TData>) => number;
    children?: ReactNode;
    inheritFocusManager?: boolean;
    controller?: RefObject<FocusKeyManagerController>;
}
export interface FocusableItem<T = unknown> {
    id: string;
    disabled: boolean;
    ref: React.RefObject<HTMLElement>;
    value?: T;
    isFocused?: boolean;
}
export declare function FocusKeyManager<TData>({ inheritFocusManager, ...props }: FocusKeyManagerProps<TData>): ReactNode;
export interface FocusKeyManagerController {
    setActiveItem: (id: string) => void;
}
