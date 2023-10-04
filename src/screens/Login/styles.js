import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:50,
    marginHorizontal:30,
  },
  titleText:{
    color:"#fff",
    fontSize:40,
    fontFamily:"AveriaLibre",
    fontWeight:"400",
  },
  background:{
    width:"100%",
    height:"100%",
    backgroundColor: "#372775",
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