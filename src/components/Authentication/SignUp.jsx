import { useEffect, useState } from "react"
import { Text,View,StyleSheet,TouchableOpacity,Image } from "react-native"
<<<<<<< HEAD
import { COLORS, FONTS, icons, SIZES } from "../../constants"
=======
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
import IconButton from "../IconButton"
import TextButton from "../TextButton"
import CountryDropDown from "./CountryDropDown"
import StyledInput from "./StyledInput"
<<<<<<< HEAD

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
  
=======
import { useNavigation } from '@react-navigation/native';
import CountryModal from "./CountryModal"
import axios from 'axios'

const SignUp = ()=>{
  const navigation = useNavigation();

  

  const [validated,setValidated]=useState(false)
  const [isVisible,setIsVisible]=useState(false)
  const [countries,setCountries] = useState([])
  const [message, setMessage]=useState('')
  const [idUsuario, setidUsuario]=useState()
  const [showCountryModal,setShowCountryModal]=useState(false)

  //Form
  const [email,setEmail] = useState("")
  const [alias,setAlias] = useState("")
  const [nombre,setNombre] = useState("")
  const [password,setPassword] = useState("")
  const [selectedCountry,setSelectedCountry]=useState(null)
  
  const handleValidation = () => {

    axios.post('http://localhost:8080/Recetas/Controller/signUp1?email='+email+'&alias='+alias)
      .then(response => {
        // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
        const user = response.data;
        console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
        setidUsuario(user)
        setValidated(true)

      })
      .catch(error => {
        // Manejar errores de la solicitud o del servidor
        setMessage('Hola')
      });
    }

    const handleCreate = () => {

      axios.put('http://localhost:8080/Recetas/Controller/signUp2?idUsuario='+idUsuario+'&nombre='+nombre+'&contrasena='+password)
        .then(response => {
          // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
          const user = response.data;
          console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
          navigation.navigate("SignIn")
  
        })
        .catch(error => {
          // Manejar errores de la solicitud o del servidor
          setMessage('no creado')
        });
      }
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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
<<<<<<< HEAD
    <>
=======

    <>
        <View
      style={{
        flex:1,
        backgroundColor:COLORS.lightGray,
        paddingHorizontal:SIZES.padding
      }}
    >
      <CountryModal 
        countries={countries}
        showCountryModal={showCountryModal} 
        setShowCountryModal={setShowCountryModal} 
        setSelectedCountry={setSelectedCountry}
      />
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
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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
<<<<<<< HEAD
            {/* Phone */}
=======
            {/* Nombre */}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
            <StyledInput
              containerStyle={{
                borderRadius:SIZES.radius,
              }}
<<<<<<< HEAD
              placeholder='Phone'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              prependComponent={
                <Image
                  source={icons.phone}
=======
              placeholder='Nombre'
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              prependComponent={
                <Image
                  source={icons.person}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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
<<<<<<< HEAD
            <Text>message</Text>
=======
            <Text>{message}</Text>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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
<<<<<<< HEAD
            onPress={validated ? ()=>console.log("Create") : ()=>setValidated(true)}
=======
            onPress={validated ? handleCreate : handleValidation}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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
<<<<<<< HEAD
            onPress={()=>setMode('signIn')}
=======
            onPress={()=>navigation.replace('SignIn')}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
          >
            <Text style={{...FONTS.body4, color:COLORS.primary}}>Sign in</Text>
          </TouchableOpacity>
        </View>           
          </View>
<<<<<<< HEAD
=======
    </View>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
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