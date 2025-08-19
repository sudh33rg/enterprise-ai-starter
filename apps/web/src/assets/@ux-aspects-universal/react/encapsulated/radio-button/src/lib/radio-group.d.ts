import { AriaRadioGroupProps, AriaRadioProps } from '@react-types/radio';
import * as React from 'react';
import { ChangeEventHandler, HTMLProps } from 'react';
import './radio-group.scss';
interface RadioGroupOwnProps {
    /** The orientation of the radio buttons. */
    orientation?: 'horizontal' | 'vertical';
    /** The currently selected option. */
    value?: string;
    /** The spacing between each radio button. */
    density?: 'compact' | 'regular' | 'spacious';
    /** Function for handling updates to the selected option. */
    onValueChange?: (value: string) => void;
    /** Emits when the change event is triggered on a child RadioButton. */
    onChange?: ChangeEventHandler;
    /** Whether the radio group should be disabled. */
    isDisabled?: boolean;
    /** Whether the radio group should be readonly. */
    isReadonly?: boolean;
}
export type RadioGroupProps = RadioGroupOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof AriaRadioGroupProps> & Omit<AriaRadioProps, keyof RadioGroupOwnProps>;
export declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
