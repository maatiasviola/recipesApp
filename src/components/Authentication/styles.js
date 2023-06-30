import { StyleSheet } from "react-native"
import { COLORS, SIZES,FONTS } from "../../constants"

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.light,
    padding:SIZES.padding,
    textAlign:'center',
    justifyContent:'space-between'
  },
  
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  
  containerTitle:{
    lineHeight:45,
    color:COLORS.black,
    textAlign:'center',
    ...FONTS.h1
  },
  containerText:{
    marginTop:20,
    marginBottom:8
  },
  buttonContainer:{
    height:55,
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