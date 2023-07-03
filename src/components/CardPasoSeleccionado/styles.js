import { COLORS, FONTS } from "../../constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:COLORS.gray20,
    borderStyle:'solid',
    paddingVertical:10
  },
  deleteIconContainer:{
    width:24,
    height:24,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  deleteIcon:{
    width:'100%',
    height:'100%'
  },
  titulo:{
    fontWeight:'bold',
    textAlign:'left'
  },
  descripcion:{
    ...FONTS.body4,
    textAlign:'left'
  },
  pasoInfo:{
    flex:1,
    marginLeft:10,
    gap:5,
    textAlign:'left'
  },
  pasoImage:{
    height:48,
    width:48,
    resizeMode:'cover',
  }
})

export default styles