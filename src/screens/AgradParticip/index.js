import React from 'react';
import styles from './style';
import { View, Text} from 'react-native';

const AgradParticip = ({}) => {

  return (
    <View style={styles.background}>
      <View style={styles.thanksContainer}>
       <Text style={styles.thanksText}>Obrigado por participar da Pesquisa!</Text>
       <Text style={styles.thanksText}>Aguardamos você no próximo ano!</Text>
      </View>
    </View>
  )
}

export default AgradParticip;