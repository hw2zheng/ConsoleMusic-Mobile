import React, { Component } from 'react';
import _ from 'lodash';
import { ScrollView, Text, View } from 'react-native';
import { Divider, Subheader } from 'react-native-material-ui';
import Chip from '../components/chip';
import STAGES from '../lib/stage-types';
import getMenuItems from '../lib/get-menu-items';

export default class SetlistEditor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedStage: STAGES.CONTENT_SELECTION,
      currentSelections: [],
      commandItems: {
        contentSelections: [],
        actionsAndFilters: [],
        endEvents: []
      }
    };
  }

  renderMenuItems (itemList) {
    return _.map(itemList, (action, index) => {
      return <Chip key={index} text={action.name} />;
    });
  }

  render () {
    const { currentSelections, stage } = this.state;
    const menuOptions = getMenuItems(currentSelections, stage);
    return (
      <View>
        <View>
          <Subheader style={{text: {textAlign: 'center'}}} text='Create a Command' />
        </View>
        <Divider />
        <ScrollView horizontal style={{flex: 1, flexDirection: 'row'}}>
          { this.renderActionList() }
        </ScrollView>
        <Divider />
        <View style={{margin: 10}}>
          <Text>Play songs from _____</Text>
        </View>
      </View>
    );
  }
}
