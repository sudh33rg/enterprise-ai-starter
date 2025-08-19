import { DrawerMode, DrawerPlacement } from '@ux-aspects-universal/core/drawer';
export interface DrawerContextProps {
    drawerContainerRef: React.RefObject<HTMLDivElement>;
    mode?: DrawerMode;
    placement?: DrawerPlacement;
    setMode: (mode: DrawerMode) => void;
    setPlacement: (placement: DrawerPlacement) => void;
}
export declare const DrawerContext: import("react").Context<DrawerContextProps | undefined>;
export declare function useDrawerContext(): DrawerContextProps;
