import React, {useEffect, useRef} from 'react';
import s from './Header.module.css';
import ghImage from "./../../img/gh.svg";

export const Header = ({userName, setUserName, onEnterPressed, searchInput}) => {

    const onSearchUser = (e) => {
      setUserName(e.currentTarget.value)
    }

  return (
    <div className={s.header}>
      <img className={s.ghImg} src={ghImage} alt='GH-img' />
      <input 
          className={s.headerInput} 
          type="search" 
          placeholder="Enter username" 
          value={userName}
          onChange={onSearchUser}
          onKeyDown={onEnterPressed}
          ref={searchInput}
           />
    </div>
  );
}

