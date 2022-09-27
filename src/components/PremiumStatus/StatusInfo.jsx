import styles from "./PremiumStatus.module.css";

const StatusInfo = ({element,deleteTask,onchooseTask}) => {
   
  return (
    <div className={styles.premiumStatus__Container} style={{ boxShadow: `4px 1px 30px` }}  >
    <div onClick={()=>{deleteTask(element.id)}} className={styles.cross}></div>
      <h1 style={{ color: element.color }}> {element.name} </h1>
      <div style={{ border: "2px dotted gray",minHeight:"280px" }} className={styles.privilegesContainer} >

      </div>
    </div>

  );
};
export default StatusInfo;
