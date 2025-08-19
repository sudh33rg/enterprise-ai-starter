import * as React from 'react';
import { PropsWithChildren, ReactElement } from 'react';
export declare const ToggleButtonContext: React.Context<ToggleButtonProviderProps<any> | null>;
export interface ToggleButtonProviderProps<T> {
    isChecked: (item: T) => boolean;
    select: (item: T) => void;
    isGroupDisabled?: boolean;
}
export declare function ToggleButtonProvider<T>({ children, ...props }: PropsWithChildren<ToggleButtonProviderProps<T>>): ReactElement;
export declare function useToggleButtonContext<T>(): ToggleButtonProviderProps<T>;
