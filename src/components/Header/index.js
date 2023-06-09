import { useSelector } from 'react-redux';
import './style.scss';

import DarkMode from '../DarkMode';

const Header = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  return (
    <div className="header">
      <div className={`header__logo${!lightmode ? ' logo-dark box-dark' : ''}`}><h1>devfinder</h1></div>
      <DarkMode />
    </div>
  );
};

export default Header;
