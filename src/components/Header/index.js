import { useSelector } from 'react-redux';
import './style.scss';

import DarkMode from '../DarkMode';

const Header = () => {
  // Check dark mode status
  const { mode } = useSelector((state) => state.mode);

  return (
    <div className="header">
      <div className={`header__logo ${mode === 'dark' ? 'logo-dark' : ''}`}>devfinder</div>
      <DarkMode />
    </div>
  );
};

export default Header;
