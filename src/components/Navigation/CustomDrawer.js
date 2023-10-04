import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {


  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View>
          <DrawerItem labelStyle={{color:"#fff"}} label="usuario@dominio.com" />
          <DrawerItem labelStyle={{backgroundColor:"#fff",marginTop:-10, width:"100%", height:3, borderCurve:"circular"}} label="" />
          <DrawerItemList {...props}/>
        </View>
        <View style={styles.sair}>
          <DrawerItem style={styles.sair} icon={()=><Entypo name="log-out" size={20} color="#fff" />} labelStyle={{color:"#fff", marginLeft:-20}} label="Sair"  onPress={()=>props.navigation.popToTop()}/>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
  },
  sair:{
    flex:1,
    marginTop:"100%"
    //justifyContent:"flex-end",
  }
})

export default CustomDrawer;