import { RefObject } from 'react';
export type Dimensions = {
    width: number;
    height: number;
};
export declare function useElementDimensions(element: RefObject<HTMLElement>, didResize?: () => void): Dimensions;
