import React from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader';
import ToastOptions from './types/ToastOptions';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import HouseSearch from './pages/HouseSearch/HouseSearch';
import Lease from './pages/Lease/Lease';
import Properties from './pages/Properties/Properties';
import Tenants from './pages/Tenants/Tenants';

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
        <Router>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/houseSearch">
              <HouseSearch />
            </Route>
            <Route path="/lease">
              <Lease />
            </Route>
            <Route path="/properties">
              <Properties />
            </Route>
            <Route path="/tenants">
              <Tenants />
            </Route>
            <div className="alessor">
              <ToastContainer />
              <Loader isLoading={isLoading} />
            </div>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App;
