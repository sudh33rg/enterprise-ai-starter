import { PropsWithChildren, ReactElement } from 'react';
import './date-picker.scss';
interface DateButtonProps<TDateTime> {
    date: TDateTime;
}
export declare function DateButton<TDateTime>({ date, }: PropsWithChildren<DateButtonProps<TDateTime>>): ReactElement;
export {};
