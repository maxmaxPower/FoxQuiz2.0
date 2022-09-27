// РЕДЮСЕР ЦЕ ЧИСТА ФУНКЦІЯ ЯКА ПРИЙМАЄ В СЕБЕ СТЕЙТ І ЕКШН , ПРИ НЄОБХОДІМОСТІ МІНЯЄ ЙОГО І ВЕРТАЄ ІЗМІНЬОННИЙ СТЕЙТ АБО ЯКШО
//НІЧОГО НЕ ЗМІНИЛОСЬ ВЕРТАЄ СТАРИЙ СТЕЙТ

import { usersAPI } from "../api/api";
import { arrayUpdateMapper } from "../components/utils/objects-helpers";
////////////////////////////////////////////////////////////////////////
const SET_TOTAL_USERS_COUNT = "it-kamasutra/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "it-kamasutra/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "it-kamasutra/users/TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_CURRENT_PAGE = "it-kamasutra/users/SET_CURRENT_PAGE";
const FOLLOW = "it-kamasutra/users/FOLLOW";
const UNFOLLOW = "it-kamasutra/users/UNFOLLOW";
const SET_USERS = "it-kamasutra/users/SET_USERS";

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: arrayUpdateMapper(state.users,action.userId,'id',{followed: true}),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: arrayUpdateMapper(state.users,action.userId,'id',{followed: false}),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

/* ACTION CREATORS BELOW THIS LINE */
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage,});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,count: totalUsersCount});
export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

// САНКИ  ЦЕ ФУНКЦІЯ ЯКА ПРИЙМАЄ МЄТОД DISPATCH , і діспатчить внутрі себе обичні екшени , функція яка робе внутрі себе асінхронну роботу і в нутрі кучу діспатчів

export const getUsersThunkCreator = (page, pageSize) => {
  
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const togleFollowUnfollow = async (dispatch, userId, apiMethod, actionCR) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCR(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return (dispatch) => {
    togleFollowUnfollow(dispatch, userId, usersAPI.setFollow, followSucces);
  };
};

export const unFollow = (userId) => {
  return (dispatch) => {
    togleFollowUnfollow(dispatch, userId, usersAPI.setUnfollow, unfollowSucces);
  };
};

export default usersReducer;
