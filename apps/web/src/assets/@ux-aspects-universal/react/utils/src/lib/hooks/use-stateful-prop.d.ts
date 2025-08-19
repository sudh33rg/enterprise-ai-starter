import { Dispatch, SetStateAction } from 'react';
/**
 * A simple utility to ensure state an a prop stay in sync.
 */
export declare function useStatefulProp<T>(propValue: T): [T, Dispatch<SetStateAction<T>>];
