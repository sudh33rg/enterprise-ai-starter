import { HTMLAttributes } from 'react';
import type { AccordionPanelOwnProps } from '../accordion-panel';
import { AccordionPanelHeaderProps } from '../accordion-panel-header';
interface AccordionPanelState {
    panelHeaderProps: AccordionPanelHeaderProps;
    panelContentProps: HTMLAttributes<HTMLDivElement>;
}
export declare function useAccordionPanel({ isExpanded, onExpandedChange, }: AccordionPanelOwnProps): AccordionPanelState;
export {};
