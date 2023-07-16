import React from 'react';
import { Aside } from '../../componets/aside';
import { Users } from '../../componets/users';
import styles from "./home.module.scss";
import axios from 'axios';
import { getUsers } from '../../redux/slices/userSlices';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';


export const Home = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users);
    const { allUsers } = users;
    console.log("Эти данные приходят в первый компонент из редакса компонет HOME >>>>", allUsers)
    React.useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'
        axios.get(apiUrl).then((res) => {
            dispatch(getUsers(res.data));
        }).catch(function (error) {
            console.log(error);
        })
    }, [dispatch]);

    return (
        <div className={styles.item}>
            <Aside />
            <Users allUsers={allUsers} />
        </div>
    );
};
