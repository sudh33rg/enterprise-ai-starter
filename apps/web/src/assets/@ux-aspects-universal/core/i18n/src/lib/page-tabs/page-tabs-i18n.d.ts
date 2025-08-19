/**
 * Global i18n configuration which is provided to the PageTabs implementations.
 */
export declare abstract class UxaPageTabsI18n {
    /** The aria-label for the menu button. */
    menuButtonAriaLabel: string;
    /** The text content of the close all button. */
    closeAllButtonLabel: string;
    /** Search placeholder */
    searchPlaceholder: string;
}
export declare class UxaDefaultPageTabsI18n extends UxaPageTabsI18n {
    /** The aria-label for the menu button. */
    menuButtonAriaLabel: string;
    /** The text content of the close all button. */
    closeAllButtonLabel: string;
    /** Search placeholder */
    searchPlaceholder: string;
}
