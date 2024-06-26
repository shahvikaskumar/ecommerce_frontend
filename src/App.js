import './App.css';
import { Routes , Route } from 'react-router-dom';
import Dashboard from './admin/pages/dashboard';
import Layout from './utility/layout';
import Login from './pages/login';
import AdminLayout from './utility/adminlayout';
import Contactus from './pages/contactus';
import Register from './pages/register';
import Home from './pages/home';
import Cart from './pages/cart';
import Orders from './admin/pages/order';
import Customers from './admin/pages/customers';
import Products from './admin/pages/products';
import Adminlogin from './admin/pages/login';



function App() {
  
  return (
    <>    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/cart' element={<Cart /> } />
      </Route>
      <Route path='/admin' element={<AdminLayout />} >
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/orders' element={<Orders />} />
        <Route path='/admin/customers' element={<Customers />} />
        <Route path='/admin/products' element={<Products />} />        
      </Route>
      <Route path='/admin/login' element={<Adminlogin />} />
    </Routes>
    
    </>
  );
}

export default App;
