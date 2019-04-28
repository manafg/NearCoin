import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/variables';
import Navigator from './Navigator'


export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Navigator/>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

