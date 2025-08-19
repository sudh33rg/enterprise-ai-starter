import { HTMLAttributes, InputHTMLAttributes } from 'react';
export interface HiddenInputHtmlProps {
    inputHtmlProps: InputHTMLAttributes<HTMLElement>;
    wrapperHtmlProps: HTMLAttributes<HTMLElement>;
}
/** Extract HTML props that only apply to an `input` element. */
export declare function useHiddenInputHtmlProps(props: InputHTMLAttributes<HTMLElement>): HiddenInputHtmlProps;
