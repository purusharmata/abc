//PAGE FOR DISPLAY OF THE FLATLIST WHICH IS SCROLLABLE

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import HeaderFunc from '../AuthScreen/HeaderFunc'
import Header1 from '../Common1/Header1'

import { useNavigation } from '@react-navigation/native';

const User = () => {

    const navigation = useNavigation();


    //START:THE JSON DATA OF ALL THE PERSON THAT ARE TO BE DISPLAYED IN THE LIST
    const List = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        },
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ];
    //END:THE JSON DATA OF ALL THE PERSON THAT ARE TO BE DISPLAYED IN THE LIST

    return (
        <View style={{ flex: 1 }}>
            <Header1 name="Users" />
            <FlatList data={List} renderItem={
                ({ item }) => {
                    return (
                        <View>

                            <TouchableOpacity style={styles.view}
                                onPress={() => {
                                    navigation.navigate('User', {
                                        avatar: item.avatar,
                                        email: item.email,
                                        first_name: item.first_name,
                                        last_name: item.last_name,

                                    });
                                }} >
                                <Image source={{ uri: item.avatar }} style={styles.avtar} />
                                <View style={styles.vew}>
                                    <Text style={styles.text}>{item.first_name} {item.last_name}</Text>
                                    <Text>{item.email}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }
            }
            />
        </View>
    );
}
//THE SHEET FOR STLING
const styles = StyleSheet.create({
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    view: {
        flexDirection: "row",
        padding: 10,
    },
    vew: {
        flexDirection: "column",
        padding: 15,
        margin: 15
    },
    text: {
        color: "#5A20CB",
        fontSize: 16
    }
});

export default User;