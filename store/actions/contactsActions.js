import {
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
} from "./actionTypes";
import axiosContacts from "../../axios-contacts";

const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});
const fetchContactsError = () => ({type: FETCH_CONTACTS_ERROR});

export const fetchContacts = () => {
    return async dispatch => {
        dispatch(fetchContactsRequest());
        try {
            const response = await axiosContacts.get('contacts.json');
            dispatch(fetchContactsSuccess(response.data));
        } catch (e) {
            console.error('Error while getting contacts', e);
            dispatch(fetchContactsError());
        }
    }
};
