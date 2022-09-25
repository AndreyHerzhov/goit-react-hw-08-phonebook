import MyContacts from "./components/MyContacts/MyContacts";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "redux/auth/auth-operations";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "components/HomePage/HomePage";


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token)
  const loading = useSelector(store => store.auth.loading)

  useEffect(()=> {
      if(token){
        dispatch(current())
      } else {
        return
      }
    
  }, [dispatch, token]);

  return !loading && (
     
      
      <Container>
       <Navbar/>
     
      <Routes>
        <Route element={<PublicRoute/>}>
            <Route path="/" element={ <HomePage/>} />  
            <Route path="/register" element={ <RegisterPage/>} />  
            <Route path="/login" element={ <LoginPage/>} />
        </Route>
        
        <Route element={<PrivateRoute/>}>
             <Route path="/contacts" element={ <MyContacts/>} />
        </Route>
        
      </Routes>
      </Container> 
     
  );
};
