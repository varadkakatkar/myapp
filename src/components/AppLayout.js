import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout;