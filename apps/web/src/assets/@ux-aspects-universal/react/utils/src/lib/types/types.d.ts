import type { JSXElementConstructor } from 'react';
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>;
export type Props<TTag extends ReactTag, TProps = {}> = Omit<React.ComponentPropsWithoutRef<TTag>, keyof TProps> & TProps;
