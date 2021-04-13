
import { useNavigation } from '@react-navigation/core';
import React, { useState, ReactElement, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, marginTop, Modal, View, Image, Pressable, Platform, PermissionsAndroid, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily, Touchable, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import HeaderFunc from '../Common1/Header1'

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function Profile() {

    //DISPLAY OF THE DATA STORED IN THE ASYNCSTORAGE
    const [isEditable, setIsEditable] = useState(false);
    const [email, setemail] = useState('')
    const [mob, setmob] = useState('')
    const [name, setname] = useState('')
    const [emailerr, setemailerr] = useState(false)
    const [nameerr, setnameerr] = useState(false)
    const [mobileerr, setmobileerr] = useState(false)
    const [filePath, setFilePath] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    // START:FOR UPDATING THE STATE IN THE ASYNC STORAGE 
    const updateState = () => {
        //Handler to enable of disable TextInput
        //Make TextInput Enable/Disable
        setIsEditable(!isEditable);
    };
    //ENDS

    //START:TO GET THE VALUES OF THE VALUES PASSSED 
    useEffect(() => {
        getValueFunction()
    }, [])
    const getValueFunction = async () => {
        try {
            let data = await AsyncStorage.getItem('user')
            let parsedData = JSON.parse(data);
            console.log(parsedData)
            setname(parsedData.textname)
            setemail(parsedData.textemail)
            setmob(parsedData.textmobile);
        }
        catch (error) {
            alert(error)
        }
    }
    //ENDS


    //FUNCTION FOR THE VALIDATION OF OUR DATA 
    function validateData() {

        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const textReg = new RegExp("^[a-zA-Z\\s]*$");
        const textmobileReg = new RegExp("^[1-9]{1}[0-9]{9}$");;

        if (!(email || name || mob)) {
            setemailerr(true);
            setnameerr(true);
            setmobileerr(true);
            return false;
        }
        else if (!email || (emailReg.test(email) == false)) {
            setemailerr(true);
            return false;
        }
        else if (emailReg.test(email) == true)
            setemailerr(false);


        if (!name || (textReg.test(name) == false)) {
            setnameerr(true);
            return false;

        }
        else if (textReg.test(name) == true)
            setnameerr(false);

        if (!mob || (textmobileReg.test(mob) == false)) {
            setmobileerr(true);
            return false;

        }
        else if (textmobileReg.test(mob) == true)
            setmobileerr(false);

        saveData();
    }

    //START:FUNCTION FOR THE SAVING OF NEW DATA IN THE ASYNC STORGAE
    const saveData = async () => {
        let obj = {
            email, name, mob
        }
        try {
            await AsyncStorage.setItem('saveduser', JSON.stringify(obj))


        } catch (e) {
            alert('failed to save')
        }
        displayData();
    }
    //ENDS

    //START:FUNCTION TO DISPLAY THE DATA IN THE ASYNC STORAGE
    const displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('saveduser');
            alert(user);
        }
        catch (error) {
            alert(error)
        }
    }
    //ENDS

    //
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    //

    //

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);
                setFilePath(response);
            });
        }
    };
    //
    //THE FUNCTION FOR SELECTING IMAGES
    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 340,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
        });
    };
    //ENDS


    return (


        <KeyboardAvoidingView behavior={'padding'}>
            <ImageBackground
                source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* START:THE COMMON HEADER CALL */}

                <HeaderFunc name="Profile" />

                {/* ENDS */}


                {/* START:VIEW FOR IMAGES AND EDIT PROFILE BUTTON  */}
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>

                    {/* <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}> */}
                    <View activeOpacity={0.5}  >
                        <Image source={{ uri: filePath.uri }
                        } style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 2, margin: 15, alignContent: 'flex-end', justifyContent: 'flex-end', borderColor: 'white' }}
                        />

                        {isEditable ? <TouchableOpacity onPress={() => setModalVisible(true)} style={{ position: 'absolute', bottom: 2, right: 15 }} >
                            <Icon name='camera' style={{ color: 'white', fontSize: 40 }} />
                        </TouchableOpacity> : null}
                    </View>
                    <TouchableOpacity onPress={updateState} style={styles.container} >
                        <Text style={styles.button1}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                {/* ENDS */}

                {/* START:VIEW AT THE CENTRE WHERE THE DATA IS SHOWN FOR PROFILE */}
                <View style={styles.centeredView} style={{
                    flexDirection: 'column', alignItems: 'center', padding: 10, marginTop: 15,
                    marginHorizontal: 30, backgroundColor: "#FFFDD0", borderRadius: 20
                }}>

                    <TextInput editable={isEditable} style={styles.input}
                        onChangeText={(email) => { setemail(email) }}>
                        {email}
                    </TextInput>
                    {emailerr && <Text style={{ color: 'red' }}>Either email is wrong or empty </Text>}

                    <TextInput style={styles.input} editable={isEditable}
                        onChangeText={(name) => { setname(name) }}>
                        {name}
                    </TextInput>
                    {nameerr && <Text style={{ color: 'red' }}>Either name is wrong or empty </Text>}

                    <TextInput editable={isEditable} style={styles.input}
                        onChangeText={(mob) => { setmob(mob) }}>
                        {mob}
                    </TextInput>
                    {mobileerr && <Text style={{ color: 'red' }}>Either mobile is wrong or empty </Text>}

                </View>

                {/* <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>  */}
                {/* <Image source={{ uri: 'https://reqres.in/img/faces/7-image.jpg', }
                } style={{ width: 100, height: 100, borderRadius: 100, margin: 15, alignContent: 'flex-end', justifyContent: 'flex-end', }}
                /> */}
                <View>
                    {isEditable ?
                        <View style={styles.lowerview}>
                            <TouchableOpacity onPress={() => validateData()} style={styles.container}>
                                <Text style={styles.button2}>Save</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { setIsEditable(!isEditable) }} style={styles.container}>
                                <Text style={styles.button2}>Cancel</Text>
                            </TouchableOpacity>
                        </View> : null}
                </View>

                {/* ENDS:VIEW AT THE CENTRE WHERE THE DATA IS SHOWN FOR PROFILE */}
                <View style={styles.centeredView4}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView3}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Upload your photo</Text>
                                <View style={styles.modalbuttons} >
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => captureImage('photo')}
                                    >



                                        <Text style={styles.textStyle}>Camera</Text>
                                    </Pressable>

                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => chooseFile('photo')}
                                    >
                                        <Text style={styles.textStyle}>Gallery </Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>
            </ImageBackground>
        </KeyboardAvoidingView>


    );
}

