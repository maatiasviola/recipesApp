import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.black
  },
  imageBackground:{
    flex:1,
    justifyContent:'flex-end'
  },
  linearGradientContainer:{
    height:200,
    justifyContent:'flex-end',
    paddingHorizontal:SIZES.padding
  },
  mainHeadingText:{
    width:'80%',
    color:COLORS.white,
    ...FONTS.largeTitle,
    lineHeight:45
  },
  subHeadingContainer:{
    flex:1,
    paddingHorizontal:SIZES.padding
  },
  subHeadingText:{
    marginTop:SIZES.radius,
    width:'70%',
    color:COLORS.gray,
    ...FONTS.body3
  },
  buttonsContainer:{
    flex:1,
    justifyContent:'center'
  },
  loginButton:{
    paddingVertical:18,
    borderRadius:20,
    alignItems:'center'
  },
  signUpButton:{
    marginTop:SIZES.radius,
    paddingVertical:18,
    borderRadius:20,
    borderColor:COLORS.darkLime,
    borderWidth:1,
    alignItems:'center'
  }
})

export default styles