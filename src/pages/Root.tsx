import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import { MainContent } from '../styles';

function Root() {
  return (
    <>
      <Header />
      <MainContent as='main'>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}

export default Root;
