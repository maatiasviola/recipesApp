<<<<<<< Updated upstream
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
=======
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import dummyData from "../../constants/dummyData";
import ProfileValue from "./ProfileValue";
import LineDivider from "../LineDivider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// Obtengo usuario hardcodeado
const dummy_profile = dummyData.trendingRecipes[0].author;

const handleLogout = async (navigation) => {
  try {
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("password");
    await AsyncStorage.removeItem("rememberPassword");
    // Otras acciones de limpieza o reinicio de estado, si es necesario
    navigation.navigate("SignIn");
  } catch (error) {
    console.log("Error al cerrar sesión:", error);
  }
};

// Seccion configuracion con Nombre, Email y Password
export const ProfileSection1 = () => {
  return (
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.profile}
        label="Name"
        value={dummy_profile.name}
>>>>>>> Stashed changes
      />

      <LineDivider />

      <ProfileValue
        icon={icons.email}
<<<<<<< Updated upstream
        label='Mail'
        value={user.mail}
=======
        label="E-mail"
        value="matiasviola02@gmail.com"
>>>>>>> Stashed changes
      />

      <LineDivider />

      <ProfileValue
        icon={icons.password}
<<<<<<< Updated upstream
        label='Contraseña'
        value='Presiona para actualizar'
=======
        label="Password"
        value="Updated 2 weeks ago"
>>>>>>> Stashed changes
      />

      <LineDivider />
    </View>
  );
};

<<<<<<< Updated upstream
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
=======
// Seccion configuracion con Cerrar Sesion
export const ProfileSection2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileSectionContainer}>
      <TouchableOpacity
        onPress={() => handleLogout(navigation)}
        style={styles.logoutButton}
      >
        <ProfileValue icon={icons.cerrarSesion} value="Cerrar sesión" />
      </TouchableOpacity>
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.gray20,
  },
});

