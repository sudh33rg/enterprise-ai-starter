import * as React from 'react';
import { ElementType, PolymorphicComponentProp, PolymorphicComponentPropWithRef, TypographyProps } from './typography';
import './typography.scss';
export interface TextOwnProps extends TypographyProps {
    /** Define the size variant. */
    size?: 'small' | 'medium' | 'large';
}
export type TextProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, TextOwnProps>;
export declare const Text: React.ForwardRefExoticComponent<Omit<PolymorphicComponentProp<ElementType, TextProps<ElementType>>, "ref"> & React.RefAttributes<unknown>>;
