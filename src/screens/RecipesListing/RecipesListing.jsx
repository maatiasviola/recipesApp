// CSS & Constants
import styles from './styles'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../../constants"

// Hooks
import { useState } from 'react'

// Components
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native"
import HorizontalRecipeCard from "../../components/RecipesListing/HorizontalRecipeCard"
import IconButton from "../../components/IconButton"
import LineDivider from "../../components/LineDivider"
import { useEffect } from 'react'
import axios from 'axios'

{/* Pagina resultados de busqueda */}

const RecipesListing = ({navigation,route})=>{
  const [resultados,setResultados] = useState([]) 
  
  const {nombre,categoria} = route.params



  useEffect(()=>{
    if (nombre){
      // realizar llamada por nombre
      // setResultados(response)
      console.log("Nombre: ",nombre)
      axios.get ('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/buscarReceta/'+nombre)
      .then(response => {
        // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
        const user = response.data;
       console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
       setResultados(user)
       
       
      })
      .catch(error => {
        // Manejar errores de la solicitud o del servidor
        console.error(response.data);
      })}
      else if (categoria){
        // realizar llamada por categoria
        // setResultados(response)
        console.log("Categoria: ",categoria)
        axios.get ('http://recetasfinal-master-production.up.railway.app/Recetas/Controller/buscarCategoria/'+categoria.id)
        .then(response => {
          // Aquí puedes manejar la respuesta de la API, que debe ser el objeto de usuario
          const user = response.data;
         console.log(user); // Puedes mostrarlo en la consola o guardarlo en el estado de tu componente
         setResultados(user)
         
        })
        .catch(error => {
          // Manejar errores de la solicitud o del servidor
          console.error(response.data);
        });
      } else{
      setResultados([])
    }
  },[nombre,categoria])

  return(
    <View style={styles.container}>

      {/* Results */}
      <FlatList
        data={resultados}
        keyExtractor={item=>item.idReceta}
        contentContainerStyle={{
          paddingHorizontal:SIZES.padding
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}> 
            {/* Results */}
            <Text
              style={{
                flex:1,
                ...FONTS.body3
              }}
            >
              {resultados.length} resultados
            </Text>

            {/* Filter Button */}
            <IconButton
              icon={icons.filter}
              iconStyle={{
                width:20,
                height:20
              }}
              containerStyle={styles.filterButtonContainerStyle}
            />
          </View>
        }
        renderItem={({item,index})=>(
          <HorizontalRecipeCard
    key={item.idReceta} // Asigna el ID como clave
    recipe={item}
    containerStyle={{
      marginVertical: SIZES.padding,
      marginTop: index === 0 ? SIZES.radius : SIZES.padding,
    }}
    onPress={() => navigation.navigate("RecipeDetails", { recipe: item })}
  />
        )}
        ItemSeparatorComponent={()=>(
          <LineDivider
            lineStyle={{
              backgroundColor:COLORS.gray20
            }}
          />
        )}
      />

      {/* Header */}
      <View style={styles.header}>
        
        {/* Background image */}
        <Image
          source={categoria?.thumbnail || images.bg_1}
          resizeMode="cover"
          style={styles.headerBackgroundImageStyle}
        />

        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.headerTitle}>
            {categoria?.title || nombre}
          </Text>
        </View>

        {/* Back button */}
        <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={()=>navigation.goBack()}
        >
          <Image 
            source={icons.back2} 
            resizeMode="contain"
            style={styles.backButton}  
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RecipesListing