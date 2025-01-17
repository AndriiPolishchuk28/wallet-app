import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import scss from './TransactionDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TransactionDetail: FC = () => {
    const location = useLocation();
    const data = location.state;
    
    if (!data) {
        return null
    }
    const {
        amount,
        transactionName,
        transactionDescription,
        date,
        status,
        } = data;
    return (
        <div className={scss.wrapper}>
            <NavLink className={scss.link} to="/">
                <FontAwesomeIcon className={scss.icon} icon={faArrowLeft} />
            </NavLink>
            <h3 className={scss.amount}>${amount}</h3>
            <p className={scss.subtitle}>{transactionName}</p>
            <p className={scss.subtitle}>{date}</p>
            <div className={scss.info_wrapper}>
                <div className={scss.status_wrapper}>
                    <p>Status: {status}</p>
                    <p className={scss.subtitle}>{transactionDescription}</p>
                </div>
                <div className={scss.wrapper_price}>
                    <p>Total</p>
                    <p>${amount}</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionDetail;
