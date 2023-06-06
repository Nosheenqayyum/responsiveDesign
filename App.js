//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';

// create a component
const App = () => {
  return (
    <View style={{flex:1}}>
     <Routes/>
    </View>
  );
};


export default App;
