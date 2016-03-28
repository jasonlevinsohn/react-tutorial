import React from 'react';
import ReactDom from 'react-dom';

// Named Imports from ES6 - { Router } says
// get me react-router, but I only want the
// Router Object of that module.
import { Router } from 'react-router';
import routes from './config/routes';

ReactDom.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)