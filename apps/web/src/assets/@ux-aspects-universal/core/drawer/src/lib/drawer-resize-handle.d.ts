import { DrawerPlacement } from './types/drawer-placement';
import { DrawerUnit } from './types/drawer-unit';
/** Get the click offset within the handle. */
export declare function getDragOffset(event: MouseEvent, placement: DrawerPlacement, ref: HTMLElement, isRtl: boolean): number;
/** Get the new size following a mousemove event. */
export declare function getSizeFromMouseMove(event: MouseEvent, bounds: DOMRect, unit: string, dragOffsetPixels: number, placement: DrawerPlacement, isRtl: boolean, minSize?: number, maxSize?: number): number;
/** Get the new size following a keydown event. */
export declare function getSizeFromKeyDown(event: KeyboardEvent, size: number, placement: DrawerPlacement, unit: DrawerUnit, bounds: DOMRect, isRtl: boolean, minSize?: number, maxSize?: number): number;
export declare function clamp(value: number, min?: number, max?: number): number;
