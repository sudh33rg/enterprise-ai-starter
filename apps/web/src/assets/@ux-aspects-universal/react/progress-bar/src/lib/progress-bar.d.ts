import * as React from 'react';
import { HTMLProps } from 'react';
import './progress-bar.scss';
export interface ProgressBarOwnProps {
    value: number;
    min?: number;
    max?: number;
}
export type ProgressBarProps = ProgressBarOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof ProgressBarOwnProps>;
export declare const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
