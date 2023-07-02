// CSS
import styles from './styles'

// Services
import recetasService from '../../../Servicios/recetas';

// Components
import { Animated, View,TextInput,Text } from "react-native"
import IngredientCard from "../../../components/IngredientCard";
import LineDivider from '../../../components/LineDivider';
import TextButton from '../../../components/TextButton';
import {COLORS, FONTS, SIZES} from '../../../constants/theme'
import { useEffect } from 'react';

const RecipeIngredients = ({selectedRecipe,setSelectedRecipe})=>{

  const handleMultiplicar = () =>{
    recetasService.multiplicarReceta(selectedRecipe.idReceta)
      .then(response=>{
        console.log(response)
        setSelectedRecipe(response)
      })
      .catch(error=>console.log(error))
  }

  const handleDividir = () =>{
    recetasService.dividirReceta(selectedRecipe.idReceta)
      .then(response=>{
        console.log(response)
        setSelectedRecipe(response)
      })
      .catch(error=>console.log(error))
  }

  const handleModificarPorciones = (cantidad) =>{
    console.log("Nueva cantidad porciones: ",cantidad)
    recetasService.modificarRecetaCantidadPorciones
    
    setSelectedRecipe({...selectedRecipe,porciones:cantidad})
  }

  const handleModificarPersonas = (cantidad) =>{
    console.log("Nueva cantidad personas: ",cantidad)
    setSelectedRecipe({...selectedRecipe,cantidadPersonas:cantidad})
  }

  const handleModificarIngrediente = (utilizado, nuevaCantidad) => {
    let cantidadParseada = 0
    if(!isNaN(nuevaCantidad)){
      cantidadParseada = parseInt(nuevaCantidad)
    }
    const utilizadosActualizados = selectedRecipe.utilizados.map((ingredienteExistente) => {
      if (ingredienteExistente.idUtilizado === utilizado.idUtilizado) {
        return { ...ingredienteExistente, cantidad: cantidadParseada };
      }
      return ingredienteExistente;
    });

    setSelectedRecipe({ ...selectedRecipe, utilizados: utilizadosActualizados });
  }

  useEffect(() => {
    console.log("RECETA ACTUALIZADA: ", selectedRecipe);
  }, [selectedRecipe]);

  const handleModificarUnidad = (utilizado,unidadTexto) =>{
    console.log("Nueva unidad:",unidadTexto)
    const utilizadosActualizados = selectedRecipe.utilizados.map((ingredienteExistente) => {
      if (ingredienteExistente.idUtilizado === utilizado.idUtilizado) {
        // Modificar el objeto con el id correspondiente
        return { ...ingredienteExistente, unidad: {...unidad,descripcion:unidadTexto} };
      }
      return ingredienteExistente;
    });

    // Actualizar el estado con los items modificados
    setSelectedRecipe({ ...selectedRecipe, utilizados: utilizadosActualizados });
  }

  return(
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>    
        {/*Title */}
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>
            Cantidad de porciones 
            <TextInput
              value={selectedRecipe?.porciones}
              onChangeText={(text) => handleModificarPorciones(text)}
            /> 
          </Text>
          <Text style={styles.headerTitle}>
            Cantidad de personas 
            <TextInput
              value={selectedRecipe?.cantidadPersonas}
              onChangeText={(text) => handleModificarPersonas(text)}
            /> 
          </Text>
        </View>
        
        {/* Buttons */}
        <View style={styles.botonesMatematicos}>
          <TextButton
            value="Multiplicar"
            onPress={handleMultiplicar}
            containerStyle={{
              height:55,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20
            }}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          />
          <TextButton
            value="Dividir"
            onPress={handleDividir}
            containerStyle={{
              height:55,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20
            }}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          />
        </View>
      </View>

      {/* Line Divider */}
      <LineDivider 
        lineStyle={{
          marginVertical:SIZES.radius,
          height:1
        }}
      />
      <Animated.FlatList
        data={selectedRecipe?.utilizados}
        keyExtractor={utilizados=>utilizados.idUtilizado}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item:utilizados})=>(
          <IngredientCard 
            key={utilizados}
            handleModificarIngrediente={handleModificarIngrediente}
            handleModificarUnidad={handleModificarUnidad}
            utilizados={utilizados}
          />
        )}
      />
    </View>
  )
}

export default RecipeIngredients