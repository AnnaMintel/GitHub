import React, {useState, useEffect} from 'react';
import s from './Header.module.css';
import ghImage from "./../../img/gh.svg";

export const Header = () => {

    let [user, setUser] = useState(null);
    let [repositiries, setRepositories] = useState(null);

    useEffect(() => {
      getUsers().then(response => response.json())
      .then(data => user(data.message))
    })


  return (
    <div className={s.header}>
      <img className={s.ghImg} src={ghImage} alt='GH-img' />
      <input className={s.headerInput} type="search" placeholder="Enter username" />
    </div>
  );
}

