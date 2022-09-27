import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "it-kamasutra/auth/SET_USER_DATA";
const SET_CAPTCHA = "it-kamasutra/auth/SET_CAPTCHA";
let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  myProfNum: 2,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS BELOW THIS LINE */
export const setCaptcha = (captcha) => ({type: SET_CAPTCHA,captcha,});
export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA,data: { email, id, login, isAuth },});

// DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL DALL

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.me();
  if (data.resultCode === 0) {
    let { login, email, id } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let messege =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: messege }));
  }
};

export const logoutThunk = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
