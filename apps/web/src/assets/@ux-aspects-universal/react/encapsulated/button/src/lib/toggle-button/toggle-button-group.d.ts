import { HTMLAttributes, ReactElement } from 'react';
import './toggle-button-group.scss';
type SelectionMode = 'single' | 'radio' | 'multiple';
interface ToggleButtonGroupOwnProps<T> {
    primary?: boolean;
    secondary?: boolean;
    value?: T | T[];
    isDisabled?: boolean;
    selectionMode?: SelectionMode;
    onValueChange?: (value: T | T[] | undefined) => void;
}
export type ToggleButtonGroupProps<T> = ToggleButtonGroupOwnProps<T> & Omit<HTMLAttributes<HTMLDivElement>, keyof ToggleButtonGroupOwnProps<T>>;
export declare function ToggleButtonGroup<T>({ primary, secondary, isDisabled, selectionMode, onValueChange, children, value, ...props }: ToggleButtonGroupProps<T>): ReactElement;
export {};
