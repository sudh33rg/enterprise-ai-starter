import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import './login-link.scss';
export type LoginLinkProps = ComponentPropsWithoutRef<'a'>;
export declare const LoginLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
