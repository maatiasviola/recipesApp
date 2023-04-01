import { useState } from "react"
import { TouchableOpacity,Text,View, StyleSheet,Image } from "react-native"
import { Shadow } from "react-native-shadow-2"
import LoginOption from "../../components/Authentication/LoginOption"
import StyledInput from "../../components/Authentication/StyledInput"
import CustomButton from "../../components/CustomButton"
import { COLORS, FONTS, icons, SIZES } from "../../constants"
import IconButton from "../IconButton"
import TextButton from "../TextButton"

const SignIn = ({email,setEmail,password,setPassword,setMode}) => {
  const [isVisible,setIsVisible]=useState(false)
  
  return(
    <>
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
              Sign in to continue
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
              placeholder='Password'
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
              onPress={()=>console.log("Forgot Password")}
            >
              <Text
                style={{
                  textAlign:'right',
                  color:COLORS.support3,
                  marginVertical:SIZES.radius,
                  ...FONTS.h4
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Button */}
            <TextButton
              value="Login"
              containerStyle={{
                height:55,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
              }}
              onPress={()=>navigation.navigate("Home")}
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
          <Text style={{...FONTS.body4,color:COLORS.gray30}}>Dont have account?</Text>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent:'center',
              marginLeft:2
            }}
            onPress={()=>setMode('signUp')}
          >
            <Text style={{...FONTS.body4, color:COLORS.primary}}>Create new account</Text>
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
            Or login with
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