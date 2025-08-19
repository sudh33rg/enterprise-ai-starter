export type Placement = 'above' | 'below' | 'before' | 'after';
export type Alignment = 'start' | 'center' | 'end';
export type Variant = 'auto' | 'light' | 'dark' | 'auto-inverse';
export type Direction = 'ltr' | 'rtl';
export declare function getArrowPosition(trigger: HTMLElement, floating: HTMLElement, arrowBg: HTMLElement, arrowFg: HTMLElement, placement: Placement, alignment: Alignment): PopoverPosition;
type PopoverPosition = {
    arrowBgStyle: {
        [key: string]: string;
    };
    arrowFgStyle: {
        [key: string]: string;
    };
};
export {};
