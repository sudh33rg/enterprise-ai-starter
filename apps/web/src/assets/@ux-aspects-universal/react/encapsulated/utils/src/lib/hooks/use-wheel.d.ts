/**
 * React uses passive event listeners on scroll events by default (https://github.com/facebook/react/pull/19654).
 * This is problematic if we want to stopPropagation or preventDefault on the event as we cannot do that on passive
 * events.
 *
 * This hook provides a way to use a non-passive event listener on scroll events.
 */
import { RefObject } from 'react';
export declare function useWheel<T extends HTMLElement>(ref: RefObject<T>, handler: (event: WheelEvent) => void): void;
