import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Feed from '../screens/Feed'
import MapView from '../screens/MapView'
import AddPost from '../screens/AddPost'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: Home
    },
    Feed: {
      screen: Feed
    },
    AddPost: {
      screen: AddPost
    },
    MapView: {
      screen: MapView
    },
    Profile: {
      screen: Profile
    }
  })
  
  export default createAppContainer(TabNavigator)