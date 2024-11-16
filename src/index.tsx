// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import './shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import App from './app/App';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
