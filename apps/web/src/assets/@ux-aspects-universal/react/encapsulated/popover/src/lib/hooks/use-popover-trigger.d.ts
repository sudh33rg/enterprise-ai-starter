export interface UsePopoverTrigger<T extends HTMLElement> {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    triggerProps: {
        id: string;
        'aria-describedby': string | undefined;
        ref: React.Ref<T>;
    };
    popoverProps: {
        id: string;
        isOpen: boolean;
        onOpenChange: (isOpen: boolean) => void;
        triggerRef: React.RefObject<T>;
    };
}
export interface TriggerOptions<T extends HTMLElement> {
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    triggerRef?: React.RefObject<T>;
    triggerId?: string;
    popoverId?: string;
}
export declare function usePopoverTrigger<T extends HTMLElement>(options?: TriggerOptions<T>): UsePopoverTrigger<T>;
type UseTooltipTrigger<T extends HTMLElement> = Omit<UsePopoverTrigger<T>, 'popoverProps'> & {
    tooltipProps: UsePopoverTrigger<T>['popoverProps'];
};
export declare function useTooltipTrigger<T extends HTMLElement>(options?: TriggerOptions<T>): UseTooltipTrigger<T>;
type UseFlyoutTrigger<T extends HTMLElement> = Omit<UsePopoverTrigger<T>, 'popoverProps'> & {
    flyoutProps: UsePopoverTrigger<T>['popoverProps'];
};
export declare function useFlyoutTrigger<T extends HTMLElement>(options?: TriggerOptions<T>): UseFlyoutTrigger<T>;
type UseInfotipTrigger<T extends HTMLElement> = Omit<UsePopoverTrigger<T>, 'popoverProps'> & {
    infotipProps: UsePopoverTrigger<T>['popoverProps'];
};
export declare function useInfotipTrigger<T extends HTMLElement>(options?: TriggerOptions<T>): UseInfotipTrigger<T>;
export {};
