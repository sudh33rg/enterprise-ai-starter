import * as React from 'react';
import { FC, ReactNode } from 'react';
export declare const TableRegionContext: React.Context<TableRegionContextProps>;
export interface TableRegionContextProps {
    region: 'head' | 'body' | null;
    children?: ReactNode;
}
/**
 * This allows us to use a TableCell component in both the head and body
 * and it can adapt accordingly by knowing the region of the table it is in
 */
export declare const TableRegion: FC<TableRegionContextProps>;
