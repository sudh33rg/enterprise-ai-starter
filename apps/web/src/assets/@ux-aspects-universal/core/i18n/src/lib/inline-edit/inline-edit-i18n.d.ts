/**
 * Global i18n configuration which is provided to the InlineEdit implementations.
 */
export declare abstract class UxaInlineEditI18n {
    /**
     * The edit button aria label.
     */
    editButtonAriaLabel: string;
    /**
     * The reset button aria label.
     */
    resetButtonAriaLabel: string;
    /**
     * The save button aria label.
     */
    saveButtonAriaLabel: string;
    /**
     * The cancel button aria label.
     */
    cancelButtonAriaLabel: string;
    /**
     * The default placeholder text.
     */
    placeholder: string;
}
export declare class UxaDefaultInlineEditI18n extends UxaInlineEditI18n {
    /**
     * The edit button aria label.
     */
    editButtonAriaLabel: string;
    /**
     * The reset button aria label.
     */
    resetButtonAriaLabel: string;
    /**
     * The save button aria label.
     */
    saveButtonAriaLabel: string;
    /**
     * The cancel button aria label.
     */
    cancelButtonAriaLabel: string;
    /**
     * The default placeholder text.
     */
    placeholder: string;
}
