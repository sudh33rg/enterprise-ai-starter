import * as React from 'react';
import { FC, HTMLProps } from 'react';
import './alert.scss';
export type AlertStatus = 'info' | 'success' | 'error' | 'warning' | 'dark';
interface AlertOwnProps {
    status: AlertStatus;
    isDismissible?: boolean;
    onDismiss?: () => void;
    icon?: React.ReactElement;
    dismissButton?: React.ReactElement;
}
export type AlertProps = AlertOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof AlertOwnProps>;
export declare const Alert: FC<AlertProps>;
export {};
