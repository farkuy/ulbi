import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUser } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: ReactElement }) {
    const auth = useSelector(getUser);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
