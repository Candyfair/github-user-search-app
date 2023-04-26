import { useState, useEffect } from 'react';
import './style.scss';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  let theme;
  const { body } = document;
  const lightTheme = 'light';
  const darkTheme = 'dark';

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  }
  else {
    body.classList.add(lightTheme);
  }

  const handleClick = () => {
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDark) {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    }
    else {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
  });

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
};

export default DarkMode;
