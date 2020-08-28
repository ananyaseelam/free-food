import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
//import all the components we are going to use.
import MapView, {Marker} from 'react-native-maps';
export default class Home extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Map View',
  };

  render(){
    const latitude =  35.783877
    const longitude =   -78.602886
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onLayout={() => { this.mark.showCallout(); }}
        >
          <Marker
            ref={ref => { this.mark = ref; }}
            coordinate={{latitude: latitude,longitude: longitude}}
            title={'marker'}
            description={'hello'}
            centerOffset={{x: -5, y: 2}}
          />
        </MapView>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

