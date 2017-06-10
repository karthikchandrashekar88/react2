import React from 'react';
import SearchResultItem from './search_result_item';

const SearchResults = (props) => {
    console.log('props.results :',props.results);
    return(
    <ul className="media-list">
    {props.results.map((result) => {
        return ( <SearchResultItem item = {result} key = {result.etag}/>)
    })}
    </ul>
    )
}

export default SearchResults;