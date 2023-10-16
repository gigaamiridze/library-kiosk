import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from '../components';

function Root() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root;
