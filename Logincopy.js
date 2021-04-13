
// import { useNavigation } from '@react-navigation/core';
// import { Header } from 'native-base';
// import React, { useState, ReactElement } from 'react';
// import { Dimensions, StyleSheet, Text, marginTop, View, Image, TextInput, onChangeText, text, Button, tex, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
// import { color } from 'react-native-reanimated';
// import Header1 from '../Common1/Header1';

// //CONST FOR DIMENSIONS
// const { height, width } = Dimensions.get('window')



// export default function Login() {
//     const navigation = useNavigation();
//     const [textemail, setemail] = useState('')
//     const [textpass, setpass] = useState('')
//     const [textemailErr, setemailErr] = useState(false)
//     const [textpassErr, setpassErr] = useState(false)


//     //function for validation starts
//     function validateData() {
//         const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         const passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
//         if (!(textemail || textpass)) {
//             setemailErr(true)
//             return false;
//         }

//         else if (!textemail || (textemail && emailReg.test(textemail)) == false) {
//             setemailErr(true)
//             return false;

//         }
//         else if (textemail && emailReg.test(textemail) == true) {
//             setemailErr(false)
//         }

//         if (!textpass || (textpass && passReg.test(textpass)) == false) {
//             setpassErr(true)
//             return false;
//         }

//         else if (textpass && passReg.test(textpass) == true) {
//             setpassErr(false)

//         }
//         alert("success ")
//     }
//     //function for validation ends

//     return (
//         <View style={{ justifyContent: "center", alignItems: "center" }}>
//             <ImageBackground
//                 source={{ uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }}
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                 }}
//             >

//                 {/* call for common header */}
//                 <Header1 />


//                 {/* the main screen starts */}
//                 <View style={{ justifyContent: "center", alignItems: "center" }}>


//                     <Image source={{ uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png', }
//                     } style={{ width: 150, height: 150, borderRadius: 100, marginTop: 30 }}
//                     />
//                 </View>

//                 <View style={{
//                     flexDirection: "column", alignItems: "center", marginTop: 50,
//                     borderWidth: 0, margin: 25, backgroundColor: "#FFFDD0", borderRadius: 30, paddingVertical: '5%'
//                 }}>


//                     <TextInput
//                         style={styles.input}
//                         value={textemail}

//                         placeholder="Email"
//                         onChangeText={(textemail) => {
//                             setemail(textemail)
//                         }}


//                     />
//                     {textemailErr && <Text style={{ color: 'red' }}> Wrong email </Text>}
//                     <TextInput
//                         style={styles.input}

//                         placeholder="Password"
//                         secureTextEntry={true}
//                         onChangeText={(textpass) => {
//                             setpass(textpass)
//                         }}
//                     />

//                     {textpassErr && <Text style={{ color: 'red' }}> Wrong password </Text>}

//                     <TouchableOpacity style={styles.button1} onPress={() => { validateData() }}>

//                         <Text style={styles.textLabel}>Login</Text>
//                     </TouchableOpacity>


//                 </View>
//                 <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
//                     <TouchableOpacity >
//                         <Text onPress={() => navigation.navigate('Signup')} style={styles.textLabel1} >SignUp</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>
//         </View>
//     );
// }

// //sheet styling starts
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 10

//     },
//     input: {
//         width: "80%",
//         borderRadius: 10,
//         padding: 10,
//         fontSize: 15,
//         fontFamily: "monospace",
//         color: 'black',
//         backgroundColor: "#0EB2BF",
//         margin: 10,
//         fontFamily: 'sans-serif-medium',
//         fontWeight: 'bold',


//     },
//     textLabel: {
//         justifyContent: "center",
//         alignItems: "center",
//         color: "#fff",
//         fontSize: 16,
//         fontFamily: "serif",
//     },
//     textLabel1: {
//         justifyContent: "center",
//         alignItems: "center",
//         color: "#fff",
//         fontSize: 24,
//         fontFamily: "serif",
//         textDecorationLine: 'underline',
//     },
//     fixToText: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     button1: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 50,
//         width: 150,
//         borderRadius: 10,
//         padding: 10,
//         fontSize: 16,
//         margin: 10,
//         backgroundColor: "#6f43f8",
//         fontFamily: 'sans-serif-medium',
//         fontWeight: 'bold',
//         flexDirection: 'row',
//     },
// });



/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'react-native-elements';
import {loginUser} from '../../Actions/LoginAction';
import OfflineHOC from '../Global/offlineNotice/container';
import {connect} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
// import Bugsnag from '@bugsnag/react-native';

class Login extends Component {
  state = {
    showPassword: true,
    email: '',
    password: '',
    errorStatus: false,
    errorPassword: false,
    loader: false,
    errorMessage: false,
    deviceToken: null,
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    // this.getFcmToken();
    this.requestPermission();
  }

  // function for generating token
  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // console.log("token ", fcmToken);

