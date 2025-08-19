import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './my-aviator-button.scss';
export type MyAviatorButtonProps = Props<'button', {
    children: React.ReactNode;
}>;
export declare const MyAviatorButton: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "children"> & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
