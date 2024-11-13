import {render} from "react-dom";
import "../src/shared/config/i18n/i18n"
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProviders";


render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)