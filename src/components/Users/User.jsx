import React from 'react'
import { NavLink } from 'react-router-dom';
import userDefPhoto from "../../assets/images/user.jpg";
import s from "./Users.module.css";


const User = (props) => {
    const user = props.user;
  return (
    <div className={s.users_item} key={s.id}>
          <div className={s.avatar_button}>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img      
                  className={s.userPhoto}
                  src={user.photos.small != null ? user.photos.small : userDefPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div className={s.followsButtons}>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.user_info}>
            <div className={s.users_info__item}>{user.name}</div>
            <div className={s.users_info__item2}>{"u.location.country"}</div>
            <div className={s.users_info__item}>{user.status}</div>
            <div className={s.users_info__item2}>{"u.location.city"}</div>
          </div>
        </div>
  )
}

export default User