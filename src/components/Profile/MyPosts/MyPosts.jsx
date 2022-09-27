import { AddPostReduxForm } from "./AddPostForm";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post likesCount={p.likesCount} key={p.id} messege={p.messege} />
  ));

  const onSubmit = (formData) => {
    props.addPost(formData.newPostText)
  };

  return (
    <div className={c.MyPosts}>
      <div className={c.newpost}>MY posts</div>
      <div className={c.TextArea_ButtonSay_PostAdded}>
        <AddPostReduxForm onSubmit={onSubmit} />
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
