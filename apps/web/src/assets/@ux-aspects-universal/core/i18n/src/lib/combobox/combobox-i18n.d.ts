/**
 * Global i18n configuration which is provided to the Combobox implementations.
 */
export declare abstract class UxaComboboxI18n {
    /** The clear button aria label */
    clearButtonAriaLabel?: string;
}
export declare class UxaDefaultComboboxI18n extends UxaComboboxI18n {
    clearButtonAriaLabel: string;
}
