
import { useNavigation } from '@react-navigation/core';
import React, { useState, ReactElement, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, marginTop, View, Image, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import { color } from 'react-native-reanimated';
import Header1 from '../Common1/Header1';
import AsyncStorage from '@react-native-community/async-storage'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//CONST FOR DIMENSIONS
const { height, width } = Dimensions.get('window')



export default function Login() {
  const navigation = useNavigation();
  const [textemail, setemail] = useState('')
  const [textpass, setpass] = useState('')
  const [textemailErr, setemailErr] = useState(false)
  const [textpassErr, setpassErr] = useState(false)
  const [parseEmail, setparseEmail] = useState('')
  const [parsePass, setparsePass] = useState('')


  useEffect(() => {
    getvalue()
  }, [])
  const getvalue = async () => {
    try {
      let data = await AsyncStorage.getItem('user')
      let parsedData = JSON.parse(data);
      console.log(parsedData.textemail);
      console.log(parsedData.textpass);
      setparseEmail(parsedData.textemail);
      setparsePass(parsedData.textpass)

    }
    catch (error) {
      alert(error)
    }
  }


  //function for validation starts
  function validateData() {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
 

    if (!(textemail || textpass)) {
      setemailErr(true)
      setpassErr(true)
      return false
    }
    else if (!textemail || emailReg.test(textemail) == false) {
      setemailErr(true)
      return false

    } else if (textemail != parseEmail) {
      setemailErr(true)
      return false

    }

    else if (textemail || emailReg.test(textemail) == true && parseEmail == textemail) {
      setemailErr(false)
    }

    if (!textpass || passReg.test(textpass) == false) {
      setpassErr(true)
      return false
   
    } else if (textpass != parsePass) {
      setpassErr(true)
      return false

    }
    else if (textpass || passReg.test(textpass) == true && parsePass == textpass) {
      setpassErr(false)
    }

    //alert("Email and password didn't matched");

    alert("login successfull");

  }
  //function for validation ends

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
        style={{
          flex: 1
        }}
      >
        <View style={{ marginBottom: hp('2%') }}>
          {/* call for common header */}
          <Header1 name="Login" />
        </View>

        {/* the main screen starts */}
        {/* <View style={styles.responsiveBox1}> */}


        <Image style={styles.Imagedesign} source={{ uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png', }
        }
        />
        {/* </View> */}

        <View style={styles.responsiveBox2}>


          <TextInput
            style={styles.input}
            value={textemail}

            placeholder="Email"
            onChangeText={(textemail) => {
              setemail(textemail)
            }}


          />
          {textemailErr && <Text style={{ color: 'red' }}> Wrong email </Text>}
          <TextInput
            style={styles.input}

            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(textpass) => {
              setpass(textpass)
            }}
          />

          {textpassErr && <Text style={{ color: 'red' }}> Wrong password </Text>}

          <TouchableOpacity style={styles.button1} onPress={() => { validateData() }}>

            <Text style={styles.textLabel}>Login</Text>
          </TouchableOpacity>


        </View >

        <TouchableOpacity style={styles.button2}  >
          <Text onPress={() => navigation.navigate('Signup')} style={styles.textLabel1} >SignUp</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

//sheet styling starts
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Imagedesign: {
   
    height: hp('30%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    borderRadius: hp('40%'),


  },
  responsiveBox2: {
   // width: wp('90%'),
    height: hp('30%'),
    margin: wp('5%'),
    //borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginTop: hp('6%'),
    borderRadius: wp('5%'),
    backgroundColor: '#fffDD0'
  },
  responsiveBox3: {
    width: wp('30%'),
    height: hp('30%'),
    marginLeft: wp('5%'),
    //borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginTop: hp('6%'),
    borderRadius: wp('5%'),
    //backgroundColor: '#fffDD0'
  },
  input: {
    width: wp('75%'),
   // height:hp('30%'),
    borderRadius: wp('2%'),
    // padding: wp('2%'),
    fontSize: wp('7%'),
    fontFamily: "monospace",
    color: 'black',
    backgroundColor: "#0EB2BF",
    margin: hp('3%'),
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',


  },
  textLabel: {

    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: wp('6%'),
    //fontFamily: "serif",
    fontFamily: "monospace",
    // margin: wp('1%'),
  },
  textLabel1: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: wp('6%'),
    fontFamily: "monospace",
    textDecorationLine: 'underline',
  },
  button1: {
    width: wp('30%'),
    borderRadius: 10,
    padding: wp('2%'),
    fontSize: hp('4%'),
    //fontFamily: "monospace",
    color: 'black',
    backgroundColor: "#6203fc",
    margin: wp('5%'),
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  button2: {
    //width: wp('30%'),
    //borderRadius: 10,
    padding: wp('2%'),
    //fontSize: hp('4%'),
    //fontFamily: "monospace",
    //color: 'black',
    //backgroundColor: "red",
    marginTop: wp('5%'),
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
});




