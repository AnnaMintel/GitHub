import React from "react";
import s from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.spinner}></div>
    </div>
  );
};
