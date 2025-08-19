export declare enum AvatarState {
    Idle = 0,
    Loading = 1,
    Loaded = 2,
    Error = 3
}
export interface AvatarContext {
    state: AvatarState;
    setState: (state: AvatarState) => void;
}
export declare const AvatarProvider: import("react").FC<import("react").PropsWithChildren<AvatarContext>>, useAvatarContext: () => AvatarContext;
