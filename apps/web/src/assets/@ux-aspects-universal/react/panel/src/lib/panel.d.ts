import * as React from 'react';
import { HTMLProps } from 'react';
import './panel.scss';
export interface PanelOwnProps {
    is?: string;
}
export type PanelProps = PanelOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof PanelOwnProps>;
export declare const Panel: React.ForwardRefExoticComponent<Omit<PanelProps, "ref"> & React.RefAttributes<HTMLElement>>;
