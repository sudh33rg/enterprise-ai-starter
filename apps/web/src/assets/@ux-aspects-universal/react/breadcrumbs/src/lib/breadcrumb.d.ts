import * as React from 'react';
interface IconBreadcrumbProps {
    /** Define the icon to display. */
    icon: React.ReactNode;
    children?: never;
}
interface TextBreadcrumbProps {
    /** Define the text to display. */
    children: React.ReactNode;
    icon?: never;
}
export type BreadcrumbProps = (IconBreadcrumbProps | TextBreadcrumbProps) & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** Define the link to navigate to. */
    href?: string;
};
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLAnchorElement>>;
export {};
