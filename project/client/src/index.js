import React from 'react';
import ReactDOM from 'react-dom/client';
import { redirect } from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import ReservationPage from './pages/ReservationPage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import authService from './services/auth.service';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

const loader = async () => {
    if(authService.getCurrentUser() == null) // if not signed, redirect to sign in form
    {
      return redirect('/account/signin');
    }
    else
    {
      // console.log(authService.getCurrentUser());
      return 0;
    }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path="/" element={<HomePage />} />,
      <Route path="/account" element={<AccountPage url={'/account'}/>} loader={loader}/>,
      <Route path="/account/signup" element={<AccountPage url={'/account/signup'}/>} />,
      <Route path="/account/signin" element={<AccountPage url={'/account/signin'}/>} />,
      <Route path="/reservation" element={<ReservationPage/>} loader={loader}/>,
      <Route path='/about' element={<AboutPage/>}/>,
      <Route path='/services' element={<ServicesPage/>}/>,

    ]

  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
