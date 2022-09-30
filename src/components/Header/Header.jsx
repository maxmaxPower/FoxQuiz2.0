import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import defPhoto from '../../assets/images/user.jpg';


const Header = (props) => {
const authTrue = <div className={s.ProfileInfo}>{props.login} {!props.authPhoto ? <img src= {defPhoto}></img> : <img src={props.authPhoto}></img>}

<button onClick={props.logoutThunk}>Log out</button> </div>;
const projectIcon = 'https://cdn-icons-png.flaticon.com/512/2156/2156300.png'
const authFalse = <NavLink to={'/login'}>Login</NavLink>;
  return (
    <header className={s.header}>
    <NavLink to="profile">
    <img alt="1" className={s.favicon} src={projectIcon}></img>
    </NavLink>
    <div className={s.ProjectName}>
     <h1>FoxQuiz</h1>
    </div>
      <div className= {s.loginBlock}>
        {props.isAuth ? authTrue : authFalse }</div>
    </header>
  );
};

export default Header;
