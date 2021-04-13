//PAGE WHERE ALL THE DATA OF THE PERSON THAT HAS BEEN SELECTED FROM THE FLATLIST IS DISPLAYED

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import FlatList from '../Authscr/FlatList';
import Header1 from '../Common1/Header1';

//PASSING THE PARAMETRES

const User = ({ route }) => {
    const navigation = useNavigation();
    const { email, textpass } = route.params;
    const { first_name } = route.params;

    const { last_name } = route.params;
    const { avatar } = route.params;
    // const { textmobile, textname } = route.params;
    return (


        <ScrollView >
            <Header1 name="User" />
            <View style={styles.vew} style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: avatar }} style={styles.avtar} />
                <View style={styles.view}>
                    <Text style={styles.green1}>{(first_name)} {(last_name)}</Text>
                </View>
                <Text style={styles.email1}>{(email)}</Text>
            </View>
            <View style={styles.view1}>
                <Text style={styles.heading1}>
                    HEADING-1:
                </Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Text>
                <Text style={styles.heading1}>
                    HEADING-2:
                </Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Text>
                <Text style={styles.heading1}>
                    HEADING-3:
                </Text>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Text>

            </View>
        </ScrollView>

    );
}

//MAIN STYLE SHEET

const styles = StyleSheet.create({
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        margin: 5,
        marginTop: 10
    },
    view: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    },
    view1: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 20

    },
    vew: {
        flexDirection: "row",
        padding: 20,
        margin: 12
    },
    green1: {
        color: "green",
        fontSize: 24
    },
    email1: {
        color: "black",
        fontSize: 16
    },
    heading1: {
        fontSize: 20,
        color: "#a032a8"
    }
});
export default User;