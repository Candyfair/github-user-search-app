import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';

import Header from '../Header';
import Search from '../Search';
import Profile from '../Profile';
import Footer from '../Footer';
import { changeMode, setMode } from '../../redux/actions/mode';

const Layout = () => {
  const dispatch = useDispatch();

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    dispatch(changeMode(prefersDark));
    dispatch(setMode('dark'));
  });

  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main>
        <Search />
        <Profile />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default Layout;
