import { StyleSheet,View } from "react-native"
import { COLORS, icons, SIZES } from "../../constants"
import dummyData from '../../constants/dummyData'
import ProfileValue from "./ProfileValue"
import LineDivider from '../LineDivider'

//Obtengo usuario hardcodeado
const dummy_profile=dummyData.trendingRecipes[0].author

//Seccion configuracion con Nombre, Email y Password
export const ProfileSection1 = ()=>{
  return(
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.profile}
        label='Name'
        value={dummy_profile.name}
      />

      <LineDivider/>

      <ProfileValue
        icon={icons.email}
        label='E-mail'
        value='matiasviola02@gmail.com'
      />

      <LineDivider/>

      <ProfileValue
        icon={icons.password}
        label='Password'
        value='Updated 2 weeks ago'
      />

      <LineDivider/>
    </View>
  )
}

//Seccion configuracion con Cerrar Sesion
export const ProfileSection2 = ()=>{
  return(
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.cerrarSesion}
        value='Cerrar sesión'
      />
    </View>
  )
}

const styles=StyleSheet.create({
  profileSectionContainer:{
    paddingHorizontal:SIZES.padding,
    marginTop:SIZES.padding,
    borderRadius:SIZES.radius,
    borderWidth:1,
    borderColor:COLORS.gray20
  }
})
