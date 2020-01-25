import {FETCH_CONTACTS_ERROR, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    contacts: {},
    loading: false,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                contacts: action.contacts
            };
        case FETCH_CONTACTS_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default contactsReducer;
