import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { useMemo } from 'react';

import { UserRole } from 'shared/model/consts/common';
import { RouterPath } from 'shared/model/consts/router';

export const RequireAuthAndRole = ({
    roles,
    children,
}: {
    roles?: UserRole[];
    children: JSX.Element;
}) => {
    const location = useLocation();
    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const isHasRequiredRoles = useMemo(
        () => !roles || roles?.some((role) => userRoles?.includes(role)),
        [roles, userRoles],
    );

    if (!isAuth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }
    if (!isHasRequiredRoles) {
        return <Navigate to={RouterPath.forbidden_page} state={{ from: location }} replace />;
    }

    return children;
};
