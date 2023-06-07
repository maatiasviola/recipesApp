import { Image, View,StyleSheet,Text, TouchableOpacity } from "react-native"
import { COLORS,SIZES,FONTS } from "../../constants"

const MyRecipesTab = ()=>{
  return(
    <View style={styles.container}>
      
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/recipes/recipe.png')} 
          style={styles.image}
        />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        
        {/* N° Recipes */}
        <Text style={styles.mainText}>
<<<<<<< HEAD
          You have 12 recipes that you haven´t tried yet
=======
          Tienes 12 recetas que no has intentado
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
        </Text>
        
        {/* See Recipes */}
        <TouchableOpacity 
          style={{marginTop:10}} 
          onPress={()=>navigation.navigate("RecipeListing")}
        >
          <Text style={styles.linkText}>
<<<<<<< HEAD
            See Recipes
=======
            Ver recetas
>>>>>>> 54e3129a79bfc4e7db761319b014ee571138faaf
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:SIZES.radius,
    marginHorizontal:SIZES.padding,
    backgroundColor:COLORS.lightGreen,
    borderRadius:10,
  },
  imageContainer:{
    width:100,
    alignItems:'center',
    justifyContent:'center'
  },
  textContainer:{
    flex:1,
    paddingVertical:SIZES.radius
  },
  mainText:{
    ...FONTS.body4,
    width:'70%'
  },
  linkText:{
    color:COLORS.darkGreen,
    textDecorationLine:'underline',
    ...FONTS.h4
  },
  image:{
    width:80,
    height:80
  }
})

export default MyRecipesTab