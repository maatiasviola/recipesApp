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
    marginTop:20,
    marginBottom:8,
    textAlign:'center'
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
  },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
},
placeholderStyle: {
    fontSize: 16,
},
selectedTextStyle: {
    fontSize: 14,
},
iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
    height: 40,
    fontSize: 16,
},
icon: {
    marginRight: 5,
},
item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
},
textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
},
})

export default styles
  