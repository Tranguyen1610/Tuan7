import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react';
import { UserContext } from '../components/Book';

export default function Update({navigation}) {
    const item = useContext(UserContext)
    console.log(item);
  return (
    <View>
      <Text>{item}</Text>
      <Text>item</Text>
    </View>
  )
}

const styles = StyleSheet.create({})