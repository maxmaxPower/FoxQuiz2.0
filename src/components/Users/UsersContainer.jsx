import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  setCurrentPage,
  toggleFollowingProgress,
  unFollow,
  follow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getisAuth,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
} from "../../redux/users-selectors";
import { useEffect } from "react";
import { useState } from "react";

const UsersContainer = (props) => {
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getUsersThunkCreator(currentPage, props.pageSize);
  }, [currentPage]);

  return (
    <div>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Users
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={currentPage}
          onPageChanged={(pageNum) => setCurrentPage(pageNum)}
          nextPage={props.nextPage}
          users={props.users}
          unFollow={props.unFollow}
          follow={props.follow}
          followingInProgress={props.followingInProgress}
        />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getisAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    unFollow,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
  }),
  withAuthRedirect // редірект відпрацює з юзерконтейнерной і результат відасть више
)(UsersContainer); // ця компонента залізе в ВІЗРЕДІРЕКТ
