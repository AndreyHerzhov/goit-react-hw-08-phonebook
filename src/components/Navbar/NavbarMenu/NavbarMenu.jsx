import styles from "./navbar-menu.module.css";
import items from "./items";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


 
const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
   
  return className;
};


 
const NavbarMenu = () => {
 
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getClassName}>
          {text}
      </NavLink>
    </li>
  ));
   
  return <Nav  className="contacts">{elements}</Nav>;
};

export default NavbarMenu;