import React, { Component } from 'react';
import { StyleSheet,Image, View, TouchableOpacity } from 'react-native'
import { Avatar, withStyles, List } from 'react-native-ui-kitten'

export default class Feed extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      
    };
  }
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
}