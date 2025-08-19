import { Modality } from '@react-aria/interactions';
export interface UseNavigationItem {
    level: number;
    /** Allow a child to collapse its parent */
    collapseParent: (modality: Modality) => void;
    /** Allow a child to toggle its parent */
    toggleParent: (modality: Modality) => void;
}
export declare const NavigationItemContext: import("react").Context<UseNavigationItem>;
export declare function useNavigationItem(): UseNavigationItem;
