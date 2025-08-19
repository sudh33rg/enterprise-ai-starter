import { FC, ReactNode } from 'react';
import './wizard.scss';
export interface WizardStepProps<T extends number | string> {
    /** A unique identifier for the step. Required. */
    id: T;
    /** The label to display for the step in the step list. */
    label?: string | ReactNode;
    /** The status of the step. */
    status?: 'success' | 'warning' | 'error' | 'pending';
    /** Custom content to display instead of the default status indicator. */
    statusIndicator?: ReactNode;
    /** Whether the step has been visited by the user. */
    visited?: boolean;
    /** The title and description of the step, which appear when the step is active. */
    header?: ReactNode;
    validate?: () => boolean;
    /** Emits when the visited state of the step changes. */
    onVisitedChange?: () => void;
    children?: ReactNode;
}
export declare const WizardStep: FC<WizardStepProps<number | string>>;
