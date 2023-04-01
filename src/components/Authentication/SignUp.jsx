import { useEffect, useState } from "react"
import { Text,View,StyleSheet,TouchableOpacity,Image } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../../constants"
import IconButton from "../IconButton"
import TextButton from "../TextButton"
import CountryDropDown from "./CountryDropDown"
import StyledInput from "./StyledInput"

const SignUp = ({
  alias,setAlias,
  email,setEmail,
  password,setPassword,
  phone,setPhone,
  countries,setCountries,
  showCountryModal, setShowCountryModal,
  selectedCountry, setSelectedCountry,
  setMode
})=>{
  const [validated,setValidated]=useState(false)
  const [isVisible,setIsVisible]=useState(false)
  
  useEffect(()=>{
    //Fetch countries
    fetch("https://restcountries.com/v2/all")
      .then(response=>response.json())
      .then(data=>{
        let countryData = data.map(item=>{
          return{
            code:item.alpha2Code,
            name:item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`
          }
        })
        setCountries(countryData)
      })
  },[])

  return(
    <>
      <View
        style={styles.authContainer}
      >
        {/* Title */}
        <Text
          style={{
            lineHeight:45,
            ...FONTS.h1
          }}
        >
          Create new account
        </Text>
        
        {/* Alias */}
        <StyledInput
          containerStyle={{
            borderRadius:SIZES.radius
          }}
          placeholder='Alias'
          value={alias}
          onChange={(e)=>setAlias(e.target.value)}
          prependComponent={
            <Image
              source={icons.person}
              style={{
                width:25,
                height:25,
                marginRight:SIZES.base
              }}
            />
          }
        />

        {/* Email */}
        <StyledInput
          containerStyle={{
            borderRadius:SIZES.radius,
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

        {validated 
          ?
          <>
            {/* Phone */}
            <StyledInput
              containerStyle={{
                borderRadius:SIZES.radius,
              }}
              placeholder='Phone'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              prependComponent={
                <Image
                  source={icons.phone}
                  style={{
                    width:25,
                    height:25,
                    marginRight:SIZES.base
                  }}
                />
              }
            />

            <CountryDropDown
              containerStyle={{
                marginTop:SIZES.radius
              }}
              selectedCountry={selectedCountry}
              onPress={()=>setShowCountryModal(!showCountryModal)}
            />


            {/* Password */}
            <StyledInput
              containerStyle={{
                borderRadius:SIZES.radius,
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
          </> 
          :
            <Text>message</Text>
          }
            
          {/* Button */}
          <TextButton
            value= {validated ? "Create User": "Validate user"}
            containerStyle={{
              height:55,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:SIZES.radius
            }}
            onPress={validated ? ()=>console.log("Create") : ()=>setValidated(true)}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          /> 

        {/* I already have an account */}
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginVertical:SIZES.radius
          }}
        >
          <Text style={{...FONTS.body4,color:COLORS.gray30}}>I already have an account</Text>
          <TouchableOpacity
            style={{
              alignItems:'center',
              justifyContent:'center',
              marginLeft:2
            }}
            onPress={()=>setMode('signIn')}
          >
            <Text style={{...FONTS.body4, color:COLORS.primary}}>Sign in</Text>
          </TouchableOpacity>
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
  }
})

export default SignUp