import a from "./Post.module.css";

const Post = (props) => {
  let add = () => {
    return props.likesCounts + 1;
  };
  return (
    <div className={a.item}>
      <div className={a.img}>
        <img src="http://pm1.narvii.com/7620/1e77e3a13124a5f7b3bf5484eb5c2da285b3d02cr1-700-690v2_uhq.jpg"></img>
      </div>
      <div className={a.Text_container}>
        <div className={a.post_messege}>{props.messege}</div>
        <div className={a.likeImg}>
          <img src="https://e7.pngegg.com/pngimages/929/555/png-clipart-logo-facebook-like-button-like-cdr-angle-thumbnail.png"></img>
        </div>

        <div className={a.likesCounts}>
          <span> {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
