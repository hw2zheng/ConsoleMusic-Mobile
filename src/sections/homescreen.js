import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
        <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
        <Button
          title='Library'
          onPress={() => this.props.navigation.navigate('Library')}
                />
        <Button
          title='Sources'
          onPress={() => this.props.navigation.navigate('Sources')}
                />
        <Button
          title='SetlistEditor'
          onPress={() => this.props.navigation.navigate('SetlistEditor')}
                />
        <Button
          title='Open Drawer!'
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
