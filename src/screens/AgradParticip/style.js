import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:"100%",
    backgroundColor: "#372775",
  },
  thanksContainer:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"50%",
  },
  thanksText:{
    fontFamily:"AveriaLibre",
    color:"#fff",
    fontWeight:"400",
    fontSize:22,
    alignSelf:"center",
    textAlign:"center",
    marginVertical:20,
  },
})

export default styles;