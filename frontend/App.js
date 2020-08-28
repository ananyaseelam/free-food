import React, {Fragment, useEffect, useState} from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text,IconRegistry } from 'react-native-ui-kitten'
import TabNavigator from './navigation/TabNavigator'
import { AppLoading, Asset, Font, Icon } from 'expo';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import 'react-native-gesture-handler';
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegistrationScreen from './screens/Registration'
import LoginScreen from './screens/Login'
import HomeScreen from './screens/Home'


const Stack = createStackNavigator();

export default function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    state = {
        isLoadingComplete: false,
    };

    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            usersRef
              .doc(user.uid)
              .get()
              .then((document) => {
                const userData = document.data()
                setLoading(false)
                setUser(userData)
              })
              .catch((error) => {
                setLoading(false)
              });
          } else {
            setLoading(false)
          }
        });
      }, []);

    if (loading) {
        return (
          <></>
        )
      }

    return (
   
        <NavigationContainer>
          <Stack.Navigator>
            { user ? (
              <Stack.Screen name="Home">
                {props => <HomeScreen {...props} extraData={user} />}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
       
      );

    }