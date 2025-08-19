import * as React from 'react';
import { FC, HTMLProps } from 'react';
import './inline-notification.scss';
export interface InlineNotificationOwnProps {
    /** Define the inline notification color */
    status: InlineNotificationStatus;
    /** Whether the dismiss button is visible */
    isDismissible?: boolean;
    /** Define the orientation of the inline notification */
    orientation?: 'horizontal' | 'vertical';
    /** Whether the inline inline notification should have a rounded appearance. */
    isRounded?: boolean;
    /** Define one or more action buttons */
    actionButtons?: React.ReactNode | React.ReactNode[];
    /** Optionally define a custom dismiss button */
    dismissButton?: React.ReactNode;
    /** Define the size of the inline notification */
    size?: InlineNotificationSize;
    /** Optionally define an icon */
    icon?: React.ReactNode;
    /** Define the horizontal alignment */
    alignment?: 'start' | 'center';
    /** Emits when the built-in dismiss button is clicked. */
    onDismiss?: () => void;
    children?: React.ReactNode;
}
export type InlineNotificationProps = InlineNotificationOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof InlineNotificationOwnProps>;
export declare const InlineNotification: FC<InlineNotificationProps>;
export type InlineNotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'critical';
export type InlineNotificationSize = 'small' | 'medium' | 'large';
