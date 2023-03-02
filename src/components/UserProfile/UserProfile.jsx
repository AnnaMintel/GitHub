import React, { useEffect, useRef } from "react";
import s from "./UsersProfile.module.css";

export const UserProfile = ({ user }) => {
  return (
    <div className={s.userProfile}>
      <div className={s.userWrapper}>
        <div className={s.userPhoto}>
          <img src={user.avatar_url} alt="User Photo" />
        </div>
        <div  className={s.userInfo}>
          <h3><a href={user.html_url} target="_blank">{user.name}</a></h3>
          <p>{user.bio}</p>
          <div className={s.followers}>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
