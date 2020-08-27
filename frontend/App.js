import React, { Fragment }from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Text } from 'react-native-ui-kitten'
import TabNavigator from './screens/TabNavigator'

import { EvaIconsPack } from '@ui-kitten/eva-icons'


const App = () => (
  <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <TabNavigator />
    </ApplicationProvider>
  </Fragment>
)

export default App