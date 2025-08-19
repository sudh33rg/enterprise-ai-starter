import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './avatar-image.scss';
export type AvatarImageProps = Props<'img'>;
export declare const AvatarImage: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref">, never> & React.RefAttributes<HTMLImageElement>>;
