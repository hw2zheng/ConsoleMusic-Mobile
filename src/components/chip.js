import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  submitText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  },
  highLight: {
    backgroundColor: '#68a0cf',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 2
  }});

export default class Chip extends Component {
  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.highLight}
        underlayColor='#fff'>
        <Text style={styles.submitText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
