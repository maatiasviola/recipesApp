// CSS & Constants
import styles from './styles'
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants"
import { expresiones } from "../../../constants/expresiones";
// Hooks & Services
import { useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import userService from '../../../Servicios/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Components
import { TouchableOpacity, Text, View, Image, CheckBox } from "react-native"
import { Shadow } from "react-native-shadow-2"
import StyledInput from "../StyledInput"
import IconButton from "../../IconButton"
import TextButton from "../../TextButton"
import ModalPopUp from "../../ModalPopUp"
import LoginOption from '../LoginOptions/LoginOption';
import { useContext } from 'react';
import UserContext from '../../../Context/UserContext'
const SignIn = () => {
  const { setUser } = useContext(UserContext);
  // modal error credenciales invalidas
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [leyendaErrorCorreoRecupero, setLeyendaErrorCorreoRecupero] = useState("El correo solo puede contener letras, números, puntos, guiones y guion bajo.");
  // modal y estado cambio de contraseña
  const [requestModalVisible, setRequestModalVisible] = useState(false);
  const [emailRequest, setEmailRequest] = useState({ campo: "", valido: null });
  // contraseña visible
  const [isVisible, setIsVisible] = useState(false);
  // form
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigation = useNavigation(); // navegar entre pantallas
  const handlePressLogin = () => {
    if (email.valido === 'true' && password.valido === 'true') {
      userService.login(email.campo, password.campo)
        .then(response => {
          setUser(response)
          saveSessionData(); // Guardar los datos de sesión
          navigation.navigate("Home");
        })
        .catch(() => {
          setErrorModalVisible(true)
          setEmail({ campo: '', valido: null })
          setPassword({ campo: '', valido: null })
        });
    } else {
      setEmail({ campo: '', valido: null })
      setPassword({ campo: '', valido: null })
    }
  };
  /* Enviar código cambio de contraseña */
  const handlePressSendCode = () => {
    if (emailRequest.valido === 'true') {
      setRequestModalVisible(false)
      navigation.navigate("CodeVerification", { mail: emailRequest })
    } else {
      setEmailRequest({ campo: '', valido: 'false' })
      setLeyendaErrorCorreoRecupero("Correo mal ingresado")
    }
  };
  useEffect(() => {
    // Recuperar datos de sesión almacenados si la opción de recordar contraseña está activada
    retrieveSessionData();
  }, []);
  const retrieveSessionData = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      const storedRememberPassword = await AsyncStorage.getItem('rememberPassword');
      if (storedRememberPassword === 'true') {
        setEmail({ campo: storedUsername, valido: 'true' });
        setPassword({ campo: storedPassword, valido: 'true' });
        setRememberPassword(true);
      }
    } catch (error) {
      console.log('Error retrieving session data:', error);
    }
  };
  const saveSessionData = async () => {
    console.log("Contraseña guardada")
    try {
      await AsyncStorage.setItem('username', email.campo);
      await AsyncStorage.setItem('password', password.campo);
      await AsyncStorage.setItem('rememberPassword', rememberPassword.toString());
      console.log(AsyncStorage)
    } catch (error) {
      console.log('Error saving session data:', error);
    }
  };
  const handleToggleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
  };
  return (
    <>
      {/* Modal Error Credenciales Incorrectas */}
      <ModalPopUp
        visible={errorModalVisible}
        setVisible={setErrorModalVisible}
        texto="Credenciales Incorrectas"
        imagen={images.error}
      />
      {/* Modal Email Request Forgot Password */}
      <ModalPopUp
        visible={requestModalVisible}
        setVisible={setRequestModalVisible}
        titulo="¿Dónde vas a recibir el código?"
      >
        {/* Email */}
        <StyledInput
          containerStyle={{
            borderRadius: SIZES.radius
          }}
          placeholder='Email'
          estado={emailRequest}
          cambiarEstado={setEmailRequest}
          leyendaError={leyendaErrorCorreoRecupero}
          expresionRegular={expresiones.correo}
          icon={icons.email_2}
        />
        {/* Button */}
        <TextButton
          value="Enviar código"
          containerStyle={styles.sendCodeButton}
          onPress={handlePressSendCode}
          labelStyle={{
            ...FONTS.h3,
            color: COLORS.white
          }}
        />
      </ModalPopUp>
      {/* Container */}
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
              <Text style={styles.containerTitle}>
                Inicia sesión para continuar
              </Text>
              {/* Email */}
              <StyledInput
                containerStyle={{
                  borderRadius: SIZES.radius
                }}
                placeholder='Email'
                estado={email}
                cambiarEstado={setEmail}
                leyendaError="El correo solo puede contener letras, números, puntos, guiones y guion bajo."
                expresionRegular={expresiones.correo}
                icon={icons.email_2}
              />
              {/* Password */}
              <StyledInput
                containerStyle={{
                  marginTop: SIZES.radius,
                  borderRadius: SIZES.radius
                }}
                placeholder='Contraseña'
                estado={password}
                cambiarEstado={setPassword}
                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                expresionRegular={expresiones.password}
                secureTextEntry={!isVisible}
                icon={icons.lock_2}
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
              {/* Remember Password */}
              <View style={styles.rememberPasswordContainer}>
                    <CheckBox
                         value={rememberPassword}
                          onValueChange={handleToggleRememberPassword}
                        style={styles.rememberPasswordToggle}
                         />
                        <Text style={styles.rememberPasswordText}>
                                 Recordar contraseña
                                    </Text>
                           </View>
              {/* Forgot password ? */}
              <TouchableOpacity
                onPress={() => setRequestModalVisible(true)}
              >
                <Text style={styles.forgotPassword}>
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
              {/* Button */}
              <TextButton
                value="Iniciar sesión"
                containerStyle={styles.buttonContainer}
                onPress={handlePressLogin}
                labelStyle={styles.buttonLabel}
              />
            </View>
          </Shadow>
          {/* Dont have account ? */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle}>¿No tienes una cuenta?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.replace('SignUp')}
            >
              <Text style={styles.signUpSubtitle}>Crea una nueva cuenta</Text>
            </TouchableOpacity>
          </View>
          {/* Login con Twitter, Google, Linkedin */}
          <LoginOption />
        </View>
      </View>
    </>
  );
};
export default SignIn;