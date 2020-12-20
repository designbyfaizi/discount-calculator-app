import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import { Link } from 'react-router';

import Discountform from './components/Discountform.js';
import History from './components/History.js';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#36485f'
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme = {MyTheme}>
        <Stack.Navigator >
          <Stack.Screen name = "Discount" component = {Discountform} options={{headerShown: false}} />
          <Stack.Screen name = "History" component = {History} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
  },
});
