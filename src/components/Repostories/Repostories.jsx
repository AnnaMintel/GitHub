import React from "react";
import s from "./Repostories.module.css";

export const Repostories = ({ repositories }) => {
  return (
    <div className={s.container}>
      <h2>Repositories</h2>
      <ul className={s.list}>
        {repositories?.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              <h3>{repo.name}</h3>
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
