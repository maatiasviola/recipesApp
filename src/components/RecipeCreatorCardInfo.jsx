import { StyleSheet, View } from "react-native"
import { COLORS, SIZES } from "../constants"
import RecipeCreatorCardDetail from "./RecipeCreatorCardDetail"

const RecipeCreatorCardInfo = ({selectedRecipe})=>{
  return(
    <View style={styles.container}>
      <RecipeCreatorCardDetail selectedRecipe={selectedRecipe}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:COLORS.transparentBlack9,
    flex:1,
    borderRadius:SIZES.radius  
  }
})
export default RecipeCreatorCardInfo