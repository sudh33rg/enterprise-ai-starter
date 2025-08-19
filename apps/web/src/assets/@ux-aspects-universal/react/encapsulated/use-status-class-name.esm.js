import { useMemo } from "react";
function useStatusClassName(status) {
    return useMemo(() => {
        switch (status) {
            case "info":
                return "uxa-status-info";
            case "success":
                return "uxa-status-success";
            case "warning":
                return "uxa-status-warning";
            case "error":
                return "uxa-status-error";
        }
        return "";
    }, [status]);
}
export { useStatusClassName as u };
