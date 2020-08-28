import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import TabNavigator from './src/navigation/TabNavigator'
import { Asset, Font, Icon } from 'expo';

const ApplicationContent = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
)

const App = () => (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <TabNavigator />
    </ApplicationProvider>
)

export default App