import React from 'react';
import {
    Component
} from 'react';
import SecondComponent from './secondcomponent';

export default class FirstComponent
extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return ( <
            div > < div > My First React Component <
            /div> <
            SecondComponent / >
            <
            /div >
            
        )
    }

    componentWillMount() {
        //debugger;
        console.log('component will mount');
    };

}
