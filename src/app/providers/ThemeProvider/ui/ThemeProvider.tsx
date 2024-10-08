import React, { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/model/consts/localstorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}
const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    document.body.className = theme;

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
