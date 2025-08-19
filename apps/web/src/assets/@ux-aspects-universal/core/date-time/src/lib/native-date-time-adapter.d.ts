import { UxaDateTimeAdapter } from './date-time-adapter';
import { UxaDateTimeProperties } from './date-time-properties';
import { UxaDuration } from './duration';
import { UxaMonthInfo } from './month-info';
export declare class UxaNativeDateTimeAdapter extends UxaDateTimeAdapter<Date> {
    /** Store the users current locale */
    private _locale;
    getYear(dt: Date): number;
    getMonth(dt: Date): number;
    getMonthIndex(dt: Date): number;
    getDate(dt: Date): number;
    getHour(dt: Date): number;
    getMinute(dt: Date): number;
    getSecond(dt: Date): number;
    getMillisecond(dt: Date): number;
    getWeekDay(dt: Date): number;
    getOffset(_dt: Date): number;
    getOffsetName(_dt: Date): string;
    isSameYear(dt1: Date, dt2: Date): boolean;
    isSameMonth(dt1: Date, dt2: Date): boolean;
    isSameDate(dt1: Date, dt2: Date): boolean;
    isSameHour(dt1: Date, dt2: Date): boolean;
    isSameMinute(dt1: Date, dt2: Date): boolean;
    isSameSecond(dt1: Date, dt2: Date): boolean;
    getIntervalInDays(dt1: Date, dt2: Date): number;
    create(year: number, month: number, date: number, hour?: number, minute?: number, second?: number, millisecond?: number): Date;
    now(): Date;
    clone(dt: Date): Date;
    set(dt: Date, values: UxaDateTimeProperties): Date;
    add(dt: Date, duration: UxaDuration): Date;
    subtract(dt: Date, duration: UxaDuration): Date;
    compare(dt1: Date, dt2: Date): 0 | 1 | -1;
    parse(value: string, _format?: string): Date;
    format(dt: Date, _format?: string): string;
    getDateString(dt: Date): string;
    getTimeString(dt: Date, options?: {
        hour12: boolean;
    }): string;
    getMonthNames(_dt?: Date): string[];
    getMonthShortNames(_dt?: Date): string[];
    getMonths(dt?: Date): UxaMonthInfo[];
    getWeekDayNames(_dt?: Date): string[];
    getWeekDayShortNames(_dt?: Date): string[];
    getWeekDayNarrowNames(_dt?: Date): string[];
    getMeridiemNames(_dt?: Date): string[];
    setDefaultLocale(locale: string): void;
}
