import { HTMLAttributes, RefObject } from 'react';
/**
 * Extract the logic for the menu position
 */
export declare function useMenuPlacement(menuRef: RefObject<HTMLDivElement>, anchorRef: RefObject<HTMLElement>, alignment?: 'start' | 'end', placement?: 'above' | 'below', hasArrow?: boolean, isOpen?: boolean, onClose?: () => void, offsetX?: number, offsetY?: number): HTMLAttributes<Element>;
