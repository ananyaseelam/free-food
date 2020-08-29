import React, { Fragment } from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text} from '@ui-kitten/components'
import { IconRegistry } from 'react-native-ui-kitten'
import TabNavigator from './src/navigation/TabNavigator'
import { Asset, Font, Icon } from 'expo';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
const ApplicationContent = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
)

const App = () => (
  <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <TabNavigator />
    </ApplicationProvider>
    </Fragment>
)

export default App