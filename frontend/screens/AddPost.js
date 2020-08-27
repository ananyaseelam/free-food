import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, Button} from 'react-native';

export default class AddPost extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      food_name: '',
      location:'',
      description:'',
    };
  }

  handleFoodChange = food_name => {
    this.setState({food_name})
  }

  handleLocationChange = location => {
    this.setState({location})
  }

  handleDescriptionChange = description => {
    this.setState({description})
  }

  handleSubmit = () => {
    //needs to send data to backend
  }



  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Post Screen 
        {"\n"}
        Food: {this.state.food_name}
        {"\n"}
        Location: {this.state.location}
        {"\n"}
        Description: {this.state.description}
        </Text>
        

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
          value = {this.state.food_name}
          placeholder="     Food Name      "
          onChangeText={this.handleFoodChange}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value = {this.state.location}
          placeholder="     Location     "
          onChangeText={this.handleLocationChange}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value = {this.state.description}
          placeholder="     Description     "
          onChangeText={this.handleDescriptionChange}
        />

        <Button
          title="Submit"
          onSubmit={() => postData()//send data to backend
        }
        />
      </View>
    );
  }
}