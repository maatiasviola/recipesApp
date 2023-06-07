import { View,Text,StyleSheet,Image } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"

const RecipeCardDetails = ({recipeItem})=>{
  return(
    <View style={styles.container}>
      
      {/*Name & Bookmark*/}
      <View style={styles.upperDetails}>
<<<<<<< HEAD
        <Text style={styles.name}>{recipeItem.name}</Text>
=======
        <Text style={styles.name}>{recipeItem.nombre}</Text>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
        <Image 
          source={recipeItem.isBookmark 
            ? icons.bookmarkFilled 
            : icons.bookmark
          } 
          style={{
            width:20,
            height:20,
            marginRight:SIZES.base,
            tintColor:COLORS.darkGreen
          }}
        />
      </View>

      {/*Duration & Serving*/}
<<<<<<< HEAD
      <Text style={styles.details}>{recipeItem.duration} | {recipeItem.serving} Serving</Text>
=======
      <Text style={styles.details}> {recipeItem.porciones} Porciones | {recipeItem.cantidadPersonas} Personas</Text>
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
    
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  upperDetails:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  name:{
    color:COLORS.white,
    ...FONTS.h3,
    fontSize:18,
    width:'70%'
  },
  details:{
    color:COLORS.lightGray,
    ...FONTS.body4
  }
})

export default RecipeCardDetails