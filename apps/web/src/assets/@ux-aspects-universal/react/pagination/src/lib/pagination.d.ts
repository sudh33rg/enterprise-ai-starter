import { FC } from 'react';
import './pagination.scss';
export interface PaginationProps {
    /** The active page. */
    page?: number;
    /** The total number of pages. */
    pageCount?: number;
    /** The maximum number of pages to display. */
    limit?: number;
    /** Whether to use the flat variant. */
    flat?: boolean;
    /** Event emitted when the active page changes. */
    onPageChange?: (page: number) => void;
}
/**
 * ## Localization
 *
 * This component uses several strings which must be localized. You can use `PaginationI18nContext`
 * to configure these strings.
 *
 * ```tsx
 * <PaginationI18nContext.Provider value={{ previousButtonAriaLabel: 'Le précédent', ... }}>
 *   <Pagination />
 * </PaginationI18nContext.Provider>
 * ```
 *
 * See documentation for [UxaPaginationI18n](#interfaces) for the full list of properties available to configure.
 *
 * If you have more than one `Pagination` in your application, it may be beneficial to
 * configure `PaginationI18nContext` at the root of your application so that you only have to provide the strings
 * once.
 */
export declare const Pagination: FC<PaginationProps>;
