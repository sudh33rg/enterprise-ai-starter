import { ActiveDescendantOrigin } from '../providers/active-descendant-key-manager';
export declare function useLegacyActiveDescendantItem(ref: React.RefObject<HTMLElement>): ActiveDescendantItemHookReturn;
export interface ActiveDescendantItemHookReturn {
    activeDescendantProps: {
        className?: string;
        'data-descendant': boolean;
        onMouseEnter: () => void;
    };
    activeDescendantOrigin?: ActiveDescendantOrigin;
}
