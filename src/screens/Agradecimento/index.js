import React from 'react';
import styles from './style';
import { View, Text} from 'react-native';

const Agradecimento = ({navigation, route}) => {

  return (
    <View style={styles.background}>
      <View style={styles.thanksContainer}>
       <Text style={styles.thanksText}>O que você achou do {route.params.nome}?</Text>
      </View>
    </View>
  )
}

export default Agradecimento;