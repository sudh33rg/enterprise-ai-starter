import { ProductColor } from '@ux-aspects-universal/react/common';
import * as React from 'react';
import { FC } from 'react';
import './login-icon.scss';
export interface LoginIconProps extends React.ComponentProps<'div'> {
    /** The name of a color palette color for the logo background. */
    color: ProductColor;
}
export declare const LoginIcon: FC<LoginIconProps>;
