import { StyleSheet } from "react-native"
import {COLORS,FONTS,SIZES} from '../../constants/theme'

const styles = StyleSheet.create({
  bigContainer:{
    flex:1,
    backgroundColor:COLORS.lightGray,
    paddingHorizontal:SIZES.padding
  },
  logo:{
    alignSelf:'center',
    marginTop: SIZES.padding * 2,
    width:50,
    height:50
  },
  container:{
    marginTop:SIZES.padding,
    height:SIZES.height * 0.55
  },
  authContainer:{
    flex:1,
    width:SIZES.width - (SIZES.padding * 2),
    backgroundColor:COLORS.light,
    padding:SIZES.padding,
    borderRadius:SIZES.radius
  },
  title:{
    width:'60%',
    lineHeight:45,
    color:COLORS.black,
    ...FONTS.h1
  }
  
})

export default styles