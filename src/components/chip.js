import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  submitText: {
    backgroundColor: '#68a0cf',
    borderRadius: 30,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    margin: 2,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  }});

export default class Chip extends Component {
  render () {
    return (
      <TouchableHighlight
        onPress={() => 'test'}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Chip Test</Text>
      </TouchableHighlight>
    );
  }
}
