
import { Text, View,TouchableOpacity } from 'react-native'
import TextButton from '../../TextButton'
import ingredientesDummyData from '../../../constants/ingredientes'
import { COLORS, FONTS, SIZES } from '../../../constants'
import styles from './style'
import { useEffect, useState } from 'react'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import CardIngredienteSeleccionado from '../../CardIngredienteSeleccionado'

function IngredientesInfo({pagina,setPagina,nuevaReceta,setNuevaReceta}) {
  
  console.log(nuevaReceta.ingredientes)

  const ingredientesAUsar=ingredientesDummyData.map((item) => {
    return {key: item.id, value: item.description,cantidad:0,medida:""}
  })
  
  const [ingredientes,setIngredientes] = useState(ingredientesAUsar)
  
  useEffect(()=>{
    //obtener ingredientes
    //setIngredientes(response)
  },[])

  return (
    <>
      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>

      <View
          style={{
            flex:1,paddingHorizontal:20,paddingTop:20
          }}
        >
          <MultipleSelectList
            setSelected={(val) =>
              setNuevaReceta({
                ...nuevaReceta,
                ingredientes: nuevaReceta.ingredientes.concat(val)
              })
            }
            data={ingredientes}
            label="Ingredientes"
            save="key" // id del objeto
            notFoundText='No existe el ingrediente'
            labelStyles={{fontWeight:'900'}}
          />
        </View>

        {nuevaReceta?.ingredientes?.map(ingrediente=>{
          return(
            <CardIngredienteSeleccionado key={ingrediente.id} setNuevaReceta={setNuevaReceta} nuevaReceta={nuevaReceta} ingrediente={ingrediente}/>
          )
        })}
      
      
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