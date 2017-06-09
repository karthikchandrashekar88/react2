import React from 'react';
import SearchResultItem from './search_result_item';

const SearchResults = (props) => {
    console.log('props.results :',props.results);
    props.results.map((result) => {
        return ( <
            SearchResultItem item = {
                result
            }
            key = {
                result.etag
            }
            />
        )
    });
    return ( <
        ul className = "col-md4 list-group" > {
            resultItems
        } < /ul>
    );
}

export default SearchResultItem;