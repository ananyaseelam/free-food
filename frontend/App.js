import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten'
import TabNavigator from './navigation/TabNavigator'
import { AppLoading, Asset, Font, Icon } from 'expo';

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
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <TabNavigator/>
            </ApplicationProvider>
        );
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                'text-font-family': require('./assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
    console.warn(error);
    };

    _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    };
}
