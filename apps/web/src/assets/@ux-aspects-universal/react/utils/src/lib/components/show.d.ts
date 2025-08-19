import * as React from 'react';
import { FC } from 'react';
export interface ShowProps {
    /** Whether to show the children. */
    when: boolean;
    /** The fallback to show when `when` is false. */
    fallback?: React.ReactNode;
    /** The children to show. */
    children: React.ReactNode;
}
/**
 * A simple utility component to conditionally show children.
 */
export declare const Show: FC<ShowProps>;
