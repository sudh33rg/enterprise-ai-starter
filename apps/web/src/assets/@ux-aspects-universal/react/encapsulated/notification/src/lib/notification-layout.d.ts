import { NotificationStatus } from '@ux-aspects-universal/core/notification';
import { FC, HTMLAttributes, ReactNode } from 'react';
import './notification-layout.scss';
interface NotificationLayoutOwnProps {
    /** Status of the notification, if applicable. */
    status?: NotificationStatus;
    /** Content to render as the status icon. */
    icon?: ReactNode;
}
export type NotificationLayoutProps = NotificationLayoutOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof NotificationLayoutOwnProps>;
export declare const NotificationLayout: FC<NotificationLayoutProps>;
export {};
