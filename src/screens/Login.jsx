import { ImageBackground, StatusBar, View,Text, StyleSheet } from "react-native"
import { COLORS, FONTS, images, SIZES } from "../constants"
import { LinearGradient } from "expo-linear-gradient"
import CustomButton from "../components/CustomButton"

const Login = ({navigation})=>{
  return(
    <View
      style={styles.container}
    >
      <StatusBar barStyle="light-content"/>

      {/* Background & Main Title */}
      <View
        style={{
          height:SIZES.height>700 ? "65%" : "60%"
        }}
      >
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
            <Text
              style={styles.mainHeadingText}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* SubHeading & Buttons */}
      <View
        style={styles.subHeadingContainer}
      >
        {/* Description */}
        <Text
          style={styles.subHeadingText}
        >
          Discover more than 1200 food recipes in your hands
          and cooking it easily!
        </Text>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Login */}
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen,COLORS.lime]}
            onPress={()=>navigation.replace("Authorization")}
            buttonContainerStyle={styles.loginButton}
          />

          {/* SignUp */}
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            onPress={()=>navigation.replace("Home")}
            buttonContainerStyle={styles.signUpButton}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.black
  },
  imageBackground:{
    flex:1,
    justifyContent:'flex-end'
  },
  linearGradientContainer:{
    height:200,
    justifyContent:'flex-end',
    paddingHorizontal:SIZES.padding
  },
  mainHeadingText:{
    width:'80%',
    color:COLORS.white,
    ...FONTS.largeTitle,
    lineHeight:45
  },
  subHeadingContainer:{
    flex:1,
    paddingHorizontal:SIZES.padding
  },
  subHeadingText:{
    marginTop:SIZES.radius,
    width:'70%',
    color:COLORS.gray,
    ...FONTS.body3
  },
  buttonsContainer:{
    flex:1,
    justifyContent:'center'
  },
  loginButton:{
    paddingVertical:18,
    borderRadius:20,
    alignItems:'center'
  },
  signUpButton:{
    marginTop:SIZES.radius,
    paddingVertical:18,
    borderRadius:20,
    borderColor:COLORS.darkLime,
    borderWidth:1,
    alignItems:'center'
  }
})

export default Login