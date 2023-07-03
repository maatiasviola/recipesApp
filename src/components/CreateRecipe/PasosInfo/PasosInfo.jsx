import React, { useEffect } from 'react'
import { Text,TouchableOpacity,Image,View } from 'react-native'
import TextButton from '../../TextButton'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import ModalPopUp from '../../ModalPopUp'
import SimpleInput from '../../SimpleInput'
import CardPasoSeleccionado from '../../CardPasoSeleccionado/CardPasoSeleccionado'
import AlertMessage from '../../AlertMessage'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

function PasosInfo({
  pagina, 
  setPagina,
  nuevaRecetaNombre,
  setNuevaRecetaNombre,
  nuevaRecetaDescripcion,
  setNuevaRecetaDescripcion,
  nuevaRecetaFoto,
  setNuevaRecetaFoto,
  nuevaRecetaPorciones,
  setNuevaRecetaPorciones,
  nuevaRecetaPersonas,
  setNuevaRecetaPersonas,
  nuevaRecetaCategoria,
  setNuevaRecetaCategoria,  
  nuevaRecetaIngredientes,
  setNuevaRecetaIngredientes,
  nuevaRecetaPasos,
  setNuevaRecetaPasos  
} ) {
  const navigation = useNavigation()
  
  const [modalNuevoPasoVisible,setModalNuevoPasoVisible] = useState(false)
  
  const [nuevoPasoDescripcion,setNuevoPasoDescripcion]=useState("")
  const [nuevoPasoMultimedia,setNuevoPasoMultimedia] = useState([])

  const [mostrarMensajeError,setMostrarMensajeError] = useState(false) // -> datos incompletos creacion paso

  // cuando la receta es creada --> con exito / fracaso
  const [exitoCreacionReceta,setExitoCambioContraseña] = useState(false)
  const [alertModalVisible,setAlertModalVisible] = useState(false)
  
  useEffect(() => {
    console.log("IMAGENES: ", nuevoPasoMultimedia);
  }, [nuevoPasoMultimedia]);
  
  const choosePhotosFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 5,
      allowsMultipleSelection: true
    });
  
    if (!result.canceled) {
      let selectedPhotos = [];
  
      if (result.assets && result.assets.length > 0) {
        selectedPhotos = result.assets.map(asset => asset.uri);
      }
  
      setNuevoPasoMultimedia(selectedPhotos);
    }
  };
  

  const handleAgregarPaso = ()=>{
    if(nuevoPasoDescripcion === "" || nuevoPasoMultimedia.length==0){
      setMostrarMensajeError(true)
    }else{
      setModalNuevoPasoVisible(false)
      let nuevoPaso ={
        idPaso:nuevaRecetaPasos.length,
        nroPaso:nuevaRecetaPasos.length,
        texto:nuevoPasoDescripcion,
        multimedias:nuevoPasoMultimedia
      }
      setNuevaRecetaPasos(nuevaRecetaPasos.concat(nuevoPaso))
    }
  }

  const handleEliminarFoto=(indiceFotoEliminar)=>{
    const fotosActualizadas = nuevoPasoMultimedia.filter((foto,index)=>index!==indiceFotoEliminar)
    setNuevoPasoMultimedia(fotosActualizadas)
  }

  const handleEliminarPaso = (pasoEliminar) =>{
    const pasosActualizados = nuevaRecetaPasos.filter(paso => paso.idPaso !== pasoEliminar.idPaso)
    setNuevaRecetaPasos(pasosActualizados)
  }

  const handlePressMensajeCreacion = () => {
    if(exitoCreacionReceta){
      {/* Si fue exitoso el cambio */}
      setAlertModalVisible(false) 
      navigation.navigate("Home")
    }else{
      setAlertModalVisible(false)
      navigation.navigate("Login")
    }
  }

  const handleCrearReceta = ()=>{
    let nuevaReceta = {
      nombre:nuevaRecetaNombre,
      descripcion:nuevaRecetaDescripcion,
      foto:nuevaRecetaFoto,
      cantidadPersonas:nuevaRecetaPersonas,
      porciones:nuevaRecetaPorciones,
      pasos:nuevaRecetaPasos,
      utilizados:nuevaRecetaIngredientes,
      tipo:nuevaRecetaCategoria
    }
    //llamada a la bdd
    setExitoCambioContraseña(true) 
    setAlertModalVisible(true)
    // si sale mal setAlertModalVisible(true)
  }

  return (
    <>
      <ModalPopUp 
        visible={alertModalVisible} 
        setVisible={setAlertModalVisible}
        titulo= {exitoCreacionReceta 
          ? "¡Felicitaciones!" 
          : "Error de conexión"
        }
        texto= {exitoCreacionReceta 
          ? "Has creado tu receta exitosamente" 
          : "Debe poseer una conexión a internet"
        }
        imagen={exitoCreacionReceta ? images.success : images.error}
        onPress={handlePressMensajeCreacion}
      />
      {/* Modal agregar nuevo paso */}
      <ModalPopUp
        visible={modalNuevoPasoVisible}
        setVisible={setModalNuevoPasoVisible}
        titulo="Agregar Paso"
      >
        {/* Descripcion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Descripcion</Text>
            
          <SimpleInput
            containerStyle={{
              borderRadius:SIZES.radius
            }}
            placeholder='Ingrese la descripcion'
            value={nuevoPasoDescripcion}
            onChange={(e)=>setNuevoPasoDescripcion(e.target.value)}
          />
        </View>
        {/* imagenes */}
        {nuevoPasoMultimedia.length > 0 && (
          <View style={styles.modalMultimediaContainer}>
            {nuevoPasoMultimedia.map((foto,index)=>{
              return(
                <View key={index} style={styles.modalImagenContainer}>
                  <TouchableOpacity onPress={()=>handleEliminarFoto(index)} style={styles.modalCloseContainer}>
                    <Image source={images.x} style={styles.modalCloseIcon}/>
                  </TouchableOpacity>
                  <Text style={styles.modalImageText}>Imagen {index}</Text>
                </View>
              )
            })}
          </View>
        )}

        {/* Botones */}
        <View style={styles.botonesContainer}>
        {/* Adjuntar */}
          <TextButton
            value="Adjuntar"
            containerStyle={{
              height:36,
              width:120,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20,
            }}
            onPress={choosePhotosFromLibrary}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          />
          {/* Button */}
          <TextButton
            value="Confirmar"
            containerStyle={{
              height:36,
              width:120,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20
            }}
            onPress={handleAgregarPaso}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          />
        </View>
        {mostrarMensajeError &&
          <AlertMessage
            mensaje="Datos incompletos"
            tipoMensaje="Error"
          />
        }
      </ModalPopUp>

      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>

      <TouchableOpacity 
        style={styles.agregarPasosContainer}
        onPress={() => setModalNuevoPasoVisible(true)}  
      >
        <Text style={styles.agregarPasosText}>Agregar pasos</Text>
        <Image source={icons.plus} style={styles.agregarPasosIcon}/>
      </TouchableOpacity>
      
      {/* Pasos */}
      <View style={{marginVertical:20}}>
        {nuevaRecetaPasos.map(paso=>{
          return(
            <CardPasoSeleccionado
              onPress={() => handleEliminarPaso(paso)} 
              key={paso.idPaso} 
              paso={paso}
            />
          )
        })}
      </View>

      {/* Botones */}
      <View style={styles.botonesContainer}>
        <TextButton
          value="Paso anterior"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20,
            flex:1
          }}
          onPress={()=>setPagina(pagina-1)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
        <TextButton
          value="Crear Receta"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20,
            flex:1
          }}
          onPress={handleCrearReceta}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
      </View>
    </>
  )
}

export default PasosInfo
