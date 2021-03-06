import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {
  
  const [text, settext] = useState();

  const changeHandler = (val) => {
    settext(val)
  } 

  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder='Add a Todo...'
            onChangeText={changeHandler}
        />
        <Button onPress={() => submitHandler(text)} title='Add Todo Item' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})