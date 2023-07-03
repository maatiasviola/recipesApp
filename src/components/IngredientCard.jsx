import { StyleSheet, View,Text, TextInput } from "react-native"
import { COLORS, FONTS } from "../constants"

const IngredientCard = ({
  utilizados,
  handleModificarIngrediente,
  handleChangeIngrediente
})=>{
  
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{utilizados?.ingrediente?.nombre}</Text>
        <TextInput 
          style={styles.input}
          value={utilizados?.cantidad}
          keyboardType="numeric"
          onChangeText={(text) => handleChangeIngrediente(utilizados,text)}
          onBlur={()=>handleModificarIngrediente(utilizados)}
        />
        <Text style={styles.unidadesText}>
          {utilizados?.unidad.descripcion}
        </Text>
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
    flex: 1,
    flexShrink: 1,
    ...FONTS.body3
  },
  input:{
    backgroundColor: COLORS.gray20,  // Color de fondo
    borderRadius: 10,             // Radio de borde
    textAlign: 'center',
    width:40,
    margnRight:10
  },
  unidadesText:{
    display:'flex',
    justifyContent:'flex-end',
    ...FONTS.body3
  },

})

export default IngredientCard