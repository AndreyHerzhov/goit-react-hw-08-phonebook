import { NavLink } from "react-router-dom";
import styles from "./navbar-auth.module.css";
import {Button} from "react-bootstrap";


const NavbarAuth = () => {
    
    return (
        <div className={styles.wrapper}>
            <NavLink to="/register"   >
                <Button variant="info">
                     Register
                </Button> 
            </NavLink>
            <NavLink to="/login"   >
                <Button variant="info">
                    Login
                </Button>
            </NavLink>
           
        </div>
    )
}

export default NavbarAuth;