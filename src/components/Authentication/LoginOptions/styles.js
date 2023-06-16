import { StyleSheet } from "react-native"
import { COLORS, SIZES,FONTS } from "../../../constants"

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:SIZES.padding,
  },
  headerText:{
    ...FONTS.body4,
    color:COLORS.black
  },
  iconsContainer:{
    flexDirection:'row',
    marginTop:SIZES.base
  },
  socialButtonsContainer:{
    width:55,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.gray20
  },
  
})

export default styles