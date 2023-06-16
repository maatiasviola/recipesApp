// CSS & Constants
import styles from './styles'
import { images, SIZES } from "../../constants"
import { expresiones } from "../../constants/expresiones";

// Hooks 
import { useState,useEffect } from "react"
import { useNavigation } from '@react-navigation/native';

// Components
import { Text,View,Image } from "react-native"
import { Shadow } from "react-native-shadow-2"
import StyledInput from "../../components/Authentication/StyledInput"
import TextButton from "../../components/TextButton"
import ModalPopUp from "../../components/ModalPopUp"

const SignUpCodeVerification = ({route}) => {

  // Modal error codigo invalido
  const [errorModalVisible,setErrorModalVisible] = useState(false)
  
  // Form
  const [code,setCode] = useState({campo:"",valido:null})

  const navigation = useNavigation();

  // obtengo el mail pasado por parametro
  const {mail} = route.params

  useEffect(()=>{
    console.log("mail: ",mail)
    //hacer el post para enviar el mail con el codigo
  })

  {/* Cuando ingresa codigo el usuario */}
  const handleSubmit = () =>{
    // verificar codigo
    if(code.valido==='true'){
      // hacer el check con la bdd --> si todo bien entonces...
      navigation.navigate("ForgotPassword")

      // --> si todo mal
      setErrorModalVisible(true)
      setCode({campo:'',valido:null})
    }else{
      setErrorModalVisible(true)
      setCode({campo:'',valido:null})
    }
  }

  return(
    <>
      {/* Modal */}
      <ModalPopUp 
        visible={errorModalVisible} 
        setVisible={setErrorModalVisible}
        texto="Código inválido. Proba a ingresarlo otra vez"
        imagen={images.error}
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
              <Text style={styles.containerTitle}>
                Recuperación de la cuenta
              </Text>

              {/* Texto */}
              <Text style={styles.containerText}>
                Enviamos un código de 6 digitos a tu dirección de correo electrónico. 
                Ingresa el código para continuar el proceso de cambio de contraseña.
              </Text>

              {/* Code Input */}
              <StyledInput
                containerStyle={{
                  borderRadius:SIZES.radius
                }}
                placeholder='Escribe el código de 6 digitos'
                estado={code}
                cambiarEstado={setCode}
                leyendaError="El código debe tener 6 digitos"
		  			    expresionRegular={expresiones.codigo}
                keyboardType="numeric"
              />
            
              {/* Button */}
              <TextButton
                value="Confirmar"
                containerStyle={styles.buttonContainer}
                onPress={handleSubmit}
                labelStyle={styles.buttonLabel}
              />
            </View>
          </Shadow>  
        </View>
      </View>
    </>  
  )
}

export default SignUpCodeVerification