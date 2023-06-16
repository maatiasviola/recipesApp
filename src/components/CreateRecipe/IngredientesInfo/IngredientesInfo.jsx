
import { Text, View,TouchableOpacity } from 'react-native'
import TextButton from '../../TextButton'
import ingredientesDummyData from '../../../constants/ingredientes'
import { COLORS, FONTS, SIZES } from '../../../constants'
import styles from './style'
import IngredientCard from '../../IngredientCard'
import { useEffect } from 'react'

function IngredientesInfo({pagina,setPagina,nuevaReceta,setNuevaReceta}) {
  
  console.log(nuevaReceta)

  return (
    <>
      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>

      <Text style={styles.containerText}>Cargá tus ingredientes</Text>
      
      
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

export default IngredientesInfo