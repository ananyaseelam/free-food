import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@ui-kitten/components'
import { FeedNavigator } from './StackNavigator'
import MapView from '../screens/MapView'
import AddPost from '../screens/AddPost'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: Home,
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
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='heart-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
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
    }
})
  
export default createAppContainer(TabNavigator)
