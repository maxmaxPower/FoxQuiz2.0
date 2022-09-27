import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import activeLinks from "./ActiveLink";
const Links = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.link} className={activeLinks()}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Links;
