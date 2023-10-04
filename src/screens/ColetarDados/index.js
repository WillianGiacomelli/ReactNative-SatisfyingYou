import React from 'react';
import styles from './style';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ColetarDados = ({navigation, route}) => {

  function mudarTela(){
    const timer = setTimeout(() => {
      navigation.navigate('AgradParticip'); 
    }, 3000);
  }
  

  return (
    <View style={styles.background}>
      <View style={styles.dataContainer}>
       <Text style={styles.dataText}>O que você achou do {route.params.nome}?</Text>
       <View style={styles.dataVontingContainer}>
          <TouchableOpacity style={styles.dataVoting} onPress={mudarTela}>
            <MaterialCommunityIcons name="emoticon-cry-outline" size={32} color="#D71616" />
            <Text style={styles.textVoting}>Péssimo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataVoting} onPress={mudarTela}>
            <Entypo name="emoji-sad" size={30} color="#FF360A" />
            <Text style={styles.textVoting}>Ruim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataVoting} onPress={mudarTela}>
            <Entypo name="emoji-neutral" size={30} color="#FFC632" />
            <Text style={styles.textVoting}>Neutro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataVoting} onPress={mudarTela}>
            <Entypo name="emoji-happy" size={30} color="#37BD6D" />
            <Text style={styles.textVoting}>Bom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataVoting} onPress={mudarTela}>
          <Entypo name="emoji-flirt" size={30} color="#25BC22" />
            <Text style={styles.textVoting}>Excelente</Text>
          </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default ColetarDados;