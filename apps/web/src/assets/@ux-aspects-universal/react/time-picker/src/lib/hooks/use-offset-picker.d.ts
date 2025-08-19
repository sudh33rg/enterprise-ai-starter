import { HTMLProps } from 'react';
import { TimeOffsetPickerProps } from '../time-offset-picker';
interface TimeOffsetPickerState {
    containerProps: HTMLProps<HTMLDivElement>;
    inputProps: HTMLProps<HTMLInputElement>;
    stepUpButtonProps: HTMLProps<HTMLDivElement>;
    stepDownButtonProps: HTMLProps<HTMLDivElement>;
}
/** Hook applying main time offset picker functionality */
export declare function useOffsetPicker<TDateTime>({ id, ariaLabel, value, timeOffsets: providedOffsets, isDisabled, onValueChange, }: TimeOffsetPickerProps<TDateTime>): TimeOffsetPickerState;
export {};
