import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './component/loading/loading';
import { useEffect } from 'react';
import { Getallproduct } from './redux/slice/productslice';
import AdminRoutes from './routes/adminroute';
import PublicRoutes from './routes/publicroute';
import { Routes, Route } from 'react-router-dom';
import { Getuserorder } from './redux/slice/orderslice';

function App() {

  const loading = useSelector((state) => state.auth.mloader);
  const dispatch = useDispatch();
  const {user , token} = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(Getallproduct());       
  },[dispatch]);

  useEffect(() => {
    if(user && token){
    dispatch(Getuserorder(token, user._id));
    }
    // eslint-disable-next-line
},[token, user]);

  return (
    <>    
    {loading ? ( <Loading />) : (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>  
    )}
    </>
  );
}

export default App;
