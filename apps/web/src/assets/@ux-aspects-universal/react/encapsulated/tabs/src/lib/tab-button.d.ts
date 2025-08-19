import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
interface TabButtonOwnProps {
    label: string | ReactNode;
    isActive: boolean;
    isDisabled?: boolean;
    onActivate: () => void;
}
export type TabButtonProps = TabButtonOwnProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof TabButtonOwnProps>;
export declare const TabButton: FC<TabButtonProps>;
export {};
