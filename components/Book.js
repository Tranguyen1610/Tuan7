import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,createContext} from 'react'
export const UserContext = createContext();
export default function book({item,setList,navigation}) {
  const [items, setItems] = useState(item);
  
  return (
    <UserContext.Provider value={items}>
    <View style={styles.container}>
      <Text>{items.name}</Text>
      <Image
        source={{uri:items.linkImg}}
        style={{
          width:80,
          height:80,
        }}/>
        <View>
        <TouchableOpacity 
          onPress={()=>{
            fetch('https://635196c09d64d7c71303bba1.mockapi.io/book/'+item.id, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                        
                    }).then((data)=>{
                        fetch('https://635196c09d64d7c71303bba1.mockapi.io/book')
                            .then(data=>data.json())
                            .then(data =>setList(data))
                    })
                    alert("Xóa thành công");
                }
          }
          style={styles.buttonDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Update');console.log(UserContext.Provider);
          }}
          style={styles.buttonUpdate}>
          <Text>Update</Text>
        </TouchableOpacity>
        </View>
    </View>
    </UserContext.Provider>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#89F1E8',
    padding:20,
    width:350,
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:20,
  },
  buttonDelete:{
    backgroundColor:'#FA5146',
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  buttonUpdate:{
    backgroundColor:'#90FA46',
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:5,
  },
})