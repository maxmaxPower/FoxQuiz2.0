import { DescriptionChangerForm } from "./DescriptionChanger";
import styles from "./Description.module.css";

const Description = ({onSubmit,saveProfile, ...props }) => {
 
  return props.editMode ? (
    <DescriptionChangerForm initialValues={props.profile} onSubmit={onSubmit}/>  // initialValues запихає в інпут форми VALUE !!! 
  ) : (
    <DescriptionInfo  {...props} />
  );
};

const DescriptionInfo = ({profile}) => {
  return (
    <div className={styles.DescriptionInfo}>
      <b>Full Name : </b>
      <div><p>{profile.fullName}</p></div>
      <div>
        <b>About me :</b>
        <div><p>{profile.aboutMe}</p></div>
      </div>
      <div>
        <b>Looking for a job :</b>{" "}
        {profile.lookingForAJob ? (
          <p style={{ color: "green" }}>yes</p>
        ) : (
          <p style={{ color: "red" }}>no</p>
        )}
      </div>
      <b>My professional skills :</b>
      <p>{profile.lookingForAJobDescription}</p>
    </div>
  );
};

export default Description;
