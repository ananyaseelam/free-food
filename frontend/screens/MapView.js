import React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

export default class AddPost extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      
    };
  }
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
      </View>
    );
  }
}
=======
//import react in our code.
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, ScrollView } from 'react-native';
//import all the components we are going to use.

export default class Home extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Home',
  };

  render(){

    return (
      <View style={styles.container}>
          <Text style = {styles.HeaderText}>
            home
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
    fontFamily: 'Avenir',
    fontWeight: "bold"
  },
});
>>>>>>> caleb-working
