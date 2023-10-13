import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { PreLoader } from './components';
import { GlobalStyles } from './styles';
import { router } from './router';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 0);
  
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading 
        ? <PreLoader /> 
        : <RouterProvider router={router} />
      }
    </>
  )
}

export default App;
