import { Animated, StyleSheet, View } from "react-native"
import IngredientCard from "../../components/IngredientCard";
import { COLORS } from "../../constants";

const RecipeIngredients = ({selectedRecipe})=>{

  return(
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={ingredient=>ingredient.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({item:ingredient})=>(
          <IngredientCard ingredient={ingredient}/>
        )}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  }
})

export default RecipeIngredients