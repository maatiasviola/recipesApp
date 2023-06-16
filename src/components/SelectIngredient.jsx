import { Image, StyleSheet, View,Text } from "react-native"
import { COLORS, FONTS } from "../constants"

const SelectIngredient = ({ingredient})=>{
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ingredient.icon} style={styles.image}/>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{ingredient.description}</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:2,
    marginVertical:1
  },
  imageContainer:{
    backgroundColor:COLORS.lightGray,
    borderRadius:5,
    width:24,
    height:24,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:20,
    height:20
  },
  text:{
    ...FONTS.body4
  },
  descriptionContainer:{
    flex:1,
    paddingHorizontal:5,
    justifyContent:'center'
  }
})

export default SelectIngredient