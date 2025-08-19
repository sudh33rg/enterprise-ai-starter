import { DialogPlacement } from './dialog-placement';
import { DialogRole } from './dialog-role';
import { DialogSize } from './dialog-size';
/** Dialog component configuration. */
export interface DialogConfig {
    /** `id` attribute value for the dialog. */
    id?: string;
    /** `aria-describedby` attribute value for the dialog. */
    ariaDescribedBy?: string;
    /** `aria-labelledby` attribute value for the dialog. */
    ariaLabelledBy?: string;
    /** `role` attribute value for the dialog. */
    role?: DialogRole;
    /** Whether to close the dialog by clicking on the backdrop. */
    closeOnBackdropClick?: boolean;
    /** Whether to close the dialog with the ESC key. */
    closeOnEscape?: boolean;
    /** A predefined width for the dialog. */
    size?: DialogSize;
    /** Width of the dialog in CSS units. */
    width?: number | string;
    /** Height of the dialog in CSS units. */
    height?: number | string;
    /** Where the dialog is positioned relative to the viewport. */
    placement?: DialogPlacement;
}
