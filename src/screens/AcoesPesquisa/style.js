import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:"100%",
    backgroundColor: "#372775",
  },
  acoesContainer:{
    width:"90%",
    height:"auto",
    marginHorizontal:20,
  },
  acoes:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"nowrap",
    width:"100%",
    height:"100%",
  },
  itemAcoes:{
    backgroundColor:"#312464",
    width:"30%",
    height:"20%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    paddingVertical:20,
  },
  textAcoes:{
    color:"#fff",
    fontFamily:"AveriaLibre",
    fontWeight:"400",
    fontSize:20,
    marginVertical:10,
  }
})

export default styles;