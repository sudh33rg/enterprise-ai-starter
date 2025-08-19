import * as React from 'react';
/**
 * A utility function to create a context and provider. This is largely inspired by the
 * Radix UI utility function `createContext`.
 */
export declare function createContext<TContext extends object | null>(defaultContext?: TContext): [React.FC<React.PropsWithChildren<TContext>>, () => TContext];
