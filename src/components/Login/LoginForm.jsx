import { createField, Input } from "../common/preloader/FormsControls/FormsControls";
import {
  maxLengthThunkCreator,
  requiredField,
} from "../utils/validators/validators";
import styles from "./Login.module.css";
import styless from "../common/preloader/FormsControls/FormControl.module.css";

const maxLength20 = maxLengthThunkCreator(20);

const LoginForm = ({handleSubmit,error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.loginField}>
      { createField('Email','email',Input,[requiredField],null,'loginField') }
      </div>
      <div className={styles.passwordField} >
      { createField('Password','password',Input,[requiredField,maxLength20],'password') }
      </div>
      <div className={styles.rememberMeField}>
      { createField(null,'rememberMe',Input,null,'checkbox')}
        Remember me
      </div>
     { error && 
      <div className={styless.formSummaryError}>{error}</div>
     } 
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
