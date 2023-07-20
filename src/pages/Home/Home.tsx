import React, { CSSProperties } from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import { Users } from '../../componets/users';
import axios from 'axios';
import { getUsers } from '../../redux/slices/userSlices';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';


export const Home = () => {
    const override: CSSProperties = {
        display: "block",
        marginLeft: "200px",
    };

    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.users);

    const { allUsers, loading } = users;

    React.useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'
        axios.get(apiUrl).then((res) => {
            dispatch(getUsers(res.data));
        }).catch(function (error) {
            console.log(error);
        })
    }, [dispatch]);

    return (
        <div>
            {loading ?
                <MoonLoader
                    color={"black"}
                    loading={loading}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                <Users allUsers={allUsers} />
            }

        </div>
    );
};
