import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React, { useState } from "react";

const Profile = ({saveProfile,...props}) => {
  return (
    <div className={styles.profile}>
      <TopBackgroundImage backgroundimage = {"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}/>
      <OnlineStatus isOwner = {props.isOwner}/>
      <ProfileInfo saveProfile = {saveProfile} savePhoto = {props.savePhoto} isOwner={props.isOwner} profile = {props.profile}  status = {props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

const TopBackgroundImage = ({backgroundimage}) => {
  let [redactMode,setRedactMode] = useState(false);
return <div className={styles.header__img }>
{!redactMode ? <img onMouseEnter={()=>{setRedactMode(true)}} alt = "" src={backgroundimage} ></img> 
: <div className={styles.header_redactMode__img}>
<img onMouseLeave={()=>{setRedactMode(false)}} alt = "" src={backgroundimage} ></img>
<div className={styles.choosePhoto}>
<button onClick={()=>{alert("IN PROGRESS")}}>
<img src="http://cdn.onlinewebfonts.com/svg/img_391162.png" alt="" />
</button>
</div>
</div>} 
</div>
}

const OnlineStatus = ({isOwner}) => {
return <div className={styles.OnlineStatus}>{isOwner ? <div className={styles.statusOnline}>Online</div> : <div className={styles.statusOffline}>Offline</div>  }</div>
}

export default Profile;
