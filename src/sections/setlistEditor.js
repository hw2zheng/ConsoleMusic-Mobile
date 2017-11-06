import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';
import {
  Menu,
  MenuContext,
  MenuOptions,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import SetlistCreator from '../components/setlistCreator';

export default class SetlistEditor extends Component {
  render () {
    return (
      <MenuContext>
        <Toolbar
          leftElement='menu'
          onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
          centerElement='Setlist Editor'
          searchable={{
            autoFocus: true,
            placeholder: 'Search'
          }}
        />
        <Menu renderer={renderers.SlideInMenu}>
          <MenuTrigger text='Select action' />
          <MenuOptions>
            <SetlistCreator />
          </MenuOptions>
        </Menu>
      </MenuContext>
    );
  }
}
