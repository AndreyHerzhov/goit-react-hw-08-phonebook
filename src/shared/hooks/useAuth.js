import { useSelector } from "react-redux";
import { isAuth } from "redux/auth/auth-selector";

const useAuth = () => {
    const result = useSelector(isAuth)
    return result
}

export default useAuth