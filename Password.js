import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, marginTop, View, Image, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import { color } from 'react-native-reanimated';
import HeaderFunc from '../Common1/Header1'
import AsyncStorage from '@react-native-community/async-storage'


export default function ChangePassword() {


    const navigation = useNavigation();



    const [parsepass, setparsepass] = useState('')
    const [pass, setpass] = useState('')
    const [newpass, setnewpass] = useState('')
    const [confpass, setconfpass] = useState('')

    const [textpassErr, setpassErr] = useState(false)
    const [textnewpassErr, setnewpassErr] = useState(false)
    const [textconfpassErr, setconfpassErr] = useState(false)


    const Setvalue = async () => {
        try {
            let data = await AsyncStorage.getItem('user');
            let parsevalue = JSON.parse(data);
            parsevalue.textpass = newpass;
            console.log(parsevalue);
            await AsyncStorage.setItem('user', JSON.stringify(parsevalue));
            console.log("saved sucessfully")

        }
        catch (e) {
            console.log(e);
        }

    }


    useEffect(() => {
        getValueFunction()
    }, [])
    const getValueFunction = async () => {
        try {
            let data = await AsyncStorage.getItem('user')

            let parsedData = JSON.parse(data);
            console.log(parsedData.textpass)
            setparsepass(parsedData.textpass)

        }
        catch (error) {
            alert(error)
        }

    }

    function validateData() {

        const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

        if (!(pass || confpass || newpass)) {
            setnewpassErr(true);
            setconfpassErr(true);
            setpassErr(true);
            return false;
        }
        else if (!pass || (passReg.test(pass) == false)) {
            setpassErr(true);
            return false;
        }
        else if (passReg.test(pass) == true && (pass != parsepass)) {
            setpassErr(true);
            return false;
        }
        else if (passReg.test(pass) == true && (pass == parsepass))
            setpassErr(false);


        if (!newpass || passReg.test(newpass) == false) {
            setnewpassErr(true);
            return false;
        }
        else if (passReg.test(newpass) == true)
            setnewpassErr(false);

        if (!confpass || passReg.test(confpass) == false) {
            setconfpassErr(true);
            return false;
        }
        else if (newpass != confpass) {
            setconfpassErr(true)
            return false;
        }


        else if (!confpass || passReg.test(confpass) == true) {
            setconfpassErr(false);

        }
        Setvalue();
        alert("success");
        return true;

    }





    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>

            <ImageBackground
                source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <HeaderFunc name="Change Password" />


                <View style={{ justifyContent: "center", alignItems: "center" }}>


                    <Image source={{ uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png', }
                    } style={{ width: 100, height: 100, borderRadius: 100, marginTop: 30 }}
                    />
                </View>
                <View style={{
                    flexDirection: "column", alignItems: "center", marginTop: 30,
                    borderWidth: 0, margin: 25, backgroundColor: "white", borderRadius: 30, paddingVertical: '5%'
                }}>


                    {/* <Text style={styles.textLabel}> USERNAME </Text> */}
                    <TextInput
                        //value={a}
                        style={styles.input}


                        placeholder="Old Password"
                        onChangeText={(pass) => {
                            setpass(pass)
                        }}


                    />

                    {textpassErr && <Text style={{ color: 'red' }}>Either Old Password is wrong or empty </Text>}

                    {/* <View style={{flexDirection:"row", alignItems:"baseline", marginTop:"5%"}}> */}
                    {/* <Text style={styles.textLabel}> PASSWORD </Text> */}
                    <TextInput
                        style={styles.input}

                        placeholder="New Password"
                        secureTextEntry={true}
                        onChangeText={(newpass) => {
                            setnewpass(newpass)
                        }}
                    />

                    {textnewpassErr && <Text style={{ color: 'red' }}> Either new password is Wrong or empty </Text>}
                    <TextInput
                        style={styles.input}

                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={(confpass) => {
                            setconfpass(confpass)
                        }}
                    />
                    {textconfpassErr && <Text style={{ color: 'red' }}> Either confirm password is Wrong or empty </Text>}
                    <TouchableOpacity style={styles.button1} onPress={() => {
                        validateData()
                    }}>

                        <Text style={styles.textLabel}>Update Password</Text>
                    </TouchableOpacity>


                </View>





            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
        //fontSize:'12',
        //orderWidth:{3,
    },
    input: {
        //borderWidth:2,
        width: "80%",
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        fontFamily: "monospace",
        color: 'black',
        backgroundColor: "#0EB2BF",
        margin: 10,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',


    },
    textLabel: {
        //flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: 16,
        fontFamily: "serif",
        height: 50
        //backgroundColor:"#0EB2BF"
        //padding:20,

        // color:

    },
    textLabel1: {
        //flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: 24,
        fontFamily: "serif",
        textDecorationLine: 'underline',

        //backgroundColor:"#0EB2BF"
        //padding:20,

        // color:

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        //padding:10

    },
    button1: {

        //width:"50%",
        alignItems: 'center',
        justifyContent: 'center',
        //marginle,
        height: 50,
        width: 150,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        margin: 10,
        backgroundColor: "#6f43f8",
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        flexDirection: 'row',
        //marginTop:15
        //flex:1


    },


});


