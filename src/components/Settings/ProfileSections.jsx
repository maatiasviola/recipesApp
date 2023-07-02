import { StyleSheet,View } from "react-native"
import { COLORS, icons, SIZES } from "../../constants"
import dummyData from '../../constants/dummyData'
import ProfileValue from "./ProfileValue"
import LineDivider from '../LineDivider'
import { useContext } from "react"
import UserContext from "../../Context/UserContext"
import { useNavigation } from "@react-navigation/native"



//Seccion configuracion con Nombre, Email y Password
export const ProfileSection1 = ()=>{
  const {user} = useContext(UserContext)
  
  return(
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.profile}
        label='Nombre'
        value={user.nombre}
      />

      <LineDivider/>

      <ProfileValue
        icon={icons.email}
        label='Mail'
        value={user.mail}
      />

      <LineDivider/>

      <ProfileValue
        icon={icons.password}
        label='Contraseña'
        value='Presiona para actualizar'
      />

      <LineDivider/>
    </View>
  )
}

//Seccion configuracion con Cerrar Sesion
export const ProfileSection2 = ()=>{
  const navigation = useNavigation()
  return(
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.cerrarSesion}
        value='Cerrar sesión'
        onPress={()=>{
          navigation.navigate("Login")
        }}
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
