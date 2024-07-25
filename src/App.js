import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './component/loading/loading';
import { useEffect } from 'react';
import { Getallproduct } from './redux/slice/productslice';
import AdminRoutes from './routes/adminroute';
import PublicRoutes from './routes/publicroute';
import { Routes, Route } from 'react-router-dom';

function App() {

  const loading = useSelector((state) => state.auth.mloader);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Getallproduct());       
  },[dispatch]);

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
