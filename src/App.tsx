import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UsersPage from "./pages/Users/UsersPage";
import UserItemPage from "./pages/User/UserItemPage";
import PostsPage from "./pages/Posts/PostsPage";
import PostPage from "./pages/Post/PostPage";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import AlbumPage from "./pages/Album/AlbumPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Users</NavLink>
                    <h2>Proxy-Seller React Test Task (frontend)</h2>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/users/:userId'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/posts/:userId'}>
                    <PostsPage/>
                </Route>
                <Route path={'/post/:postId'}>
                    <PostPage/>
                </Route>
                <Route path={'/albums/:userId'}>
                    <AlbumsPage/>
                </Route>
                <Route path={'/album/:albumId'}>
                    <AlbumPage/>
                </Route>
                <Route path={'/'} exact>
                    <UsersPage/>
                </Route>
            </div>
        </BrowserRouter>

    );
};

export default App;
