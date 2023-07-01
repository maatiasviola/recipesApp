import { Image, StyleSheet, View,Text, TextInput } from "react-native"
import { COLORS, FONTS } from "../constants"

const IngredientCard = ({utilizados})=>{
  return(
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{utilizados?.ingrediente?.nombre}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TextInput 
          style={styles.text}
          value={utilizados?.cantidad}
        />
        <TextInput 
          style={styles.text}
          value={utilizados?.unidad.descripcion}
        />
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