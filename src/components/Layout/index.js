import './style.scss';

import Header from '../Header';
import Search from '../Search';
import Profile from '../Profile';
import Footer from '../Footer';
import DarkMode from '../DarkMode';

const Layout = () => (
  <div className="global">
    <header>
      <Header />
      <DarkMode />
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

export default Layout;
