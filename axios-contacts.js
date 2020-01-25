import axios from 'axios';

const axiosContacts = axios.create({
    baseURL: 'https://homework-a3501.firebaseio.com/mycontacts/'
});

export default axiosContacts;
