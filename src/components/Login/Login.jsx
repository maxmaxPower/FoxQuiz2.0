import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div className={styles.LoginWrapper}>
      <div className={styles.LoginContainer}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Login;
