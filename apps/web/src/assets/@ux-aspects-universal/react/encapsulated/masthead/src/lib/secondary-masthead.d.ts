import * as React from 'react';
import { FC, HTMLProps } from 'react';
import './masthead.scss';
export interface SecondaryMastheadOwnProps {
    /** Content to render in the tabs slot of the masthead. */
    tabs?: React.ReactNode[];
    /** Content to render in the module slot. */
    module?: React.ReactNode;
    /** Content to render in the actions slot. */
    actions?: React.ReactNode[];
}
export type SecondaryMastheadProps = SecondaryMastheadOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof SecondaryMastheadOwnProps>;
export declare const SecondaryMasthead: FC<SecondaryMastheadProps>;
