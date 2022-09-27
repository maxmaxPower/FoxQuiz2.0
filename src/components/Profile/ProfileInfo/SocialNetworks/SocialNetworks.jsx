import { SocialNetworksChangerForm } from "./SocialNetworksChanger";
import styles from "./SocialNetworks.module.css";

const SocialNetworks = ({onSubmit,profile,editMode}) => {
    return editMode ? <SocialNetworksChangerForm onSubmit={onSubmit} profile={profile}/> : <SocialNetworksInfo profile={profile}/>
  };

  const SocialNetworksInfo = ({profile}) => {
    const contacts = profile.contacts;
    return <div className={styles.SocialNetworksContainer}>
        <b>Social networks : </b>
        {Object.keys(contacts).map(key => <Contact key={key} contactKey={key} contactValue={contacts[key]}/> )}
      </div>
  };

  const Contact = ({ contactKey, contactValue }) => {
    return (
      <div className={styles.ContactsContainer}>
        <b>{contactKey}:</b> [ <a href={contactValue} target={"to _blank"}>{contactValue}</a>   ]
      </div>
    );
  };
  

  export default SocialNetworks;