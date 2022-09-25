import { useSelector } from "react-redux"
import { getUser } from "redux/auth/auth-selector"
import { useDispatch } from "react-redux"
import { logout } from "redux/auth/auth-operations"
import { Button } from "react-bootstrap"

const NavBarUser = () => {
    const {name} = useSelector(getUser)
    const dispatch = useDispatch()

    const onLogout = () => dispatch(logout())

    return (
        <div>
            <span>Welcome to PhoneBook, {name}</span> |
            <Button variant="outline-primary" onClick={onLogout}>
            Logout
            </Button>
            {/* <button onClick={onLogout} type="button">Logout</button> */}
        </div>
    )
}

export default NavBarUser