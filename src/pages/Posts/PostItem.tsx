import React, { FC } from 'react';
import { IPost } from "../../types/types";
import styles from './PostItem.module.scss'

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <span>
        <span>User ID: {post.userId}</span>
        <br/>
        <span>Post ID: {post.id}</span>
      </span>
      <h3>{post.title}</h3>
      {post.body}
    </div>
  );
};

export default PostItem;
