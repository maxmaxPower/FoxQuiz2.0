import { reduxForm } from "redux-form";
import { createField, Input } from "../../../common/preloader/FormsControls/FormsControls";
import styles from "./Description.module.css";
import styless from "../../../common/preloader/FormsControls/FormControl.module.css";

const DescriptionChanger = ({handleSubmit,error}) => {

  // if ( error != undefined){
  //   const errorMessege = error.filter(el => el.includes())
  //   console.log(errorMessege);
  // }

  return (
    <div className={styles.ChangedDescription_container}>
            <form onSubmit={handleSubmit}>
      <b>Full Name : </b>
      {createField('Full Name',"fullName",Input,[],'text')}
      <div>
        <b>About me : </b>
        {createField('About me',"aboutMe",Input,[],'text')}
      </div>
      <div style={{display:"flex"}}>
         <b>Looking for a job : </b>
         <div style={{paddingTop:'3px'}}>
         {createField('Looking for a job',"lookingForAJob",Input,[],'checkbox')}
         </div>
      </div>
       <b>My professional skills :</b>
       {createField('My professional skills ',"lookingForAJobDescription",Input,[],'Textarea')}
       <button style={{marginTop: "10px"}}>Save settings</button>
       { error && 
      <div className={styless.formSummaryError}>{error}</div>
     } 
       </form>
    </div>
  );
};

export const DescriptionChangerForm = reduxForm({
   form: "description"     
})(DescriptionChanger);