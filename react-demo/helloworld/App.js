import React, {useState} from "react"
import {View,Text,StyleSheet,Button} from "react-native"

export default function App() {
  
  const [counter, setcounter] = useState(0)
  const incrementCounter = () => {
    setcounter(counter+1)
  }

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize:25, marginTop:15}}>Number Counter Application</Text>
      <Text style={{textAlign:'center',fontSize:21,marginTop:15}}>Counter Value::-> {counter}</Text>
        <Button onPress={incrementCounter} style={{marginTop:15}} title="increment Counter"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  }
})