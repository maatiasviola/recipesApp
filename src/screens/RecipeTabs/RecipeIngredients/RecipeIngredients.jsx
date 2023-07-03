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

  const handleChangePorciones = (nuevaCantidad) =>{
    console.log("Nueva cantidad porciones: ",nuevaCantidad)
    setSelectedRecipe({...selectedRecipe,porciones:nuevaCantidad})
  }

  const handleModificarPorciones = () =>{
    recetasService.modificarRecetaCantidadPorciones(selectedRecipe.idReceta,selectedRecipe.porciones)
      .then(response=>{
        console.log(response)
        setSelectedRecipe(response)
      })
      .catch(error=>console.log(error))
  }

  const handleChangePersonas = (nuevaCantidad) =>{
    console.log("Nueva cantidad personas: ",nuevaCantidad)
    setSelectedRecipe({...selectedRecipe,cantidadPersonas:nuevaCantidad})
  }

  const handleModificarPersonas = () =>{
    console.log("Modificando Personas....")
    console.log("Id receta:",selectedRecipe.idReceta)
    console.log("cant personas:",selectedRecipe.cantidadPersonas)
    recetasService.modificarRecetaCantidadPersonas(selectedRecipe.idReceta,selectedRecipe.cantidadPersonas)
      .then(response=>{
        console.log(response)
        setSelectedRecipe(response)
      })
      .catch(error=>console.log(error))
  }

  const handleChangeIngrediente = (utilizado, nuevaCantidad) => {
    const utilizadosActualizados = selectedRecipe.utilizados.map((ingredienteExistente) => {
      if (ingredienteExistente.idUtilizado === utilizado.idUtilizado) {
        return { ...ingredienteExistente, cantidad: nuevaCantidad };
      }
      return ingredienteExistente;
    });
    setSelectedRecipe({ ...selectedRecipe, utilizados: utilizadosActualizados });
  }

  const handleModificarIngrediente = (utilizado) =>{
    console.log("Ingrediente que llega:",utilizado)
    recetasService.modificarRecetaIngrediente(selectedRecipe.idReceta,utilizado.ingrediente.id,utilizado.cantidad)
      .then(response=>{
        console.log(response)
        setSelectedRecipe(response)
      })
      .catch(error=>console.log(error))
  }

  useEffect(() => {
    console.log("RECETA ACTUALIZADA: ", selectedRecipe);
  }, [selectedRecipe]);

  {/* 
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
  */}

  return(
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>    
        {/*Title */}
        <View style={styles.headerInfo}>
        <View style={styles.headerOption}>
          <Text style={styles.headerTitle}>
            Cantidad de porciones
          </Text> 
          <TextInput
            style={styles.input}
            value={selectedRecipe?.porciones}
            onChangeText={(text)=>handleChangePorciones(text)}
            onBlur={handleModificarPorciones}
          /> 
        </View>
          <View style={styles.headerOption}>
          <Text style={styles.headerTitle}>
            Cantidad de personas 
          </Text>  
          <TextInput
            style={styles.input}
            value={selectedRecipe?.cantidadPersonas}
            onChangeText={(text)=>handleChangePersonas(text)}
            onBlur={handleModificarPersonas}
          /> 
          </View>
        </View>
        
        {/* Buttons */}
        <View style={styles.botonesMatematicos}>
          <TextButton
            value="Multiplicar"
            onPress={handleMultiplicar}
            containerStyle={{
              height:36,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20,
              width:140
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
              height:36,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20,
              width:140
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
            handleChangeIngrediente={handleChangeIngrediente}
            handleModificarIngrediente={handleModificarIngrediente}
            utilizados={utilizados}
          />
        )}
      />
    </View>
  )
}

export default RecipeIngredients