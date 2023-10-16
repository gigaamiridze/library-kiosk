import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RouterProvider } from 'react-router-dom';
import { PreLoader, ToastNote } from './components';
import { GlobalStyles } from './styles';
import { router } from './router';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading 
        ? <PreLoader /> 
        : (
          <AnimatePresence mode='wait'>
            <RouterProvider router={router} />
          </AnimatePresence>
        )
          
      }
      <ToastNote />
    </>
  )
}

export default App;
