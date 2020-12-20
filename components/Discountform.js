import { useState } from 'react'
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

export default function Discountform({navigation}) {
  let text;
  let value;

  const [getPrice, setPrice] = useState();
  
  const [getFinalPrice, setFinalPrice] = useState();
  
  const [getDiscountPercentage, setDiscountPercentage] = useState();
  
  const [getSaved, setSaved] = useState();
  
  const [getText, setText] = useState("");
  
  const [getData, setData] = useState([])
  
  const [getDiscount, setDiscount] = useState(true);

  const deactivator = () => {
    if(getPrice == "" || getPrice <= 0){
      setDiscount(true);
    }
    else{
      setDiscount(false);
    }
  }

  const onChanged = (text, value) => {
    var temp = "";
    
    var digits = "0123456789";
    
    if(value == 2 && text <= 100){
      setText("");

    }

    for (var i = 0; i< text.length; i++){
      if(digits.indexOf(text[i]) > -1){
        temp = temp + text[i];
      }
    }

    if(value == 1){
      setPrice(temp);

    }

    else if(value == 2) {
      setDiscountPercentage(temp);
    }
  };

  const discountCalculator = () => {
    deactivator();
    if(getPrice != 0){
      let discounted = Math.trunc((getPrice * getDiscountPercentage)/100);
      let final = Math.trunc(getPrice - discounted);


      setFinalPrice(final);
      setSaved(discounted);
    }

    if(getPrice == 0 || getPrice == ""){
      setSaved(0);
      setFinalPrice(0);
    }
  };

  return (
    <View style={styles.discountform}>

      <TouchableOpacity style = {styles.historybutton} onPress = {() => navigation.navigate("History")}>
        <Text style = {styles.btntext}>History</Text>
      </TouchableOpacity>
      
      <Text 
      style = {styles.header}>Discount Calculator</Text>


      <TextInput style={styles.textinput} 
        value={getPrice}
        keyboardType = "numeric"
        onChangeText={(text) => onChanged(text, 1)}
        placeholder="Original Price"
      underlineColorAndroid={'transparent'} />

      <TextInput style={styles.textinput} 
        value={getDiscountPercentage}
        keyboardType="numeric"
        onChangeText={(text) => onChanged(text, 2)}

        placeholder="Discount Percentage"
      underlineColorAndroid={'transparent'} />

      <TouchableOpacity style = {styles.button}
        onPress={discountCalculator}
      >
        <Text style = {styles.btntext}>Calculate</Text>
      </TouchableOpacity>

      <Text style = {styles.infotext}>You Save : {getSaved}</Text>

      <Text style = {styles.infotext}>Final Price : {getFinalPrice}</Text>

      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.btntext}>Save History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  discountform: {
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
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button:{
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
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
  infotext: {
    fontSize: 15,
    paddingTop: 20,
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});
