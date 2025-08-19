import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';
import { WizardStepProps } from './wizard-step';
import './wizard.scss';
export interface WizardProps<T extends number | string> {
    /** The id of the active step. */
    activeStep?: T;
    /** Optional header content above the step list. */
    header?: ReactNode;
    /** Optional close/cancel button within the step header. */
    closeButton?: ReactNode;
    /** Start-aligned content in the wizard footer. */
    footerStart?: ReactNode;
    /** End-aligned content in the wizard footer. */
    footerEnd?: ReactNode;
    /**  */
    children?: ReactElement<WizardStepProps<T>>[];
    /** Emits the id of the active step when it changes. */
    onActiveStepChange?: (id: T) => void;
    /** Emits when the "Finish" button has been clicked on a valid step. */
    onFinish?: () => void;
}
export declare function Wizard<T extends number | string = string>({ activeStep: activeStepProp, header, closeButton, footerStart, footerEnd, onActiveStepChange: onActiveStepChangeProp, onFinish, children, ...props }: WizardProps<T>): JSX.Element;
export declare namespace Wizard {
    var propTypes: {
        /** The id of the active step.*/
        activeStep: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /** Emits the id of the active step when it changes. */
        onActiveStepChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** Optional header content above the step list. */
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Optional close/cancel button within the step header. */
        closeButton: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Start-aligned content in the wizard footer. */
        footerStart: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** End-aligned content in the wizard footer. */
        footerEnd: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /** Emits when the "Finish" button has been clicked on a valid step. */
        onFinish: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
