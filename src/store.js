import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const defaultMessage = {
    id: 1,
    user: "Ryan",
    text: "Hello Mars"
};

const initialState = { messages: [defaultMessage], cabbages: []};

const BASE_URL = "http://localhost:3001";

const messagesFetched = messages => ({
    type: "MESSAGES_FETCHED",
    messages: messages
});

const messageAdded = message => ({
    type: "MESSAGE_ADDED",
    message: message
});

export const fetchMessages = () => {
    return dispatch => {
        axios.get(`${BASE_URL}/messages`)
        .then(response=> {
            dispatch(messagesFetched(response.data));
        });
    };
};

export const sendMessage = message => {
    return dispatch => {
      axios
        .post(`${BASE_URL}/messages`, {
          text: message.text,
          user: message.user
        })
        .then(response => {
          dispatch(messageAdded(response.data));
        });
    };
  };

const reducer = (state=initialState, action)=>{
    console.log(action);
    
    let newState = {};
    switch(action.type){
        case "MESSAGES_FETCHED":
            newState = { ...state, messages: action.messages };
            break;
        case "MESSAGE_ADDED":
            newState = { ...state, messages: state.messages.concat(action.message) };
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

export default createStore(reducer, applyMiddleware(thunk));