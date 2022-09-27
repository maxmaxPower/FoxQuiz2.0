import {createSelector} from 'reselect';

const getUsersSelector = (state) => {   // цей селектор треба тільки для того шоб взяти частину стейта і передайти результат в інший
    return state.usersPage.users;   
};
export const getUsersSuperSelector = createSelector(getUsersSelector, (users)=>{
    return users.filter(u=>true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
export const getisAuth = (state) => {
    return state.auth.isAuth;
};
