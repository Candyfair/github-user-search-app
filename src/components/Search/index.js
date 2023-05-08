import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUser, isError } from '../../redux/actions/search';

import './style.scss';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Search = () => {
  const dispatch = useDispatch();

  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);
  const { userInfo, isError404 } = useSelector((state) => state.search);

  const searchInputRef = useRef(null);

  // Submit search
  const handleSearchUser = (e) => {
    e.preventDefault();

    // Send the search value to API
    const searchValue = searchInputRef.current.value;
    dispatch(fetchUser(searchValue));

    // Outfocus the search field
    searchInputRef.current.blur();
  };

  const resetInput = (e) => {
    e.target.value = '';
    dispatch(isError(false));
  };

  useEffect(() => {
    if (isError404) {
      // Outfocus the search field
      searchInputRef.current.blur();
    }
  }, [isError404]);

  return (
    <form onSubmit={handleSearchUser}>
      <div className={`search box${!lightmode ? ' box-dark' : ''}`}>
        <div className="search__icon">
          <Icon icon={CONSTANTS.ICONS.search} size={25} />
        </div>

        <div className="search__input-container">
          <input
            ref={searchInputRef}
            className={`search__input${!lightmode ? ' input-dark' : ''}`}
            type="text"
            defaultValue="Search GitHub username&hellip;"
            onFocus={resetInput}
          />

          {
            isError404
              ? (<div className="search__no-results hide">No results</div>)
              : null
          }
        </div>

        <button type="submit" className="search__button">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
