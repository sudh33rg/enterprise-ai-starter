declare class UxaSkipLinkManager {
    /** The element to skip to. */
    private _target;
    /** Whether there is a target to skip to. */
    get hasTarget(): boolean;
    /** The element to skip to. */
    registerTarget(target: HTMLElement | null): void;
    /** Unset the target when the target is destroyed. */
    unregisterTarget(target: HTMLElement | null): void;
    /** Focus the target element. */
    focusTarget(): void;
}
export declare const skipLinkManager: UxaSkipLinkManager;
export {};
