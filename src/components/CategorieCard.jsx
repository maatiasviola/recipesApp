import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const CategorieCard=({categoryItem,containerStyle,onPress})=>{
  return(
    <TouchableOpacity 
      style={[
        styles.container,
         {...containerStyle}
        ]} 
      onPress={onPress}
    >  
      {/* Image */}
      <Image 
        source={categoryItem.image} 
        resizeMode='cover' 
        style={styles.image}
      />

      {/* Details */}
      <View style={styles.categoryInfo}>
        {/* Name */}
        <Text style={styles.categoryTitle}>{categoryItem.name}</Text>
        
        {/* Servings */}
        <Text style={styles.categoryDescription}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginTop:10,
    backgroundColor:COLORS.gray2,
    borderRadius:SIZES.radius
  },
  image:{
    width:100,
    height:100,
    borderRadius:SIZES.radius
  },
  categoryInfo:{
    paddingHorizontal:20,
    width:'65%'
  },
  categoryTitle:{
    flex:1,
    ...FONTS.h2
  },
  categoryDescription:{
    color:COLORS.gray,
    ...FONTS.body4
  }
})

export default CategorieCard