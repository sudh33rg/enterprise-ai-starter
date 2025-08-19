import { Dispatch } from 'react';
export declare function useDispatch<TAction = unknown>(): Dispatch<TAction>;
export declare function useSelector<TState = unknown, TResult = unknown>(selector: (state: TState) => TResult): TResult;
