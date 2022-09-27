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
    <div className={styles.leftCont}>
      <b>Full Name : </b>
      <div>{profile.fullName}</div>
      <div>
        <b>About me :</b>
        <div>{profile.aboutMe}</div>
      </div>
      <div>
        <b>Looking for a job :</b>{" "}
        {profile.lookingForAJob ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>no</span>
        )}
      </div>
      <b>My professional skills :</b>
      <div>{profile.lookingForAJobDescription}</div>
    </div>
  );
};

export default Description;
