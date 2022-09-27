import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/preloader/FormsControls/Paginator/Paginator";
import User from "./User";
import { useState } from "react";

const Users = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredSeacrh = props.users.filter((user) => {
    return user.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className={s.users_container}>
      <div className={s.resullts}>
        Results : {props.totalItemsCount}
        <div className={s.searchBlock__input}>
          <input
            type="text"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className={s.seacrhBlock}>
        <Paginator searchValue={searchValue} {...props} />
      </div>
      {filteredSeacrh.map((u) => (
        <User key={u.id} {...props} user={u} />
      ))}
    </div>
  );
};

export default Users;
