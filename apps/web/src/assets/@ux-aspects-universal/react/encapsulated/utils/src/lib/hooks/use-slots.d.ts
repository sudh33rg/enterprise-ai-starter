import { FC, ReactNode } from 'react';
/**
 * This allows use to perform the equivalent of content projection in React
 */
export declare function useSlots(children: ReactNode, ...targets: FC[]): JSX.Element[][];
