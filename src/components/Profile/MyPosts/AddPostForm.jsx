import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/preloader/FormsControls/FormsControls";
import {
  maxLengthThunkCreator,
  requiredField,
} from "../../utils/validators/validators";

const maxLength20 = maxLengthThunkCreator(20);
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          value={props.newPostText}
          validate={[requiredField, maxLength20]}
          placeholder="Enter your text"
        />
        <div>
          <button>Add Post</button>
        </div>
      </div>
    </form>
  );
};

export const AddPostReduxForm = reduxForm({
  form: "newPost",
})(AddPostForm);
