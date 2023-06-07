import { useNavigation } from "@react-navigation/native"
import { FlatList, View,Text } from "react-native"
import {dummyData} from '../../constants'
import { FONTS, SIZES } from "../../constants"
import TrendingCard from "../TrendingCard"

// Carousel recetas tendencia

<<<<<<< HEAD
const TrendingRecipesList = () =>{
=======
const TrendingRecipesList = ({ultimasRecetas}) =>{
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
  const navigation = useNavigation()

  return(
    <View style={{marginTop:SIZES.padding}}>
      
      {/* Heading */}
      <Text 
        style={{
          ...FONTS.h2,
          marginHorizontal:SIZES.padding
        }}
      >
<<<<<<< HEAD
        Trending Recipe
=======
        Últimas recetas
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
      </Text>
      
      {/* List */}
      <FlatList
<<<<<<< HEAD
        data={dummyData.trendingRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={recipe=>recipe.id}
=======
        data={ultimasRecetas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={recipe=>recipe.idReceta}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
        renderItem={({item,index})=>(
          <TrendingCard
          containerStyle={{
            marginLeft:index == 0 ? SIZES.padding : 0
          }} 
          recipeItem={item}
          onPress={()=>navigation.navigate("RecipeDetails",{recipe:item})}
          />
        )}
      />
    </View>
  )
}

export default TrendingRecipesList