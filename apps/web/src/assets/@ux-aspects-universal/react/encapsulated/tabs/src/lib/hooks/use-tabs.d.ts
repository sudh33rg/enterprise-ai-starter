import * as React from 'react';
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import type { TabProps } from '../tab';
export declare function useTabs(children: ReactNode): TabDetail[];
interface TabDetail {
    id: string;
    label: string | React.ReactNode;
    isDisabled?: boolean;
    tab: ReactElement<TabProps>;
    props: ButtonHTMLAttributes<HTMLButtonElement>;
}
export {};
