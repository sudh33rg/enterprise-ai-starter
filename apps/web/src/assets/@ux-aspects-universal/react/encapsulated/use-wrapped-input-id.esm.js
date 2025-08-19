import { u as useUniqueId } from "./use-unique-id.esm.js";
/**
 * Create `id` values for a component which wraps an `input` element.
 * @param id The provided `id`.
 * @param prefix Prefix to add to a generated unique `id` if needed.
 * @returns A pair of distinct `id` values to apply to the wrapper and the input.
 */
function useWrappedInputId(id, prefix) {
    const uniqueId = useUniqueId(prefix);
    return {
        wrapperId: id !== null && id !== void 0 ? id : uniqueId,
        inputId: `${id !== null && id !== void 0 ? id : uniqueId}-input`
    };
}
export { useWrappedInputId as u };
