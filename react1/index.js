//import FirstComponent from './components/firstcomponent';
//import SearchApp from './components/search-app';
//import youtube from 'youtube-api-search';
import React from 'react';
import ReactDOM from 'react-dom';


import {Router,browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
<Router history={browserHistory} routes={routes}/>
document.querySelector('.container'))