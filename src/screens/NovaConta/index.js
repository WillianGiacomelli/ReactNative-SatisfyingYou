import React from 'react'
import { View, Text} from 'react-native';
import Input from "../../components/LoginForm/Input"
import GreenButton from "../../components/Buttons/GreenButton/index"
import styles from './style';
import { validateEmail } from '../../utils/validation';

const NovaConta = ({navigation}) => {
  const [email,setEmail] = React.useState(null);
  const [password,setPassword] = React.useState(null);
  const [passwordAgain,setPasswordAgain] = React.useState(null);
  const [errorMessageCreate, setErrorMessageCreate] = React.useState(null);

  function validaSenha(){
    if(email===null && password===null){
      setErrorMessageCreate("Preencha os campos de email e senha");
      setEmail(null);
      setPassword(null);
      return;
    }else if(password != passwordAgain){
      setErrorMessageCreate("O campo repetir senha difere da senha");
      return
    }else if(!validateEmail(email,setErrorMessageCreate)){
      return;
    }else if(validateEmail(email,setErrorMessageCreate) && password === passwordAgain){
      navigation.pop();
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.loginFormContainer}>
        <Input texto="E-mail" value={email} onChangeText={setEmail} placeholder="joao.gomes@hotmail.com" keyboardType="email-address" />
        <Input texto="Senha" value={password} onChangeText={setPassword} placeholder="**********" keyboardType="default" secureTextEntry={true}/>
        <Input texto="Repetir Senha" value={passwordAgain} onChangeText={setPasswordAgain} placeholder="**********" keyboardType="default" secureTextEntry={true}/>
        {errorMessageCreate &&<Text style={styles.errorMessage}>{errorMessageCreate}</Text>}
        <GreenButton texto="CADASTRAR" onPress={validaSenha}/>
      </View>
    </View>
  )
}

export default NovaConta;