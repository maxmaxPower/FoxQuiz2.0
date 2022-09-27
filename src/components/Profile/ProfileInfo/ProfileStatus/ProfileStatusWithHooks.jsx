import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./ProfileStatus.module.css";
const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditmode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status); // коли компонента відрісується визветься useeffect
  }, [props.status]);

  const changeEditMode = (bool, status) => {
    setEditmode(bool);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={styles.ProfileStatus_Container}>
      
      {!editMode && (
        <div>
        <b>Status : </b>
          <span
            onDoubleClick={() => {
              changeEditMode(true);
            }}
          > 
            {props.status || "--------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={() => {
              changeEditMode(false, status);
            }}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
