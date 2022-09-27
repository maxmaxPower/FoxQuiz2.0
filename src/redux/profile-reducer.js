import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCES = "SAVE_PHOTO_SUCCES";

let initialState = {
  posts: [
    { id: 1, messege: "Hi,how are you?", likesCount: 12 },
    { id: 2, messege: "Its my first post", likesCount: 11 },
    { id: 3, messege: "How are you", likesCount: 22 },
    { id: 4, messege: "Jsx cool", likesCount: 111 },
    { id: 5, messege: "REACT REACT", likesCount: 11111 },
    { id: 6, messege: "Mally", likesCount: 44 },
  ],
  sayPostAdded: " ",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        sayPostAdded: "Post Added",
        posts: [
          ...state.posts,
          { id: 7, messege: action.newPostText, likesCount: 11 },
        ],
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(p => p.id != action.postId) ,
        };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
      case SAVE_PHOTO_SUCCES:
        return {
          ...state,
          profile : {...state.profile, photos: action.photos}
        };
    default:
      return state;
  }
};

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const savePhotoSucces = (photos) => ({
  type: SAVE_PHOTO_SUCCES,
  photos,
});
export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(data));
  };
};


export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  } 
};

export const savePhoto = (photos) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photos);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSucces(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch,getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  }
  else {
        dispatch(stopSubmit("description", { "contacts":{"facebook": response.data.messages} }));   
  }
};



export default profileReducer; 
