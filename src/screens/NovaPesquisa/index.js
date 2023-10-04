import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';
import Input from "../../components/LoginForm/Input"
import { AntDesign } from '@expo/vector-icons';
import GreenButton from "../../components/Buttons/GreenButton/index";
import DateTimePicker from '@react-native-community/datetimepicker';

const NovaPesquisa = ({navigation}) => {
  const [novoNome,setNovoNome] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [isPickerShow, setIsPickerShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [dateFormatted, setDateFormatted] = React.useState("");
  const [missingCamps, setMissingCamps] =React.useState(null);

  function verificaCampos(){
    if(novoNome===null || date===null || image===null){
      setMissingCamps("Preencha todos os campos");
      return
    }
  }

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const formatDate = (value) =>{
    let date1 = new Date(value);
    let year = date1.getFullYear();
    let month = date1.getMonth() + 1;
    let day = date1.getDate();

    return `${day}/${month}/${year}`
  }

  const onChange = (event, value) => {
    setDate(value);
    const dateFormatted = formatDate(value);
    setDateFormatted(dateFormatted);
    console.log("Aqui");
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.newContainer}>
        <Input texto="Nome" value={novoNome} onChangeText={setNovoNome} placeholder="Nome" keyboardType="default" />
        <View style={styles.newData}>
          <Text style={styles.newDataText}>Data</Text>
            <TouchableOpacity style={styles.dataCamp} onPress={()=>showPicker()}>
              <TextInput style={styles.inputHomeText} value={dateFormatted} editable={false}  selectTextOnFocus={false} keyboardType="default" placeholderTextColor="lightgray" />
              <AntDesign style={styles.dataIcon} name="calendar" size={24} color="#8B8B8B" />
            </TouchableOpacity>
        </View>
        {isPickerShow && (<DateTimePicker mode={'date'} format="DD-MM-YYYY" display='pinner' value={date}   minDate="01-01-1930" maxDate="01-01-2030" onChange={onChange}/>)}
        <Text style={styles.newImageText}>Imagem</Text>
        <TextInput style={styles.inputImage} value={image} onChangeText={setImage} placeholder=" Câmera/ Galeria de imagens" keyboardType="default" placeholderTextColor="lightgray"/>
        {missingCamps && <Text style={styles.errorMessage}>{missingCamps}</Text>}
        <GreenButton texto="CADASTRAR"  onPress={verificaCampos}/>
      </View>
    </View>
  )
}

export default NovaPesquisa;