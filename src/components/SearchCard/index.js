import React from 'react'
import styles from "./styles";
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Svg, { Path } from "react-native-svg";

const SearchCard = ({navigation, nome, data, image, d, fill}) => {
  return (
    <View>
        <TouchableOpacity style={styles.card} onPress={()=> navigation.push("AcoesPesquisa",{
              nome,
              data
            })} >
          {d ?  <Svg width={118} height={107} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d={d} fill={fill}/>
                </Svg> : <Image></Image> }
          <Text style={styles.cardText}>{nome}</Text>
          <Text style={styles.cardSubtitle}>{data}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SearchCard