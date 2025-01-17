import { FC } from "react";
import Balance from "../../components/Balance/Balance";
import scss from './TransactionsList.module.scss';
import Transactions from "../../components/Transactions/Transactions";

const TransactionsList: FC = () => {
  return (
    <div className={scss.wrapper}>
      <Balance/>
      <Transactions/>
    </div>
  );
};

export default TransactionsList;
