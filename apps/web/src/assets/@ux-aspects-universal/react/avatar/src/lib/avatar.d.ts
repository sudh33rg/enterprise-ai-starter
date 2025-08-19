import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './avatar.scss';
export type AvatarColor = 'raspberry' | 'plum' | 'blue' | 'teal' | 'cerulean' | 'navy' | 'steel';
export type AvatarSize = 'extra-small' | 'small' | 'medium' | 'large';
export type AvatarProps = Props<'div', {
    /** The size of the avatar */
    size?: AvatarSize;
    /** The color of the avatar */
    color?: AvatarColor;
    /** The initials to display */
    initials?: string;
    /** Whether the avatar should have a border */
    isBordered?: boolean;
    /** Whether the avatar should be interactive */
    isInteractive?: boolean;
    /** The image source */
    src?: string;
    /** The alt text for the image */
    alt?: string;
}>;
export declare const Avatar: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "color" | "size" | "initials" | "isBordered" | "isInteractive" | "src" | "alt"> & {
    /** The size of the avatar */
    size?: AvatarSize;
    /** The color of the avatar */
    color?: AvatarColor;
    /** The initials to display */
    initials?: string;
    /** Whether the avatar should have a border */
    isBordered?: boolean;
    /** Whether the avatar should be interactive */
    isInteractive?: boolean;
    /** The image source */
    src?: string;
    /** The alt text for the image */
    alt?: string;
} & React.RefAttributes<HTMLDivElement>>;
