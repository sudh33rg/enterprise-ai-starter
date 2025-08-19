import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import './number-picker.scss';
/** Number picker props */
export interface NumberPickerOwnProps {
    value?: number | string;
    min?: number;
    max?: number;
    step?: number;
    size?: 'small' | 'medium' | 'large';
    isDisabled?: boolean;
    isInvalid?: boolean;
    onValueChange?: (value: number | string) => void;
    stepperType?: 'chevron' | 'plus-minus';
    defaultValue?: NumberPickerOwnProps['value'];
}
/** Shared number picker component type */
export type NumberPickerProps = NumberPickerOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof NumberPickerOwnProps>;
/**
 * The `NumberPicker` component provides the same functionality as a native `<input type="number">`
 * enhanced with Micro Focus Design styling.
 */
export declare const NumberPicker: React.ForwardRefExoticComponent<NumberPickerOwnProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof NumberPickerOwnProps> & React.RefAttributes<HTMLDivElement>>;
