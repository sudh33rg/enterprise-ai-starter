/**
 * Global i18n configuration which is provided to the Select implementations.
 */
export declare abstract class UxaSelectI18n {
    /** The clear button aria label */
    clearButtonAriaLabel?: string;
}
export declare class UxaDefaultSelectI18n extends UxaSelectI18n {
    clearButtonAriaLabel: string;
}
