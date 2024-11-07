import {render} from "react-dom";
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProviders";


render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)