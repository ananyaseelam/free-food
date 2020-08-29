import React, {Fragment} from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components'
import TabNavigator from './src/navigation/TabNavigator'
import { AppLoading, Asset, Font, Icon } from 'expo';
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const ApplicationContent = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
)

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };
    render() {
        return (
            <Fragment>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
              <TabNavigator />
            </ApplicationProvider>
          </Fragment>
        );
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
//                'text-font-family': require('./assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
    console.warn(error);
    };
}
