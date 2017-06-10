import React from 'react';
import {
    Component
} from 'react';
import SearchComponent from './search_component';
import SearchResults from './search_results';
import {
    connect
} from 'react-redux';
import searchActions from '../actions/index';
import {
    bindActionCreators
} from 'redux';

class SearchApp
extends Component {

    constructor(props) {
        super(props);
        console.log('props :', props);
        this.state = {
            selectedVideo: null
        }
    }

    searchYoutube = (searchText) => {
        this.props.searchActions(searchText);
    }

    componentDidMount() {
        this.searchYoutube('jon snow');
    }

    onVideoSelect(selectedVideo) {
        this.setState(selectedVideo);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedVideo: nextProps.selectedVideo
        });
    }

    render() {
        console.log('this.state.results 12345 :', this.state.results);
        return ( < div >
            <
            SearchComponent onSearchTermChange = {
                this.searchYoutube
            }
            />   <
            SearchResults results = {
                this.props.results
            }
            onVideoSelect = {
                (selectedVideo) => this.onVideoSelect(selectedVideo)
            }
            />   </div >
        )
    }

}

//map the state as props to flux
var mapStateToProps = (state) => {
    return {
        results: state.results,
        selectedVideo: state.results[0]
    }
}

//Bind the action from reactview to action creators
var mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchActions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchApp);