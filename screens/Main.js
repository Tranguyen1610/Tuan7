import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState,createContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBook from '../components/InputBook';
import Book from '../components/Book';

export default function Main({navigation}) {
    useEffect(() => {
        fetch('https://635196c09d64d7c71303bba1.mockapi.io/book')
        .then(data=>data.json())
        .then(data =>setList(data))
    },[]);
      
      const [name,setName] = useState('');
      const [linkImg,setLinkImg] = useState('');
      const [list,setList] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <InputBook
        setList={setList}
        setName={setName}
        name={name}
        setLinkImg={setLinkImg}
        linkImg={linkImg}
        />
        <FlatList
          data={list}
          style={{marginTop:10}}
          renderItem={({item})=>
            <Book
              item={item}
              setList={setList}
              navigation={navigation}
              />
          }/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
      },
})