import { Props } from '@ux-aspects-universal/react/utils';
import { FC, ReactElement } from 'react';
import './page-tab.scss';
export type PageTabProps = Props<'div', {
    /** The unique id for this tab. */
    id: string;
    /** The label of the tab. */
    label: string;
    /** The icon of the tab. */
    icon?: ReactElement;
    /** Whether this tab is removable */
    isRemovable?: boolean;
}>;
export declare const PageTab: FC<PageTabProps>;
