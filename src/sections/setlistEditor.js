import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import {
  Menu,
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import MenuComponent from '../components/menuComponent';

export default class SetlistEditor extends Component {
  render () {
    return (
      <MenuContext>
        <Toolbar
          leftElement='menu'
          centerElement='Setlist Editor'
          searchable={{
            autoFocus: true,
            placeholder: 'Search'
          }}
        />
        <Menu renderer={renderers.SlideInMenu}>
          <MenuTrigger text='Select action' />
          <MenuOptions>
            <MenuOption>
              <MenuComponent />
            </MenuOption>
          </MenuOptions>
        </Menu>
      </MenuContext>
    );
  }
}
