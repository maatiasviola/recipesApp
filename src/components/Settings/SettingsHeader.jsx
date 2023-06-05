import { StyleSheet, Text, View } from "react-native"
import { COLORS, icons,SIZES,FONTS } from "../../constants"
import IconButton from "../IconButton"

//Titulo seccion de Profile e icono light/dark mode

const SettingsHeader = ()=>{
  return(
    <View style={styles.header}>
      <Text style={{...FONTS.h1}}>Profile</Text>
      <IconButton 
        icon={icons.sun} 
        iconStyle={{tintColor:COLORS.black}}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:SIZES.padding,
    marginTop:20
  },
  darkModeIcon:{
    width:24,
    height:24
  }
})

export default SettingsHeader