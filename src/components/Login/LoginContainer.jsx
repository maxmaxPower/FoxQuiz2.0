import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { loginThunk, logoutThunk } from "../../redux/auth-reducer";
import Login from "./Login";

const LoginContainer = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile/"/>;
  }
  return <Login {...props} />;
};

let mapStateToProps = (state) => {
  return { messegesPage: state.messegesPage, isAuth: state.auth.isAuth };
};

export default compose(connect(mapStateToProps, { loginThunk, logoutThunk }))(
  LoginContainer
);
