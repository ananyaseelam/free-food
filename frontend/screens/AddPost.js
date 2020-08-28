import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, Button} from 'react-native';
import { Input} from '@ui-kitten/components';
import { ApplicationProvider, Layout, IconRegistry } from 'react-native-ui-kitten'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { withFirebaseHOC } from '../utils'
import ImagePicker from 'react-native-image-picker'
export default class AddPost extends Component {
  constructor(props) {
        //constructor to set default state
    super(props);
    this.state = {
      food_name: '',
      location:'',
      title: '',
      description:'',
      image: null,
    };
  }
  onChangeTitle = title => {
    this.setState({ title })
  }
  onChangeDescription = description => {
    this.setState({ description })
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

  onSubmit = async () => {
    try {
      const post = {
        photo: this.state.image,
        title: this.state.title,
        description: this.state.description
      }
      this.props.firebase.uploadPost(post)

      this.setState({
        image: null,
        title: '',
        description: ''
      })
    } catch (e) {
      console.error(e)
    }
  }

  selectImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }
        console.log(source)
        this.setState({
          image: source
        })
      }
    })
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
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
 
  render(){
    return(
      <View style={{ flex: 1, marginTop: 60 }}>
        <Text style={styles.HeaderText}>Add Posting Here: </Text>
      <View>
          {this.state.image ? (
            <Image
              source={this.state.image}
              style={{ width: '100%', height: 300 }}
            />
          ) : (
            <Button title="Pick an image from camera roll" onPress={this._pickImage} />
          )}
        </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style= {styles.baseText}>
        
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
          placeholder=" Food Name "
          onChangeText={this.handleFoodChange}
        />
        <TextInput
          style={styles.input}
          value = {this.state.location}
          placeholder=" Pickup Location "
          onChangeText={this.handleLocationChange}
        />
        <TextInput
          style={styles.input}
          value = {this.state.description}
          placeholder=" Description "
          onChangeText={this.handleDescriptionChange}
        />

        <Button
          title="Create Post"
          onSubmit={() => postData()//send data to backend
        }
        />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 350,
    marginTop: 10,
    marginBottom:10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  HeaderText:{
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'System',
    fontWeight: "bold",
    justifyContent:'flex-start',
    margin: 5,
  },
  baseText:{
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'System',
    fontWeight: "bold",
    justifyContent:'space-evenly'
  }
});
