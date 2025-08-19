import { HTMLProps } from 'react';
import type { NumberPickerProps } from '../number-picker';
import { StepButtonProps } from '../step-button';
/** Return values of the useNumberPicker hook */
interface NumberPickerHookReturn {
    numberPickerProps: HTMLProps<HTMLDivElement>;
    inputProps: HTMLProps<HTMLInputElement>;
    stepUpButtonProps: StepButtonProps;
    stepDownButtonProps: StepButtonProps;
}
/** Hook applying main number picker functionality */
export declare function useNumberPicker({ id, className, style, defaultValue, value, step, min, max, onChange, onValueChange, isDisabled, isInvalid, stepperType, size, title, ...props }: NumberPickerProps): NumberPickerHookReturn;
export {};
