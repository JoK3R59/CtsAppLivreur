import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import _Title from '../_shared/_Title'

import DstackNav from './DstackNav';

import DeliveryLoad from '../component/DeliveryLoad'; 
import HomeDelivery from '../component/HomeDelivery';
import Profil from '../component/Profil';
import LoginScreen from '../component/LoginScreen';
// const Stack = createNativeStackNavigator();
// console.log('Objet Stack : ', Stack)
const { Navigator, Screen } = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Status_login = false

const AppNavigation = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator
      screenOptions= {
        ({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
      
                if (route.name === 'Delivery_load') {
                  return <MaterialCommunityIcons name="steering" size = { size } color= { color } />
                }
                else if (route.name === 'Delivery_stack') {
                  return <AntDesign name="plussquare" size = { size } color= { color } />
                }
                else {
                  
                  return <FontAwesome name="user" size = { size } color= { color } />
                }
             }
        })
    }
    tabBarOptions = {{
        activeTintColor: 'black',
        inactiveTintColor: '#a9a9a9'
    }}>
        
        <Tabs.Screen name="Delivery_load" component={DeliveryLoad}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>

        <Tabs.Screen name="Delivery_stack" component={DstackNav}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>

        <Tabs.Screen name="Profil" component={Profil}
        options={{ headerTitle: (props) => <_Title {...props} /> }}/>
      </Tabs.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppNavigation;
