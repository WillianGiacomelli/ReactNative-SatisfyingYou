import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Input from '../../components/LoginForm/Input';
import GreenButton from '../../components/Buttons/GreenButton';
import BlueButton from '../../components/Buttons/BlueButton';
import BabyButton from '../../components/Buttons/BabyButton';
import { validateEmail } from '../../utils/validation';

const Login = ({navigation}) => {

  React.useEffect(()=>{
    setEmail(null);
    setPassword(null);
  },[])

  const [email,setEmail] = React.useState(null);
  const [password,setPassword] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  function handleLogin(){
    if(email===null || password===null){
      setErrorMessage("Preencha os campos de email e senha");
      setEmail(null);
      setPassword(null);
      return;
    }else if(!validateEmail(email,setErrorMessage)){
      return;
    }else if(validateEmail(email,setErrorMessage)){
      navigation.push("Home");
      setErrorMessage(null)
    }else{
      setErrorMessage("Email e/ou senha incorretos");
    }
  }

  function createAccount(){
    navigation.push("NovaConta");
  }

  function resetarSenha(){
    navigation.push("RecuperarSenha");
  }

  return (
    <View>
      <View style={styles.background}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Satisfying.you </Text>
          <MaterialIcons style={{marginLeft:10}} name="sentiment-satisfied-alt" size={50} color="#fff" />
        </View>
        <View>
        <View style={styles.loginFormContainer}>
        <Input texto="E-mail" value={email} onChangeText={setEmail} placeholder="joao.gomes@hotmail.com" keyboardType="email-address" />
        <Input texto="Senha" value={password} onChangeText={setPassword} placeholder="**********" keyboardType="default" secureTextEntry={true}/>
        {errorMessage &&<Text style={styles.errorMessage}>{errorMessage}</Text>}
        <GreenButton texto="Entrar" onPress={handleLogin}/>
        <View style={{marginTop:30}}>
          <BlueButton texto="Criar minha conta" onPress={createAccount}/>
          <BabyButton texto="Esqueci minha senha" onPress={resetarSenha}/>
        </View>
      </View>
        </View>
      </View>
    </View>
  )
}



export default Login