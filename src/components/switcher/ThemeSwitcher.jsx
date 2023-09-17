import React, {useEffect, useState} from 'react';

const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        const appElement = document.querySelector('.app');
        if (appElement) {
            if (isDarkTheme) {
                appElement.classList.add('dark-theme');
            } else {
                appElement.classList.remove('dark-theme');
            }
        }
    }, [isDarkTheme]);

    return (
        <div className="theme-switcher">
            <label>
                <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                />
                Dark Theme
            </label>
        </div>
    );
};

export default ThemeSwitcher;