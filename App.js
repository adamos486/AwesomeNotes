/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Home from './Home';
import Docs from './Docs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Home: Home,
    Docs: Docs,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(App);
