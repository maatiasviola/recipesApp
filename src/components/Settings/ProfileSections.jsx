import { StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import dummyData from "../../constants/dummyData";
import ProfileValue from "./ProfileValue";
import LineDivider from "../LineDivider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";


// Seccion configuracion con Nombre, Email y Password
export const ProfileSection1 = () => {
  const {user} = useContext(UserContext)
  return (
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.profile}
        label="Name"
        value={user.nombre}
      />

      <LineDivider />

      <ProfileValue
        icon={icons.email}
        label='Mail'
        value={user.mail}
      />

      <LineDivider />

      <ProfileValue
        icon={icons.password}
        label='Contraseña'
        value='Presiona para actualizar'
      />

      <LineDivider />
    </View>
  );
};

//Seccion configuracion con Cerrar Sesion
export const ProfileSection2 = ()=>{
  const navigation = useNavigation()
  const handleLogout = async () => {
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
  return(
    <View style={styles.profileSectionContainer}>
      <ProfileValue
        icon={icons.cerrarSesion}
        value='Cerrar sesión'
        onPress={handleLogout}
      />
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

