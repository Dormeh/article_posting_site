import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/config/const/localstorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
    || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
