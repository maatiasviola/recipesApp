import { TouchableOpacity,StyleSheet, Image,View,Text } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"
import RecipeCardInfo from "./RecipeCardInfo"

const TrendingCard = ({containerStyle,recipeItem,onPress})=>{
  return(
    <TouchableOpacity style={[styles.container, {...containerStyle}]} onPress={onPress}>
      <Image
<<<<<<< HEAD
        source={recipeItem.image}
=======
        source={recipeItem.foto.urlFoto}
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
        resizeMode='cover'
        style={styles.image}
      />
      <View style={styles.categoryContainer}>
<<<<<<< HEAD
        <Text style={styles.categoryText}>{recipeItem.category}</Text>
=======
        <Text style={styles.categoryText}>{recipeItem.tipo.descripcion}</Text>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
      </View>

      <RecipeCardInfo
        recipeItem={recipeItem}
      />
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container:{
    height:350,
    width:250,
    marginTop:SIZES.radius,
    marginRight:20,
    borderRadius:SIZES.radius
  },
  image:{
    width:250,
    height:350,
    borderRadius:SIZES.radius
  },
  categoryContainer:{
    position:'absolute',
    top:20,
    left:15,
    paddingHorizontal:SIZES.radius,
    paddingVertical:5,
    backgroundColor:COLORS.transparentGray,
    borderRadius:SIZES.radius
  },
  categoryText:{
    color:COLORS.white,
    ...FONTS.body5,
    textAlign:'center'
  }
})

export default TrendingCard