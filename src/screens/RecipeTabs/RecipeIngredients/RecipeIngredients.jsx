// CSS
import styles from './styles'

// Components
import { Animated, View } from "react-native"
import IngredientCard from "../../../components/IngredientCard";

const RecipeIngredients = ({selectedRecipe,setSelectedRecipe})=>{

  return(
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.utilizados}
        keyExtractor={utilizados=>utilizados.idUtilizado}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item:utilizados})=>(
          <IngredientCard key={utilizados} setSelectedRecipe={setSelectedRecipe} utilizados={utilizados}/>
        )}
      />
    </View>
  )
}

export default RecipeIngredients