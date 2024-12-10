import WaterListIItem from "../../components/homepage/addListItem/WaterListIItem.jsx";
import Butt from "../../components/homepage/butt.jsx";
import MyDailyCard from "../../components/homepage/mydaylicard/MyDayliCard.jsx";
import WaterList from "../../components/homepage/waterlist/WaterList.jsx";
import GlassOfWater from "../../components/ui/icons/GlassOfWater.jsx";
import PencilSquareOutline from "../../components/ui/icons/PencilSquareOutline.jsx";
import TrashOutline from "../../components/ui/icons/TrashOutline.jsx";
import WaterRange from "../../components/homepage/waterrange/WaterRange.jsx";
import css from "./homepage.module.css";

const data = [
  { id: "1", volumeOfWater: "200", time: "9:00" },
  { id: "2", volumeOfWater: "200", time: "10:00" },
  { id: "3", volumeOfWater: "200", time: "11:00" },
  { id: "4", volumeOfWater: "200", time: "12:00" },
  { id: "5", volumeOfWater: "200", time: "13:00" },
  { id: "6", volumeOfWater: "200", time: "14:00" },
  { id: "7", volumeOfWater: "200", time: "15:00" },
  { id: "8", volumeOfWater: "200", time: "16:00" },
  { id: "9", volumeOfWater: "200", time: "17:00" },
  { id: "10", volumeOfWater: "200", time: "18:00" },
];

function HomePage() {
  return (
    <main className={css.homepage}>
      <MyDailyCard />
      <Butt />
      <WaterRange />

      <div>Add Water</div>
      <div className={css.today}>
        <h2 className={css.title}>Today</h2>
        <WaterList>
          {data.map((item) => (
            <WaterListIItem key={item.id} item={item} />
          ))}
        </WaterList>
        <h3>Add water</h3>
        <h2 className={css.title}>Today</h2>
      </div>
    </main>
  );
}

export default HomePage;
