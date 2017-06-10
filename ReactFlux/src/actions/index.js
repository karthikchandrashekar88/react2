//Make Rest Calls or Ajax Calls
//Axios user promise API
import axios from 'axios';

const URL = 'https://www.google.com/youtube/v3/search';
const API_KEY = 'AIzaSyAvOH-hapA8Qqgsfc07DsSZkyrj1yEPnL4';

   searchYoutube=(searchText)=> {
        
        const params = {
            part : 'snippet',
            key : API_KEY,
            q : searchText,
            type : 'video'
        }

        //request is an object of type promise
        const request = axios.get(URL,{params});
        return {
            type : 'result',
            payload : request
        }
    }

    export default searchYoutube;