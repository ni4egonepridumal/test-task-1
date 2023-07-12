import { Button } from "../button";
import styles from "./aside.module.scss";

export const Aside = () => {
    return (
        <div className={styles.item}>
            <p>Сортировка</p>
            <Button color="purple">по городу</Button>
            <Button color="purple">по компании</Button>
        </div>
    );
};

