import { useEffect, useState } from "react"
import { Text,View,StyleSheet,TouchableOpacity,Image } from "react-native"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import IconButton from "../IconButton"
import TextButton from "../TextButton"
import CountryDropDown from "./CountryDropDown"
import StyledInput from "./StyledInput"
import { useNavigation } from '@react-navigation/native';
import CountryModal from "./CountryModal"
import ImagePicker from 'react-native-image-picker';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios'

const SignUp = ()=>{
  const navigation = useNavigation();

  
  const [fotoUri, setFotoUri] = useState(null);
  const [validated,setValidated]=useState(false)
  const [conectionOk,setConectionOk]=useState(false)
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

    verificarConexion();

    if (!conectionOk){
       //mostrar cartel de no conexión
       console.log("No hay conexión")

    }else{
    axios.post('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/signUp1?email='+email+'&alias='+alias)
      .then(response => {
        // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
        const user = response.data;
        console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
        setidUsuario(user)
        setValidated(true)

      })
      .catch(error => {
        // email existente
        if (error.response.status === 422 && error.response.data === 'EMail ya existe') {

          setMessage(error.response.data);

        } else if (error.response.status === 422) {
          //  email correcto pero alias existente
          const similarAliases = error.response.data;
          setMessage(`Alias no disponible. Por favor, elige otro alias o selecciona alguna de las siguientes sugerencias: ${similarAliases.join(', ')}`);
        } else {
          // registro fallido
          setMessage('Por favor, revise la información ingresada');
        }
      });
    }
  };  

    const handleCreate = () => {

      axios.post('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/signUp2?idUsuario='+idUsuario+'&nombre='+nombre+'&contrasena='+password)
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

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setFotoUri(e.target.result);
      setProfileImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const verificarConexion = async () => {
    try {
      const estadoConexion = await NetInfo.fetch();
  
      if (estadoConexion.isConnected) {
        console.log('Hay conexión de red');
        setConectionOk(true);
      } else {
        console.log('No hay conexión de red');
      }
    } catch (error) {
      console.log('Error al verificar la conexión:', error);
    }
  };

  return(

    <>
        {/* Button */}
        <TextButton
          value="Recuperar contraseña"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20
          }}
          onPress={()=>handlePressRecuperarContraseña()}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
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
         {/* Profile Image */}
{validated && 
  <View style={styles.profileImageContainer}>
    <TouchableOpacity
      style={{
        width: 80,
        height: 80
      }}
      onPress={cargarFotoDesdeGaleria}
    >
      {fotoUri ? (
        <Image 
          source={{ uri: fotoUri }} 
          style={styles.profileImage}
        />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Seleccionar imagen</Text>
        </View>
      )}

      <View style={styles.cameraContainer}>
        {/* Mostrar la imagen seleccionada */}
        {profileImage && <img src={profileImage} alt="Profile Image" width="200" height="200" />}

        {/* Botón para seleccionar una imagen */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </View>
    </TouchableOpacity>    
  </View>
}

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
            {/* Nombre */}
            <StyledInput
              containerStyle={{
                borderRadius:SIZES.radius,
              }}
              placeholder='Nombre'
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
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
            <Text>{message}</Text>
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
            onPress={validated ? handleCreate : handleValidation}
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
            onPress={()=>navigation.replace('SignIn')}
          >
            <Text style={{...FONTS.body4, color:COLORS.primary}}>Sign in</Text>
          </TouchableOpacity>
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
  }
})

export default SignUp