import {combinedReducers} from 'redux';
const results=(state=[],action)=>{
    if(action.type === 'result'){
        //resolving the promise and extract the data
        return action.payload.data.items;
    }
    return state;
}

const stores = combinedReducers({results:results});

export default stores;