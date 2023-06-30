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
import axios from 'axios'


const CodigoVerificacion = ({route}) => {

  
  // Form
  const [code,setCode] = useState("");

  const navigation = useNavigation();

  // obtengo el mail pasado por parametro
  const {email} = route.params

  useEffect(()=>{
    axios.post ('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/mandarCodigo?email='+email)
    .then(response => {
      const user = response.data;
      console.log(user); 

    })
    .catch(error => {
      // Manejar errores de la solicitud o del servidor
      console.error(response.data);
    });
  },[])


  {/* Cuando ingresa codigo el usuario */}
  const handleSubmit = () =>{
    // verificar codigo
    axios.post('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/validarCodigo?email='+email+'&codigo='+code)
    .then(response => {
      const validacion = response.data;
      console.log(validacion);
      const data = {
        email: email,
        cod: code
      };
      navigation.navigate("ResetPasswordScreen", { data });
    })
    .catch(error => {
      // Manejar errores de la solicitud o del servidor
      console.error(response.data);
    });
   
  }

  return(
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
              <Text style={styles.containerTitle}>
                Recuperación de la cuenta
              </Text>

              {/* Texto */}
              <Text style={styles.containerText}>
                Enviamos un código de 6 digitos a {email}.

                 Ingresa el código para continuar el proceso de cambio de contraseña.
              </Text>

              {/* Code Input */}
              <StyledInput
                containerStyle={{
                  borderRadius:SIZES.radius
                }}
                placeholder='Escribe el código de 6 digitos'
                value={code}
               onChange={(e)=>setCode(e.target.value)}
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


export default CodigoVerificacion;
