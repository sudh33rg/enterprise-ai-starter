import PropTypes from 'prop-types';
import { HTMLProps, ReactElement } from 'react';
import { TimePickerOptions } from './hooks/use-time-picker';
import './time-picker.scss';
export type TimePickerOwnProps<TDateTime> = TimePickerOptions<TDateTime>;
export type TimePickerProps<TDateTime> = TimePickerOwnProps<TDateTime> & Omit<HTMLProps<HTMLDivElement>, keyof TimePickerOwnProps<TDateTime>>;
/**
 * See the documentation for `DateTimeAdapterContext` for more information about configuring the date & time
 * implementation used by UX Aspects Universal components.
 */
export declare function TimePicker<TDateTime>({ value, isDisabled, hourMode, id: initialId, offsets, showOffset, showSeconds, onValueChange, ...props }: TimePickerProps<TDateTime>): ReactElement;
export declare namespace TimePicker {
    var propTypes: {
        /** The value of the control. */
        value: PropTypes.Requireable<any>;
        /** Whether to use 12-hour or 24-hour interface. */
        hourMode: PropTypes.Requireable<number>;
        /** Whether to show the time offset selector. */
        showOffset: PropTypes.Requireable<boolean>;
        /** Whether to show the seconds input. */
        showSeconds: PropTypes.Requireable<boolean>;
        /** The list of time offsets that the user can choose from. */
        offsets: PropTypes.Requireable<any[]>;
        /** Emits when the user changes the value of the control. */
        onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Whether the component is disabled. */
        isDisabled: PropTypes.Requireable<boolean>;
    };
}
