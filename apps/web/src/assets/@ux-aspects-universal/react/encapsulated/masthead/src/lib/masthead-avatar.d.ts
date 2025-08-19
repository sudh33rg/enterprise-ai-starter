import { type AvatarColor } from '@ux-aspects-universal/react/avatar';
import { Props } from '@ux-aspects-universal/react/utils';
import { FC } from 'react';
export type MastheadAvatarProps = Props<'div', {
    /** The color of the avatar. */
    color?: AvatarColor;
    /** Whether the avatar is interactive. */
    isInteractive?: boolean;
}>;
/** @deprecated */
export declare const MastheadAvatar: FC<MastheadAvatarProps>;
