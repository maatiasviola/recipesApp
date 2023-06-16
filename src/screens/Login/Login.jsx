// CSS & Constants
import styles from './styles'
import { COLORS, images, SIZES } from "../../constants"

// Components
import { ImageBackground, StatusBar, View,Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import CustomButton from "../../components/CustomButton"

const Login = ({navigation})=>{
  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      {/* Background & Main Title */}
      <View style={{height:SIZES.height>700 ? "65%" : "60%"}}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <LinearGradient
            start={{x:0,y:0}}
            end={{x:0,y:1}}
            colors={[
              COLORS.transparent,
              COLORS.black
            ]}
            style={styles.linearGradientContainer}
          >
            <Text style={styles.mainHeadingText}>
              Compartiendo recetas
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* SubHeading & Buttons */}
      <View style={styles.subHeadingContainer}>
        
        {/* Description */}
        <Text style={styles.subHeadingText}>
          Descubre miles de recetas de comidas
          y preparalas fácilmente!
        </Text>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          
          {/* SignIn */}
          <CustomButton
            buttonText="Inicia sesión"
            colors={[COLORS.darkGreen,COLORS.lime]}
            onPress={()=>navigation.replace("SignIn")}
            buttonContainerStyle={styles.loginButton}
          />

          {/* SignUp */}
          <CustomButton
            buttonText="Registrate"
            colors={[]}
            onPress={()=>navigation.replace("SignUp")}
            buttonContainerStyle={styles.signUpButton}
          />
        </View>
      </View>
    </View>
  )
}

export default Login