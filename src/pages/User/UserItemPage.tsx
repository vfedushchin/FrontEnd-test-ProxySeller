import React, { FC, useEffect, useState, useCallback } from 'react';
import { IUser } from "../../types/types";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
  userId: string;
}

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const history = useHistory()

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.userId)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }, [params.userId])


  useEffect(() => {
    fetchUser()
  }, [fetchUser])


  return (
    <div>
      <button onClick={() => history.push('/users')}>Back</button>
      <h1>User page: {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
