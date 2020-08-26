import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import MapView from './pages/MapView';

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Home: { screen: Home }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    Login: { screen: Login }, 
    Feed: {screen: Feed},
    MapView: {screen: MapView},
  },
  
  {
  
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

