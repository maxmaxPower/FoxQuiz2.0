import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import defPhoto from '../../assets/images/user.jpg';


const Header = (props) => {
const authTrue = <div className={s.ProfileInfo}> {props.login}{!props.authPhoto ? <span><img src= {defPhoto}></img></span>  : <span><img src={props.authPhoto}></img></span> }
<button onClick={props.logoutThunk}>Log out</button> </div>;
const projectIcon = 'https://cdn-icons-png.flaticon.com/512/2156/2156300.png'
const authFalse = <NavLink to={'/login'}>Login</NavLink>;
  return (
    <header className={s.header}>
    <div className={s.header_container}>
    <div className={s.favicon}>
    <NavLink to="profile">
    <img alt=""  style={ props.TopIconColor ? {backgroundColor:'rgb(581,55, 555)'} : {backgroundColor:'rgb(255, 132, 0)'} } src={projectIcon}></img>
    </NavLink>
    </div>
    <div className={s.ProjectName}>
     <h1>FoxQuiz</h1>
    </div>
      <div className= {s.loginBlock}>
        {props.isAuth ? authTrue : authFalse }</div>
        </div>
    </header>
  );
};

export default Header;
