import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';



const AcoesPesquisa = ({navigation, route}) => {

  return (
    <View style={styles.background}>
      <View style={styles.acoesContainer}>
        <View style={styles.acoes}>
          <TouchableOpacity style={styles.itemAcoes} onPress={()=>navigation.push("ModificarPesquisa", {
            nome:route.params.nome,
            data:route.params.data,
          })}>
            <MaterialCommunityIcons name="playlist-edit" size={60} color="#fff" />
            <Text style={styles.textAcoes}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemAcoes} onPress={()=>navigation.push("ColetarDados",{
            nome:route.params.nome,
          })}>
            <Octicons name="checklist" size={60} color="#fff" />
            <Text style={styles.textAcoes}>Coletar Dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemAcoes} onPress={()=>navigation.push("Relatorio")}>
            <AntDesign name="piechart" size={60} color="#fff" />
            <Text style={styles.textAcoes}>Relatório</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AcoesPesquisa;