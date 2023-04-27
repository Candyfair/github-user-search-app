import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';

import Header from '../Header';
import Search from '../Search';
import Profile from '../Profile';
import Footer from '../Footer';
import { changeMode } from '../../redux/actions/mode';

const Layout = () => {
  const dispatch = useDispatch();

  // Check user's preferred mode
  const mediaStatus = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDark = mediaStatus.matches;

  useEffect(() => {
    if (prefersDark) {
      dispatch(changeMode(prefersDark));
    }
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
};

export default Layout;
