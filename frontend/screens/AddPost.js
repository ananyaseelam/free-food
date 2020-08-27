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
    this.sendPost()
  }

  sendPost = () => {
    const obj = {'food': this.state.food_name, 'location': this.state.location, 
              'description': this.state.description};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    let postData = {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: blob
    }
    fetch('', postData)
  };



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
          style={styles.input}
          value = {this.state.food_name}
          placeholder="     Food Name      "
          onChangeText={this.handleFoodChange}
        />
        <TextInput
          style={styles.input}
          value = {this.state.location}
          placeholder="     Location     "
          onChangeText={this.handleLocationChange}
        />
        <TextInput
          style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FF6347',
    margin: 30,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  container1:{
    flex: 1,
    //backgroundColor: '#FF6347',
    borderRadius: 20,
    borderColor: '#46b4ff',
    borderWidth:5,
    alignItems: 'center',
    backgroundColor:'#E6F0FF',
    
  },
  container2:{
    flex: 1,
    //backgroundColor: '#FF6347',
    borderRadius: 15,
    paddingHorizontal:70,
    paddingTop:15,
    borderColor: '#46b4ff',
    borderWidth:5,
    alignItems: 'center',
    backgroundColor:'#E6F0FF',
    
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginBottom:10,
    marginHorizontal: 20,
    //paddingHorizontal: 10,
    //paddingVertical: 5,
    borderRadius: 3,
  },
});
