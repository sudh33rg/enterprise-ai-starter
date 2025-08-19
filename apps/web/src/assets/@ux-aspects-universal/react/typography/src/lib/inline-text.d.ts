import * as React from 'react';
import { ElementType, PolymorphicComponentProp, PolymorphicComponentPropWithRef, TypographyProps } from './typography';
import './typography.scss';
export interface InlineTextOwnProps extends TypographyProps {
    /** Define the size variant. */
    size?: 'small' | 'medium' | 'large';
}
export type InlineTextProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, InlineTextOwnProps>;
export declare const InlineText: React.ForwardRefExoticComponent<Omit<PolymorphicComponentProp<ElementType, InlineTextProps<ElementType>>, "ref"> & React.RefAttributes<unknown>>;
