import { Modality } from '@react-aria/interactions';
import type { InlineEditProps } from '../inline-edit';
interface InlineEditContextValue<T> {
    /** The size of the inline edit component. */
    size: InlineEditProps<T>['size'];
    /** The function to save the value. */
    save: (modality: Modality) => void;
    /** The function to cancel the editing. */
    cancel: (modality: Modality) => void;
    /** The function to reset the value. */
    reset: (modality: Modality) => void;
    /** The function to start editing. */
    startEditing: () => void;
    /** Whether the control can be saved. */
    canSave: boolean;
    /** Whether the control can be reset. */
    canReset: boolean;
    /** Whether the value has changed. */
    hasChanged: boolean;
    /** The aria label for the edit button. */
    editButtonAriaLabel: string;
    /** The aria label for the save button. */
    saveButtonAriaLabel: string;
    /** The aria label for the cancel button. */
    cancelButtonAriaLabel: string;
    /** The aria label for the reset button. */
    resetButtonAriaLabel: string;
}
export declare const InlineEditContext: import("react").FC<import("react").PropsWithChildren<InlineEditContextValue<unknown>>>, useInlineEditContext: () => InlineEditContextValue<unknown>;
export {};
