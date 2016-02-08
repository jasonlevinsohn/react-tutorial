var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profiles');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        //IndexRoute is used for default route.
        <IndexRoute component={Home} />
    </Route>
)