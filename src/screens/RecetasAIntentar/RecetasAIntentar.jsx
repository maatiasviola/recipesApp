// CSS & Constants
import { COLORS, icons, images, SIZES } from "../../constants"
import styles from './styles'

// Hooks & Services
import { useState,useEffect } from 'react'
import recetasService from '../../Servicios/recetas'

// Components
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native"
import HorizontalRecipeCard from "../../components/RecipesListing/HorizontalRecipeCard"
import LineDivider from "../../components/LineDivider"
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'

{/* Recetas a intentar */}

const RecetasAIntentar = ({navigation})=>{
  const [recetasIntentar,setRecetasIntentar] = useState([])

  const {user} = useContext(UserContext)

  useEffect(()=>{
    recetasService.obtenerRecetasIntentar(user.idUsuario)
      .then(response=>setRecetasIntentar(response))
      .catch(error=>console.log(error))
  },[])

  return(
    <>
      <View style={styles.container}>
        {
          recetasIntentar.length === 0
            ? <Text>No tenes recetas</Text>
            : (
              <>
                {/* Results */}
                <FlatList
                data={recetasIntentar}
                keyExtractor={item=>item.id}
                contentContainerStyle={{
                  paddingHorizontal:SIZES.padding
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
                renderItem={({item,index})=>(
                  <HorizontalRecipeCard
                    recipe={item}
                    containerStyle={{
                      marginVertical:SIZES.padding,
                      marginTop: index==0? SIZES.radius:SIZES.padding
                    }}
                    onPress={()=>navigation.navigate("RecipeDetails",{recipe:item})}
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
                  source={images.bg_1}
                  resizeMode="cover"
                  style={styles.headerBackgroundImageStyle}
                />

                {/* Title */}
                <View style={styles.title}>
                  <Text style={styles.headerTitle}>
                    Mis Recetas
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
              </>
            )
          }
      </View>
    </>
  )
}

export default RecetasAIntentar