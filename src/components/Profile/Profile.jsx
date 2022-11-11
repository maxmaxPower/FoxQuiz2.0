import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React, { useState } from "react";

const Profile = ({saveProfile,...props}) => {
  return <div className={styles.profile}>
      <TopBackgroundImage isOwner = {props.isOwner}/>
      <ProfileInfo saveProfile = {saveProfile} savePhoto = {props.savePhoto} isOwner={props.isOwner} profile = {props.profile}  status = {props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer />
        </div>
};

const TopBackgroundImage = ({isOwner}) => {

  const defaultFonts = 'https://www.androidauthority.com/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg';
  let [redactMode,setRedactMode] = useState(false);

  return <div onClick={()=>{alert('IN PROGRESS')}} className={styles.profile_header}>
    
    <div className={isOwner ? styles.OnlineStatus : styles.OfflineStatus}>{isOwner ? "Online" : "Offline"}</div>  
    {redactMode ? 
    <div className="absolute w-44">
      <button onClick={()=>{alert("IN PROGRESS")}}>
 <img src="http://cdn.onlinewebfonts.com/svg/img_391162.png" alt="" />
 </button></div> : "" }
    <img src={defaultFonts} alt="" onMouseEnter={() => {setRedactMode(true)}} onMouseLeave={() => {setRedactMode(false)}} /> 
  </div>
    }

export default Profile;
