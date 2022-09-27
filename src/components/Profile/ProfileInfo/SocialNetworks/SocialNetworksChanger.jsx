import { Form, reduxForm } from "redux-form";
import { createField, Input } from "../../../common/preloader/FormsControls/FormsControls";
import styles from "./SocialNetworks.module.css";


const SocialNetworksChanger = ({ handleSubmit, profile ,error}) => {

// newArray.map(el => newArray.includes() && console.log('includes'));
// const array = Object.keys(profile.contacts);
// let newarrra = [];
// array.map(el => newarrra.push(el));
// let aa = newarrra.filter(el => el.includes('a'))

  return (
    <div className={styles.SocialNetworksContainer_Changed}>
      <Form onSubmit={handleSubmit}>
        <b>Social networks : </b>
        {Object.keys(profile.contacts).map((key) => {
       return <Contact 
              key={key}
              contactKey={key}
              contactValue={profile.contacts[key]}
            /> 
          })}
      </Form>
    </div>
  );
};

const Contact = ({contactKey}) => {
  return (
    <div className={styles.ChangeContactsContainer}>
      <p>{contactKey}:</p> {createField(contactKey.toUpperCase(),"contacts." + contactKey,Input,[],'text')}
    </div>
  );
};

export const SocialNetworksChangerForm = reduxForm({
  form: "description",
})(SocialNetworksChanger);
