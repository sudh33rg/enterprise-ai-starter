import * as React from 'react';
import { ElementType, PolymorphicComponentProp, PolymorphicComponentPropWithRef, TypographyProps } from './typography';
import './typography.scss';
export type LinkProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, TypographyProps>;
export declare const Link: React.ForwardRefExoticComponent<Omit<PolymorphicComponentProp<ElementType, LinkProps<ElementType>>, "ref"> & React.RefAttributes<unknown>>;
