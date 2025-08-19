import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
export interface AccordionPanelOwnProps {
    /** Content to display as the accordion panel header. */
    header?: React.ReactNode;
    /** Whether the content panel is visible. */
    isExpanded?: boolean;
    /** Whether the content panel is visible by default. */
    defaultExpanded?: boolean;
    /** Emits when the user changes the expanded state of the content panel. */
    onExpandedChange?: (isExpanded: boolean) => void;
}
export type AccordionPanelProps = AccordionPanelOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const AccordionPanel: FC<AccordionPanelProps>;
