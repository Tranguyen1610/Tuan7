import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import Navi from './navigation/Navi';
export default function App() {
  return (
    <NavigationContainer>
      <Navi/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
