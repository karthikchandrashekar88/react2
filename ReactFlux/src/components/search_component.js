import React from 'react';
import {Component} from 'react';

export default class SearchComponent
extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {
        return ( < div className ="btn-group">
            <label htmlFor = "search" > Search 
            </label> 
            <input id = "search" ref="search"/>

            <button class="btn" onClick={(event)=>this.props.onSearchTermChange(this.refs.search.value)}>Search</button>
            </div > 
            );
    }
}