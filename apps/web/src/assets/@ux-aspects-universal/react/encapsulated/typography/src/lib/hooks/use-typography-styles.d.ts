import { CSSProperties } from 'react';
import { TypographyProps } from '../typography';
export declare function useTypographyStyles({ color, fontSize, fontWeight, style, ...otherProps }: TypographyProps & {
    style?: CSSProperties;
}): [CSSProperties, Record<string, unknown>];
