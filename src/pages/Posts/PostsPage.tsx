import React, { FC, useEffect, useState, useCallback } from 'react';
import { IPost } from '../../types/types';
import axios from "axios";
import List from './../../components/List';
import PostItem from "./PostItem";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface UserItemPageParams {
  userId: string;
}

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const params = useParams<UserItemPageParams>()

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?userId=' + params.userId)
      setPosts(response.data)
    } catch (e) {
      alert(e)
    }
  }, [params.userId]);

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])


  return (
    <>
      <Helmet>
        <title>Posts Page</title>
        <meta name="description" content="Posts page, data from jsonplaceholder site"/>
      </Helmet>
      <List
        items={posts}
        renderItem={(post: IPost) =>
          <PostItem
            post={post}
            key={post.id}
          />}

      />
    </>
  );
};

export default PostsPage;
