const abain = (state) => {
  let moove = () => {
    console.log("heelo");
  };

  return (
<div>
    {moove};
    <p>Users</p>
      {props.users.map((u) => (
        <div className={s.users_item} key={u.id}>
          <div className= {s.avatar_button}>
            <div>
              <img className={s.userPhoto} src={u.photoUrl} alt="" />
            </div>
            <div>
                {
                    u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                    }
            </div>
          </div>
          <div className={s.user_info}>
            <div className={s.users_info__item}>{u.fullName}</div>
            <div className={s.users_info__item2}>{u.location.country}</div>
            <div className={s.users_info__item}>{u.status}</div>
            <div className={s.users_info__item2}>{u.location.city}</div>
          </div>
        </div>
      ))}

</div>



  );
};

export default abain;
