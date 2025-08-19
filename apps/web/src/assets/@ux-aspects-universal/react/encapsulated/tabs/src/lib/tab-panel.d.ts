import { FC, ReactElement } from 'react';
import type { TabProps } from './tab';
export interface TabPanelProps {
    id: string;
    tab: ReactElement<TabProps>;
    isActive: boolean;
}
export declare const TabPanel: FC<TabPanelProps>;
