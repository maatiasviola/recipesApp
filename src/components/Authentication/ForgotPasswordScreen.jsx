import React, { useState,useEffect } from 'react';
import { Text,View, StyleSheet,Image } from 'react-native';
import { Shadow } from "react-native-shadow-2"
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { images, SIZES,icons } from "../../constants"
import { expresiones } from "../../constants/expresiones";
import StyledInput from "./StyledInput"
import TextButton from "../../components/TextButton"


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleExisteCorreo = () => {
    // validación de correo electrónico
    if (email=="") {
      console.log("No ingresaste nada")
      return;
    }else{
      console.log("Revisando correo")
      navigation.navigate('CodigoVerificacion', { email });

    }

  };

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
              <Text style={styles.containerTitle}>
                Recuperación de la cuenta
              </Text>

              {/* Texto */}
              <Text style={styles.containerText}>
                Por favor, indica la dirección de correo electrónico asociada a tu cuenta.
              </Text>

              {/* Email */}
              <StyledInput
                   containerStyle={{
                   borderRadius:SIZES.radius,
               }}
               placeholder='Email'
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               icon={icons.email_2}
              /> 

              {/* Button */}
              <TextButton
                value="Confirmar"
                containerStyle={styles.buttonContainer}
                onPress={handleExisteCorreo}
                labelStyle={styles.buttonLabel}
              />
            </View>
          </Shadow>  
        </View>
      </View>
    </>  
  )
}

export default ForgotPasswordScreen;
