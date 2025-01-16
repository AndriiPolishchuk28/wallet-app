import { FC, useState } from 'react';
import scss from './TransactionItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getDayIfThisWeek, getPointsResult } from '../../../utils';


interface TransactionItemProps {
    type: string;
    // type: 'Payment' | 'Credit';
    amount: number;
    transactionName: string;
    transactionDescription: string;
    date: string;
    pending: boolean;
    user?: string;
}

const TransactionItem: FC<TransactionItemProps> = ({
    type,
    amount,
    transactionName,
    transactionDescription,
    date,
    pending,
    user,
}) => {
    const [day] = useState<string | null>(getDayIfThisWeek(date))
    const darkColors = [
        '#8B0000',
        '#4682B4',
        '#B8860B',
        '#006400',
        '#8B4513',
        '#2F4F4F',
    ];
    const backgroundColor =
        darkColors[Math.floor(Math.random() * darkColors.length)];

        console.log(getPointsResult());
  

    return (
        <li className={scss.transaction_item}>
            <div style={{ backgroundColor }} className={scss.logo_wrapper}>
                <FontAwesomeIcon className={scss.icon} icon={faApple} />
            </div>
            <div className={scss.details}>
                <div className={scss.nameWrapper}>
                    <h3 className={scss.name}>{transactionName}</h3>
                    <div className={scss.amount_wrapper}>
                    <p>{type === 'Payment' ? `+$${amount}` : `$${amount}`}</p>
                    <FontAwesomeIcon className={scss.arrow_icon} icon={faArrowRight} />
                    </div>
                </div>
                <p className={scss.description}>
                    {pending && <span>Pending - </span>}
                    {transactionDescription}
                </p>
                <p className={scss.date}>
                    {user && <span>{user} - </span>}  
                    {day ? day : date}
                </p>
            </div>
        </li>
    );
};

export default TransactionItem;
