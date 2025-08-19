import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from 'react';
import './toggle-button.scss';
export interface ToggleButtonOwnProps<T> {
    value?: T | null;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    isDisabled?: boolean;
}
export type ToggleButtonProps<T> = ToggleButtonOwnProps<T> & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof ToggleButtonOwnProps<T>>;
export declare function ToggleButton<T>({ value, isDisabled, ref, ...props }: ToggleButtonProps<T>): ReactElement;
