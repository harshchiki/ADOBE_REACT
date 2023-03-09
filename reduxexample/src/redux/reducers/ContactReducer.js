import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from '../ActionTypes';
// useReducer passes initalState, state = [] is the initialState

const ContactReducer = (state = [], action) => {
    switch(action.type) {
    case CREATE_NEW_CONTACT:
       // state.push(action.payload); // no --> don't work on reference
        return [
            ...state,
            {...action.payload}
        ];
     case REMOVE_CONTACT:
        return state.filter(contact => contact.email !== action.payload);
     default:
        return state;
    }
}

export default ContactReducer;
