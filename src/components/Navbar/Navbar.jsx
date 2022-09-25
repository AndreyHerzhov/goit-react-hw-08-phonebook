import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavBarUser from "./NavBarUser/NavBarUser";
import styles from "./navbar.module.css";
import useAuth from "shared/hooks/useAuth";
import { Container,Col,Row } from "react-bootstrap";

const Navbar = () => {
    const isLogin = useAuth()

    return (
 
        <Container>
            <Row>
                <Col><Link className={styles.logo} to="/">PhoneBook</Link></Col>
                <Col className="my-contacts">
                {isLogin && <NavbarMenu />}
                </Col>
                <Col className="navbar_user">
                {isLogin ?  <NavBarUser/> : <NavbarAuth />}
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;