import { RefObject } from 'react';
export interface UseScrollMonitorProps {
    /** The element to monitor. */
    element: RefObject<HTMLElement>;
    /** The threshold as to how much overflow must occur before the attributes are added. */
    threshold?: number;
}
export declare function useScrollMonitor({ element, threshold, }: UseScrollMonitorProps): UseScrollMonitor;
export interface UseScrollMonitor {
    isOverflowing: boolean;
    scrollProps: {
        'data-scroll-top': string | undefined;
        'data-scroll-bottom': string | undefined;
        'data-scroll-start': string | undefined;
        'data-scroll-end': string | undefined;
    };
}
