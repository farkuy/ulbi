import React, { Suspense } from 'react';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/ui/Navbar';
import { Sidebar } from 'widgets/ui/Sidebar';
import { LoaderForPage } from 'widgets/ui/LoaderForPage';
import AppRouter from './router/ui/AppRouter';
import useTheme from './providers/ThemeProviders/lib/useTheme';

function App() {
    const { theme } = useTheme();

    return (
        <Suspense fallback={<LoaderForPage />}>
            <div className={classNames('app', { hovered: true, disabled: false }, [theme])}>
                <Router>
                    <Navbar />
                    <div className="core">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Router>
            </div>
        </Suspense>

    );
}

export default App;
