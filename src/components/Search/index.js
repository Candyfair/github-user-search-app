import { useSelector } from 'react-redux';
import './style.scss';

const Search = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  return (
    <div className={`search box${!lightmode ? ' box-dark' : ''}`}>
      <div>Loupe</div>
      <div>Input field</div>
      <button type="button">Search</button>
    </div>
  );
};

export default Search;
