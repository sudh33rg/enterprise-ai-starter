import * as React from 'react';
/**
 * Returns a flattened list of React children.
 * @param children - The React children to flatten.
 * @returns A flattened list of React children.
 */
export declare function useChildren(children: React.ReactNode): React.ReactElement[];
/**
 * Returns an array of React children matching a specific type.
 * @param children - The React children to search through.
 * @param type - The component type to search for.
 * @returns An array of React children matching the specified type.
 */
export declare function useChildrenOfType<T>(children: React.ReactNode, type: React.ComponentType<T>): React.ReactElement<T>[];
