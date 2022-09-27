import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addPost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <MyPosts
      posts={props.posts}
      addPost={props.addPost}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    sayPostAdded: state.profilePage.sayPostAdded,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};
export default compose(connect(mapStateToProps, {addPost}))(
  MyPostsContainer
);
