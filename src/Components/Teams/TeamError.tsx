import { useRouteError, isRouteErrorResponse } from "react-router-dom";


export default function TeamError() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <h2>Team not found </h2>;
        }
    }

    return <h2>Something went wrong</h2>;
}