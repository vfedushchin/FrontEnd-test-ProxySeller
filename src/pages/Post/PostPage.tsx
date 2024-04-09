import React, { FC, useEffect, useState, useCallback } from 'react';
import { IAlbum } from "../../types/types";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

interface AlbumPageParams {
  postId: string;
}

const PostPage: FC = () => {

  const [album, setAlbum] = useState<IAlbum | null>(null)
  const params = useParams<AlbumPageParams>()
  const history = useHistory()

  const fetchPost = useCallback(async () => {
    try {
      const response = await axios.get<IAlbum>('https://jsonplaceholder.typicode.com/albums/' + params.postId)
      setAlbum(response.data)
    } catch (e) {
      alert(e)
    }
  }, [params.postId])


  useEffect(() => {
    fetchPost()
  }, [fetchPost])


  return (
    <>
      <Helmet>
        <title>Post Page</title>
        <meta name="description" content="Post page, data from jsonplaceholder site"/>
      </Helmet>
      <div>
        <button onClick={() => history.goBack()}>Back</button>
        <h4>Album page id: {album?.id}
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

export default PostPage;
