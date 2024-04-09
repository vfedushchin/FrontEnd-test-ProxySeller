import React, { FC } from 'react';
import { IUser } from "../../types/types";
import { Link } from 'react-router-dom';
import styles from './Users.module.scss'

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div className={styles.user}>
      {user.id}. <strong>{user.name}</strong> lives in city {user.address.city} on {user.address.street} Street
      <br/>
      <Link to={`/posts/${user.id}`}>Posts</Link>
      {' | '}
      <Link to={`/albums/${user.id}`}>Albums</Link>
      <br/>
      <button onClick={() => onClick(user)}>User</button>
    </div>
  );
};

export default UserItem;
