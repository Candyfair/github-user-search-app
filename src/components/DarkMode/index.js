import { useState, useEffect } from 'react';
import styles from './style.scss';

import * as CONSTANTS from '../../utils/constants';
import Icon from '../Icon';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(true);

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
    <div
      onClick={handleClick}
      type="button"
      className="darkMode"
    >
      <div className={`darkMode__text${!isDark ? '-dark' : ''}`}>
        {isDark ? 'DARK' : 'LIGHT'}
      </div>

      <div className={`darkMode__icon${!isDark ? '-dark' : ''}`}>
        {
          isDark
            ? <Icon icon={CONSTANTS.ICONS.sun} size={20} viewbox={20} />
            : <Icon icon={CONSTANTS.ICONS.moon} size={20} viewbox={20} />
        }
      </div>

    </div>
  );
};

export default DarkMode;
