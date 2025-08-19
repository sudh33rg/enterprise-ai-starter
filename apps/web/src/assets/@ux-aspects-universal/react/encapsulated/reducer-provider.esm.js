import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReducerContext = React.createContext(null);
function Reducer({ dispatch, state, children }) {
    return React.createElement(ReducerContext.Provider, {
        value: {
            state,
            dispatch
        }
    }, children);
}
export { ReducerContext as R, Reducer as a };
