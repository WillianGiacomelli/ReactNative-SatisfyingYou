import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:"100%",
    backgroundColor:"#372775",
  },
  container:{
    maxHeight:"100%",
    marginBottom:14,
    marginTop:40,
  },
  homeContainer:{
    width:"90%",
    height:"auto",
    marginHorizontal:20,
  },
  inputHomeText:{
    backgroundColor:"#fff",
    fontFamily:"AveriaLibre",
    color:"#8B8B8B",
    width:"100%",
    paddingLeft:25,
    zIndex:1,
  },
  homeSearchInput:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:30
  },
  homeSearchIcon:{
    zIndex:80,
    marginLeft:5,
    marginRight:-20
  }
})

export default styles;