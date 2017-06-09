import React from 'react';
import {
    Component
} from 'react';
import SearchComponent from './search_component';
import youtube from 'youtube-api-search';
import SearchResults from './search_results';
export default class SearchApp
extends Component {

    constructor(props) {
        super(props);
        console.log('props :', props);
        this.state = {
            term: 'xxxxxxx'
        }
    }

    searchYoutube(searchText) {
        console.log('searchText :', searchText);
        const API_KEY = 'AIzaSyBr90yD02iSaxOeg6SpZph8kMJYamxMihk';
        youtube({
            key: API_KEY,
            term: searchText
        }, data => {
            console.log('data :', data);
            this.setState({
                results: data
            });
        })
    }

    render() {
        console.log('this.state.results 12345 :',this.state.results);
        return ( <
            div >
//            <SearchResults results = {this.state.results}/>
            <
            SearchComponent onSearchTermChange = {
                this.searchYoutube
            }
            /> <
            /div >

        )
    }

}
