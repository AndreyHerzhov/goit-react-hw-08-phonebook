import useAuth from "shared/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isLogin = useAuth()
    // console.log(isLogin)
    if(!isLogin) {
        return <Navigate to="/login"/>
    }
    return <Outlet/>
}

export default PrivateRoute