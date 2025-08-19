import * as React from 'react';
export interface UseMenuTrigger<TTrigger extends HTMLElement, TAnchor extends HTMLElement = TTrigger> {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    triggerProps: {
        id: string;
        'aria-haspopup': boolean;
        'aria-controls': string;
        'aria-expanded': boolean;
        ref: React.RefObject<TTrigger>;
        onClick: () => void;
        onKeyDown?: (event: React.KeyboardEvent) => void;
    };
    menuProps: {
        id: string;
        'aria-labelledby': string;
        anchorRef: React.RefObject<TAnchor>;
        triggerRef: React.RefObject<TTrigger>;
        isOpen: boolean;
        onClose: (event?: MouseEvent | React.FocusEvent) => void;
    };
}
interface MenuTriggerOptions<TTrigger extends HTMLElement, TAnchor extends HTMLElement = TTrigger> {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    anchorRef?: React.RefObject<TAnchor>;
    triggerRef?: React.RefObject<TTrigger>;
    triggerId?: string;
    menuId?: string;
}
export declare function useMenuTrigger<TTrigger extends HTMLElement, TAnchor extends HTMLElement = TTrigger>(options?: MenuTriggerOptions<TTrigger, TAnchor>): UseMenuTrigger<TTrigger, TAnchor>;
export {};
