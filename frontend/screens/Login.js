
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, ScrollView } from 'react-native';
//import all the components we are going to use.

export default class Login extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Login',
  };

  render(){

    return (
      <View style={styles.container}>
          <Text style = {styles.HeaderText}>
            login
          </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    padding: 16,
    //marginBottom: 0,
  },
  HeaderText:{
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'System',
    fontWeight: "bold"
  },
});