import React from 'react'
import { View, TextInput, Text  } from 'react-native';
import styles from './style';

const Input = (props) => {
  return (
      <View style={styles.inputLoginContainer}>
        <Text style={styles.loginText}>{props.texto}</Text>
        <TextInput style={styles.inputLoginText} value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} keyboardType={props.keyboardType} placeholderTextColor="#3F92C5" {...props}/>
      </View>

  )
}

export default Input;