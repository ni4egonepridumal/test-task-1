import styles from "./user.module.scss";
import { IUser } from "../../types";
import { Link } from "react-router-dom";

interface IUserFromProps {
    user: IUser
}

export const User = ({ user }: IUserFromProps) => {
    return (
        <div className={styles.user_inner}>
            <p><span className={styles.user_span}>ФИО:</span> {user.name}</p>
            <p><span className={styles.user_span}>Город:</span> {user.address.city}</p>
            <div className={styles.user_innerBottom}>
                <p><span className={styles.user_span}>Компания:</span> {user.company.name}</p>
                <p><Link to='/aboutUser'>Подробнее</Link></p>
            </div>
        </div>
    );
};

