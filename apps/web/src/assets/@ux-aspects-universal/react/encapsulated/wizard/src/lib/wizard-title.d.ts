import { FC, HTMLAttributes } from 'react';
import './wizard-title.scss';
export interface WizardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Name of the element type to render the text with (default: "h1"). */
    is?: string;
}
export declare const WizardTitle: FC<WizardTitleProps>;
