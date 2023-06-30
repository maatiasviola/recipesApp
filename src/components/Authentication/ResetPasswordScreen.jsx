// CSS & Constants
import styles from './styles'
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import { expresiones } from "../../constants/expresiones"

// Hooks
import { useState } from "react"
import { useNavigation, useRoute } from '@react-navigation/native';

// Components
import { Text, View, StyleSheet, Image } from "react-native"
import { Shadow } from "react-native-shadow-2"
import StyledInput from "../../components/Authentication/StyledInput"
import TextButton from "../../components/TextButton"
import IconButton from "../../components/IconButton"
import axios from 'axios'

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  // Contraseñas visibles
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [iguales, setIguales] = useState(false)
  const route = useRoute();
  const { data } = route.params;
  const email = data.email;
  const code = data.cod;


  //Form
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Cuando se envian las contraseñas
  const CambiarClave = () => {
      axios.post('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/recuperarCuenta?email=' + email + '&contrasena=' + password+ '&codigo=' + code)
        .then(response => {
          const validacion = response.data;
          console.log(validacion);
          navigation.navigate("SignIn");
        })
        .catch(error => {
          // Manejar errores de la solicitud o del servidor
          console.error(response.data);
        });
    
  }

  // Valida contraseñas sean identicas
  const validarPassword2 = () => {
    if (password != "") {
      if (password != confirmPassword) {
        console.log("Las contraseñas no coinciden");
      } else {
      setIguales(true);
      CambiarClave();
    }
  }
}

  return (
    <>
      {/* Big Container */}
      <View style={styles.bigContainer}>
        {/* Logo */}
        <Image
          source={images.logo}
          resizeMode='contain'
          style={styles.logo}
        />

        {/* Container */}
        <View style={styles.container}>
          <Shadow>
            <View style={styles.authContainer}>
              {/* Title */}
              <Text style={styles.title}>
                Cambiar contraseña
              </Text>

              {/* Password */}
              <StyledInput
                containerStyle={{
                  borderRadius: SIZES.radius
                }}
                placeholder='Nueva contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                expresionRegular={expresiones.password}
                secureTextEntry={!isVisible}
                appendComponent={
                  <IconButton
                    icon={isVisible ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor: COLORS.gray
                    }}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                }
              />

              {/* Confirm Password */}
              <StyledInput
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius
                }}
                placeholder='Confirmar contraseña'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                leyendaError="Las contraseñas deben coincidir"
                secureTextEntry={!isVisible2}
                appendComponent={
                  <IconButton
                    icon={isVisible2 ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor: COLORS.gray
                    }}
                    onPress={() => setIsVisible2(!isVisible2)}
                  />
                }
              />

              {/* Button */}
              <TextButton
                value="Confirmar"
                containerStyle={styles.buttonContainer}
                onPress={validarPassword2}
                labelStyle={styles.buttonLabel}
              />
            </View>
          </Shadow>
        </View>
      </View>
    </>
  )
}

export default ResetPasswordScreen;
