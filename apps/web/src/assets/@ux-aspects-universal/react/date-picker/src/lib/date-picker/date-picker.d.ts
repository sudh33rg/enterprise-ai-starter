import PropTypes from 'prop-types';
import { HTMLProps, ReactElement } from 'react';
import './date-picker.scss';
export interface DatePickerOwnProps<TDateTime> {
    value?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    /** @deprecated Aria label for previous month button. */
    previousMonthBtnAriaLabel?: string;
    /** @deprecated Aria label for next month button. */
    nextMonthBtnAriaLabel?: string;
    onValueChange?: (value: TDateTime) => void;
}
export type DatePickerProps<TDateTime> = DatePickerOwnProps<TDateTime> & Omit<HTMLProps<HTMLDivElement>, keyof DatePickerOwnProps<TDateTime>>;
/**
 * See the documentation for `DateTimeAdapterContext` for more information about configuring the date & time
 * implementation used by UX Aspects Universal components.
 *
 * ## Localization
 *
 * Localization of date related content (date strings, weekday names, etc) is performed by the date & time
 * implementation; see [Intl (Luxon)](https://moment.github.io/luxon/#/intl) or
 * [i18n (Moment.js)](https://momentjs.com/docs/#/i18n/). By default, these should reflect the user's language choice as
 * reported by the browser.
 *
 * On top of this, the component uses several strings which must be localized. You can use `DatePickerI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <DatePickerI18nContext.Provider value={{ previousMonthBtnAriaLabel: 'Le mois précédent', ... }}>
 *   <DatePicker />
 * </DatePickerI18nContext.Provider>
 * ```
 *
 * See documentation for [DatePickerI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `DatePicker` in your application, it may be beneficial to
 * configure `DatePickerI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
export declare function DatePicker<TDateTime>({ value, min, max, isDisabled, isDateDisabled, previousMonthBtnAriaLabel, nextMonthBtnAriaLabel, onValueChange, autoFocus, ...props }: DatePickerProps<TDateTime>): ReactElement;
export declare namespace DatePicker {
    var propTypes: {
        /** The value for the default Date. */
        value: PropTypes.Requireable<any>;
        /** The minimum range value for the calendar. */
        min: PropTypes.Requireable<any>;
        /** The maximum range value for the calendar. */
        max: PropTypes.Requireable<any>;
        /** Whether the control is disabled. */
        isDisabled: PropTypes.Requireable<boolean>;
        /** Whether a specific date is disabled. */
        isDateDisabled: PropTypes.Requireable<(...args: any[]) => any>;
        /** The aria-label value for the previous month button. */
        previousMonthBtnAriaLabel: PropTypes.Requireable<string>;
        /** The aria-label value for the next month button. */
        nextMonthBtnAriaLabel: PropTypes.Requireable<string>;
    };
}
