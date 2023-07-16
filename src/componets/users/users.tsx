import { User } from "../user";
import styles from "./users.module.scss";

export const Users = () => {
    return (
        <div className={styles.users_inner}>
            <p className={styles.list_users}>Список пользователей</p>
            <User />
        </div>
    );
};

