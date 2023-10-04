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
})

export default styles;