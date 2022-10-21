import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Main from '../screens/Main';
import Update from '../screens/Update';
export default function Navi() {
  return (
    <Stack.Navigator
        initialRouteName='Main'>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Update' component={Update}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})