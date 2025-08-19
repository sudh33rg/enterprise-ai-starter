import * as React from 'react';
import { Dispatch, PropsWithChildren } from 'react';
export interface ReducerProps<TState> {
    state: TState;
    dispatch: Dispatch<any>;
}
export declare const ReducerContext: React.Context<ReducerProps<any> | null>;
export declare function Reducer<TState>({ dispatch, state, children, }: PropsWithChildren<ReducerProps<TState>>): JSX.Element;
