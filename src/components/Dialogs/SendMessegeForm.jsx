import { reduxForm } from "redux-form";
import { createField, Textarea } from "../common/preloader/FormsControls/FormsControls";
import {
  maxLengthThunkCreator,
  requiredField,
} from "../utils/validators/validators";
import s from "./Dialogs.module.css";

const maxLength50 = maxLengthThunkCreator(50);
const SendMessegeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textArea}>
        {createField('Enter your messege','newMessege',Textarea,[requiredField,maxLength50],null)}
      </div>
      <div className={s.messegebutton}>
        <button>Отправить</button>
      </div>
    </form>
  );
};

export const SendMessegeReduxForm = reduxForm({
  form: "sendMessege",
})(SendMessegeForm);
