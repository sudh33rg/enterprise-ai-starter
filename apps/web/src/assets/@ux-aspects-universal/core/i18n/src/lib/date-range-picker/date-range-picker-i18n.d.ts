import { MonthYearOrder } from '../types/month-year-dropdown';
export declare abstract class UxaDateRangePickerI18n<T> {
    /** The title to display above the start picker. */
    startTitle?: string;
    /** The title to display above the end picker. */
    endTitle?: string;
    /**  The aria-live announcement when a date in the start picker is focused. */
    startPickerAriaLabel?: string;
    /**  The aria-live announcement when a date in the end picker is focused. */
    endPickerAriaLabel?: string;
    /** Order of the month & year selector. */
    monthYearOrder?: MonthYearOrder;
    /** A function which returns a string indicating the duration of the selected range. */
    durationTitle?: (days: number, start: T, end: T) => string;
}
export declare class UxaDefaultDateRangePickerI18n<T = unknown> extends UxaDateRangePickerI18n<T> {
    startTitle: string;
    endTitle: string;
    startPickerAriaLabel: string;
    endPickerAriaLabel: string;
    monthYearOrder: MonthYearOrder;
    durationTitle: (days: number) => string;
}
