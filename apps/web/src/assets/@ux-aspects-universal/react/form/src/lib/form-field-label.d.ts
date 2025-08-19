import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './form-field-label.scss';
export type FormFieldLabelProps = Props<'label', {
    /** Whether to show the required indicator */
    isRequired?: boolean;
}>;
export declare const FormFieldLabel: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref">, "isRequired"> & {
    /** Whether to show the required indicator */
    isRequired?: boolean;
} & React.RefAttributes<HTMLLabelElement>>;
