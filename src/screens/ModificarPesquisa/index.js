import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import styles from './style';
import Input from "../../components/LoginForm/Input"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import GreenButton from "../../components/Buttons/GreenButton/index";
import DateTimePicker from '@react-native-community/datetimepicker';

const ModificarPesquisa = ({navigation,route}) => {
  const [novoNome,setNovoNome] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [isPickerShow, setIsPickerShow] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [dateFormatted, setDateFormatted] = React.useState("");
  const [modalVisible,setModalVisible] = React.useState(false);

  React.useEffect(()=>{

    if(route){
      nome = route.params.nome;
      setNovoNome(nome);
      data = route.params.data;
      setDate(data);
    }
  },[])

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
        <Input texto="Nome" value={novoNome} onChangeText={setNovoNome} placeholder={route.params.nome} keyboardType="default" />
        <View style={styles.newData}>
          <Text style={styles.newDataText}>Data</Text>
          <TouchableOpacity style={styles.dataCamp} onPress={()=>showPicker()}>
              <TextInput style={styles.inputHomeText} value={dateFormatted} editable={false}  selectTextOnFocus={false} keyboardType="default" placeholderTextColor="lightgray" />
              <AntDesign style={styles.dataIcon} name="calendar" size={24} color="#8B8B8B" />
            </TouchableOpacity>
        </View>
        {isPickerShow && (<DateTimePicker mode='date' format="DD-MM-YYYY" display='pinner' value={date}   minDate="01-01-1930" maxDate="01-01-2030" onChange={onChange}/>)}
        <Text style={styles.newImageText}>Imagem</Text>
        <TextInput style={styles.inputImage} value={image} onChangeText={setImage} placeholder=" Câmera/ Galeria de imagens" keyboardType="default" placeholderTextColor="lightgray"/>
        <View style={styles.btntrash}>
         <GreenButton texto="SALVAR"  onPress={()=> navigation.pop()}/>
         <TouchableOpacity style={styles.trash} onPress={()=> setModalVisible(!modalVisible)}>
          <Ionicons  name="trash-outline" size={30} color="#fff" />
          <Text style={styles.trashText}>Apagar</Text>
         </TouchableOpacity>
        </View>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centerModal}>
          <View style={styles.backgroundModal}>
            <Text style={styles.textModal}>Tem certeza que deseja apagar essa pesquisa?</Text>
            <View style={styles.buttonsModal}>
              <TouchableOpacity style={styles.buttonConfirm} onPress={()=> navigation.navigate("Home")}>
                <Text style={styles.buttonText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCancel} onPress={()=> setModalVisible(!modalVisible)}>
                <Text style={styles.buttonText}>CANCELAR</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
        </Modal>

      </View>
    </View>
  )
}

export default ModificarPesquisa;