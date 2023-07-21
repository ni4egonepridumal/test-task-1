import { Button } from "../button";
import styles from "./aside.module.scss";
import { useAppDispatch } from "../../redux/store/hooks";
import { sortNameUser, sortCityUser } from "../../redux/slices/userSlices"

export const Aside = () => {
    const dispatch = useAppDispatch();
    const sortByName = () => {
        dispatch(sortNameUser());
    }
    const sortByCity = () => {
        dispatch(sortCityUser())
    }
    return (
        <div className={styles.item}>
            <p>Сортировка</p>
            <Button onClick={sortByName} color="purple">по имени</Button>
            <Button onClick={sortByCity} color="purple">по компании</Button>
        </div>
    );
};

