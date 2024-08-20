import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
