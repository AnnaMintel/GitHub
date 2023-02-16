import s from './Header.module.css';
import ghImage from "./../../img/gh.svg";

export const Header = () => {
  return (
    <div className={s.header}>
      <img className={s.ghImg} src={ghImage} alt='GH-img' />
      <input className={s.headerInput} type="search" placeholder="Enter username" />
    </div>
  );
}

