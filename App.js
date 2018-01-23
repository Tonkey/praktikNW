import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Tabs } from './router'
import Login from './src/Login'

const AppNavigator = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Menu: {
      screen: Tabs
    }
  },
  {
    initialRouteName: 'Menu',
    initialRouteParams: {...this.state},
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { height: 24 },
      headerLeft: null,
    }
  }
)

export default () => (<AppNavigator/>)
