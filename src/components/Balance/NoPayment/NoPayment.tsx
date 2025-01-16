import {FC} from 'react';
import scss from './NoPayment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const NoPayment:FC = () => {
    return (
        <div className={scss.wrapper}>
            <div>
            <p>No Payment Due</p>
            <p className={scss.text_balance}>You've paid your balance</p>
            </div>
            <div className={scss.icon}>
            <FontAwesomeIcon icon={faCheck} />
            </div>
        </div>
    );
};

export default NoPayment;