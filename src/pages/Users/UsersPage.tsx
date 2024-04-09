import React, {FC, useEffect, useState} from 'react';
import {IUser} from '../../types/types';
import axios from "axios";
import List from './../../components/List';
import UserItem from "./UserItem";
import {useHistory} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory();

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
      <>
        <Helmet>
            <title>Users Page</title>
            <meta name="description" content="Users page, data from jsonplaceholder site" />
        </Helmet>
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem
                    onClick={(user) => history.push('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}

        />
      </>
    );
};

export default UsersPage;
