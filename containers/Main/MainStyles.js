import {StyleSheet} from 'react-native';

const MainStyles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        flex: 1
    },
    mainTitle: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 20,
    },
    allContacts: {

    },
    contact: {
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
    contactName: {
        fontSize: 20,
        paddingLeft: 20,
    },
    currentContact: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    currentContactName: {
        fontSize: 30,
    },
    contactInfo: {
        fontSize: 20,
        textDecorationLine: 'underline',
        marginBottom: 20,
    },

});

export default MainStyles;
