import { FC, ReactNode } from 'react';
export interface AccordionPanelHeaderProps {
    id?: string;
    contentId?: string;
    isExpanded?: boolean;
    onExpandedChange?: (isExpanded: boolean) => void;
    children?: ReactNode;
}
export declare const AccordionPanelHeader: FC<AccordionPanelHeaderProps>;
