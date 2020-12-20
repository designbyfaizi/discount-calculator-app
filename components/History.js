import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Link } from 'react-router';

// You can import from local files
import AssetExample from './AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function History({navigation}) {
  return (
    <View style={styles.history}>

      <TouchableOpacity style = {styles.historybutton} onPress = {() => navigation.goBack()}>
        <Text style = {styles.btntext}>Back</Text>
      </TouchableOpacity>
      
      <Text style = {styles.header}>History</Text>


      <View style = {styles.items}>
        <Text style = {styles.infotext}>Original Price</Text>
        <Text style = {styles.infotext}>Discount %age</Text>
        <Text style = {styles.infotext}>Final Price</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    alignSelf: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  historybutton:{
    width: 70,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
    marginBottom: 20,
  },
  btntext:{
    color: '#fff',
    fontWeight: 'bold',
  },
  items:{
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  infotext: {
    fontSize: 10,
    color: '#fff',
  },
});
