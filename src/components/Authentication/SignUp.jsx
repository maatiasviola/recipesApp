import "setimmediate"
import { useEffect, useState,useRef } from "react"
import { Text,View,StyleSheet,TouchableOpacity,Image } from "react-native"
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
import IconButton from "../IconButton"
import TextButton from "../TextButton"
import StyledInput from "./StyledInput"
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import {expresiones} from '../../constants/expresiones'
import AlertMessage from "../AlertMessage"
import ModalPopUp from "../ModalPopUp"
import * as ImagePicker from 'expo-image-picker';

const SignUp = ()=>{
  const navigation = useNavigation();

  const [isLoading,setIsLoading] = useState(false)

  // Modal correo registrado
  const [modalRecuperarContraseñaVisible,setModalRecuperarContraseñaVisible] = useState(false)
  const [modalErrorVisible,setModalErrorVisible] = useState(false)

  // Contraseña
  const [isVisible,setIsVisible]=useState(false)
  
  // Manejar mensaje de error e informacion
  const [mensaje, setMensaje]=useState('')
  const [tipoMensaje,setTipoMensaje]=useState("Error")
  const [aliasRecomendados,setAliasRecomendados] = useState([])
  
  //Form
  const [avatar, setAvatar] = useState(images.defaultUser);
  const [email,setEmail] = useState({campo:'',valido:null})
  const [alias,setAlias] = useState({campo:'',valido:null})
  const [nombre,setNombre] = useState({campo:'',valido:null})
  const [password,setPassword] = useState({campo:'',valido:null})
  const [idUsuario, setidUsuario]=useState("")
  const [validated,setValidated]=useState(null)

  const handleValidation = () => {

    {/* Si campos INCORRECTOS */}
    if(
      alias.valido==='false' || 
      email.valido==='false' ||
      alias.valido=== null ||
      email.valido=== null      
    ){
      setValidated(false)
      setMensaje("Error, campos inválidos")
      setTipoMensaje("Error")
    }    
    else{
      {/* Si campos CORRECTOS */}
      // Realizar el post a la BDD

      {/* Si ALIAS en uso */}
      //setMensaje("Alias ya utilizado, proba con estos:")
      //setTipoMensaje("Warning")
      //setAliasRecomendados(aliasResponse)

      {/* Si correo en uso -> opcion recuperar contraseña */}
      //setModalRecuperarContraseñaVisible(true) 

      {/* Si correo no completo el registro */}
      //setModalErrorVisible(true)

      {/* Si todo correcto -> continuar con el registro */}
      setValidated(true)
      //setidUsuario(responseIdUsuario)
    }
    
    {/* 
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
      */}
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
          setMensaje('no creado')
        });
      }

      

  const handlePressRecuperarContraseña=()=>{
    //setRequestModalVisible(false)
    navigation.navigate("CodeVerification",{mail:email})
  }


  const choosePhotoFromLibrary = async () => {
    setIsLoading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    setIsLoading(false)
    if (!result.canceled){
      setAvatar(result.uri ? result.uri : result.selected)
      console.log("Avatar: ",avatar)
    }
  }

  return(
    <>
      {/* Modal Recuperar Contraseña */}
      <ModalPopUp
        visible={modalRecuperarContraseñaVisible}
        setVisible={setModalRecuperarContraseñaVisible}
        texto="Vaya! Parece que este correo ya está asociado con una cuenta"
        imagen={images.error}
      >

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
          {/* Button */}
          <TextButton
            value="Volver"
            containerStyle={{
              height:55,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.lightGray,
              marginTop:20
            }}
            onPress={()=>setModalRecuperarContraseñaVisible(false)}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.black
            }}
          />     
      </ModalPopUp>

      {/* Modal Correo Que No Completo Registro */}
      <ModalPopUp
        visible={modalErrorVisible}
        setVisible={setModalErrorVisible}
        texto="Vaya! Parece que este correo nunca completó el proceso de registración. Para liberarlo deberá enviar un mail a soporte. Gracias!"
        imagen={images.error}
      />

      <View
        style={{
          flex:1,
          backgroundColor: COLORS.lightGray,
          paddingHorizontal:SIZES.padding,
        }}
      >
      {/* 
      <CountryModal 
        countries={countries}
        showCountryModal={showCountryModal} 
        setShowCountryModal={setShowCountryModal} 
        setSelectedCountry={setSelectedCountry}
      />
      */}

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
        <View style={styles.authContainer}>
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
                width:80,
                height:80
              }}
              onPress={choosePhotoFromLibrary}
            >
              <Image 
                source={avatar} 
                style={styles.profileImage}
              />

              <View style={styles.cameraContainer}>
                <View
                  style={{
                    width:30,
                    height:30,
                    marginBottom:-15,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:15,
                    backgroundColor:COLORS.primary
                  }}
                >
                  <Image 
                    source={icons.camera}
                    resizeMode='contain'
                    style={{
                      width:17,
                      height:17
                    }}
                  />
                </View>
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
            estado={alias}
            cambiarEstado={setAlias}
            leyendaError="El alias tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
            expresionRegular={expresiones.usuario}
            icon={icons.person}
          />

          {/* Email */}
          <StyledInput
            containerStyle={{
              borderRadius:SIZES.radius,
            }}
            placeholder='Email'
            estado={email}
            cambiarEstado={setEmail}
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
            icon={icons.email_2}
          />

          {validated &&
            <>
              {/* Nombre */}
              <StyledInput
                containerStyle={{
                  borderRadius:SIZES.radius,
                }}
                placeholder='Nombre'
                estado={nombre}
                cambiarEstado={setNombre}
                leyendaError="El nombre solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
                icon={icons.person}
              />

              {/*
              <CountryDropDown
                containerStyle={{
                  marginTop:SIZES.radius
                }}
                selectedCountry={selectedCountry}
                onPress={()=>setShowCountryModal(!showCountryModal)}
              />
              */}

              {/* Password */}
              <StyledInput
                containerStyle={{
                  borderRadius:SIZES.radius,
                }}
                placeholder='Password'
                estado={password}
                cambiarEstado={setPassword}
                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                expresionRegular={expresiones.password}
                secureTextEntry={!isVisible}
                icon={icons.lock_2}
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
          }

          {validated===false && 
            <AlertMessage
              mensaje={mensaje}
              tipoMensaje={tipoMensaje}
            />
           
          }

          {aliasRecomendados.length > 0 &&
            <AlertMessage
              mensaje={mensaje}
              tipoMensaje={tipoMensaje}
            >
              {aliasRecomendados.map(alias=>
                <Text style={{...FONTS.body3,color:'#000000'}}>
                  {alias}
                </Text>)}
            </AlertMessage>
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
  },
  profileImageContainer:{
    marginVertical:SIZES.padding,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  profileImage:{
    width:'100%',
    height:'100%',
    borderRadius:40,
    borderColor:COLORS.white,
    borderWidth:1
  },
  cameraContainer:{
    position:'absolute',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  infoContainer:{
    flex:1,
    marginLeft:SIZES.radius,
    alignItems:'flex-start'
  },
  memberContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:35,
    borderRadius:20,
    backgroundColor:COLORS.white,
    paddingHorizontal:SIZES.radius,
    marginTop:SIZES.padding
  },
  panelHeader: {
    backgroundColor: "#ffffff",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#ffffff",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
})

export default SignUp