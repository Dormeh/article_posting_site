import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
