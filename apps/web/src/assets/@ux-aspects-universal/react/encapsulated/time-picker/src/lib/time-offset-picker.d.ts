import { UxaTimeOffset } from '@ux-aspects-universal/core/date-time';
import { HTMLProps, ReactElement } from 'react';
import './time-offset-picker.scss';
export interface TimeOffsetPickerOwnProps<TDateTime> {
    id?: string;
    ariaLabel?: string;
    value: TDateTime;
    timeOffsets?: UxaTimeOffset[];
    isDisabled?: boolean;
    onValueChange?: (value: TDateTime) => void;
}
export type TimeOffsetPickerProps<TDateTime> = TimeOffsetPickerOwnProps<TDateTime> & Omit<HTMLProps<HTMLInputElement>, keyof TimeOffsetPickerOwnProps<TDateTime>>;
export declare function TimeOffsetPicker<TDateTime>(props: TimeOffsetPickerProps<TDateTime>): ReactElement;
