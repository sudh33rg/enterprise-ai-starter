import { Component, FC, ReactElement, ReactNode } from 'react';
export declare function isReactElementType(node: ReactNode, target: FC | Component): boolean;
export declare function isReactElement(node: unknown): node is ReactElement;
