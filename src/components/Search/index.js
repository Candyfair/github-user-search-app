import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Search = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  // Check state for stored users
  const handleChange = (event) => {
    // Créer fonction pour aller récupérer le nouvel utilisateur recherché

  };

  return (
    <div className={`search box${!lightmode ? ' box-dark' : ''}`}>
      <div className="search__icon">
        <Icon icon={CONSTANTS.ICONS.search} size={25} />
      </div>

      <input
        className={`search__input${!lightmode ? ' input-dark' : ''}`}
        type="text"
        defaultValue="Search GitHub username&hellip;"
        onChange={handleChange}
      />

      <button type="button">Search</button>
    </div>
  );
};

export default Search;
