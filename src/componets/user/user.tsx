import styles from "./user.module.scss";

export const User = () => {
    return (
        <div className={styles.user_inner}>
            <p><span className={styles.user_span}>ФИО:</span> Иванов И.И.</p>
            <p><span className={styles.user_span}>Город:</span> Воркута</p>
            <div className={styles.user_innerBottom}>
                <p><span className={styles.user_span}>Компания:</span> Теле2</p>
                <p><a href="#">Подробнее</a></p>
            </div>
        </div>
    );
};

