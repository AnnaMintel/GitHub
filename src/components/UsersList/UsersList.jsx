import React, { useEffect, useRef } from "react";
import s from "./UsersList.module.css";

export const UsersList = ({ users, setUserLogin }) => {
  const onChooseUser = (user) => {
    setUserLogin(user);
  };

  return (
    <div className={s.usersList}>
      <ul style={users?.length > 9 ? {overflowY: 'scroll'} : {}}>
        {users?.map((user) => (
          <li onClick={() => onChooseUser(user.login)}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};
