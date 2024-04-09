import React, {FC} from 'react';
import {IAlbum} from "../../types/types";
import styles from './AlbumItem.module.scss'

interface AlbumItemProps {
    album: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = ({album}) => {
    return (
        <div className={styles.album}>
            <span>
              <span>User ID: {album.userId}</span>
              <br/>
              <span>album ID: {album.id}</span>
            </span>
            <h3>{album.title}</h3>
        </div>
    );
};

export default AlbumItem;
