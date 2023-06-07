import { Text, Image, View,StyleSheet,TouchableOpacity } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

// Cabecera de la pagina "Home"
// "Bienvenida" al usuario

const WelcomeTab = () =>{
  return(
    <View style={styles.welcome}>
      <View style={{flex:1}}>
<<<<<<< HEAD
        <Text style={styles.primaryText}>Hello Luis,</Text>
        <Text style={styles.secondaryText}>What do you want to cook today?</Text>
=======
        <Text style={styles.primaryText}>Hola Santino,</Text>
        <Text style={styles.secondaryText}> ¿Qué te gustaría cocinar hoy?</Text>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
      </View>
      <TouchableOpacity onPress={()=>console.log("Profile")}>
        <Image style={styles.profile} source={require('../../assets/images/dummy_profiles/profile-pic-1.png')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome:{
    flexDirection:'row',
    alignItems:'center',
    height:80,
    marginHorizontal:SIZES.padding
  },
  profile:{
    width:40,
    height:40,
    borderRadius:20
  },
  primaryText:{
    color:COLORS.darkGreen,
    ...FONTS.h2
  },
  secondaryText:{
    marginTop:3,
    color:COLORS.gray,
    ...FONTS.body3
  }
})

export default WelcomeTab