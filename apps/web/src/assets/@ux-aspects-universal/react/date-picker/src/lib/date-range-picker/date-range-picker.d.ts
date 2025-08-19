import PropTypes from 'prop-types';
import { HTMLProps, ReactElement } from 'react';
import './date-range-picker.scss';
export interface DateRangePickerOwnProps<TDateTime> {
    start?: TDateTime;
    end?: TDateTime;
    min?: TDateTime;
    max?: TDateTime;
    isDisabled?: boolean;
    isDateDisabled?: (date: TDateTime) => boolean;
    showSummary?: boolean;
    onValueChange?: (value: {
        start?: TDateTime;
        end?: TDateTime;
    }) => void;
}
export type DateRangePickerProps<TDateTime> = DateRangePickerOwnProps<TDateTime> & Omit<HTMLProps<HTMLDivElement>, keyof DateRangePickerOwnProps<TDateTime>>;
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
 * On top of this, the component uses several strings which must be localized. You can use `DateRangePickerI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <DateRangePickerI18nContext.Provider value={{ startTitle: 'Dewiswch ddyddiad cychwyn', ... }}>
 *   <DateRangePicker />
 * </DateRangePickerI18nContext.Provider>
 * ```
 *
 * See documentation for [DateRangePickerI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `DateRangePicker` in your application, it may be beneficial to
 * configure `DateRangePickerI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
export declare function DateRangePicker<TDateTime>({ start, end, min, max, isDisabled, isDateDisabled, showSummary, onValueChange, ...props }: DateRangePickerProps<TDateTime>): ReactElement;
export declare namespace DateRangePicker {
    var propTypes: {
        /** The value for the default start Date. */
        start: PropTypes.Requireable<any>;
        /** The value for the default end Date. */
        end: PropTypes.Requireable<any>;
        /** The minimum range value for the calendar. */
        min: PropTypes.Requireable<any>;
        /** The maximum range value for the calendar. */
        max: PropTypes.Requireable<any>;
        /** Whether the control is disabled. */
        isDisabled: PropTypes.Requireable<boolean>;
        /** Whether a specific date is disabled. */
        isDateDisabled: PropTypes.Requireable<(...args: any[]) => any>;
        /** Whether the summary is shown.*/
        showSummary: PropTypes.Requireable<boolean>;
        /** Emits whenever the date range selection changes.*/
        onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
