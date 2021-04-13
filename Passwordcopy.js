
import { useNavigation } from '@react-navigation/core';
import React, { useState, ReactElement, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, SafeAreaView, marginTop, View, Image, Platform, PermissionsAndroid, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily, Touchable, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Header1 from '../Common1/Header1'

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { parse } from '@babel/core';
//CONST FOR DIMENSIONS
const { height, width } = Dimensions.get('window')

export default function Password() {

    //DISPLAY OF THE DATA STORED IN THE ASYNCSTORAGE
    const [isEditable, setIsEditable] = useState(true);

    const [filePath, setFilePath] = useState({});
    //CONST FOR DECLARATION 
    const [textpass1, setpass1] = useState('')
    const [textnewpass1, setnewpass1] = useState('')
    const [textconfnewpass1, setconfnewpass1] = useState('')
    //CCONST FOR ERROR DECLARATION
    const [textpassErr1, setpassErr1] = useState(false)
    const [textnewpassErr1, setnewpassErr1] = useState(false)
    const [textconfnewpassErr1, setconfnewpassErr1] = useState(false)

    //START:TO GET THE VALUES OF THE VALUES PASSSED 
    useEffect(() => {
        getValueFunction()
    }, [])
    const getValueFunction = async () => {
        try {
            let data = await AsyncStorage.getItem('user')
            let parsedData = JSON.parse(data);
            console.log(parsedData)
            setpass1(parsedData.textpass);
        }
        catch (error) {
            alert(error)
        }
    }
    //ENDS:TO GET THE VALUES OF THE VALUES PASSSED 


    //START:FUNCTION FOR THE VALIDATION OF OUR DATA 
    function validateData() {
        const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

        if (!textnewpass1 || (passReg.test(textnewpass1) == false)) {
            setnewpassErr1(true);
            return false;

        }
        if (textnewpass1 != textconfnewpass1) {
            setconfnewpassErr1(true);
            return;
        }
        saveData();

    }
    // END:FUNCTION FOR THE VALIDATION OF OUR DATA 


    //START:FUNCTION FOR THE SAVING OF NEW DATA IN THE ASYNC STORGAE
    const saveData = async () => {

        try {
            let data = await AsyncStorage.getItem('user')
            let parsedData = JSON.parse(data)
            parsedData.textpass = textnewpass1
            await AsyncStorage.setItem('user', JSON.stringify(parsedData))


        } catch (e) {
            alert('failed to save')
        }
        displayData();
    }
    //ENDS:FUNCTION FOR THE SAVING OF NEW DATA IN THE ASYNC STORGAE

    //START:FUNCTION TO DISPLAY THE DATA IN THE ASYNC STORAGE
    const displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            alert(user);
        }
        catch (error) {
            alert(error)
        }
    }
    //ENDS:FUNCTION TO DISPLAY THE DATA IN THE ASYNC STORAGE


    //THE FUNCTION FOR SELECTING IMAGES


    return (
        // START:THE BACKGROUND IMAGE FOR THE WHOLE SCREEN 
        <ImageBackground
            source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            {/* START:THE COMMON HEADER CALL */}

            <Header1 name="Password Update" />

            {/* ENDS:THE COMMON HEADER CALL  */}


            {/* START:VIEW AT THE CENTRE WHERE THE DATA IS SHOWN FOR PROFILE */}
            <View style={styles.centeredView}>
                {/* START: */}
                <TextInput placeholder={'old password'} editable={isEditable} style={styles.input}
                    onChangeText={(textpass1) => { setpass1(textpass1) }}>
                    {textpass1}
                </TextInput>
                {/* {textpassErr1 && <Text style={{ color: 'red' }}>Either email is wrong or empty </Text>} */}
                {/* END: */}

                {/* START: */}
                <TextInput placeholder={'new password'} style={styles.input} editable={isEditable}
                    onChangeText={(textnewpass1) => { setnewpass1(textnewpass1) }}>
                    {textnewpass1}
                </TextInput>
                {textnewpassErr1 && <Text style={{ color: 'red' }}>Either name is wrong or empty </Text>}
                {/* END:*/}

                {/* START: */}
                <TextInput placeholder={'confirm new password'} editable={isEditable} style={styles.input}
                    onChangeText={(textconfnewpass1) => { setconfnewpass1(textconfnewpass1) }}>
                    {textconfnewpass1}
                </TextInput>
                {/* {textconfnewpassErr1 && <Text style={{ color: 'red' }}>Either name is wrong or empty </Text>} */}
                {/* END */}

            </View>
            {/* /* END:VIEW AT THE CENTRE WHERE THE DATA IS SHOWN FOR PROFILE  */}


            <View>

                <View style={styles.lowerview}>
                    <TouchableOpacity onPress={() => validateData()} style={styles.container}>
                        <Text style={styles.button2}>Update password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        // END:THE BACKGROUND IMAGE FOR THE WHOLE SCREEN 

    );
}

//THE STYLE SHEET STARTS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10 / 812 * height,
        position: 'relative',
        marginTop: 20 / 812 * height
    },
    input: {
        width: "80%",
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        fontFamily: "monospace",
        color: 'black',
        backgroundColor: "#0EB2BF",
        margin: 10,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',


    },
    textLabel: {
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: 16,
        fontFamily: "serif",
    },
    textLabel1: {
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: 24,
        fontFamily: "serif",
        textDecorationLine: 'underline',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    centeredView: {

        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        margin: 0,
        position: 'relative',
        borderRadius: 30 / 812 * height,
        marginTop: 150 / 812 * height
    },
    centeredView1: {
        flex: 0.5,
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 150,
        borderRadius: 100 / 375 * width,

    },
    button1: {
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        height: 80,
        width: 150 / 375 * width,
        padding: 10 / 812 * height,
        fontSize: 23,
        fontFamily: 'sans-serif-medium',
        textShadowRadius: 3,
        textDecorationLine: 'underline',
        color: 'white'
    },
    button2: {
        height: 100 / 812 * height,
        width: 150 / 375 * width,
        padding: 10 / 812 * height,
        marginTop: 20 / 812 * height,
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        textShadowRadius: 3,
        textDecorationLine: 'underline',
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        color: 'white',
    },
    lowerview: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


