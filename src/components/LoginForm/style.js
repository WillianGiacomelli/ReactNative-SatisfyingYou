import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginFormContainer:{
    flexDirection:"column"
  },
  inputLoginContainer:{
    width:"90%",
    height:"auto",
    marginHorizontal:20,
  },
  loginText:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontSize: 20,
    fontWeight:"400",
    marginBottom:10,
    marginTop:20,
  },
  inputLoginText:{
    backgroundColor:"#fff",
    paddingVertical:10,
    fontFamily:"AveriaLibre",
    color:"#3F92C5",
    paddingHorizontal:5,
  },
  errorMessage:{
    color:"#FD7979",
    fontFamily:"AveriaLibre",
    width:"90%",
    justifyContent:"center",
    marginLeft:20,
    fontSize: 15,
  }
})


export default styles;