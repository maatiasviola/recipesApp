import { useState } from "react"
import { TouchableOpacity,Text,View, StyleSheet,Image, Alert } from "react-native"
import { Shadow } from "react-native-shadow-2"
import LoginOption from "../../components/Authentication/LoginOption"
import StyledInput from "../../components/Authentication/StyledInput"
import CustomButton from "../../components/CustomButton"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import { useNavigation } from '@react-navigation/native';
import IconButton from "../IconButton"
import TextButton from "../TextButton"
import axios from 'axios'

const SignIn = () => {
  const [isVisible,setIsVisible]=useState(false)
  const navigation = useNavigation();


  //Form
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handlePressLogin = () => {

    axios.get ('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/login/'+email+'/'+password+'')
      .then(response => {
        // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
        const user = response.data;
       console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
       
        navigation.navigate("Home", {user} );
      })
      .catch(error => {
        // Manejar errores de la solicitud o del servidor
        console.error(response.data);
      });
    }
    const handleForgotPassword = () => {
      navigation.navigate("ForgotPasswordScreen");
    };


  return(
    <>
     <View
      style={{
        flex:1,
        backgroundColor:COLORS.lightGray,
        paddingHorizontal:SIZES.padding
      }}
    >

      {/* Logo */}
      <Image
        source={images.logo}
        resizeMode='contain'
        style={{
          alignSelf:'center',
          marginTop: SIZES.padding * 2,
          width:50,
          height:50
        }}
      />

      {/* Container */}
      <View
        style={{
          marginTop:SIZES.padding,
          height:SIZES.height * 0.55
        }}
      >
        <Shadow>
          <View
            style={styles.authContainer}
          >
            {/* Title */}
            <Text
              style={{
                width:'60%',
                lineHeight:45,
                color:COLORS.black,
                ...FONTS.h1
              }}
            >
              Inicia sesión para continuar
            </Text>

            {/* Email */}
            <StyledInput
              containerStyle={{
                borderRadius:SIZES.radius
              }}
              placeholder='Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              prependComponent={
                <Image
                  source={icons.email_2}
                  style={{
                    width:25,
                    height:25,
                    marginRight:SIZES.base
                  }}
                />
              }
            />

            {/* Password */}
            <StyledInput
              containerStyle={{
                marginTop:SIZES.radius,
                borderRadius:SIZES.radius
              }}
              placeholder='Contraseña'
              value={password}
              secureTextEntry={!isVisible}
              onChange={(e)=>setPassword(e.target.value)}
              prependComponent={
                <Image
                  source={icons.lock_2}
                  style={{
                    width:25,
                    height:25,
                    marginRight:SIZES.base
                  }}
                />
              }
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
            
            {/* Forgot password ? */}
            <TouchableOpacity
              onPress={handleForgotPassword}
            >
              <Text
                style={{
                  textAlign:'right',
                  color:COLORS.support3,
                  marginVertical:SIZES.radius,
                  ...FONTS.h4
                }}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>

            {/* Button */}
            <TextButton
              value="Iniciar sesión"
              containerStyle={{
                height:55,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
              }}
              onPress={handlePressLogin}
              labelStyle={{
                ...FONTS.h3,
                color:COLORS.white
              }}
            />
          </View>
        </Shadow>  
        {/* Dont have account ? */}
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginVertical:SIZES.radius
          }}
        >
          <Text style={{...FONTS.body4,color:COLORS.gray30}}>¿No tienes una cuenta?</Text>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent:'center',
              marginLeft:2
            }}
            onPress={()=>navigation.replace('SignUp')}
          >
            <Text style={{...FONTS.body4, color:COLORS.primary}}>Crea una nueva cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* Or login with ... */}
        <View
          style={{
            justifyContent:'center',
            alignItems:'center',
            marginTop:SIZES.padding,
            marginBottom:100
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color:COLORS.black
            }}
          >
            O ingresa con
          </Text>
          <View
            style={{
              flexDirection:'row',
              marginTop:SIZES.base
            }}
          >
            <IconButton 
              icon={icons.twitter}
              iconStyle={{
                tintColor:COLORS.black
              }}
              containerStyle={
                styles.socialButtonsContainer
              }
            />
            <IconButton 
              icon={icons.google}
              iconStyle={{
                tintColor:COLORS.black
              }}
              containerStyle={{
                ...styles.socialButtonsContainer,
                marginLeft:SIZES.radius
              }}
            />
            <IconButton 
              icon={icons.linkedin}
              iconStyle={{
                tintColor:COLORS.black
              }}
              containerStyle={{
                ...styles.socialButtonsContainer,
                marginLeft:SIZES.radius
              }}
            />

          </View>
        </View>  
      </View>
    </View>
    </>  
  )
}

const styles = StyleSheet.create({
  authContainer:{
    flex:1,
    width:SIZES.width - (SIZES.padding * 2),
    backgroundColor:COLORS.light,
    padding:SIZES.padding,
    borderRadius:SIZES.radius
  },
  socialButtonsContainer:{
    width:55,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.gray20
  }
})

export default SignIn