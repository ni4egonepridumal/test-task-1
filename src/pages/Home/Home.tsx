import { Aside } from '../../componets/aside';
import { Users } from '../../componets/users';
import styles from "./home.module.scss";

export const Home = () => {
    return (
        <div className={styles.item}>
            <Aside />
            <Users />
        </div>
    );
};
