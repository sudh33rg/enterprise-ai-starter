import { FC } from 'react';
import './time-value-picker.scss';
export interface TimeValuePickerProps {
    id?: string;
    ariaLabel?: string;
    className?: string;
    value: number | undefined;
    isDisabled?: boolean;
    formatValue: (_: number) => string;
    onValueChange: (_: number) => void;
    onIncrement: () => void;
    onDecrement: () => void;
}
export declare const TimeValuePicker: FC<TimeValuePickerProps>;
