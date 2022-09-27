import React from "react";
import StatusInfo from "./StatusInfo";
import styles from "./PremiumStatus.module.css";


const PremiumStatusPage = ({subscriptions,deleteTask }) => {

const chooseTask = (id) => {
  console.log(id);
}
  return (
    <div className={styles.premiumStatus__Wrapper}>
      {subscriptions.map((element) => {
        return <StatusInfo deleteTask={deleteTask} key={element.id} onchooseTask = {chooseTask} element={element} onDelete = {deleteTask} />;
      })}
    </div>
  );
};

export default PremiumStatusPage;
