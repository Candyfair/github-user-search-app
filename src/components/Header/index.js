import './style.scss';

import DarkMode from '../DarkMode';

const Header = () => (
  <div className="header">
    <div className="header__logo">devfinder</div>
    <DarkMode />
  </div>
);

export default Header;
