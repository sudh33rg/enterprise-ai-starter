export declare abstract class UxaPaginationI18n {
    /** The aria-label value for the previous button. */
    previousButtonAriaLabel?: string;
    /** The aria-label value for the next button. */
    nextButtonAriaLabel?: string;
    /** The aria-label value for the first page button. */
    firstButtonAriaLabel?: string;
    /** The aria-label value for the last page button. */
    lastButtonAriaLabel?: string;
    /** The aria-label value for page buttons. */
    getPageAriaLabel?(page: number): string;
    /** The aria-label value for the range of pages. */
    getRangeLabel?(page: number, pageCount: number): string;
}
export declare class UxaDefaultPaginationI18n extends UxaPaginationI18n {
    previousButtonAriaLabel: string;
    nextButtonAriaLabel: string;
    firstButtonAriaLabel: string;
    lastButtonAriaLabel: string;
    getPageAriaLabel(page: number): string;
    getRangeLabel(page: number, pageCount: number): string;
}
