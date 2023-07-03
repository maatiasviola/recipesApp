import { StyleSheet } from "react-native"
import {COLORS,FONTS,SIZES} from '../../../constants'

const styles = StyleSheet.create({
  
  containerTitle:{
    lineHeight:45,
    color:COLORS.black,
    textAlign:'center',
    ...FONTS.h1
  },
  containerText:{
    marginVertical:10,
    textAlign:'center'
  },
  buttonContainer:{
    height:36,
    width:120,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary,
    marginTop:20
  },
  buttonLabel:{
    ...FONTS.h3,
    color:COLORS.white
  }
})

export default styles
  