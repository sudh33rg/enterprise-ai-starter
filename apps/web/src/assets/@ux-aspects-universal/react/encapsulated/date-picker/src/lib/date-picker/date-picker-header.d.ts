import { ReactElement } from 'react';
interface DatePickerHeaderProps<TDateTime> {
    min?: TDateTime;
    max?: TDateTime;
    previousMonthBtnAriaLabel?: string;
    nextMonthBtnAriaLabel?: string;
}
export declare function DatePickerHeader<TDateTime>({ min, max, nextMonthBtnAriaLabel, previousMonthBtnAriaLabel, }: DatePickerHeaderProps<TDateTime>): ReactElement;
export {};
