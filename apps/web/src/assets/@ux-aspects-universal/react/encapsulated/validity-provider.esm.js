import { createContext, useContext } from "react";
const ValidityProvider = createContext({});
function useValidity() {
    return useContext(ValidityProvider);
}
export { ValidityProvider as V, useValidity as u };
