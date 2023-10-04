import React from 'react';
import styles from './style';
import { View, Text} from 'react-native';
import Input from "../../components/LoginForm/Input";
import GreenButton from "../../components/Buttons/GreenButton/index";
import { validateEmail } from '../../utils/validation';;

const RecuperarSenha = ({navigation}) => {
  const [validEmail, setValidEmail] = React.useState(null);
  const [errorEmail, setErrorEmail] = React.useState(null);

  function validaEmail(){
    if(validEmail===null){
      setErrorEmail("Preencha o campo de email");
      setValidEmail(null);
      return;
    }else if(!validateEmail(validEmail,setErrorEmail)){
      return;
    }else if(validateEmail(validEmail,setErrorEmail)){
      navigation.pop();
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.loginFormContainer}>
        <Input texto="E-mail" value={validEmail} onChangeText={setValidEmail} placeholder="joao.gomes@hotmail.com" keyboardType="email-address" />
        {errorEmail &&<Text style={styles.errorMessage}>{errorEmail}</Text>}
        <GreenButton texto="RECUPERAR" onPress={validaEmail}/>
      </View>
    </View>
  )
}

export default RecuperarSenha