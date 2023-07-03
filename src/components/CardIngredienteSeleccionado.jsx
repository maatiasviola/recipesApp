import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import ModalPopUp from "./ModalPopUp";
import {unidades} from "../constants/constants";
import { COLORS } from "../constants";
import SelectDropdown from "react-native-select-dropdown";


const CardIngredienteSeleccionado = ({
  ingrediente,
  setNuevaRecetaIngredientes,
  nuevaRecetaIngredientes,
  handleChangeIngrediente,
  unidades
}) => {

  console.log(nuevaRecetaIngredientes)

  const handleSelectUnidad = (selectedUnidad) =>{
    console.log(selectedUnidad)
    let nuevaUnidad ={
      idUnidad:selectedUnidad.idUnidad,
      descripcion:selectedUnidad.descripcion
    }

    const ingredienteActualizado = nuevaRecetaIngredientes.find(i=>i.ingrediente.id===ingrediente.ingrediente.id)
    console.log(ingredienteActualizado)
    const ingredientesMapped = nuevaRecetaIngredientes.map(ingredienteExistente=>{
      console.log(ingredienteExistente)
      if (ingredienteExistente.ingrediente.id === ingredienteActualizado.ingrediente.id) {
        return { ...ingredienteExistente, unidad: nuevaUnidad };
      }
      return ingredienteExistente;
    })
    setNuevaRecetaIngredientes(ingredientesMapped)
  }

  return (
    <View style={styles.card}>
      {/* Nombre Ingrediente */}
      <Text style={styles.nombreIngrediente}>{ingrediente.ingrediente.nombre}</Text>

      {/* Cantidad */}
      <TextInput 
        style={styles.cantidad} 
        keyboardType="numeric"
        value={ingrediente.cantidad}
        onChangeText={(text) => handleChangeIngrediente(ingrediente,text)}
      />

     {/* Unidad */}
     <SelectDropdown
      data={unidades}
      onSelect={(selectedItem, index) => handleSelectUnidad(selectedItem,index)}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem.descripcion
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item.descripcion
      }}
      dropdownStyle={{
        backgroundColor: COLORS.white,
        borderWidth: 0,  
      }}
      buttonStyle={{
        backgroundColor:COLORS.white,
      }}
      buttonTextStyle={{
        color:COLORS.black
      }}
      defaultButtonText="Elegir Medida"
    />
    </View>
  );
};

export default CardIngredienteSeleccionado;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 2,
    paddingHorizontal:10,
    alignItems: "center",
    borderRadius: 16,
    borderBottomColor:COLORS.gray20,
    borderBottomWidth:1,
    borderStyle:'solid',
    display: "flex",
    flexDirection:'row'
  },
  nombreIngrediente: {
    flex: 1,
  },
  cantidad: {
    backgroundColor: COLORS.gray20,  // Color de fondo
    borderRadius: 10,             // Radio de borde
    textAlign: 'center',
    width:40,
  },
});
