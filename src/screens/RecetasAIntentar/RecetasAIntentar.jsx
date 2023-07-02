// CSS & Constants
import { COLORS, FONTS, icons, images, SIZES } from "../../constants"
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
      .then(response=>{
        setRecetasIntentar(response)
      })
      .catch(error=>console.log(error))
  },[])

  return(
    <View style={styles.container}>
        {/* Filter Modal */}

        {/* Results */}
        <FlatList
          data={recetasIntentar}
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
                {recetasIntentar.length} resultados
              </Text>
            </View>
          }
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
        </View>
      </View>
  )
}

export default RecetasAIntentar