import FirstComponent from './components/firstcomponent';
import SearchApp from './components/search-app';
import youtube from 'youtube-api-search';
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( <SearchApp/>,
    document.querySelector('.container'));
