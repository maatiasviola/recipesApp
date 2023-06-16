// CSS
import styles from './styles'

// Components
import { Animated, View } from "react-native"
import IngredientCard from "../../../components/IngredientCard";

const RecipeIngredients = ({selectedRecipe})=>{
  return(
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients} // fijarse como llega el atributo
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

export default RecipeIngredients