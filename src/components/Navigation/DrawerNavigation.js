import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import CustomDrawer from './CustomDrawer';
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#2B1D62'}, headerStyle:{backgroundColor:"#2B1D62"},headerTintColor: '#fff'}} drawerContent={(props) => <CustomDrawer {...props}/>}>
      <Drawer.Screen name="Home1" style={{marginLeft:-5}} component={Home} options={{title:"",drawerLabel:"Pesquisas",drawerActiveTintColor:"#fff",drawerIcon:({color, size}) => <AntDesign name="copy1" size={20} color="#fff" style={{marginRight:-20}}/>}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;