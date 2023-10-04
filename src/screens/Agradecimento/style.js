import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:"100%",
    backgroundColor: "#372775",
  },
  thanksContainer:{
    width:"100%",
    height:"auto",
    marginTop:StatusBar.currentHeight + 20,
    marginHorizontal:20,
  },
  thanksText:{
    fontFamily:"AveriaLibre",
    color:"#fff",
    fontWeight:"400",
    fontSize:22,
    textAlign:"center",
    flexWrap:"wrap",
  },
  dataVontingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  dataVoting:{
    marginTop:60,
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"nowrap",
  },
  textVoting:{
    fontFamily:"AveriaLibre",
    color:"#fff",
    fontWeight:"400",
    fontSize:18,
  }
})

export default styles;