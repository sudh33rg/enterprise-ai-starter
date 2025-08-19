import { FC, HTMLProps } from 'react';
import './form-field.scss';
export interface FormFieldProps extends HTMLProps<HTMLDivElement> {
    isValid?: boolean;
}
export declare const FormField: FC<FormFieldProps>;
