import { Image, StyleSheet, View,Text,TouchableOpacity } from "react-native"
import { COLORS, FONTS, icons, SIZES } from "../constants"

const RecipeCreatorCardDetail=({selectedRecipe})=>{
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={selectedRecipe?.author.profilePic} style={styles.authorPic}/>
      </View>
      <View style={styles.authorInfo}>
        <Text style={{...FONTS.body4,color:COLORS.lightgray2}}>Recipe by:</Text>
        <Text style={{...FONTS.h3,color:COLORS.white2}}>{selectedRecipe?.author.name}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={()=>console.log('View Profile')}>
        <Image source={icons.rightArrow} style={{width:15,height:15, tintColor:COLORS.lightGreen1}}/>
      </TouchableOpacity>
      </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
  },
  imageContainer:{
    width:40,
    height:40,
    marginLeft:20
  },
  authorPic:{
    width:40,
    height:40,
    borderRadius:20
  },
  authorInfo:{
    marginHorizontal:20,
    flex:1
  },
  iconContainer:{
    alignItems:'center',
    width:30,
    height:30,
    justifyContent:'center',
    borderColor:COLORS.lightGreen1,
    borderWidth:1,
    borderRadius:5,
    marginRight:20
  }
})

export default RecipeCreatorCardDetail