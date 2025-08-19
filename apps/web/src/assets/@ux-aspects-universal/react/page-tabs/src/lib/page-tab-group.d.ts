import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './page-tab-group.scss';
export type PageTabGroupProps = Props<'div', {
    /** The selected tab */
    selectedTab?: string;
    /** The size of the page tabs */
    size?: 'small' | 'medium';
    /** Emit when the tab should be closed */
    onTabClose?: (tab: string) => void;
    /** The container level the tabset is within */
    level?: 0 | 1;
    /** Emit when a tab is selected */
    onSelectedTabChange?: (tab: string | undefined) => void;
}>;
export declare const PageTabGroup: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "selectedTab" | "size" | "onTabClose" | "level" | "onSelectedTabChange"> & {
    /** The selected tab */
    selectedTab?: string;
    /** The size of the page tabs */
    size?: "small" | "medium";
    /** Emit when the tab should be closed */
    onTabClose?: (tab: string) => void;
    /** The container level the tabset is within */
    level?: 0 | 1;
    /** Emit when a tab is selected */
    onSelectedTabChange?: (tab: string | undefined) => void;
} & React.RefAttributes<HTMLDivElement>>;
