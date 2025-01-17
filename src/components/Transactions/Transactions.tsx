import { FC } from 'react';
import data from '../../data/data.json';
import TransactionItem from './TransactionItem/TransactionItem';
import scss from './Transactions.module.scss';

const Transactions: FC = () => {
    return (
        <div className={scss.transactions}>
            <h3>Latest Transactions</h3>
            <ul className={scss.list}>
                {data.slice(-10).map((item, index) => (
                    <TransactionItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
