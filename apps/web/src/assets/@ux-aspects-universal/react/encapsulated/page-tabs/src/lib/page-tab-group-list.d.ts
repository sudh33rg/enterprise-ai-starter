import { FocusKeyManagerController } from '@ux-aspects-universal/react/a11y';
import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './page-tab-group-list.scss';
export type PageTabGroupListProps = Props<'div'> & {
    controller: React.RefObject<FocusKeyManagerController>;
};
export declare const PageTabGroupList: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, never> & {
    controller: React.RefObject<FocusKeyManagerController>;
} & React.RefAttributes<HTMLDivElement>>;
