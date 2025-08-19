import { UxaDateTimeAdapter, UxaDateTimeProperties, UxaDuration, UxaMonthInfo } from '../../../date-time/src/index.ts';
import { DateTime } from 'luxon';
export declare class UxaLuxonDateTimeAdapter extends UxaDateTimeAdapter<DateTime> {
    getYear(dt: DateTime): number;
    /** Get the month (1-12). */
    getMonth(dt: DateTime): number;
    getMonthIndex(dt: DateTime): number;
    getDate(dt: DateTime): number;
    getHour(dt: DateTime): number;
    getMinute(dt: DateTime): number;
    getSecond(dt: DateTime): number;
    getMillisecond(dt: DateTime): number;
    getWeekDay(dt: DateTime): number;
    getOffset(dt: DateTime): number;
    getOffsetName(dt: DateTime): string;
    isSameYear(dt1: DateTime, dt2: DateTime): boolean;
    isSameMonth(dt1: DateTime, dt2: DateTime): boolean;
    isSameDate(dt1: DateTime, dt2: DateTime): boolean;
    isSameHour(dt1: DateTime, dt2: DateTime): boolean;
    isSameMinute(dt1: DateTime, dt2: DateTime): boolean;
    isSameSecond(dt1: DateTime, dt2: DateTime): boolean;
    getIntervalInDays(dt1: DateTime, dt2: DateTime): number;
    create(year: number, month: number, date: number, hour?: number, minute?: number, second?: number, millisecond?: number): DateTime;
    now(): DateTime;
    clone(dt: DateTime): DateTime;
    set(dt: DateTime, values: UxaDateTimeProperties): DateTime;
    add(dt: DateTime, duration: UxaDuration): DateTime;
    subtract(dt: DateTime, duration: UxaDuration): DateTime;
    compare(dt1: DateTime, dt2: DateTime): 0 | 1 | -1;
    parse(value: string, format?: string): DateTime;
    format(dt: DateTime, format?: string): string;
    getDateString(dt: DateTime): string;
    getTimeString(dt: DateTime, options?: {
        hour12: boolean;
    }): string;
    getMonthNames(dt?: DateTime): string[];
    getMonthShortNames(dt?: DateTime): string[];
    getMonths(dt?: DateTime): UxaMonthInfo[];
    getWeekDayNames(dt?: DateTime): string[];
    getWeekDayShortNames(dt?: DateTime): string[];
    getWeekDayNarrowNames(dt?: DateTime): string[];
    getMeridiemNames(dt?: DateTime): string[];
    setDefaultLocale(locale: string): void;
}
