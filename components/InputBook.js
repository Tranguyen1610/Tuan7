import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function inputBook({setList,setName,name,setLinkImg,linkImg}) {
  return (
    <View style={styles.container}>
      <TextInput 
        value={name}
        style={styles.input}
        placeholder='Enter Bookname'
        onChangeText={(value)=>setName(value)}/>
        <TextInput 
        value={linkImg}
        style={styles.input}
        placeholder='Enter Image link'
        onChangeText={(value)=>setLinkImg(value)}/>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          fetch('https://635196c09d64d7c71303bba1.mockapi.io/book', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({linkImg:linkImg,name:name})
                }).then((data)=>{ 
                  fetch('https://635196c09d64d7c71303bba1.mockapi.io/book')
                  .then(data=>data.json())
                  .then(data =>setList(data))})
               
          setName('');
          setLinkImg('');
          alert("Thêm thành công");
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:'center',
    width:'100%',
  },
  input:{
    marginTop:10,
    width:'90%',
    height:40,
    borderWidth:1,
    borderRadius:5,
    padding:10,
  },
  button:{
    backgroundColor:'#F1C189',
    padding:10,
    width:100,
    alignItems:'center',
    marginTop:10,
    borderRadius:10,
  },
})