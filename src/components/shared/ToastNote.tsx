import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastNote() {
  return (
    <ToastContainer
      position='bottom-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      transition={Slide}
      pauseOnHover
      theme='light'
    />
  )
}

export default ToastNote;
