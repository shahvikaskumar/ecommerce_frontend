import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Adminlayout from '../Layout/adminlayout';
import Dashboard from '../admin/pages/dashboard';
import Orders from '../admin/pages/order';
import Customers from '../admin/pages/customers';
import Products from '../admin/pages/products/product';
import Login from '../pages/auth/login';
import { AdminProtectedRoute } from '../utility/protectedroute';
import { useSelector } from 'react-redux';
import NotFound from '../pages/notfound';

const AdminRoutes = () => {
  const user = useSelector((state) => state.auth.user);
  const utype = user && user.usertype === "admin";

  return (
    <Routes>
      <Route path='/' element={<AdminProtectedRoute><Adminlayout /></AdminProtectedRoute>}>
      <Route path='/admin' element={<Navigate to='/admin/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/products' element={<Products />} />
        
      </Route>
      <Route path='/login' element={!utype ? <Login formname="Admin Login" register="false" /> : <Navigate to="/admin" />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
