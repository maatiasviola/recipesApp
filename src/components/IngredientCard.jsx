import { Image, StyleSheet, View,Text } from "react-native"
import { COLORS, FONTS } from "../constants"

const IngredientCard = ({ingredient})=>{
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ingredient.icon} style={styles.image}/>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{ingredient.description}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>{ingredient.quantity}</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:30,
    marginVertical:5
  },
  imageContainer:{
    backgroundColor:COLORS.lightGray,
    borderRadius:5,
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:40,
    height:40
  },
  text:{
    ...FONTS.body3
  },
  descriptionContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'center'
  },
  quantityContainer:{
    alignItems:'flex-end',
    justifyContent:'center'
  }
})

export default IngredientCard