import { HTMLAttributes, RefObject } from 'react';
/**
 * Extract the logic for the menu position
 */
export declare function useSubMenuPlacement(menuRef: RefObject<HTMLDivElement>, triggerRef: RefObject<HTMLElement>, isOpen?: boolean, onClose?: () => void): HTMLAttributes<Element>;
