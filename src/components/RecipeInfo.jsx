import { StyleSheet, Text, View } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const RecipeInfo = ({selectedRecipe})=>{
  return(
    <View style={styles.container}>
      <View style={styles.recipeInfoContainer}>
        <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
        <Text 
        style={{
          marginTop:5,
          color:COLORS.lightGray2,
          ...FONTS.body4
          }}
        >
          {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
        </Text>
      </View>

      {/*Viewers*/}
      <View style={styles.viewersContainer}>
          <Text>Hola c</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    height:130,
    width:SIZES.width,
    paddingHorizontal:30,
    paddingVertical:20,
    alignItems:'center'
  },
  recipeInfoContainer:{
    flex:1.5,
    justifyContent:'center'
  },
  viewersContainer:{
    flex:1,
    justifyContent:'center'
  }
})

export default RecipeInfo