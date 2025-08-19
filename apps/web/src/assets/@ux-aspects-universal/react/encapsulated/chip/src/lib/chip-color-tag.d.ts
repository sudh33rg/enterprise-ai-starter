import * as React from 'react';
import './chip-color-tag.scss';
export interface ChipColorTagOwnProps {
    color?: ChipTagColor;
}
export type ChipColorTagProps = ChipColorTagOwnProps & React.HTMLAttributes<HTMLSpanElement>;
export declare const ChipColorTag: React.ForwardRefExoticComponent<ChipColorTagOwnProps & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
/**
 * A utility type to allow the color property to accept any of the additional colors.
 * This prevents the need for a consumers to import directly from the core library.
 */
export type ChipTagColor = 'warning' | 'success' | 'info' | 'error' | (string & {});
