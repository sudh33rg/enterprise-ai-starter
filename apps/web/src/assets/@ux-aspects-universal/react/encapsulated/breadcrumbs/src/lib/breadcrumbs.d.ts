import { IconButtonOwnProps } from '@ux-aspects-universal/react/button';
import * as React from 'react';
import { FC } from 'react';
import './breadcrumbs.scss';
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The size of breadcrumbs */
    size?: 'small' | 'medium';
    /** The separator to use between breadcrumbs */
    separator?: ((index: number) => React.ReactNode) | React.ReactNode;
    children?: JSX.Element | JSX.Element[];
    /** The maximum number of breadcrumbs when responsive is set to true. */
    maxBreadcrumbs?: number;
    /** Whether the breadcrumbs will collapse when there is not enough horizontal space. */
    isResponsive?: boolean;
    /** Customize the breadcrumb overflow button. */
    overflowButton?: () => React.ReactElement;
}
/**
 * ## Localization
 *
 * This component uses several strings which must be localized. You can use `BreadcrumbsI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * import { BreadcrumbsI18nContext } from '@ux-aspects-universal/react/breadcrumbs';
 *
 * <BreadcrumbsI18nContext.Provider value={{ previousButtonAriaLabel: "Menu de débordement du fil d'Ariane", ... }}>
 *   <Breadcrumbs />
 * </BreadcrumbsI18nContext.Provider>
 * ```
 *
 * See documentation for [UxaBreadcrumbsI18n](#interfaces) for the full list of properties available to configure.
 */
export declare const Breadcrumbs: FC<BreadcrumbsProps>;
export declare const BreadcrumbOverflowButton: React.ForwardRefExoticComponent<Partial<IconButtonOwnProps> & {
    href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** @internal This is used so we can merge with an externally provided ref */
    menuRef?: React.Ref<HTMLButtonElement>;
} & React.RefAttributes<HTMLButtonElement>>;
