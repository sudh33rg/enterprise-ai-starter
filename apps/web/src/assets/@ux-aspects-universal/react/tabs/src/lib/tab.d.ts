import * as React from 'react';
import { ButtonHTMLAttributes, FC } from 'react';
export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The id of the tab. */
    id?: string;
    /** The label for the tab. */
    label: string | React.ReactNode;
    /** Whether the tab is disabled. */
    isDisabled?: boolean;
}
export declare const Tab: FC<TabProps>;
