//import FirstComponent from './components/firstcomponent';
//import SearchApp from './components/search-app';
//import youtube from 'youtube-api-search';
//import React, {
//    Component
//} from 'react';
//import ReactDOM from 'react-dom';
//
//ReactDOM.render( <SearchApp/>,
//    document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import routes from './routes';

import Home from './components/home/home_component';
import About from './components/about/about_component';
import SearchApp from './components/search-app';

import Main from './components/common/main';
import NoMatch from './components/notFoundPage';

//export default (
//    <Route component={Main}>
//    <Route path="/" component={Home}/>
//    <Route path="/search" component={SearchApp}/>
//    <Route path="/about" component={About}/>
//    <Route path="*" component={NoMatch}/>
//    </Route>
//)

ReactDOM.render(
<Router history={browserHistory} routes={routes}/>,
document.querySelector('.container'));