      this.setState({
        deviceToken: fcmToken,
      });
    } else {
      console.log('token not generated ');
    }
  };



  requestPermission = async () => {
    authStatus = await messaging().requestPermission({
      alert: true,
      announcement: false,
      badge: true,
      carPlay: true,
      provisional: false,
      sound: true,
    });
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      this.getFcmToken();
      // console.log('Authorization status:', authStatus);
    }
  };


  // set email and password to local state
  onChangeText = (text, type) => {
    // this.props.clearLoginError()
    if (type == 'email') {
      this.setState({email: text, errorStatus: false, errorMessage: false});
    } else {
      this.setState({
        password: text,
        errorPassword: false,
        errorMessage: false,
      });
    }
  };

  // login app
  loginApp = () => {
    this.setState({loader: true});
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      //login action
      if (this.state.password.length >= 8) {
        this.props.loginUser(
          this.state.email,
          this.state.password,
          this.state.deviceToken,
          () => {
            this.props.navigation.navigate('Dashboard');
          },
        );
      } else {
        this.setState({
          errorPassword: true,
        });
      }
    } else {
      this.setState({errorStatus: true});
    }
  };

  // hide-show password
  togglePassword = () => {
    return this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{marginHorizontal: wp('5%'), paddingTop: hp('5%')}}>
        <KeyboardAvoidingView enabled>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace('Login');
              }}>
              <Image
                source={require('../../assets/icons/icnclose.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: wp('6%'),
                paddingHorizontal: 15,
                color: '#4d4d4d',
              }}>
              Login with email
            </Text>
          </View>

          <View style={{marginHorizontal: wp('1%'), marginTop: hp('5%')}}>
            <View>
              <Text style={styles.fieldText}>Email</Text>
              <Input
                value={this.state.email}
                placeholder="Email"
                placeholderTextColor="#999999"
                keyboardType="email-address"
                containerStyle={{marginStart: wp('-2.3%'), marginTop: wp('1%')}}
                inputContainerStyle={styles.inputStyle}
                inputStyle={{fontSize: wp('4%')}}
                labelStyle={{
                  borderColor: '#999999',
                  fontFamily: 'Roboto-Regular',
                }}
                onChangeText={text => this.onChangeText(text, 'email')}
                errorStyle={{
                  color: 'red',
                  fontSize: 12,
                  fontFamily: 'Roboto-Regular',
                }}
                errorMessage={
                  this.state.errorStatus && 'Enter a valid email address'
                }
              />
            </View>
            <View style={{marginVertical: hp('3%')}}>
              <Text style={styles.fieldText}>Enter your password</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Input
                    value={this.state.password}
                    placeholder="Enter your password"
                    placeholderTextColor="#999999"
                    containerStyle={{
                      marginStart: wp('-2.3%'),
                      marginTop: wp('1%'),
                    }}
                    inputContainerStyle={styles.inputStyle}
                    inputStyle={{fontSize: wp('4%')}}
                    labelStyle={{
                      borderColor: '#999999',
                      color: 'red',
                      fontFamily: 'Roboto-Regular',
                    }}
                    secureTextEntry={this.state.showPassword}
                    maxLength={15}
                    onChangeText={text => this.onChangeText(text, 'password')}
                    errorStyle={{
                      color: 'red',
                      fontSize: 12,
                      fontFamily: 'Roboto-Regular',
                    }}
                    errorMessage={
                      this.state.errorPassword &&
                      'Minimum password length is 8 characters'
                    }
                  />
                </View>
                <View style={{position: 'absolute', right: 0, top: hp('1.1%')}}>
                  <TouchableOpacity onPress={() => this.togglePassword()}>
                    <Text
                      style={{
                        fontSize: wp('4%'),
                        marginRight: wp('4%'),
                        color: '#6C83FF',
                        fontFamily: 'Roboto-Regular',
                        marginTop: hp('.7%'),
                      }}>
                      {this.state.showPassword ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                onPress={() => {
                  this.props.navigation.navigate('ResetPassword');
                  this.setState({password:'',email:''})
                   // navigate to reset password
                }}
                style={{
                  fontSize: wp('4%'),
                  color: '#6C83FF',
                  fontFamily: 'Roboto-Regular',
                  marginTop: hp('1.5%'),
                  width: wp('40%'),
                  // backgroundColor:'red'
                }}>
                Reset Password
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              title="Login"
              loading={this.props.loader ? true : false}
              titleStyle={{fontSize: hp('3%'), fontFamily: 'Roboto-Bold'}}
              buttonStyle={styles.buttonStyles}
              disabled={
                this.state.email === '' || this.state.password === ''
                  ? true
                  : false
              }
              disabledStyle={{backgroundColor: '#6780FF', opacity: 0.5}}
              disabledTitleStyle={{color: '#FFFFFF'}}
              onPress={
                () => this.loginApp()
                // Bugsnag.notify(new Error('Test error'))
              }
            />
            <View style={{marginVertical: hp('5%')}}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#999999',
                  textAlign: 'center',
                  fontFamily: 'Roboto-Regular',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.replace('Signup');
                }}>
                <Text
                  style={{
                    fontSize: hp('2%'),
                    color: '#6780FF',
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',
                  }}>
                  Create an account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fieldText: {
    color: '#999999',
    fontSize: wp('4%'),
    marginBottom: hp('.5%'),
    fontFamily: 'Roboto-Regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#999999',
    height: hp('5%'),
    width: wp('85%'),
    paddingHorizontal: 0,
    paddingLeft: wp('3%'),
  },
  buttonStyles: {
    fontFamily: 'Roboto-Bold',
    backgroundColor: '#6780FF',
    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOpacity: 0.8,
    // elevation: 6,
    // shadowRadius: 15,
    // shadowOffset: { width: 1, height: 13 },
    marginLeft: wp('3%'),
    borderRadius: 30,
    width: wp('70%'),
    height: wp('12%'),
    marginTop: hp('2%'),
  },
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password, deviceToken, onSuccess) => {
    dispatch(loginUser(email, password, deviceToken, onSuccess));
  },
  // clearLoginError: () => {
  //   dispatch(clearLoginError())
  // }
});
const mapStateToProps = state => ({
  loader: state.global.loginLoader,
});

const offlineWrappedComponent = OfflineHOC(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
