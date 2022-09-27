import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {  logoutThunk } from "../../redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  
 
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  authPhoto: state.auth.photo,
  myProfNum: state.auth.myProfNum,
});

export default compose(connect(mapStateToProps, { logoutThunk}))(
  HeaderContainer
);
