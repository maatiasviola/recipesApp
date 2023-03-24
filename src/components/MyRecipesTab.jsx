import { Image, View,StyleSheet,Text, TouchableOpacity } from "react-native"
import { COLORS,SIZES,FONTS } from "../constants"

const MyRecipesTab = ()=>{
  return(
    <View style={styles.container}>
      <View style={{width:100,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/images/recipes/recipe.png')} style={styles.image}/>
      </View>  
      <View style={{flex:1,paddingVertical:SIZES.radius}}>
        <Text style={styles.mainText}>You have 12 recipes that you haven´t tried yet</Text>
        <TouchableOpacity style={{marginTop:10}} onPress={()=>console.log('See recipes')}>
          <Text style={styles.linkText}>See Recipes</Text>
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