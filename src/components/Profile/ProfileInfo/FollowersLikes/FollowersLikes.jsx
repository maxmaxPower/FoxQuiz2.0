import s from "./FollowersLikes.module.css";

let FollowersLikes = (props) => {
  return (
    <div className={s.follorwersLikes}>
      <div className={s.followers__item}>Followers : <p>null2 </p></div>
      <div className={s.likes__item}>Likes : <p>null1</p> </div>
    </div>
  );
};

export default FollowersLikes;
