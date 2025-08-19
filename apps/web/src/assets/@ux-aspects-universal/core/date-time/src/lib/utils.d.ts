import { UxaDateTimeAdapter } from './date-time-adapter';
import { UxaMonthInfo } from './month-info';
interface RangeOptions<TDateTime> {
    min?: TDateTime;
    max?: TDateTime;
}
export declare function getMonthOptions<TDateTime>(date: TDateTime, adapter: UxaDateTimeAdapter<TDateTime>, { min, max }?: RangeOptions<TDateTime>): UxaMonthInfo[];
export declare function getYearOptions<TDateTime>(date: TDateTime, adapter: UxaDateTimeAdapter<TDateTime>, { min, max }?: RangeOptions<TDateTime>): number[];
export {};
