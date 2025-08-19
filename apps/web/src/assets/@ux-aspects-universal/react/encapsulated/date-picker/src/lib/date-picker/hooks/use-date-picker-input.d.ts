import { HourMode } from '@ux-aspects-universal/core/date-time';
import { ButtonProps } from '@ux-aspects-universal/react/button';
import { PopoverProps } from '@ux-aspects-universal/react/popover';
import { TextInputProps } from '@ux-aspects-universal/react/text-input';
import { TimePickerProps } from '@ux-aspects-universal/react/time-picker';
import { RefObject } from 'react';
import { DatePickerProps } from '../date-picker';
export declare function useDatePickerInput<TDateTime>(options: DatePickerInputOptions<TDateTime>): DatePickerInputValues<TDateTime>;
export interface DatePickerInputOptions<TDateTime> {
    date: TDateTime;
    toDateString: (date: TDateTime) => string;
    toDate: (value: string) => TDateTime | null;
    hourMode?: HourMode;
}
export interface DatePickerInputValues<TDateTime> {
    date: TDateTime | undefined;
    setDate: (date: TDateTime) => void;
    inputGroupProps: {
        ref: RefObject<HTMLDivElement>;
    };
    textInputProps: TextInputProps & {
        ref: RefObject<HTMLInputElement>;
    };
    toggleButtonProps: ButtonProps;
    datePickerProps: DatePickerProps<TDateTime>;
    popoverProps: PopoverProps;
    timePickerProps: TimePickerProps<TDateTime>;
    setIsPopoverOpen: (isOpen: boolean) => void;
}
