export interface DateRangePickerState<TDateTime> {
    start?: TDateTime;
    end?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    activeHoverDate?: TDateTime;
    selectStartDate: (date: TDateTime) => void;
    selectEndDate: (date: TDateTime) => void;
    setActiveHoverDate: (date?: TDateTime) => void;
}
export declare const DateRangePickerContext: import("react").Context<DateRangePickerState<any> | null>;
export declare function useDateRangePickerContext<TDateTime>(): DateRangePickerState<TDateTime> | null;
interface DateRangePickerOptions<TDateTime> {
    start?: TDateTime;
    end?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    onValueChange?: (value: {
        start?: TDateTime;
        end?: TDateTime;
    }) => void;
}
export declare function useDateRangePicker<TDateTime>({ start, end, min, max, isDisabled, isDateDisabled, onValueChange, }: DateRangePickerOptions<TDateTime>): DateRangePickerState<TDateTime>;
export {};
