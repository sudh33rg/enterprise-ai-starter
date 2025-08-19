import * as React from 'react';
import { ElementType, PolymorphicRef, TypographyProps } from './typography';
import './typography.scss';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
interface HeadingOwnProps {
    /** Define the heading size. */
    level: HeadingLevel;
    children: React.ReactNode;
}
export type HeadingProps<T extends ElementType> = HeadingOwnProps & TypographyProps & PolymorphicRef<T>;
export declare const Heading: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export {};
