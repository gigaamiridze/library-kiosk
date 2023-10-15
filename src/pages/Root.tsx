import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from '../components';

function Root() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;
