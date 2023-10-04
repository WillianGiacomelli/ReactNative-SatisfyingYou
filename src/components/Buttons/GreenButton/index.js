import React from 'react'
import { View, TextInput, Text, TouchableOpacity  } from 'react-native';
import styles from "./style";

const GreenButton = ({texto,onPress}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoText}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default GreenButton