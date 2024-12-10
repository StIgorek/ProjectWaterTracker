import Butt from "../../components/butt.jsx";
import MyDailyCard from "../../components/mydaylicard/MyDayliCard.jsx";
import GlassOfWater from "../../components/ui/icons/GlassOfWater.jsx";
import PencilSquareOutline from "../../components/ui/icons/PencilSquareOutline.jsx";
import TrashOutline from "../../components/ui/icons/TrashOutline.jsx";
import WaterRange from "../../components/waterrange/WaterRange.jsx";
import css from "./homepage.module.css";

function HomePage() {
  return (
    <main className={css.homepage}>
      <MyDailyCard />
      <Butt />
      <WaterRange />

      <div>Add Water</div>

      <div className={css.cardbig}>
        <div className={css.card}>
          <div className={css.left}>
            <div className={css.water}>
              <GlassOfWater size="26" />
            </div>

            <p className={css.textwater}>200 mL</p>
            <p className={css.texttime}>14:00 PM</p>
          </div>
          <div className={css.rigth}>
            <div className={css.pencil}>
              <PencilSquareOutline size="16" />
            </div>
            <div className={css.trash}>
              <TrashOutline size="16" />
            </div>
          </div>
        </div>
      </div>

      <div>Today Mounth</div>
    </main>
  );
}

export default HomePage;
