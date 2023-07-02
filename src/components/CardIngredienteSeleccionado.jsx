import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import ModalPopUp from "./ModalPopUp";
import {unidades} from "../constants/constants";
import { COLORS } from "../constants";


const CardIngredienteSeleccionado = ({ key, ingrediente, nuevaReceta, setNuevaReceta }) => {
  const [modalUnidadesVisible, setModalUnidadesVisible] = useState(false);

  const handleChangeUnidad = (unidad) => {
    const indiceIngrediente = nuevaReceta.ingredientes.findIndex(
      (item) => item.nombre === ingrediente.nombre
    );

    if (indiceIngrediente !== -1) {
      // Modifica la medida del ingrediente en la copia de la lista de ingredientes
      const newIngredientes = [...nuevaReceta.ingredientes];
      newIngredientes[indiceIngrediente].medida = unidad;

      setNuevaReceta({
        ...nuevaReceta,
        ingredientes: newIngredientes,
      });
    }
  };

  return (
    <View style={styles.card}>
      {/* Nombre Ingrediente */}
      <Text style={styles.nombreIngrediente}>{ingrediente.nombre}</Text>

      {/* Cantidad */}
      <TextInput style={styles.cantidad} />

     {/* Unidad */}
     <ModalPopUp
        visible={modalUnidadesVisible}
        setVisible={setModalUnidadesVisible}
        titulo={"Elige la unidad"}
      >
        {unidades.map((item) => {
          return (
            <TouchableOpacity
              key={item.unidad} // Agregamos la prop key con un valor único
              onPress={() => handleChangeUnidad(item.unidad)}
            >
              <Text>{item.unidad}</Text>
            </TouchableOpacity>
          );
        })}
      </ModalPopUp> 
    </View>
  );
};

export default CardIngredienteSeleccionado;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 2,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: COLORS.lightGreen,
    display: "flex",
  },
  nombreIngrediente: {
    flex: 1,
  },
  cantidad: {
    // Estilos para el input de cantidad
  },
});
