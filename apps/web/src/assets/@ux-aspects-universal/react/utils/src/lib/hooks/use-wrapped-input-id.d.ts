export interface WrappedInputId {
    wrapperId: string;
    inputId: string;
}
/**
 * Create `id` values for a component which wraps an `input` element.
 * @param id The provided `id`.
 * @param prefix Prefix to add to a generated unique `id` if needed.
 * @returns A pair of distinct `id` values to apply to the wrapper and the input.
 */
export declare function useWrappedInputId(id: string | undefined, prefix: string): WrappedInputId;
