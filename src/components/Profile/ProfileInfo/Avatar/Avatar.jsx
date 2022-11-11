import a from "./Avatar.module.css";
import defPhoto from '../../../../assets/images/user.jpg';
const Avatar = ({savePhoto,profile,isOwner}) => {

    return (
      <div className={a.avatarBlock}>
      <div className={a.avatar}>
          <img src={profile.photos.large != null ? profile.photos.large : defPhoto} alt=""/>
      </div>
          {isOwner && <input type={"file"} onChange={(e)=>{savePhoto(e.target.files[0])}}></input>} 
      </div>  
     
    );
};
export default Avatar;