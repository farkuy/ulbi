import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAdmin, getIsManager, getUser } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: ReactElement }) {
    const auth = useSelector(getUser);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);
    const location = useLocation();

    const isManagerRole = isManager || isAdmin;

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!isManagerRole) {
        return <Navigate to={RoutePath.block} state={{ from: location }} replace />;
    }

    return children;
}
