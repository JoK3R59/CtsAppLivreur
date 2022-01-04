import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import LoginScreen from './src/component/LoginScreen';
import AppNavigation from './src/navigation/index';
import loginState from './src/_shared/_EvalLogin';

const App = () => {

  return (
    <SafeAreaView style = {{ flex: 1 }}>
      { loginState.userToken !== null ? (
        <AppNavigation />
      )
      :
        <LoginScreen/>
      }
      
    </SafeAreaView>
  );
}


export default App;