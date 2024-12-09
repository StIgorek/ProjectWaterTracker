import css from "./homepage.module.css";

function HomePage() {
  return (
    <main className={css.homepage}>
      <div className={css.card}>
        <p className={css.title}>My daily norma</p>
        <div className={css.cardfooter}>
          <p className={css.text}>1.5 L</p>
          <button className={css.button}>Edit</button>
        </div>
      </div>
      <div>Img</div>
      <div>raiting</div>
      <div>Add Water</div>
      <div>Today Mounth</div>
    </main>
  );
}

export default HomePage;
