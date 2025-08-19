import { FC, HTMLAttributes } from 'react';
import './loader.scss';
export interface LoaderOwnProps {
    size?: number | string;
    variant?: 'primary' | 'secondary';
}
export type LoaderProps = LoaderOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof LoaderOwnProps>;
export declare const Loader: FC<LoaderProps>;
