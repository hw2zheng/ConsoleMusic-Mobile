import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  View,
  Text
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import SetlistCreator from '../components/setlistCreator';
import SlidingUpPanel from 'rn-sliding-up-panel';

const { height } = Dimensions.get('window');

export default class SetlistEditor extends Component {
  constructor () {
    super();
    this.state = {
      visible: true
    };
  }

  render () {
    console.log(height);
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement='menu'
          onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
          centerElement='Setlist Editor'
          searchable={{
            autoFocus: true,
            placeholder: 'Search'
          }}
        />
        <Button title='show thing!' onPress={() => { this.setState({visible: !this.state.visible}); }} />
        <SlidingUpPanel
          draggableRange={{top: height * 3 / 4, bottom: 0}}
          ref={(c) => { this._panel = c; }}
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={{flex: 1, position: 'relative', backgroundColor: 'white'}}>
            <SetlistCreator />
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
