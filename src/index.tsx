// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import './shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

render(
    <ThemeProvider>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </ThemeProvider>,
    document.getElementById('root'),
);
