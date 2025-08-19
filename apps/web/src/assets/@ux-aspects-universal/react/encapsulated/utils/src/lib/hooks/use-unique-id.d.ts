/**
 * Generate a unique Id that will remain fixed across component re-renders
 * @param prefix The unique id prefix
 * @param id Use this id instead of generating a new one if it is defined
 */
export declare function useUniqueId(prefix: string, id?: string): string;
