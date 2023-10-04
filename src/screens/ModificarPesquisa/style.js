import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:"100%",
    backgroundColor: "#372775",
  },
  newContainer:{
    width:"90%",
    height:"auto",
    marginHorizontal:20,
  },
  errorMessage:{
    color:"#FD7979",
    fontFamily:"AveriaLibre",
    width:"90%",
    justifyContent:"center",
    marginLeft:20,
    fontSize: 15,
  },
  newDataText:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontSize: 20,
    fontWeight:"400",
    marginBottom:10,
    marginTop:25,
    marginHorizontal:20,
  },
  dataCamp:{
    flexDirection:"row",
    marginHorizontal:20,
    alignItems:"center"
  },
  inputHomeText:{
    backgroundColor:"#fff",
    fontFamily:"AveriaLibre",
    color:"#8B8B8B",
    width:"100%",
    paddingLeft:25,
    zIndex:1,
    width:"100%",
    paddingVertical:10,
  },
  dataIcon:{
    zIndex:80,
    marginLeft:-30
  },
  newImageText:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontSize: 20,
    fontWeight:"400",
    marginBottom:10,
    marginTop:25,
    marginHorizontal:20,
  },
  inputImage:{
    backgroundColor:"#fff",
    fontFamily:"AveriaLibre",
    color:"#8B8B8B",
    width:"90%",
    paddingLeft:25,
    width:"90%",
    paddingRight:10,
    paddingVertical:20,
    marginHorizontal:20,
  },
  btntrash:{
    flexDirection:"column",
  },
  trash:{
    alignSelf:"flex-end",
    alignItems:"center",
    paddingRight:20
  },
  trashText:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontSize:15,
  },
  centerModal:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    height:"auto",
  },
  backgroundModal:{
    backgroundColor:"#2B1F5C",
    padding:20,
    justifyContent:"center",
    alignItems:"center",
  },
  textModal:{
    textAlign:"center",
    fontFamily:"AveriaLibre",
    color:"#fff",
    justifyContent:"center",
    fontSize:20,
    marginVertical:20,
  },
  buttonsModal:{
    flexDirection:"row",
    marginVertical:30,
  },
  buttonConfirm:{
    justifyContent:"center",
    alignItems:"center",
    width:"40%",
    height:"auto",
    backgroundColor:"#FF8383",
    border:"1px solid #37BD6D",
    paddingHorizontal: 20,
    paddingVertical:14,
    marginRight:10
  },
  buttonText:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontSize: 20,
    fontWeight:"400",
  },
  buttonCancel:{
    justifyContent:"center",
    alignItems:"center",
    width:"40%",
    height:"auto",
    backgroundColor:"#3F92C5",
    border:"1px solid #37BD6D",
    paddingHorizontal: 20,
    paddingVertical:14,
  },
})

export default styles;