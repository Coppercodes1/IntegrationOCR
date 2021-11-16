import React, {Component} from 'react';
  import {StyleSheet, Dimensions, Text, View} from 'react-native';

  import CameraScreen from './src/screens/CameraScreen'
  import ContactScreen from './src/screens/ContactScreen'

  import {createStackNavigator, createAppContainer} from 'react-navigation';

  const AppNavigator = createStackNavigator({
    CameraScreen: {
      screen: CameraScreen
    },
    ContactScreen: {
      screen: ContactScreen
    }
  });

  const AppContainer = createAppContainer(AppNavigator);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }