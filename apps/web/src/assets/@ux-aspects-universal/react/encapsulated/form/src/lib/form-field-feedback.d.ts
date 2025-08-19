import { FC, HTMLProps, ReactNode } from 'react';
import './form-field-feedback.scss';
export interface FormFieldFeedbackProps extends HTMLProps<HTMLDivElement> {
    icon?: ReactNode;
    status?: 'error' | 'success';
    whenInvalid?: boolean;
}
export declare const FormFieldFeedback: FC<FormFieldFeedbackProps>;
