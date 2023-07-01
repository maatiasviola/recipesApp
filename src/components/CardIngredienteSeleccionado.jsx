import { StyleSheet } from "react-native"
import { View } from "react-native"
import { COLORS } from "../constants"
import { TextInput } from "react-native-gesture-handler"
import ModalPopUp from "./ModalPopUp"
import {unidades} from '../constants/constants'
import { useState } from "react"
import { TouchableOpacity } from "react-native-web"

const CardIngredienteSeleccionado = ({ingrediente,nuevaReceta,setNuevaReceta}) =>{
  const [modalUnidadesVisible,setModalUnidadesVisible] = useState(false)
  
  const handleChangeUnidad = (evt) =>{
    const indiceIngrediente = nuevaReceta.ingredientes.findIndex(
      (item) => item.nombre === ingrediente.nombre
    );

    if (indiceIngrediente !== -1) {
      // Modifica la medida del ingrediente en la copia de la lista de ingredientes
      setNuevaReceta({
        ...nuevaReceta,
        ingredientes: nuevaReceta.ingredientes[indiceIngrediente].medida = evt.target.value
      })
    }
  }

  return(
    <View style={styles.card}>
      {/* Nombre Ingrediente */}
      <Text>Nombre ingrediente</Text>

      {/* Cantidad */}
      <TextInput style={styles.cantidad}/>
      
      {/* Unidad */}
      <ModalPopUp
      visible={modalUnidadesVisible}
      setVisible={setModalUnidadesVisible}
      titulo={"Elige la unidad"}      
      >
        {unidades.map(item=>{
          return(
            <TouchableOpacity
              value={item.unidad}
              onPress={handleChangeUnidad}
            >
              {item.unidad}  
            </TouchableOpacity>
          )
        })}
      </ModalPopUp>
    </View>
  )
}

export default CardIngredienteSeleccionado

const styles = StyleSheet.create({
  card:{
    width:'100%',
    padding:2,
    alignItems:'center',
    borderRadius:4,
    color:COLORS.lightGreen,
    display:'flex'
  },
  nombreIngrediente:{
    flex:1
  }
})