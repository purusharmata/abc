import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, marginTop, View, Image, TextInput, onChangeText, text, Button, Modal, Pressable, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function Signup(props) {
  const navigation = useNavigation();

  const [textemail, setemail] = useState('')
  const [textname, setname] = useState('')
  const [textmobile, setmobile] = useState('')
  const [textpass, setpass] = useState('')
  const [textconfpass, setconfpass] = useState('')




  function validateForm() {
    // const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailReg = new RegExp();
    const passReg = new RegExp();
    const passRegconf = new RegExp();
    const textmobileReg = new RegExp();
    // const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    // const passRegconf = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    const textReg = new RegExp("^[a-zA-Z\\s]*$");
    //const textmobileReg = new RegExp("^[1-9]{1}[0-9]{9}$");
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

    // else if (passRegconf.test(textconfpass) === false) {
    //   alert("Password wrong!")
    //   return false;
    // }
    // else if (passReg != passRegconf)){
    //   alert("passwords don't match")
    //   return false;
    // }


    else if (textmobileReg.test(textmobile) === false) {
      alert("wrong number!")
      return false;
    }


    // if (input["password"] != input["confirm_password"]) {

    //   isValid = false;

    //   errors["password"] = "Passwords don't match.";

    // }
    else {

      saveValueFunction();

      setModalVisible(true);

    }
  }

  // useEffect(() => {
  //   console.log('props')
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(textemail) === false) {
  //     setsetError(true)
  //   }
  //   else {
  //     setsetError(false)
  //   }
  // }, [textemail])

  // const validate = (text) => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //     setemail({ email: text })
  //     return false;
  //   }
  //   else {
  //     this.setState({ email: text })
  //     console.log("Email is Correct");
  //   }
  // }
  const PressMe = () => navigation.navigate('MyDrawer', { screen: 'Home', params: { textemail, textpass, textmobile, textname } });

  const saveValueFunction = async () => {
    let obj = {
      textemail, textpass, textname, textmobile
    }
    try {
      await AsyncStorage.setItem('user', JSON.stringify(obj))
      //alert('Data saved succesfully')
    } catch (e) {
      //alert('failed to save')
    }

  }

  // const getValueFunction = asynonPress={() => { validateForm() ? PressMe() : null }}
  //     alert(error)
  //   }
  // }

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
            //value={a}
            style={styles.input}
            onChangeText={(textemail) => setemail(textemail)}

            value={textemail}
            // fontSize={20}
            keyboardType={'email-address'}

            placeholder={"Email"}


          />

          {/* {!setError && <Text>EMAIL INCORRECT</Text>} */}


          {/* <View style={{flexDirection:"row", alignItems:"baseline", marginTop:"5%"}}> */}

          <TextInput
            style={styles.input}
            onChangeText={(textname) => { setname(textname) }}
            value={textname}
            //fontSize={20}
            placeholder={"Enter Name"}
            keyboardType="default"
          />

          <TextInput
            //value={a}
            style={styles.input}

            onChangeText={(textmobile) => { setmobile(textmobile) }}
            value={textmobile}
            // fontSize={20}
            keyboardType={'number-pad'}

            placeholder={"Enter Mobile number"}


          />
          <TextInput
            //value={a}
            style={styles.input}

            onChangeText={(textpass) => { setpass(textpass) }}
            value={textpass}

            placeholder={"password"}
            secureTextEntry={true}
          />
          <TextInput
            //value={a}
            style={styles.input}

            onChangeText={(textconfpass) => { setconfpass(textconfpass) }}
            value={textconfpass}

            placeholder={" Confirm Password"}

            secureTextEntry={true}
          />

          {/* <TouchableOpacity
            style={styles.button1}
          //</View>onPress={onPress}
          >
            <Text onPress={() => { PressMe() }} style={styles.textLabel}>SignUp</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.button1}
          // onPress={() => { validateForm() ? PressMe() : null }}


          //</View>onPress={onPress}
          >
            <Pressable

              onPress={() => { validateForm() }}
            >
              <Text style={styles.textStyle}>Signup</Text>
            </Pressable>


            <Text style={styles.val}>
              {/* onPress={()=>{validateData() ?
                Pressme() : null}}>
                onPress={() => { validateData() ? Pressme() : null }}>
                 onPress={() => { saveValueFunction() }}> */}

            </Text>

          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.button1}
          //</View>onPress={onPress}
          >
            <Text style={styles.val}
              //          onPress={()=>{validateData() ?
              // Pressme() : null}}>
              // onPress={() => { validateData() ? Pressme() : null }}>
              onPress={() => { getValueFunction() }}>

              Display</Text>
          </TouchableOpacity> */}



          {/* modal code start */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
            // onRequestClose={() => {
            //   Alert.alert("Modal has been closed.");
            //   setModalVisible(!modalVisible);
            // }}
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
            {/* <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
          </View>


          {/* modal end here */}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity >
            <Text onPress={() => navigation.navigate('Login')} style={styles.textLabel1} >LogIn</Text>
          </TouchableOpacity>

        </View>

        {/* <View style={{flexDirection:"column", alignItems:"baseline", marginTop:"5%"}}>
         
         <Text style={{padding: 8, fontSize: 30}}> your email is: {this.state.text} 
         </Text>
         <Text style={{padding: 8, fontSize: 30}}> your password is: {this.state.tex} 
         </Text>
         
         
         </View> */}


        {/* </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //padding :10
    //fontSize:'12',
    //orderWidth:{3,
  },
  input: {
    //borderWidth:1,
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
    //flexDirection: 'row'

  }, button1: {

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




    // //width:"50%",
    // alignItems: 'center',
    // justifyContent: 'center',
    // //marginle,
    // height: 50,
    // width: 150,
    // borderRadius: 10,
    // padding: 10,
    // fontSize: 16,
    // margin: 10,
    // backgroundColor: "#6f43f8",
    // fontFamily: 'sans-serif-medium',
    // fontWeight: 'bold',
    // flexDirection: 'row',
    // //  backgroundColor: "#4E4AA"

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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    //padding:10

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
    // backgroundColor: 'red'
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
    // height: 200,
    // width: 300
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
    fontSize: 22

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22
  }
}
)

