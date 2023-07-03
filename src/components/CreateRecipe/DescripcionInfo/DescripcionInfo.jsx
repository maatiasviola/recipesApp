
import { View,Text,TouchableOpacity,Image } from 'react-native'
import SimpleInput from '../../SimpleInput'
import TextButton from '../../TextButton'
import styles from './styles'
import { COLORS, FONTS, SIZES, images } from '../../../constants'

import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native'

import { useEffect } from 'react'
import busquedaService from '../../../Servicios/busqueda'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import AlertMessage from '../../AlertMessage'

function DescripcionInfo({
  pagina,
  setPagina,
  nuevaRecetaDescripcion,
  setNuevaRecetaDescripcion,
  nuevaRecetaFoto,
  setNuevaRecetaFoto,
  nuevaRecetaPorciones,
  setNuevaRecetaPorciones,
  nuevaRecetaPersonas,
  setNuevaRecetaPersonas,
  nuevaRecetaCategoria,
  setNuevaRecetaCategoria
}) {

  const [categorias,setCategorias] = useState([])
  const [mostrarMensajeError,setMostrarMensajeError] = useState(false)

  useEffect(()=>{
    busquedaService.obtenerCategorias()
      .then(response=>{
        setCategorias(response)
      })
      .catch(error=>console.log(error))
  },[])

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    if (!result.canceled){
      const fotoSeleccionada = result.uri ? result.uri : result.selected
      setNuevaRecetaFoto(fotoSeleccionada)
    }
  }

  const handleSelectCategoria = (selectedCategoria) =>{
    setNuevaRecetaCategoria(selectedCategoria)
  }

  const handleSiguientePaso = ()=>{
    if
    (
      nuevaRecetaFoto === null || nuevaRecetaCategoria==="" || 
      nuevaRecetaDescripcion==="" || nuevaRecetaPersonas==="" ||
      nuevaRecetaPorciones===""
    ){
        setMostrarMensajeError(true)
    }else{
      setPagina(pagina+1)
    }
  }

  return (
    <ScrollView style={{flex:1}}>
      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <TouchableOpacity
          style={{
            height: 80,
            width: 80,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={choosePhotoFromLibrary}
        >
          <Image 
            source={nuevaRecetaFoto === null ? images.defaultImage : nuevaRecetaFoto} 
            style={styles.profileImage}
          />
          
        </TouchableOpacity>    
      </View>

      {/* Descripcion */}
      <SimpleInput
        containerStyle={{
          borderRadius:SIZES.radius
        }}
        placeholder='Descripción de la receta'
        value={nuevaRecetaDescripcion}
        onChange={(e)=>setNuevaRecetaDescripcion(e.target.value)}
      />

      <View 
        style={{
          display:'flex',
          flexDirection:'row',
          width:'100%',
          justifyContent:'space-between',
          gap:10
        }}
      >
        {/* Porciones */}
        <SimpleInput
          containerStyle={{
            borderRadius:SIZES.radius,
            flex:1
          }}
          keyboardType="number-pad"
          placeholder='Porciones'
          value={nuevaRecetaPorciones}
          onChange={(e)=>setNuevaRecetaPorciones(e.target.value)}
        />
      
        {/* Cantidad personas */}
        <SimpleInput
          containerStyle={{
            borderRadius:SIZES.radius,
            flex:1
          }}
          keyboardType="number-pad"
          placeholder='Personas'
          value={nuevaRecetaPersonas}
          onChange={(e)=>setNuevaRecetaPersonas(e.target.value)}
        />
      </View>
      <View style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
        <SelectDropdown
          data={categorias}
          onSelect={(selectedItem, index) => handleSelectCategoria(selectedItem,index)}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem.descripcion
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item.descripcion
          }}
          dropdownStyle={{
            backgroundColor: COLORS.white,
            borderWidth: 0,  
          }}
          buttonStyle={{
            backgroundColor:COLORS.lightGray,
            borderRadius:16,
            justifyContent:'center',
            display:'flex',
            width:'100%',
          }}
          buttonTextStyle={{
            color:COLORS.black,
          }}
          defaultButtonText="Elegir categoría"
        />
      </View>
      {mostrarMensajeError &&
        <AlertMessage
          mensaje="Datos incompletos"
          tipoMensaje="Error"
        />
      }

      
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
          value="Siguiente paso"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20,
            flex:1
          }}
          onPress={handleSiguientePaso}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
      </View>
    </ScrollView>
  )
}

export default DescripcionInfo