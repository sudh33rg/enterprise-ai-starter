import { AvatarColor, AvatarSize } from './avatar';
export interface AvatarConfig {
    /** The size of the avatar */
    size?: AvatarSize;
    /** The color of the avatar */
    color?: AvatarColor;
}
export declare const AvatarConfiguration: import("react").FC<import("react").PropsWithChildren<AvatarConfig>>, useAvatarConfig: () => AvatarConfig;
