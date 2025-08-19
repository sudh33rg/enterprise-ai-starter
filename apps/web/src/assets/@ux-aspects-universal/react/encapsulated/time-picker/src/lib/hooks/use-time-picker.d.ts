import { UxaTimeOffset } from '@ux-aspects-universal/core/date-time';
import { ToggleButtonGroupProps } from '@ux-aspects-universal/react/button';
import { TimeOffsetPickerProps } from '../time-offset-picker';
import { TimeValuePickerProps } from '../time-value-picker';
export interface TimePickerState<TDateTime> {
    hourPickerProps: TimeValuePickerProps;
    minutePickerProps: TimeValuePickerProps;
    secondPickerProps: TimeValuePickerProps;
    meridiemPickerProps: ToggleButtonGroupProps<number>;
    timeOffsetPickerProps: TimeOffsetPickerProps<TDateTime>;
    id?: string;
}
export interface TimePickerOptions<TDateTime> {
    value?: TDateTime | undefined;
    showOffset?: boolean;
    showSeconds?: boolean;
    hourMode?: 12 | 24;
    offsets?: UxaTimeOffset[];
    isDisabled?: boolean;
    id?: string;
    onValueChange?: (value: TDateTime) => void;
}
export declare function useTimePicker<TDateTime>({ value, hourMode, offsets, isDisabled, id, onValueChange, }: TimePickerOptions<TDateTime>): TimePickerState<TDateTime>;
