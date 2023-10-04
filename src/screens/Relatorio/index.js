import React from 'react'
import { View, Image} from 'react-native'
import styles from './style';
import pizza from "../../../assets/images/pizza.png"

const Relatorio = () => {

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={pizza}
      />
      </View>
    </View>
  )
}

export default Relatorio;