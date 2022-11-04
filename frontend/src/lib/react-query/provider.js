import { QueryClientProvider as QCP } from "react-query"
import queryClient from "./client";

const QueryClientProvider = ({children}) => {
    return (
        <QCP  client={queryClient}>
            {children}
        </QCP>
    )
}

export default QueryClientProvider