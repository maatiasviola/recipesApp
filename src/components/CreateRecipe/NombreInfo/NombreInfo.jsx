import { View,Image,Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import IconButton from '../../IconButton'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import SimpleInput from '../../SimpleInput'
import ModalPopUp from '../../ModalPopUp'
import { Shadow } from 'react-native-shadow-2'
import TextButton from '../../TextButton'
import { useContext } from 'react'
import UserContext from '../../../Context/UserContext'
import recetasService from '../../../Servicios/recetas'
import AlertMessage from '../../AlertMessage'

function NombreInfo({
  pagina,
  setPagina,
  nuevaRecetaNombre,
  setNuevaRecetaNombre,
  nuevaRecetaDescripcion,
  setNuevaRecetaDescripcion,
  nuevaRecetaFoto,
  setNuevaRecetaFoto,
  nuevaRecetaPorciones,
  setNuevaRecetaPorciones,
  nuevaRecetaPersonas,
  setNuevaRecetaPersonas,
  nuevaRecetaCategoria,
  setNuevaRecetaCategoria,
  nuevaRecetaIngredientes,
  setNuevaRecetaIngredientes,
  nuevaRecetaPasos,
  setNuevaRecetaPasos
}) {
  const [recetaExistenteModalVisible,setRecetaExistenteModalVisible] = useState(false)
  const [recetaExistente,setRecetaExistente] = useState(null)

  // cuando la receta es creada --> con exito / fracaso
  const [mostrarMensajeError,setMostrarMensajeError] = useState(false)

  const {user} = useContext(UserContext)

  const handleSubmit = () =>{
    if(nuevaRecetaNombre!==""){
      recetasService.validarNombreReceta(nuevaRecetaNombre,user.idUsuario)
      .then(response => {
        {/* No hay receta con ese nombre */}
        setPagina(pagina+1)
      }) 
      .catch(error=> {
        {/* Si hay receta con ese nombre */}
        console.log(error)
        setRecetaExistente(error)
        setRecetaExistenteModalVisible(true)
      })
    }else{
      setMostrarMensajeError(true)
    }
  }
  const handleModalClickReemplazar = () =>{
    recetasService.eliminarReceta(recetaExistente.idReceta)
      .then(()=>{
        console.log("Reemplazada con exito!")
        setPagina(pagina+1)
      })
      .catch(error=>console.log(error))
  }
  const handleModalClickEditar = () =>{
    setNuevaRecetaNombre(recetaExistente.nombre)
    setNuevaRecetaDescripcion(recetaExistente.descripcion)
    setNuevaRecetaFoto(recetaExistente.foto)
    setNuevaRecetaPersonas(recetaExistente.cantidadPersonas)
    setNuevaRecetaPorciones(recetaExistente.porciones)
    setNuevaRecetaIngredientes(recetaExistente.utilizados)
    setNuevaRecetaPasos(recetaExistente.pasos)
    setNuevaRecetaCategoria(recetaExistente.tipo)
    setPagina(pagina+1)
  }
  return (
    <>
      <ModalPopUp
        visible={recetaExistenteModalVisible}
        setVisible={setRecetaExistenteModalVisible}  
        titulo="Nombre existente"
      >      
        {/* Texto */}
        <Text style={styles.containerText}>
          Hemos detectado que tienes una receta con el mismo nombre. ¿Quisieras
          reemplazar o editar el nombre?
        </Text>
        <View
          style={{
            display:'flex',
            width:'100%',
            alignItems:'center',
            flexDirection:'row',
            marginTop:20,
            justifyContent:'space-between',
            gap:10
          }}
        >
          {/* Button */}
          <TextButton
            value="Reemplazar"
            containerStyle={styles.buttonContainer}
            onPress={handleModalClickReemplazar}
            labelStyle={styles.buttonLabel}
          />
          {/* Button */}
          <TextButton
            value="Editar"
            containerStyle={styles.buttonContainer}
            onPress={handleModalClickEditar}
            labelStyle={styles.buttonLabel}
          />
          </View>
      </ModalPopUp>
        {/* Container */}
        <>
          {/* Title */}
          <Text style={styles.containerTitle}>
            Crear Receta
          </Text>
          <Text style={styles.containerText}>Ingrese el nombre de la receta</Text>
         
          {/* Nombre */}
          <SimpleInput
            containerStyle={{
              borderRadius:SIZES.radius
            }}
            placeholder='Nombre de la receta'
            value={nuevaRecetaNombre}
            onChange={(e)=>setNuevaRecetaNombre(e.target.value)}
          />
          {mostrarMensajeError &&
            <AlertMessage
              mensaje="Nombre de receta incompleto"
              tipoMensaje="Error"
            />
          }
       
          {/* Boton */}
          <TextButton
            value="Siguiente paso"
            containerStyle={{
              height:55,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.primary,
              marginTop:20
            }}
            onPress={handleSubmit}
            labelStyle={{
              ...FONTS.h3,
              color:COLORS.white
            }}
          />
        </>
    </>  
  )
}
export default NombreInfo