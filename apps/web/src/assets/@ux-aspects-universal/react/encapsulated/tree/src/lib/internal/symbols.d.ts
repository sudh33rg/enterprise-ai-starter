/**
 * We want to be able to add some internal methods to the tree control,
 * but we don't want to expose those methods to the consumer.
 * So we use a symbol to add the methods to the tree control.
 * As the symbol is not exported, the consumer cannot access the methods,
 * nor will they be shown in autocomplete.
 */
export declare const addReloadEventListenerSymbol: unique symbol;
export declare const removeReloadEventListenerSymbol: unique symbol;
