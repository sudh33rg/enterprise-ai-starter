import { FC, HTMLAttributes } from 'react';
import './accordion.scss';
export interface AccordionOwnProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether the chevron should appear at the start or the end of the panel header. */
    iconAlign?: 'start' | 'end';
}
export type AccordionProps = AccordionOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const Accordion: FC<AccordionProps>;
