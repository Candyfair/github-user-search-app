import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

import { fetchUser } from '../../redux/actions/search';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Search = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  // Check state for stored users
  const { username } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const searchInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchUser = (e) => {
    e.preventDefault();

    const searchValue = searchInputRef.current.value;
    dispatch(fetchUser(searchValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`search box${!lightmode ? ' box-dark' : ''}`}>
        <div className="search__icon">
          <Icon icon={CONSTANTS.ICONS.search} size={25} />
        </div>

        <input
          ref={searchInputRef}
          className={`search__input${!lightmode ? ' input-dark' : ''}`}
          type="text"
          defaultValue="Search GitHub username&hellip;"
        />

        <button
          type="button"
          onClick={handleSearchUser}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
