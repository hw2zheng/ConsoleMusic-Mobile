import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import HomeScreen from './src/sections/homescreen';
import Library from './src/sections/library';
import SetlistEditor from './src/sections/setlistEditor';
import Sources from './src/sections/sources';

const SideBarNav = DrawerNavigator({
  Home: { screen: HomeScreen },
  Library: { screen: Library },
  SetlistEditor: { screen: SetlistEditor },
  Sources: { screen: Sources }
});

// Global Application Styles
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};

class App extends Component {
  render () {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <SideBarNav />
      </ThemeProvider>
    );
  }
}

export default App;
