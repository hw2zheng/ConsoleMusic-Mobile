import React, { Component } from 'react';
import _ from 'lodash';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Divider, Subheader } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
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
      },
      filterInput: ''
    };
  }

  renderMenuChips (menuItems, onPress) {
    return _.map(menuItems, (item, index) => {
      return (
        <Chip key={index}
          onPress={onPress ? onPress(item) : () => {}}
          text={item.text}
        />
      );
    });
  }

  renderContentSelection () {
    const contentTypes = getMenuItems(STAGES.CONTENT_SELECTION).filter((item) => { return this.state.commandItems.contentSelections.indexOf(item) === -1; });
    const updateSelectedContent = (content) => () => {
      this.setState((prevState) => {
        prevState.commandItems.contentSelections.push(content);
        prevState.selectedStage = STAGES.ACTIONS_AND_FILTER_SELECTION;
        return prevState;
      });
    };
    return (
      <ScrollView horizontal style={{flexDirection: 'row'}}>
        { this.renderMenuChips(contentTypes, updateSelectedContent) }
      </ScrollView>
    );
  }

  renderActionsAndFilters () {
    const actionsAndFilters = getMenuItems(STAGES.ACTIONS_AND_FILTER_SELECTION, this.state.currentSelections);
    if (!actionsAndFilters) {
      const pushCommand = () => {
        this.setState((prevState) => {
          prevState.commandItems.actionsAndFilters.push(this.state.currentSelections);
          prevState.currentSelections = [];
          return prevState;
        });
      };
      return (
        <Button primary text='Add action' onPress={pushCommand} />
      );
    }
    if (actionsAndFilters.text === 'TEXT_INPUT') {
      const pushText = () => {
        console.log(this.state.filterInput);
        this.setState((prevState) => {
          this.state.filterInput && prevState.currentSelections.push({text: this.state.filterInput, next: actionsAndFilters.next});
          return prevState;
        });
      };
      return (
        <View horizontal>
          <TextField
            label='String to filter'
            value={this.state.filterInput}
            onChangeText={(filterInput) => this.setState({ filterInput })}
          />
          <Button primary text='add' onPress={pushText} />
        </View>
      );
    }
    const updateActionsAndFilters = (item) => () => {
      if (this.state.commandItems.actionsAndFilters.indexOf(item) === -1) {
        this.setState((prevState) => {
          prevState.currentSelections.push(item);
          prevState.selectedStage = STAGES.ACTIONS_AND_FILTER_SELECTION;
          return prevState;
        });
      }
    };
    return (
      <ScrollView horizontal style={{flexDirection: 'row'}}>
        { this.renderMenuChips(actionsAndFilters, updateActionsAndFilters) }
      </ScrollView>
    );
  }

  selectedContentView () {
    const contentChips = _.map(this.state.commandItems.contentSelections, (selection, index) => {
      if (index === 0) {
        return (
          <Chip key={index}
            text={selection.text}
            />);
      } else {
        return (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 5, marginTop: 15 }}>and</Text>
            <Chip
              text={selection.text}
            />
          </View>
        );
      }
    });

    return (
      <View>
        <Subheader style={{text: {textAlign: 'center'}}} text='Playing Content From' />
        <Divider />
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          { contentChips }
          { contentChips.length > 0 &&
            <Button style={{marginTop: 15}} primary text='(select more)' onPress={() => { this.setState({selectedStage: STAGES.CONTENT_SELECTION}); }} />
          }
        </ScrollView>
      </View>
    );
  }

  selectedActionsAndFiltersView () {
    return _.map(this.state.commandItems.actionsAndFilters, (commandRow, index) => {
      return (
        <ScrollView key={index}>
          <View style={{ flexDirection: 'row' }}>
            { _.map(commandRow, (selection, innerIndex) => {
              return (
                <View key={innerIndex}>
                  <Chip text={selection.text} />
                  <Text style={{ margin: 5, marginTop: 15 }}>{selection.prompt}</Text>
                </View>
              );
            })
            }
            <Divider />
          </View>
        </ScrollView>
      );
    });
  }

  render () {
    let menuItems, text;
    const { commandItems } = this.state;
    switch (this.state.selectedStage) {
      case STAGES.CONTENT_SELECTION: {
        menuItems = (
          <View>
            { this.renderContentSelection() }
          </View>
        );
        text = 'Select a content source';
        break;
      } case STAGES.ACTIONS_AND_FILTER_SELECTION: {
        menuItems = (
          <View>
            { this.renderActionsAndFilters() }
          </View>
        );
        text = 'Select an Action or a Filter';
        break;
      }
    }
    return (
      <View>
        <Card>
          <Subheader style={{text: {textAlign: 'center'}}} text={text} />
          <Divider />
          { menuItems }
        </Card>
        { commandItems.contentSelections.length > 0 &&
          <Card>
            { this.selectedContentView() }
          </Card>
        }
        <Divider />
        <Card>
          { commandItems.actionsAndFilters.length > 0 &&
              this.selectedActionsAndFiltersView()
          }
        </Card>
      </View>
    );
  }
}
