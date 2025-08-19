import { AriaRadioProps } from '@react-types/radio';
import * as React from 'react';
import { HTMLProps } from 'react';
import './radio-button.scss';
interface RadioButtonOwnProps {
    /** Whether the radio button should be disabled. */
    isDisabled?: boolean;
    /** The value of this radio button. */
    value?: string;
}
export type RadioButtonProps = RadioButtonOwnProps & Omit<HTMLProps<HTMLLabelElement>, keyof AriaRadioProps> & Omit<AriaRadioProps, keyof RadioButtonOwnProps>;
export declare const RadioButton: React.ForwardRefExoticComponent<Omit<RadioButtonProps, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export {};
