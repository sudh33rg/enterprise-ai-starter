import { RefObject } from 'react';
type Rect = {
    top: number;
    left: number;
    bottom: number;
    right: number;
    height: number;
    width: number;
};
interface UseElementRect {
    rect: Rect;
    update: () => void;
}
export declare function useElementRect<T extends HTMLElement>(ref: RefObject<T>, callback?: () => void): UseElementRect;
export {};
