import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "shared/config";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='content'>
                <Routes>
                    {routerConfig.map( (element) =>
                        <Route
                            key={element.path}
                            path={element.path}
                            element={element.children}
                        />
                    )}
                </Routes>
            </div>

        </Suspense>
    );
};

export default AppRouter;
