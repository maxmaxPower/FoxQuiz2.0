import { NavLink } from "react-router-dom";
import s from "./FavoriteFriends.module.css";
const FavoriteFriends = (props) => {
  return (
    <div className={s.f_friends}>
      <div className={s.profile__inner}>
        <div className={s.avatar}>
          <NavLink to={props.nick}>
            <img src={props.avatar}></img>
          </NavLink>
        </div>
        <div>
          <NavLink to={props.nick}>{props.nick}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default FavoriteFriends;
