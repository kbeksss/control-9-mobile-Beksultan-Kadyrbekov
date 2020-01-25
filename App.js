import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./containers/Main/Main";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import contactsReducer from "./store/reducers/contactsReducer";
import {Provider} from "react-redux";

const store = createStore(
    contactsReducer,
    applyMiddleware(thunk)
);
export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Main/>
            </View>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
});