//THE STYLE SHEET STARTS

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'flex-start',
        padding: 10,
        position: 'relative',
        marginTop: 20
        //orderWidth:{3,
    },
    modalbuttons:
    {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    input: {
        //borderWidth:2,
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 5
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
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
        //flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        //marginTop: 100,
        // backgroundColor: 'red'
    },
    centeredView4: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        //height: 100
        // marginTop: 30,
        // backgroundColor: 'red'
    },
    centeredView1: {
        flex: 0.5,
        justifyContent: 'flex-start',
        //alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 150,
        borderRadius: 100

    },
    centeredView3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },

        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 22,
        textShadowRadius: 3,
        //textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    button1: {
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        height: 80,
        width: 150,
        //borderRadius: 10,
        padding: 10,
        fontSize: 23,
        //margin: 10,
        //backgroundColor: "#0EB2BF",
        fontFamily: 'sans-serif-medium',
        // fontWeight: 'underline',
        textShadowRadius: 3,
        //flexDirection: 'row',
        textDecorationLine: 'underline',
        color: 'white'
    },
    button2: {
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        height: 80,
        width: 150,
        padding: 10,
        marginTop: 20,
        fontSize: 23,
        fontFamily: 'sans-serif-medium',
        textShadowRadius: 3,
        textDecorationLine: 'underline',
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        color: 'white'

        // position: 'absolute',

    },
    lowerview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // flex: 1
    }
});


