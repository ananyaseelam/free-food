import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Feed from '../screens/Feed'
import MapView from '../screens/MapView'
import AddPost from '../screens/AddPost'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { Icon } from 'react-native-ui-kitten'

const TabNavigator = createBottomTabNavigator({

    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      },
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='plus-square-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    MapView: {
      screen: MapView,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='map-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='person-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },

    
  })
  
  export default createAppContainer(TabNavigator)