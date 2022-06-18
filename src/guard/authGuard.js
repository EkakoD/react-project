import { Navigate } from "react-router-dom";

export const AuthorizedRoutes = ({
    user,
    children,
}) => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export const UnauthorizedRoutes = ({
    user,
    children,
}) => {
    if (user) {
        return <Navigate to={"/barbers"} replace />;
    }

    return children;
};
