import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { changeMode } from '../../redux/actions/mode';

import './style.scss';

import * as CONSTANTS from '../../utils/constants';
import Icon from '../Icon';

const DarkMode = () => {
  // Check state for dark mode status
  const { lightmode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  let theme;
  const { body } = document;
  const lightTheme = 'light';
  const darkTheme = 'dark';

  // Check local storage
  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  }
  else {
    body.classList.add(lightTheme);
    theme = lightTheme;
  }

  // Change mode
  const handleClick = () => {
    dispatch(changeMode());
  };

  useEffect(() => {
    if (lightmode) {
      body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    }
    else {
      body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
  }, [lightmode]);

  return (
    <div
      onClick={handleClick}
      className="darkMode"
    >
      <div className={`darkMode__text${!lightmode ? '-dark' : ''}`}>
        {lightmode ? 'DARK' : 'LIGHT'}
      </div>

      <div className={`darkMode__icon${!lightmode ? '-dark' : ''}`}>
        {
          lightmode
            ? <Icon icon={CONSTANTS.ICONS.moon} size={20} />
            : <Icon icon={CONSTANTS.ICONS.sun} size={20} />
        }
      </div>

    </div>
  );
};

export default DarkMode;
