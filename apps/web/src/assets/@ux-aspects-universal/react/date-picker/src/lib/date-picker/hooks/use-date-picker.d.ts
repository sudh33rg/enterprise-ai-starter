import { UxaDateTimeAdapter } from '@ux-aspects-universal/core/date-time';
import { DateRangePickerState } from '../../date-range-picker/hooks/use-date-range-picker';
export interface DatePickerState<TDateTime> {
    activeDate?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    autoFocus?: boolean;
    activeMonth: TDateTime;
    datesInMonth: TDateTime[];
    dateTimeAdapter: UxaDateTimeAdapter<TDateTime>;
    dateRangePicker: DateRangePickerState<TDateTime>;
    canGoToPreviousMonth: boolean;
    canGoToNextMonth: boolean;
    selectDate: (date: TDateTime) => void;
    goToPreviousMonth: () => void;
    goToNextMonth: () => void;
    goToMonth: (month: number) => void;
    goToYear: (year: number) => void;
}
export declare const DatePickerContext: import("react").Context<DatePickerState<any> | null>;
export declare function useDatePickerContext<TDateTime>(): DatePickerState<TDateTime> | null;
interface DatePickerOptions<TDateTime> {
    value?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    autoFocus?: boolean;
    onValueChange?: (value: TDateTime) => void;
}
export declare function useDatePicker<TDateTime>({ value, min, max, isDisabled, isDateDisabled, onValueChange, autoFocus, }: DatePickerOptions<TDateTime>): DatePickerState<TDateTime>;
export {};
