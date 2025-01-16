import { FC } from "react";
import CardBalance from "./CardBalance/CardBalance";
import NoPayment from "./NoPayment/NoPayment";
import DailyPoints from "./DailyPoints/DailyPoints";
import scss from './Balance.module.scss';

const Balance: FC = () => {
  return <div className={scss.wrapper}>
    <div className={scss.balance_wrapper}>
    <CardBalance/>
    <DailyPoints/>
    </div>
 
    <NoPayment/>
  </div>;
};

export default Balance;
