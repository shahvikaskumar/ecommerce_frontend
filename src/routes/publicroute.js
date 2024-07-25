import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Clientlayout from '../Layout/clientlayout';
import Home from '../pages/home';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import Contactus from '../pages/contactus';
import Cart from '../pages/cart';
import Orderplace from '../pages/orderplace';
import Forgotpassword from '../pages/auth/forgotpassword';
import Resetpasswordform from '../pages/auth/resetpassword';
import Verifyemailform from '../pages/auth/verifyemail';
import { ClientProtectedRoute } from '../utility/protectedroute';
import { useSelector } from 'react-redux';
import ProductRoutes from './productroute';
import Userorders from '../pages/userpage/orderlist';
import Userprofile from '../pages/userpage/userprofile';

const PublicRoutes = () => {
  const { isauth, user }= useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path='/' element={<Clientlayout />}>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={!isauth ? <Register /> : <Navigate to="/" />} />
        <Route path='/login' element={!isauth ? <Login formname="Login" register="true" /> : <Navigate to="/" />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orderplace' element={<ClientProtectedRoute><Orderplace /></ClientProtectedRoute>} />
        <Route path='/user/orderlist' element={<ClientProtectedRoute><Userorders /></ClientProtectedRoute>} />
        <Route path='/user/profile' element={<ClientProtectedRoute><Userprofile user={user} /></ClientProtectedRoute>} />
        <Route path='/forgotpassword' element={!isauth ? <Forgotpassword /> : <Navigate to="/" />} />
        <Route path='/resetpassword/:token' element={!isauth ? <Resetpasswordform /> : <Navigate to="/" />} />
        <Route path='/verifyemail' element={!isauth ? <Verifyemailform /> : <Navigate to="/" />} />        
        
        <Route path='/*' element={<ProductRoutes />} />
        
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
