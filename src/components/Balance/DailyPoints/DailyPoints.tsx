import { FC } from "react";
import scss from "./DailyPoints.module.scss";

const DailyPoints: FC = () => {
  return (
    <div className={scss.wrapper}>
      <p>Daily points</p>
      <p>456k</p>
    </div>
  );
};

export default DailyPoints;
