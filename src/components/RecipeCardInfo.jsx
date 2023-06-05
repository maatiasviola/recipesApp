import {StyleSheet, View } from "react-native"
import { COLORS, SIZES } from "../constants"
import RecipeCardDetails from "./RecipeCardDetails"

const RecipeCardInfo =({recipeItem})=>{  
  return(
    <View style={styles.container}>
      <RecipeCardDetails recipeItem={recipeItem}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    position:'absolute',
    bottom:10,
    left:10,
    right:10,
    height:100,
    paddingVertical:SIZES.radius,
    paddingHorizontal:SIZES.base,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.transparentDarkGray
  }
})

export default RecipeCardInfo