import { FC, useState } from "react";
import scss from "./CardBalance.module.scss";
import { generateRandomBalance } from "../../../utils";

const CardBalance: FC = () => {
    const [balance] = useState<number>(generateRandomBalance());
    
    const limit:number = 1500;
    const availableBalance:string = (limit - balance).toFixed(2);
  return (
    <div className={scss.wrapper}>
      <p className={scss.title}>Card Balance</p>
      <p className={scss.balance}>{balance}</p> 
      <p className={scss.available_balance}>${availableBalance} Available</p> 
    </div>
  );
};

export default CardBalance;
