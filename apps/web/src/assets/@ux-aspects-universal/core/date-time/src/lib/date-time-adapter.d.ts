import { UxaDateTimeProperties } from './date-time-properties';
import { UxaDuration } from './duration';
import { UxaMonthInfo } from './month-info';
/**
 * An adapter that components can use to perform date logic and i18n without relying on a specific implementation.
 */
export declare abstract class UxaDateTimeAdapter<T> {
    constructor(options?: UxaDateTimeAdapterOptions);
    /** Get the year. */
    abstract getYear(dt: T): number;
    /**
     * Get the month.
     * May be indexed from 0 or 1 depending on the implementation; do not compare the result with an explicit value.
     */
    abstract getMonth(dt: T): number;
    /**
     * Get the index of the month (0-11).
     * This can be used to index the result of `getMonthNames`.
     * Do not use this as an argument to `create` or `set`; use `getMonth` instead.
     */
    abstract getMonthIndex(dt: T): number;
    /** Get the day of the month (1-30ish). */
    abstract getDate(dt: T): number;
    /** Get the hour of the day (0-23). */
    abstract getHour(dt: T): number;
    /** Get the minute of the hour (0-59). */
    abstract getMinute(dt: T): number;
    /** Get the second of the minute (0-59). */
    abstract getSecond(dt: T): number;
    /** Get the millisecond of the second (0-999). */
    abstract getMillisecond(dt: T): number;
    /** Get the day of the week (0-6, 0 is Sunday). */
    abstract getWeekDay(dt: T): number;
    /** Get the UTC offset in minutes. */
    abstract getOffset(dt: T): number;
    /** Get the UTC offset name. */
    abstract getOffsetName(dt: T): string;
    /** Determine whether two dates are in the same year. */
    abstract isSameYear(dt1: T, dt2: T): boolean;
    /** Determine whether two dates are in the same month. */
    abstract isSameMonth(dt1: T, dt2: T): boolean;
    /** Determine whether two dates are in the same date. */
    abstract isSameDate(dt1: T, dt2: T): boolean;
    /** Determine whether two dates are in the same hour. */
    abstract isSameHour(dt1: T, dt2: T): boolean;
    /** Determine whether two dates are in the same minute. */
    abstract isSameMinute(dt1: T, dt2: T): boolean;
    /** Determine whether two dates are in the same second. */
    abstract isSameSecond(dt1: T, dt2: T): boolean;
    /** Get the number of whole days between two dates. */
    abstract getIntervalInDays(dt1: T, dt2: T): number;
    /**
     * Create a new date object.
     * `month` may be indexed from 0 or 1 depending on the implementation; do not pass an explicit value.
     */
    abstract create(year: number, month: number, date: number, hour?: number, minute?: number, second?: number, millisecond?: number): T;
    /** Create a new date object with the current date and time. */
    abstract now(): T;
    /** Create a copy of the date object. */
    abstract clone(dt: T): T;
    /**
     * Get a copy of the date with the given values applied.
     * `month` may be indexed from 0 or 1 depending on the implementation; do not pass an explicit value.
     * Use `getMonths` to retrieve the implementation-specific list of month numbers.
     */
    abstract set(dt: T, values: UxaDateTimeProperties): T;
    /** Add a duration. */
    abstract add(dt: T, duration: UxaDuration): T;
    /** Subtract a duration. */
    abstract subtract(dt: T, duration: UxaDuration): T;
    /** Compare two dates. */
    abstract compare(dt1: T, dt2: T): -1 | 0 | 1;
    /** Determine whether `dt1` is after `dt2`. */
    isAfter(dt1: T, dt2: T): boolean;
    /** Determine whether `dt1` is before `dt2`. */
    isBefore(dt1: T, dt2: T): boolean;
    /** Parse a string, optionally with a specific format. */
    abstract parse(value: string, format?: string): T;
    /** Format to a string, optionally with a specific format. */
    abstract format(dt: T, format?: string): string;
    /** Get a localized string representing the date only. */
    abstract getDateString(dt: T): string;
    /** Get a localized string representing the time only. */
    abstract getTimeString(dt: T, options?: {
        hour12: boolean;
    }): string;
    /** Get the list of month names. */
    abstract getMonthNames(dt?: T): string[];
    /** Get the list of month short names. */
    abstract getMonthShortNames(dt?: T): string[];
    /** Get the list of months. */
    abstract getMonths(dt?: T): UxaMonthInfo[];
    /** Get the list of weekday names. */
    abstract getWeekDayNames(dt?: T): string[];
    /** Get the list of weekday short names. */
    abstract getWeekDayShortNames(dt?: T): string[];
    /** Get the list of weekday shortest names. */
    abstract getWeekDayNarrowNames(dt?: T): string[];
    /** Get the meridiem names. */
    abstract getMeridiemNames(dt?: T): string[];
    /** Set the default locale */
    abstract setDefaultLocale(locale: string): void;
}
export interface UxaDateTimeAdapterOptions {
    /** The default locale */
    defaultLocale?: string;
}
