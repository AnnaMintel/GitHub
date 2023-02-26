import React, {useEffect, useRef} from 'react';
import s from './UsersList.module.css';

export const UsersList = ({users}) => {

  return (
    <div className={s.usersList}>
      <ul>
        {users?.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

