import { ImageBackground, StatusBar, View,Text } from "react-native"
import { COLORS, FONTS, images, SIZES } from "../constants"
import { LinearGradient } from "expo-linear-gradient"
import CustomButton from "../components/CustomButton"

const Login = ({navigation})=>{
  return(
    <View
      style={{
        flex:1,
        backgroundColor:COLORS.black
      }}
    >
      <StatusBar barStyle="light-content"/>
      {/* Header */}
      <View
        style={{
          height:SIZES.height>700 ? "65%" : "60%"
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex:1,
            justifyContent:'flex-end'
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{x:0,y:0}}
            end={{x:0,y:1}}
            colors={[
              COLORS.transparent,
              COLORS.black
            ]}
            style={{
              height:200,
              justifyContent:'flex-end',
              paddingHorizontal:SIZES.padding
            }}
          >
            <Text
              style={{
                width:'80%',
                color:COLORS.white,
                ...FONTS.largeTitle,
                lineHeight:45
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* Detail */}
      <View
        style={{
          flex:1,
          paddingHorizontal:SIZES.padding
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop:SIZES.radius,
            width:'70%',
            color:COLORS.gray,
            ...FONTS.body3
          }}
        >
          Discover more than 1200 food recipes in your hands
          and cooking it easily!
        </Text>
        {/* Buttons */}
        <View style={{flex:1,justifyContent:'center'}}>
          {/* Login */}
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen,COLORS.lime]}
            onPress={()=>navigation.replace("Home")}
            buttonContainerStyle={{
              paddingVertical:18,
              borderRadius:20,
              alignItems:'center'
            }}
          />

          {/* SignUp */}
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            onPress={()=>navigation.replace("Home")}
            buttonContainerStyle={{
              marginTop:SIZES.radius,
              paddingVertical:18,
              borderRadius:20,
              borderColor:COLORS.darkLime,
              borderWidth:1,
              alignItems:'center'
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Login