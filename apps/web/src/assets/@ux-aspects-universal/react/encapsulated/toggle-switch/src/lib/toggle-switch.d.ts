import { AriaToggleProps } from '@react-types/checkbox';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import './toggle-switch.scss';
interface ToggleSwitchOwnProps {
    labelPosition?: 'before' | 'after';
    onValueChange?: (value: boolean) => void;
}
export type ToggleSwitchProps = ToggleSwitchOwnProps & Omit<AriaToggleProps, 'onChange'> & Omit<HTMLAttributes<HTMLInputElement>, keyof AriaToggleProps>;
export declare const ToggleSwitch: React.ForwardRefExoticComponent<ToggleSwitchOwnProps & Omit<AriaToggleProps, "onChange"> & Omit<React.HTMLAttributes<HTMLInputElement>, keyof AriaToggleProps> & React.RefAttributes<HTMLLabelElement>>;
export {};
