import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  scrollViewContainer:{
    paddingHorizontal:SIZES.padding,
    paddingBottom:150
  }
})

export default styles