/**
 * A hook for watching mutations
 * @param element The element to observe
 * @param config The Mutation observer configurations
 * @param callback The function to call whenever a mutation occurs
 */
export declare function useMutationObserver(element: HTMLElement | null | undefined, config: MutationObserverInit, callback: MutationCallback): void;
