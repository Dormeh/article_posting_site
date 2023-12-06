import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { getUserInited, userActions } from 'entities/User';

const App = () => {
    const dispatch = useDispatch();
    const isInited = useSelector(getUserInited); // без navigate в store нет необходимости в этом
    if (__IS_DEV__) console.log('App render');

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};
export default App;
