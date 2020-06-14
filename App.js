import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//import screens
import Feed from './src/Feed';
import Details from './src/Details';

//Import tab screens
import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

//Import tab screens
import Drawer1 from './src/screens/drawers/Drawer1';
import Drawer2 from './src/screens/drawers/Drawer2';
import Drawer3 from './src/screens/drawers/Drawer3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MatterialBottomTabs = createMaterialBottomTabNavigator();
//const MatterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' />
          <Drawer.Screen name='Contact' component={Drawer1} />
          <Drawer.Screen name='About' component={Drawer2} />
          <Drawer.Screen name='Events' component={Drawer3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
