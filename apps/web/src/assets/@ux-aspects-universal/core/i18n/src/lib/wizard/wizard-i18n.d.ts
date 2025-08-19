/** Localizable strings for the Wizard component. */
export declare abstract class UxaWizardI18n {
    /** Label for the "success" status indicator. */
    successStatusLabel?: string;
    /** Label for the "warning" status indicator. */
    warningStatusLabel?: string;
    /** Label for the "error" status indicator. */
    errorStatusLabel?: string;
    /** Label for the "active" status indicator. */
    activeStatusLabel?: string;
    /** Label for the "pending" status indicator. */
    pendingStatusLabel?: string;
}
export declare class UxaDefaultWizardI18n extends UxaWizardI18n {
    successStatusLabel: string;
    warningStatusLabel: string;
    errorStatusLabel: string;
    activeStatusLabel: string;
    pendingStatusLabel: string;
}
