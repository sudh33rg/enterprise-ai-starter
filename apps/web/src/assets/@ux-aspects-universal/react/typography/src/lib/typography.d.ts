export interface TypographyProps {
    /** Define the text color. */
    color?: string;
    /** Define the text size. */
    fontSize?: string | number;
    /** Define the text weight. */
    fontWeight?: string | number;
}
/**
 * We create our own type here instead of using the one exported by React because
 * the signature of this type changed between react 17 and 18, which can cause build failures
 * for anyone using React 17 as TypeScript inlines the generic parameters of which there are 2 in React 18
 * whereas there is only 1 in React 17.
 **/
export type ElementType<TProps = any, TTag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
    [K in TTag]: TProps extends JSX.IntrinsicElements[K] ? K : never;
}[TTag] | React.ComponentType<TProps>;
type IsProp<T extends ElementType> = {
    is?: T;
};
type PropsToOmit<T extends ElementType, TProps> = keyof (IsProp<T> & TProps);
export type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>['ref'];
export type PolymorphicComponentProp<T extends ElementType, TProps = Record<string, unknown>> = React.PropsWithChildren<TProps & IsProp<T>> & Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, TProps>>;
export type PolymorphicComponentPropWithRef<T extends ElementType, TProps = Record<string, unknown>> = PolymorphicComponentProp<T, TProps> & {
    ref?: PolymorphicRef<T>;
};
export {};
