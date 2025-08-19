import { createContext, useContext } from "react";
import { UxaNativeDateTimeAdapter } from "@ux-aspects-universal/core/date-time";
const DateTimeAdapterContext = createContext(new UxaNativeDateTimeAdapter());
function useDateTimeAdapter() {
    return useContext(DateTimeAdapterContext);
}
export { DateTimeAdapterContext as D, useDateTimeAdapter as u };
