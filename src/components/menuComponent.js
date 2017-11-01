import React, { Component } from 'react';
import _ from 'lodash';
import { ScrollView, Text, View } from 'react-native';
import { Divider } from 'react-native-material-ui';
import Chip from '../components/chip';
import transitions from '../helpers/transition';

export default class SetlistEditor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      actions: [{name: 'action1'}, {name: 'action2'}, {name: 'action1'}, {name: 'action2'}, {name: 'action1'}, {name: 'action2'}, {name: 'action1'}, {name: 'action2'}, {name: 'action1'}, {name: 'action2'}, {name: 'action1'}, {name: 'action2'}],
      filters: [],
      stage: 'playlistSelection'
    };
  }

  renderActionList () {
    return _.map(this.state.actions, (action, index) => {
      return <Chip key={index} text={action.name} />;
    });
  }
  render () {
    return (
      <View>
        <ScrollView horizontal style={{flex: 1, flexDirection: 'row'}}>
          { this.renderActionList() }
        </ScrollView>
        <Divider />
        <Text>Play Text</Text>
      </View>
    );
  }
}
