import { StyleSheet } from "react-native"
import { COLORS, SIZES, FONTS } from "../../../constants"
const styles = StyleSheet.create({
  bigContainer:{
    flex:1,
    backgroundColor:COLORS.lightGray,
    paddingHorizontal:SIZES.padding
  },
  authContainer:{
    flex:1,
    width:SIZES.width - (SIZES.padding * 2),
    backgroundColor:COLORS.light,
    padding:SIZES.padding,
    borderRadius:SIZES.radius
  },
  socialButtonsContainer:{
    width:55,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.gray20
  },
  header: {
    width: '100%',
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    textAlign:'center'
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
  containerTitle:{
    width:'60%',
    lineHeight:45,
    color:COLORS.black,
    ...FONTS.h1
  },
  forgotPassword:{
    textAlign:'right',
    color:COLORS.support3,
    marginVertical:SIZES.radius,
    ...FONTS.h4
  },
  buttonContainer:{
    height:55,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary
  },
  buttonLabel:{
    ...FONTS.h3,
    color:COLORS.white
  },
  signUpContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:SIZES.radius
  },
  signUpTitle:{
    ...FONTS.body4,
    color:COLORS.gray30
  },
  signUpButton:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:2
  },
  signUpSubtitle:{
    ...FONTS.body4,
    color:COLORS.primary
  },
  sendCodeButton:{
    height:55,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary,
    marginTop:20
  },
  rememberPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius
  },
  rememberPasswordToggle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.base
  },
  rememberPasswordUnselected: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: COLORS.transparent
  },
  rememberPasswordIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.white
  },
  rememberPasswordText: {
    ...FONTS.body4,
    color: COLORS.gray30
  }
})
export default styles;