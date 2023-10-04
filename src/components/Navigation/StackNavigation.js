import 'react-native-gesture-handler';
import Login from '../../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import NovaConta from '../../screens/NovaConta';
import RecuperarSenha from '../../screens/RecuperarSenha';
import NovaPesquisa from '../../screens/NovaPesquisa';
import DrawerNavigation from "./DrawerNavigation"
import AcoesPesquisa from '../../screens/AcoesPesquisa';
import ModificarPesquisa from '../../screens/ModificarPesquisa';
import ColetarDados from '../../screens/ColetarDados';
import AgradParticip from '../../screens/AgradParticip';
import Relatorio from '../../screens/Relatorio';

const Stack = createStackNavigator();

function StackNavigation({route}) {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="NovaConta" component={NovaConta} options={{title:"Nova Conta", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{title:"Recuperar Senha", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
      <Stack.Screen name="Home" component={DrawerNavigation} options={{headerShown:false}}/>
      <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{title:"Nova Pesquisa", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
      <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{title:"Pesquisa", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
      <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{title:"Modificar Pesquisa", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
      <Stack.Screen name="ColetarDados" component={ColetarDados} options={{headerShown:false}}/>
      <Stack.Screen name="AgradParticip" component={AgradParticip} options={{headerShown:false}}/>
      <Stack.Screen name="Relatorio" component={Relatorio} options={{title:"Relatório", headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: '#fff'}}/>
    </Stack.Navigator>
  );
}

export default StackNavigation;