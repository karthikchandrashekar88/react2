import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import Home from './components/home/home_component';
import About from './components/about/about_component';
import SearchApp from './components/search-app';

import Main from './components/common/main';
import NoMatch from './components/notFoundPage';

export default (
    <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/search" component={SearchApp}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NoMatch}/>
    </Route>
)