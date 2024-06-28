import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import Loading from './component/loading/loading';
import { AdminProtectedRoute } from './utility/protectedroute';


function App() {
  
  const isauth = useSelector((state) => state.auth.isauth);
  const loading = useSelector((state) => state.auth.mloader);
  const user = useSelector((state) => state.auth.user);
  let utype = false;
  if(user){
  if(user['usertype'] === "admin"){
      utype=true;      
  }
}

  return (
    <>    
    {loading ? ( <Loading />) : (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={!isauth ? <Register/> : <Navigate to="/" /> } />
        <Route path='/login' element={!isauth ? <Login formname="Login" register="true" /> : <Navigate to="/" /> } />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/cart' element={<Cart /> } />
      </Route>
      <Route path='/admin' element={ <AdminProtectedRoute> <AdminLayout /> </AdminProtectedRoute> } >
        <Route path='/admin/dashboard' element={ <AdminProtectedRoute> <Dashboard /> </AdminProtectedRoute> } />
        <Route path='/admin/orders' element={<AdminProtectedRoute><Orders /> </AdminProtectedRoute> } />
        <Route path='/admin/customers' element={<AdminProtectedRoute> <Customers /> </AdminProtectedRoute>} />
        <Route path='/admin/products' element={<AdminProtectedRoute><Products /> </AdminProtectedRoute>} />        
      </Route>
      <Route path='/admin/login' element={!utype ? <Login formname="Admin Login" register="false"/> : <Navigate to="/admin" />} />
    </Routes>
    )};
    </>
  );
}

export default App;
