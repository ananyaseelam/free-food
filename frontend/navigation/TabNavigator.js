import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-ui-kitten'
import { FeedNavigator } from './StackNavigator'
import MapView from '../screens/MapView'
import AddPost from '../screens/AddPost'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: Home
    },
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
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


  