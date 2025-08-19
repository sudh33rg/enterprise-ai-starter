export interface NotificationConfig<TData = unknown> {
    /**	Where the notification is positioned horizontally. */
    alignment?: NotificationAlignment;
    /**	Where the notification is positioned vertically. */
    placement?: NotificationPlacement;
    /**	Period of time to display the notification in milliseconds; undefined to show indefinitely. */
    duration?: number;
    /**	aria-live attribute to apply to the notification container. */
    ariaLive?: 'off' | 'assertive' | 'polite';
    /**	role attribute to apply to the notification container. Default: 'alert'. */
    role?: string;
    /** The width of the notification. Accepts a number of pixels, or any CSS value with units. */
    width?: number | string;
    /** Custom data that will be available to the template or component. */
    data?: TData;
}
export type NotificationAlignment = 'start' | 'center' | 'end';
export type NotificationPlacement = 'top' | 'bottom';
