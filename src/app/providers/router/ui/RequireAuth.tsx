import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { JSX } from 'react';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isAuth = useSelector(getUserAuthData);

    const location = useLocation();
    if (!isAuth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    return children;
};
