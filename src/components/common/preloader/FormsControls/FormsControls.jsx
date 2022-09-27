import { Field } from "redux-form";
import styles from "./FormControl.module.css";

const FormControll = ({ input, meta : {error,touched},children }) => {
  const touchErr = error && touched;
  return (
    <div className={styles.formControl + " " + (touchErr ? styles.error : "")}>
      <div>
        {children}
      </div>
      <div>{touchErr && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  
 return <FormControll {...props}><textarea {...input} {...restProps} /></FormControll>
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  
  return <FormControll {...props}><input {...input} {...restProps} /></FormControll>
};

export const createField = (placeholder,name,component,validates,type,props = {}) =>{
  return (
    <Field
    placeholder={placeholder}
    name={name}
    component={component}
    validate={validates}
    type={type}
    {...props}
  />
  )
}
