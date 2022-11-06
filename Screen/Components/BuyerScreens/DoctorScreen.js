
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Dialog from "react-native-dialog";


//var text = ""; //Dialogue Title setter

var id='';
export default class DoctorScreen extends Component {

  state = {
    Email:"swapnil@gmail.com",
    Phone:"1234567890",
    Password:"password",
    text:''
  };

  signout = () => {

    fetch("http://localhost:4000/users/logout", {
      method: 'POST',
      headers: {
          'Authorization':'Bearer '+global.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
     
  })

      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
        
          if (responseJson.status == 'success') {
            this.props.navigation.navigate('LoginScreen');
          }
      })

      .catch();
    //this.props.navigation.navigate('LoginScreen');
  }

  signoutAll = () => {

    fetch("http://localhost:4000/users/logoutAll", {
      method: 'POST',
      headers: {
          'Authorization':'Bearer '+global.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
     
  })

      .then((response) => response.json())
      .then((responseJson) => {
          
          if (responseJson.status == 'success') {
            this.props.navigation.navigate('LoginScreen');
          }
      })

      .catch();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar7.png' }} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.detailBox}>
            <View style={styles.box1}>
              <Text style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>Doctor Appointment page is Under Construction</Text>
            </View>
            
          </View>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  box1: {
    flex: 1,

  },
  
  box2: {
    flex: 1,
    alignItems: 'flex-end'
  },
  detailBox: {
    flexDirection: 'row',
    margin: 10
  },
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
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
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",

  },
  body: {
    backgroundColor: "#778899",
    height: '68%',

  },
  item: {
    flexDirection: 'row',
    marginTop: 5,

  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    paddingRight: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 10,
    color: "white",
    marginLeft: 20
  }
});
