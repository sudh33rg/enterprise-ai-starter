import { FC, HTMLAttributes, ReactNode } from 'react';
import './masthead-module.scss';
export interface MastheadModuleOwnProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export type MastheadModuleProps = MastheadModuleOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof MastheadModuleOwnProps>;
export declare const MastheadModule: FC<MastheadModuleProps>;
