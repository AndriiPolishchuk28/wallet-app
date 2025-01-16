import { FC } from "react";
import Balance from "../../components/Balance/Balance";
import scss from './Home.module.scss';
import Transactions from "../../components/Transactions/Transactions";

const Home: FC = () => {
  return (
    <div className={scss.wrapper}>
      <Balance/>
      <Transactions/>
    </div>
  );
};

export default Home;
