
import React, { useState } from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from './loader';

const RegisterScreen = props => {

  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [Phone, setUserPhone] = useState('');
  let [Password, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    


  };

  const apifetch = () => {
    fetch("http://localhost:4000/signup", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    })

      .then((response) => response.text())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson)

      })
      .catch();
  }



  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (

    <View style={{ flex: 1, backgroundColor: '#9555ed' }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: '#2e2042', textAlign: 'center', fontWeight: 'bold' }}>Seller Registration</Text>
        </View>


        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Name</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#FFFFFF"
              placeholderTextColor="#08070D"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._emailinput && this._emailinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={Phone => setUserPhone(Phone)}
              underlineColorAndroid="#FFFFFF"
              placeholderTextColor="#08070D"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._emailinput && this._emailinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>


          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email Address</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#08070D"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              returnKeyType="next"
              onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Shop Name</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#08070D"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              returnKeyType="next"
              onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User Passowrd</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={Password => setUserPassword(Password)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#08070D"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              returnKeyType="next"
              onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Confirm User Password</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={ConfirmPasswword => setUserPassword(ConfirmPasswword)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#08070D"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              returnKeyType="next"
              onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>


          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>

          <Text
            style={styles.registerTextStyle}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Already have an account?</Text>  Sign In
            </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#2B2D2F',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '40%',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 20,
  },
  registerTextStyle: {
    color: '#08070D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 20
  },
  inputStyle: {
    flex: 1,
    maxWidth: '30%',
    height:'100%',
    marginBottom: '1%',
    backgroundColor: 'white',
    borderColor: 'grey',
    fontSize: 20,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },
});