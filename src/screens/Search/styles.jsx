import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  topSearches:{
    marginTop:SIZES.padding
  },
  buttonsContainer:{
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },
  subtitle:{
    marginHorizontal:SIZES.padding,
    ...FONTS.h2
  }
})

export default styles