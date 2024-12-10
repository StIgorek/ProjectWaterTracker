import React from "react";
import css from "./waterlist.module.css";

function WaterList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

export default WaterList;
