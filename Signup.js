//START:THE SIGN UP PAGE

import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, marginTop, View, Image, TextInput, onChangeText, text, Button, Modal, Pressable, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function Signup(props) {
  const navigation = useNavigation();
  //START:DECLARATION
  const [textemail, setemail] = useState('purub56@gmail.com')
  const [textname, setname] = useState('puru')
  const [textmobile, setmobile] = useState('8449537724')
  const [textpass, setpass] = useState('aA@1')
  const [textconfpass, setconfpass] = useState('aA@1')



  //START:FUNCTION FOR THE FORM VALIDATION

  function validateForm() {

    // const emailReg = new RegExp();
    // const passReg = new RegExp();
    // const passRegconf = new RegExp();
    // const textmobileReg = new RegExp();
    // const textReg = new RegExp("^[a-zA-Z\\s]*$");
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    const passRegconf = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    const textReg = new RegExp("^[a-zA-Z\\s]*$");
    const textmobileReg = new RegExp("^[1-9]{1}[0-9]{9}$");
    if (!(textemail && textname && textmobile && textpass && textconfpass)) {
      alert("Fields should not be left empty!")
    }
    else if (emailReg.test(textemail) === false) {
      alert("Email Invalid!")
      return false;
    }

    else if (textReg.test(textname) === false) {
      alert("name Invalid!")
      return false;
    }
    else if (passReg.test(textpass) === false) {
      alert("Password wrong!")
      return false;
    }


    else if ((textpass) != (textconfpass)) {
      alert("Passwords do not match.");
      return false;
    }

    else if (textmobileReg.test(textmobile) === false) {
      alert("wrong number!")
      return false;
    }


    else {

      saveValueFunction();

      setModalVisible(true);

    }
  }

  //FUNCTION FOR THE NAVIGATION

  const PressMe = () => navigation.navigate('MyDrawer', { screen: 'Home', params: { textemail, textpass, textmobile, textname } });

  //FUNCTION FOR SAVING THE VALUE IN THE ASYNC STORAGE

  const saveValueFunction = async () => {
    let obj = {
      textemail, textname, textmobile, textpass
    }
    try {
      await AsyncStorage.setItem('user', JSON.stringify(obj))

    } catch (e) {

    }

  }

  // FOR DISPLAY OF MODAL
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png', }
          } style={{ width: 100, height: 100, borderRadius: 100, marginTop: 15, alignContent: 'center', justifyContent: 'center', }}
          />
        </View>

        <View style={{
          flexDirection: 'column', alignItems: 'center', padding: 10, marginTop: 15,
          marginHorizontal: 30, backgroundColor: "#FFFDD0", borderRadius: 20
        }}>


          <TextInput

            style={styles.input}
            onChangeText={(textemail) => setemail(textemail)}

            value={textemail}

            keyboardType={'email-address'}

            placeholder={"Email"}
          />

          <TextInput
            style={styles.input}
            onChangeText={(textname) => { setname(textname) }}
            value={textname}

            placeholder={"Enter Name"}
            keyboardType="default"
          />

          <TextInput

            style={styles.input}

            onChangeText={(textmobile) => { setmobile(textmobile) }}
            value={textmobile}

            keyboardType={'number-pad'}

            placeholder={"Enter Mobile number"}

          />
          <TextInput

            style={styles.input}

            onChangeText={(textpass) => { setpass(textpass) }}
            value={textpass}

            placeholder={"password"}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}

            onChangeText={(textconfpass) => { setconfpass(textconfpass) }}
            value={textconfpass}

            placeholder={" Confirm Password"}

            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button1}

          >
            <Pressable

              onPress={() => { validateForm() }}
            >
              <Text style={styles.textStyle}>Signup</Text>
            </Pressable>


            <Text style={styles.val}>

            </Text>

          </TouchableOpacity>

          {/* THE MODAL POP UP STARTS HERE*/}

          <View style={styles.centeredView}>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
            >


              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Congratulations! </Text>
                  <Text style={styles.modalText}>Signed up succesfully </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible) || PressMe()}
                  >
                    <Text style={styles.textStyle}>OK!</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

          </View>


          {/* MODAL POPUP ENDS HERE */}

        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity >
            <Text onPress={() => navigation.navigate('Login')} style={styles.textLabel1} >LogIn</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    </View>
  );
}

//THE STYLING PAGE STARTS HERE 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    margin: 10,
    fontFamily: "monospace",
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: "#0EB2BF",
    alignItems: 'center',

  }, button1: {
    alignItems: 'center',
    justifyContent: 'center',
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


  },
  textLabel: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "serif",

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  textLabel1: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 24,
    fontFamily: "serif",
    textDecorationLine: 'underline',

  },
  val:
  {
    fontFamily: "arial",
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'

  },
  centeredView: {
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22
  }
}
)

