import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UsersPage from "./pages/Users/UsersPage";
import PostsPage from "./pages/Posts/PostsPage";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import UserItemPage from "./pages/User/UserItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Users</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/posts/:userId'}>
                    <PostsPage/>
                </Route>
                <Route path={'/albums/:userId'}>
                    <AlbumsPage/>
                </Route>
                <Route path={'/'} exact>
                    <UsersPage/>
                </Route>
            </div>
        </BrowserRouter>

    );
};

export default App;
