import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom';
import Dashboard from './admin/pages/dashboard';
import Layout from './utility/layout';
import Login from './pages/auth/login';
import AdminMenu from './admin/admin';
import Contactus from './pages/contactus';
import Register from './pages/auth/register';
import Home from './pages/home';
import Cart from './pages/cart';
import Orders from './admin/pages/order';
import Customers from './admin/pages/customers';
import Products from './admin/pages/products/product';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './component/loading/loading';
import { AdminProtectedRoute } from './utility/protectedroute';
import Forgotpassword from './pages/auth/forgotpassword';
import Resetpasswordform from './pages/auth/resetpassword';
import Verifyemailform from './pages/auth/verifyemail';
import { useEffect } from 'react';
import { Getallproduct } from './redux/slice/productslice';
import Women_Dresses from './pages/Product/women/dresses';
import ProductLayout from './pages/Product/productslayout';
import Allproduct from './pages/Product/allproduct';
import ProductDetail from './pages/Product/productdetail';


function App() {
  
  const isauth = useSelector((state) => state.auth.isauth);
  const loading = useSelector((state) => state.auth.mloader);
  const user = useSelector((state) => state.auth.user);
  const {singleproduct} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let utype = false;
  if(user){
  if(user['usertype'] === "admin"){
      utype=true;      
  }
}

useEffect(() => {
  dispatch(Getallproduct());    
},[dispatch]);

  return (
    <>    
    {loading ? ( <Loading />) : (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={!isauth ? <Register/> : <Navigate to="/" /> } />
        <Route path='/login' element={!isauth ? <Login formname="Login" register="true" /> : <Navigate to="/" /> } />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/product' element={<ProductLayout />} >
          <Route path='/product/allproduct' element={<Allproduct />} />
          <Route path='/product/women/dresses' element={<Women_Dresses />} />
        </Route>
        <Route path='/productdetail/:id' element={ <ProductDetail product={singleproduct}/>} />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/forgotpassword' element={!isauth ? <Forgotpassword /> : <Navigate to="/" /> } />
        <Route path='/resetpassword/:token' element={!isauth ? <Resetpasswordform/> : <Navigate to="/" /> } />
        <Route path='/verifyemail' element={!isauth ? <Verifyemailform/> : <Navigate to="/" /> } />
      </Route>
      <Route path='/admin' element={ <AdminProtectedRoute> <AdminMenu /> </AdminProtectedRoute> } >
        <Route path='/admin/dashboard' element={ <AdminProtectedRoute> <Dashboard /> </AdminProtectedRoute> } />
        <Route path='/admin/orders' element={<AdminProtectedRoute><Orders /> </AdminProtectedRoute> } />
        <Route path='/admin/customers' element={<AdminProtectedRoute> <Customers /> </AdminProtectedRoute>} />
        <Route path='/admin/products' element={<AdminProtectedRoute><Products /> </AdminProtectedRoute>} />                
      </Route>
      <Route path='/admin/login' element={!utype ? <Login formname="Admin Login" register="false"/> : <Navigate to="/admin" />} />
    </Routes>
    )}
    </>
  );
}

export default App;
