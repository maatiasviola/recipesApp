import { View,Text,TouchableOpacity,Image } from 'react-native'
import SimpleInput from '../../SimpleInput'
import TextButton from '../../TextButton'
import styles from './styles'
import { COLORS, FONTS, SIZES, images } from '../../../constants'

import * as ImagePicker from 'expo-image-picker';

function DescripcionInfo({pagina,setPagina,nuevaReceta,setNuevaReceta}) {

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    if (!result.canceled){
      const fotoSeleccionada = result.uri ? result.uri : result.selected
      setNuevaReceta({...nuevaReceta,foto:fotoSeleccionada})
    }
  }

  return (
    <>
      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={choosePhotoFromLibrary}
        >
          <Image 
            source={nuevaReceta.foto === "" ? images.defaultImage : nuevaReceta.foto} 
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
        value={nuevaReceta.descripcion}
        onChange={(e)=>setNuevaReceta({...nuevaReceta,descripcion:e.target.value})}
      />

      {/* Porciones */}
      <SimpleInput
        containerStyle={{
          borderRadius:SIZES.radius
        }}
        keyboardType="number-pad"
        placeholder='¿Cuantas porciones se obtienen?'
        value={nuevaReceta.porciones}
        onChange={(e)=>setNuevaReceta({...nuevaReceta,porciones:e.target.value})}
      />
    
      {/* Cantidad personas */}
      <SimpleInput
        containerStyle={{
          borderRadius:SIZES.radius
        }}
        keyboardType="number-pad"
        placeholder='¿Para cuantas personas?'
        value={nuevaReceta.cantidadPersonas}
        onChange={(e)=>setNuevaReceta({...nuevaReceta,cantidadPersonas:e.target.value})}
      />
      
      {/* Button */}
      <TextButton
        value="Siguiente paso"
        containerStyle={{
          height:55,
          borderRadius:SIZES.radius,
          backgroundColor:COLORS.primary,
          marginTop:20
        }}
        onPress={()=>setPagina(pagina+1)}
        labelStyle={{
          ...FONTS.h3,
          color:COLORS.white
        }}
      />
    </>
  )
}

export default DescripcionInfo