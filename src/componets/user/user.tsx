import styles from "./user.module.scss";
import { IUser } from "../../types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { selectedUser } from "../../redux/slices/userSlices";

interface IUserFromProps {
    user: IUser
}

export const User = ({ user }: IUserFromProps) => {
    const dispatch = useAppDispatch()
    const selectedOneUser = () => {
        dispatch(selectedUser(user.id))
    }


    return (
        <div className={styles.user_inner}>
            <p><span className={styles.user_span}>ФИО:</span> {user.name}</p>
            <p><span className={styles.user_span}>Город:</span> {user.address.city}</p>
            <div className={styles.user_innerBottom}>
                <p><span className={styles.user_span}>Компания:</span> {user.company.name}</p>
                <p><Link to='/aboutUser' onClick={selectedOneUser}>Подробнее</Link></p>
            </div>
        </div>
    );
};

