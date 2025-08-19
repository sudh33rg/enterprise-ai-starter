import { FC, HTMLProps } from 'react';
import './masthead-tab.scss';
export interface MastheadTabProps extends HTMLProps<HTMLAnchorElement> {
    isDisabled?: boolean;
    isSelected?: boolean;
}
export declare const MastheadTab: FC<MastheadTabProps>;
