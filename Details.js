

import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';


import { StyleSheet, Text, View, Image, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily, Alert } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    const [textemail, setemail] = useState('')
    const [textpass, setpass] = useState('')

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>

            <View style={{ justifyContent: "center", alignItems: "center" }}>


                <Image source={{ uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png', }
                } style={{ width: 150, height: 150, borderRadius: 100, marginTop: 30 }}
                />
            </View>
            <View style={{
                flexDirection: "column", alignItems: "center", marginTop: 50,
                borderWidth: 0, margin: 25, backgroundColor: "#FFFDD0", borderRadius: 30, paddingVertical: '5%'
            }}>

                {/* <Text style={styles.textLabel}> USERNAME </Text> */}
                <TextInput
                    //value={a}
                    style={styles.input}

                    value={textemail}

                    placeholder="your email is:"
                    //onChangeText={(e) => validateEmail(e)}
                    onChangeText={(textemail) => {
                        setemail(textemail)
                    }}

                    your email is
                />

                {/* <View style={{flexDirection:"row", alignItems:"baseline", marginTop:"5%"}}> */}
                {/* <Text style={styles.textLabel}> PASSWORD </Text> */}
                <TextInput
                    style={styles.input}

                    placeholder="your password is:"
                    secureTextEntry={true}
                    onChangeText={(textpass) => {
                        setpass(textpass)
                    }}
                />

                {/* <TouchableOpacity style={styles.button1} >
 <Text  onPress={()=>navigation.navigate('Login')}  style={styles.textLabel}>Login</Text>
 </TouchableOpacity>
  */}

            </View>
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
                <TouchableOpacity >
                    <Text onPress={() => navigation.navigate('Signup')} style={styles.textLabel1} >SignUp</Text>
                </TouchableOpacity>
            </View>


            {/*  
 
 </ImageBackground> */}
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
        //backgroundColor:"#0EB2BF"
        //padding:20,

        // color:

    },
    textLabel1: {
        //flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
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






