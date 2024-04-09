import React, { FC } from 'react';
import { IAlbum } from "../../types/types";
import styles from './AlbumItem.module.scss'
import { Link } from "react-router-dom";

interface AlbumItemProps {
  album: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = ({ album }) => {
  return (
    <div className={styles.album}>
      <span>
        <span>User ID: {album.userId}</span>
        <br/>
        <span>album ID: {album.id}</span>
      </span>
      <h3>{album.title}</h3>
      <Link to={`/album/${album.id}`}>Open Album</Link>
    </div>
  );
};

export default AlbumItem;
