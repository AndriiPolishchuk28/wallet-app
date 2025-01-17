import { FC, useState } from "react";
import scss from "./DailyPoints.module.scss";
import { getPointsResult } from "../../../utils";


const DailyPoints: FC = () => {
  const [points] = useState<string>(getPointsResult())
  return (
    <div className={scss.wrapper}>
      <p>Daily points</p>
      <p>{points}</p>
    </div>
  );
};

export default DailyPoints;
