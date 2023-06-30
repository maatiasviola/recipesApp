import { Animated, StyleSheet, View } from "react-native"
import IngredientCard from "../../components/IngredientCard";
import { COLORS } from "../../constants";

const RecipeIngredients = ({selectedRecipe})=>{

  return(
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.utilizados}
        keyExtractor={utilizados=>utilizados.idUtilizado}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item:utilizados})=>(
          <IngredientCard utilizados={utilizados}/>
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