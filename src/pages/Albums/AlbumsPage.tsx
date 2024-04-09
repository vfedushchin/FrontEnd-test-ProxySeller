import React, {FC, useEffect, useState, useCallback} from 'react';
import {IAlbum} from '../../types/types';
import axios from "axios";
import List from './../../components/List';
import AlbumItem from "./AlbumItem";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface AlbumsItemPageParams {
    userId: string;
}

const AlbumsPage:FC = () => {
    const [posts, setPosts] = useState<IAlbum[]>([])
    const params = useParams<AlbumsItemPageParams>()

    const fetchAlbums = useCallback(async () => {
        try {
            const response = await axios.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums?userId=' + params.userId)
            setPosts(response.data)
        } catch (e) {
            alert(e)
        }
    }, [params.userId]);

    useEffect(() => {
        fetchAlbums()
    }, [fetchAlbums])



    return (
      <>
        <Helmet>
            <title>Albums Page</title>
            <meta name="description" content="Albums page, data from jsonplaceholder site" />
        </Helmet>
        <List
            items={posts}
            renderItem={(album: IAlbum) =>
                <AlbumItem
                    album={album}
                    key={album.id}
                />}

        />
      </>
    );
};

export default AlbumsPage;
