import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten'
import TabNavigator from './screens/TabNavigator'

const ApplicationContent = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
)

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <TabNavigator/>
  </ApplicationProvider>
)

export default App
