export interface UxaSelectionManager<T> {
    /** Get the selected items. */
    selection: T[];
    /** Select an item. */
    select(...items: T[]): void;
    /** Deselect an item. */
    deselect(item: T): void;
    /** Determine if an item is selected. */
    isSelected(item: T): boolean;
    /** Toggle the selected state of an item. */
    toggle(item: T): void;
    /** Deselect all items. */
    clear(): void;
    /** Get the current mode. */
    mode(): string;
}
export interface UseSelectionOptions {
    mode: 'single' | 'multiple';
}
export declare function useSelection<T>({ mode }: UseSelectionOptions): UxaSelectionManager<T>;
/**
 * Hook to determine if an item is selected. It also handles reference changes and triggers a re-render.
 * @param item The item to check.
 */
export declare function useIsSelected<T>(item: T, selectionManager: UxaSelectionManager<T>): boolean;
export default useSelection;
