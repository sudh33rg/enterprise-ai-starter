import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './page-tab-button.scss';
export type PageTabButtonProps = Props<'button', {
    /** The id of the tab. */
    id: string;
    /** The label of the tab. */
    label: string;
    /** The icon of the tab. */
    icon?: React.ReactNode;
    /** Whether this tab is removable */
    isRemovable?: boolean;
}>;
export declare const PageTabButton: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "label" | "id" | "icon" | "isRemovable"> & {
    /** The id of the tab. */
    id: string;
    /** The label of the tab. */
    label: string;
    /** The icon of the tab. */
    icon?: React.ReactNode;
    /** Whether this tab is removable */
    isRemovable?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
