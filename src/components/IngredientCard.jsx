import { StyleSheet, View,Text, TextInput } from "react-native"
import { FONTS } from "../constants"

const IngredientCard = ({utilizados,handleModificarIngrediente,handleModificarUnidad})=>{
  
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{utilizados?.ingrediente?.nombre}</Text>
        <TextInput 
          style={styles.text}
          value={utilizados?.cantidad.toString()}
          keyboardType="numeric"
          onChangeText={(text) => handleModificarIngrediente(utilizados,text)}
        />
        <TextInput 
          style={styles.text}
          value={utilizados?.unidad.descripcion}
          onChangeText={(text) => handleModificarUnidad(utilizados,text)}
          
        />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:30,
    marginVertical:5,
    display:'flex',
    justifyContent:'space-between'
  },
  text:{
    ...FONTS.body3
  },

})

export default IngredientCard