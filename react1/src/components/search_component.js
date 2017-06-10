//import React from 'react';

//const SearchComponent = () =>{
//    return <input/>;
//}
//
//export default SearchComponent;

//export default class 

import React from 'react';
import {
    Component
} from 'react';

export default class SearchComponent
extends Component {

    constructor(props) {
        super(props);
        console.log('props :', props);
        this.state = {
            term: 'Amy Jackson'
        }
    }

    render() {
        return ( < div >
            <
            label htmlFor = "search" > Search < /label> <
            input id = "search"
            value = {
                this.state.term
            }
            onChange = {
                e => {
                console.log('e 123:',e);
                    this.onInputChange(e);
                }
            }
            />{this.state.term}</div > );
    }

    onInputChange(e) {
        //console.log('1234:',term);
        console.log(e.target.value);
        this.setState({
            term: e.target.value
        });
        //this.setState({term:e.target.value});
        this.props.onSearchTermChange(e.target.value);
    }

    componentWillMount() {
        //debugger;
        console.log('component will mount');
    };

}
