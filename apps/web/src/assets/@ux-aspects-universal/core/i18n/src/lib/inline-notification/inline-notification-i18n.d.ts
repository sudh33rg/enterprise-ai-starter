/**
 * Global i18n configuration which is provided to the Inline Notification implementations.
 */
export declare abstract class UxaInlineNotificationI18n {
    /** The aria label for the dismiss button */
    dismissButtonAriaLabel?: string;
}
export declare class UxaDefaultInlineNotificationI18n extends UxaInlineNotificationI18n {
    /** The aria label for the dismiss button */
    dismissButtonAriaLabel: string;
}
