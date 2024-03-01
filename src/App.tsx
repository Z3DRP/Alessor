import React from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader';
import ToastOptions from './types/ToastOptions';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router/Router';
import MainNavigation from './components/Nav/MainNavigation';

const App = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const showToast = (message: string, options: ToastOptions): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      try {
        if (options.type === 'success') {
          console.log(`success: ${message}`);
          toast.success(message);
        } else if (options.type === 'error') {
          console.log(`error ${message}`);
          toast.error(message);

        } else if (options.type === 'warning') {
          console.log(`warning: ${message}`);
          toast.warning(message);
        } else if (options.type === 'info') {
          console.log(`info: ${message}`);
          toast.info(message);
        }
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  return (
    <>
      <div className="alessor">
        <MainNavigation />
        <main>
          <ToastContainer />
          <Loader isLoading={isLoading} />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </main>
      </div>
    </>
  )
}

export default App;
