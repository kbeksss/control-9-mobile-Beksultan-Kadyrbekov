import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, Modal, Button } from 'react-native';
import MainStyles from "./MainStyles";
import {connect} from "react-redux";
import {fetchContacts} from "../../store/actions/contactsActions";
const tempData = {
    first: {
        name: 'name',
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3mM-wxDdA1KmBUc5oaJMUzM6Ohg5nnhM7VXdHMh3xOaeuyeuUQ&s"
    }
};

const Main = props => {
    const [modal, toggleModal] = useState(false);
    const [currentContact, setCurrentContact] = useState({});
    const openModal = (con) => {
        setCurrentContact(props.contacts[con]);
        toggleModal(true);

    };
    useEffect(() => {
        props.getContacts();
    }, []);
    return (
        <View style={MainStyles.mainContainer}>
            <Text style={MainStyles.mainTitle}>My contacts</Text>
            <ScrollView style={MainStyles.allContacts}>
                {!props.loading ? Object.keys(props.contacts).map(con => (
                    <TouchableOpacity style={MainStyles.contact} onPress={() => openModal(con)}>
                        <Image style={{width: 50, height: 50}} source={{uri: props.contacts[con].photo}}/>
                        <Text style={MainStyles.contactName}>{props.contacts[con].name}</Text>
                    </TouchableOpacity>
                )) : <ActivityIndicator size="large" color="#0000ff" />}
            </ScrollView>
            <Modal
                styles={{flex: 1}}
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22, flex: 1}}>
                    <View style={MainStyles.currentContact}>
                        <Text style={MainStyles.currentContactName}>{currentContact.name}</Text>
                        <Image style={{width: 'auto', height: 200}} source={{uri: currentContact.photo}}/>
                        <Text style={MainStyles.contactInfo}>{currentContact.phoneNum}</Text>
                        <Text style={MainStyles.contactInfo}>{currentContact.email}</Text>
                        <Button styles={MainStyles.btn} onPress={() => toggleModal(false)} title='Back to list'/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const mapStateToProps = state => ({
    contacts: state.contacts,
    loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);
