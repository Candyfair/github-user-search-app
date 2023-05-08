import { useDispatch, useSelector } from 'react-redux';
import './styles/index.scss';

import Layout from 'src/components/Layout';
import { useEffect } from 'react';
import { fetchUser } from './redux/actions/search';

const App = () => {
  // Get user from state
  const { username } = useSelector((state) => state.search);

  // Call API
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(username));
  }, []);

  return (
    <div className="app">
      <Layout />
    </div>
  );
};

export default App;
