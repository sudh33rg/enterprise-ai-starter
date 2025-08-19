import { FC, HTMLProps } from 'react';
import './spinner.scss';
export interface SpinnerOwnProps {
    size?: 'medium' | 'large' | string | number;
}
export type SpinnerProps = SpinnerOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof SpinnerOwnProps>;
export declare const Spinner: FC<SpinnerProps>;
