import { FC, HTMLProps } from 'react';
import './form.scss';
export interface FormProps extends HTMLProps<HTMLFormElement> {
    orientation?: 'vertical' | 'horizontal';
    labelsColumnWidth?: string;
    controlsColumnWidth?: string;
}
export declare const Form: FC<FormProps>;
