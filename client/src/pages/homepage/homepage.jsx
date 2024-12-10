import { useState } from "react";
import Butt from "../../components/butt.jsx";
import css from "./homepage.module.css";

function HomePage() {
  const value = 60;

  const handleChange = () => {};

  return (
    <main className={css.homepage}>
      <div className={css.card}>
        <p className={css.title}>My daily norma</p>
        <div className={css.cardfooter}>
          <p className={css.text}>1.5 L</p>
          <button className={css.button}>Edit</button>
        </div>
      </div>
      <Butt />
      <div className={css.slidercontainer}>
        <p className={css.slidertitle}>Today</p>
        <div className={css.divslider}>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className={css.slider}
          />
          <ul className={css.sliderlabels}>
            <li className={css.sliderlabelleft}>
              <span className={css.trot}></span>
              <span className={css.span}>0%</span>
            </li>
            <li className={css.sliderlabelcenter}>
              <span className={css.trot}></span>
              <span className={css.spancentr}>50%</span>
            </li>
            <li className={css.sliderlabelright}>
              <span className={css.trot}></span>
              <span className={css.span}>100%</span>
            </li>
          </ul>
        </div>
      </div>
      <div>Add Water</div>
      <div>Today Mounth</div>
    </main>
  );
}

export default HomePage;
