import * as React from 'react';
import './chip-avatar.scss';
export interface ChipAvatarOwnProps {
    image?: string;
    color?: string;
}
export type ChipAvatarProps = ChipAvatarOwnProps & React.HTMLAttributes<HTMLSpanElement>;
export declare const ChipAvatar: React.ForwardRefExoticComponent<ChipAvatarOwnProps & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
