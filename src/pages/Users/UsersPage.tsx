import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import axios from "axios";
import List from './../../components/List';
import UserItem from "./UserItem";
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './Users.module.scss'

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const history = useHistory();

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers () {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }


  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });


  return (
    <>
      <Helmet>
        <title>Users Page</title>
        <meta name="description" content="Users page, data from jsonplaceholder site"/>
      </Helmet>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Ascending by Name</option>
          <option value="desc">Descending by Name</option>
        </select>
      </form>


      <List
        items={sortedUsers}
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

