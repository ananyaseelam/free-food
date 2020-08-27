import React, { Component } from 'react';
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