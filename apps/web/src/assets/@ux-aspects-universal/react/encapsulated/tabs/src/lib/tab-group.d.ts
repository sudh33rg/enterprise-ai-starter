import { FC, HTMLAttributes } from 'react';
import './tab-group.scss';
export interface TabGroupProps extends HTMLAttributes<HTMLDivElement> {
    /** Color variant for the tab group. */
    variant?: 'primary' | 'secondary';
    /** The size of the tab buttons. */
    size?: 'small' | 'medium';
    /** The index of the active tab. */
    activeIndex?: number;
    /** The id of the active tab. */
    activeId?: string;
    /** The orientation of the tab group. */
    orientation?: 'vertical' | 'horizontal';
    /** Emit whenever a new tab is active. */
    onActiveIndexChange?: (index: number) => void;
    /** Emit whenever a new tab is active. */
    onActiveIdChange?: (id: string) => void;
}
export declare const TabGroup: FC<TabGroupProps>;
