import './style.scss';

import Header from '../Header';
import Search from '../Search';
import Profile from '../Profile';
import Footer from '../Footer';

const Layout = () => (
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

export default Layout;
