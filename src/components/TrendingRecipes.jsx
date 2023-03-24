import { useNavigation } from "@react-navigation/native"
import { FlatList, View,Text, ImageBackground } from "react-native"
import {dummyData} from '../constants'
import { FONTS, SIZES } from "../constants"
import TrendingCard from "./TrendingCard"

const TrendingRecipesList = () =>{
  const navigation = useNavigation()
  return(
    <View style={{marginTop:SIZES.padding}}>
      <Text style={{...FONTS.h2,marginHorizontal:SIZES.padding}}>Trending Recipe</Text>
      <FlatList
        data={dummyData.trendingRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={recipe=>recipe.id}
        renderItem={({item:recipe,index})=>(
          <TrendingCard
          containerStyle={{
            marginLeft:index==0?SIZES.padding : 0
          }} 
          recipeItem={recipe}
            onPress={()=>navigation.navigate("RecipeDetails",{recipe})}
          />
        )}
      />
    </View>
  )
}

export default TrendingRecipesList