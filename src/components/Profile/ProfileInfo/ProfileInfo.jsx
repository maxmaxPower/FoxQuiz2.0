import Preloader from "../../common/preloader/preloader";
import FollowersLikes from "./FollowersLikes/FollowersLikes";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { useState } from "react";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

// const SettingbuttonStyles = {
//   border: "none",
//   width: "40px",
//   height: "40px",
//   display: "flex",
//   justifySelf: "right",
//   backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/17/17146.png)",
//   backgroundColor: "inherit",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   transition: "all 0.3s",
// };

let ProfileInfo = ({ saveProfile, ...props }) => {
  let [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    saveProfile(formData);
    
    // setEditMode(false) ;
  };

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.ProfileInfo_container}>
      <div className={styles.ProfileInfo_TopContainer}>
        <Avatar
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
          profile={props.profile}
        />
        <Description
        onSubmit = {onSubmit}
          editMode={editMode}
          profile={props.profile}
        />
        <SocialNetworks
                onSubmit = {onSubmit}
          saveProfile={saveProfile}
          editMode={editMode}
          profile={props.profile}
        />
       {editMode ? <></> : <FollowersLikes /> } 
        <span style={{ visibility: "hidden" }}></span>
        <span style={{ visibility: "hidden" }}></span>
        <span style={{ visibility: "hidden" }}></span>
        {props.isOwner && (
          <button
          className={styles.settingsButton}
            onClick={() => {
              setEditMode(!editMode);
            }}
          ></button>
        )}
      </div>
      <ProfileStatusWithHooks
        savePhoto={props.savePhoto}
        updateStatus={props.updateStatus}
        status={props.status}
      />
    </div>
  );
};
export default ProfileInfo;
