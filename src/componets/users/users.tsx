
import styles from "./users.module.scss";
import { IUsers } from "../../types";
import { User } from "../user";

export const Users: React.FC<IUsers> = ({ allUsers }) => {

    return (
        <div className={styles.users_inner}>
            <p className={styles.list_users}>Список пользователей</p>
            {allUsers && allUsers.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

