// CSS & Constants
import styles from './styles'
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import { expresiones } from "../../constants/expresiones"

// Hooks
import { useState } from "react"
import { useNavigation } from '@react-navigation/native';

// Components
import { Text,View, StyleSheet,Image } from "react-native"
import { Shadow } from "react-native-shadow-2"
import StyledInput from "../../components/Authentication/StyledInput"
import TextButton from "../../components/TextButton"
import ModalPopUp from "../../components/ModalPopUp"
import IconButton from "../../components/IconButton"

const ForgotPassword = () => {

  const navigation = useNavigation();

  // Modal que informa contraseña fue cambiada
  const [exitoCambioContraseña,setExitoCambioContraseña] = useState(false)
  const [alertModalVisible,setAlertModalVisible] = useState(false)
  
  // Contraseñas visibles
  const [isVisible,setIsVisible] = useState(false)
  const [isVisible2,setIsVisible2] = useState(false)

  //Form
  const [password,setPassword] = useState({campo:"",valido:null})
  const [confirmPassword,setConfirmPassword] = useState({campo:"",valido:null})

  // Valida contraseñas sean identicas
  const validarPassword2 = () =>{
      if(password.campo.length > 0){
        if(password.campo !== confirmPassword.campo){
          setConfirmPassword((prevState) => {
            return {...prevState, valido: 'false'}
          });
        } else {
          setConfirmPassword((prevState) => {
            return {...prevState, valido: 'true'}
          });
        }
      }
  }

  // Cuando se envian las contraseñas
  const handleSubmit = () =>{
    // verificar password
    if (
      password.valido === 'false' || 
      confirmPassword.valido === 'false' ||
      password.valido === null ||
      confirmPassword.valido === null  
    ){
      {/* Datos incorrectos */}
      setAlertModalVisible(true)
    }else{
      {/* Datos correctos */}

      // hacer el post a bdd
      
      setExitoCambioContraseña(true)
      setAlertModalVisible(true)
    }
  }

  // Cuando se cierra el modal
  const handlePress = () => {
    if(exitoCambioContraseña){
      {/* Si fue exitoso el cambio */}
      setAlertModalVisible(false) 
      navigation.navigate("SignIn")
    }else{
      setAlertModalVisible(false)
      setPassword({campo:'',valido:null})
      setConfirmPassword({campo:'',valido:null})
    }
  }

  return(
    <>
      {/* Modal */}
      <ModalPopUp 
        visible={alertModalVisible} 
        setVisible={setAlertModalVisible}
        texto= {exitoCambioContraseña 
          ? "Contraseña cambiada con éxito" 
          : "La contraseña no fue cambiada. Pruebe nuevamente"
        }
        imagen={exitoCambioContraseña ? images.success : images.error}
        onPress={()=>handlePress()}
      />
      
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
                  borderRadius:SIZES.radius
                }}
                placeholder='Nueva contraseña'
                estado={password}
                cambiarEstado={setPassword}
                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                expresionRegular={expresiones.password}
                secureTextEntry={!isVisible}
                appendComponent={
                  <IconButton
                    icon={isVisible ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor:COLORS.gray
                    }}
                    onPress={()=>setIsVisible(!isVisible)}
                  />
                }
              />

              {/* Confirm Password */}
              <StyledInput
                containerStyle={{
                  marginTop:SIZES.radius,
                  borderRadius:SIZES.radius
                }}
                placeholder='Confirmar contraseña'
                estado={confirmPassword}
                cambiarEstado={setConfirmPassword}
                leyendaError="Las contraseñas deben coincidir"
                funcion={validarPassword2}
                secureTextEntry={!isVisible2}  
                appendComponent={
                  <IconButton
                    icon={isVisible2 ? icons.eye_off : icons.eye}
                    iconStyle={{
                      tintColor:COLORS.gray
                    }}
                    onPress={()=>setIsVisible2(!isVisible2)}
                  />
                }
              />
                
              {/* Button */}
              <TextButton
                value="Confirmar"
                containerStyle={{
                  height:55,
                  borderRadius:SIZES.radius,
                  backgroundColor:COLORS.primary,
                  marginTop:20
                }}
                onPress={handleSubmit}
                labelStyle={{
                  ...FONTS.h3,
                  color:COLORS.white
                }}
              />
            </View>
          </Shadow>  
        </View>
      </View>
    </>  
  )
}

export default ForgotPassword