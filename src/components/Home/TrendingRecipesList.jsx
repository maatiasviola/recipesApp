import { useNavigation } from "@react-navigation/native"
import { FlatList, View,Text } from "react-native"
import {dummyData} from '../../constants'
import { FONTS, SIZES } from "../../constants"
import TrendingCard from "../TrendingCard"

// Carousel recetas tendencia

const TrendingRecipesList = ({ultimasRecetas}) =>{
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
        Últimas recetas
      </Text>
      
      {/* List */}
      <FlatList
        data={ultimasRecetas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={recipe=>recipe.idReceta}
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