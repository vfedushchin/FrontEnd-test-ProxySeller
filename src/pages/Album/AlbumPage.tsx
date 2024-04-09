import React, { FC, useEffect, useState, useCallback } from 'react';
import { IAlbum } from "../../types/types";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

interface PostPageParams {
  albumId: string;
}

const AlbumPage: FC = () => {

  const [album, setAlbum] = useState<IAlbum | null>(null)
  const params = useParams<PostPageParams>()
  const history = useHistory()

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get<IAlbum>('https://jsonplaceholder.typicode.com/posts/' + params.albumId)
      setAlbum(response.data)
    } catch (e) {
      alert(e)
    }
  }, [params.albumId])


  useEffect(() => {
    fetchPost()
  }, [fetchPost])


  return (
    <>
      <Helmet>
        <title>Album Page</title>
        <meta name="description" content="Album page, data from jsonplaceholder site"/>
      </Helmet>
      <div>
        <button onClick={() => history.goBack()}>Back</button>
        <h4>Post page id: {album?.id}
          <br/>
          UserId: {album?.userId}
        </h4>
        <div>
          <h2>{album?.title} </h2>
          {album?.body}
        </div>
      </div>
    </>

  );
};

export default AlbumPage;
