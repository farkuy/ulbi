import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config';
import { useTranslation } from 'react-i18next';
import { LoaderForPage } from 'widgets/ui/LoaderForPage';

function AppRouter() {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<LoaderForPage />}>
            <div className="content">
                <Routes>
                    {routerConfig.map((element) => (
                        <Route
                            key={element.path}
                            path={element.path}
                            element={element.children}
                        />
                    ))}
                </Routes>
            </div>

        </Suspense>
    );
}

export default AppRouter;
