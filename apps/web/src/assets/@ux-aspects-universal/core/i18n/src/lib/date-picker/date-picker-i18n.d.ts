import { MonthYearOrder } from '../types/month-year-dropdown';
export declare abstract class UxaDatePickerI18n {
    /** The aria-label value for the previous month button. */
    previousMonthBtnAriaLabel?: string;
    /** The aria-label value for the next month button. */
    nextMonthBtnAriaLabel?: string;
    /** Order of the month & year selector. */
    monthYearOrder?: MonthYearOrder;
}
export declare class UxaDefaultDatePickerI18n extends UxaDatePickerI18n {
    previousMonthBtnAriaLabel: string;
    nextMonthBtnAriaLabel: string;
    monthYearOrder: MonthYearOrder;
}
