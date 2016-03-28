import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profiles';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        //IndexRoute is used for default route.
        <IndexRoute component={Home} />
    </Route>
)