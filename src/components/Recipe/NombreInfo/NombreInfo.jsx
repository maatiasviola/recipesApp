import { View,Image,Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import IconButton from '../../IconButton'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import SimpleInput from '../../SimpleInput'
import ModalPopUp from '../../ModalPopUp'
import { Shadow } from 'react-native-shadow-2'
import TextButton from '../../TextButton'

function NombreInfo({pagina,setPagina,nuevaReceta,setNuevaReceta}) {

  const [recetaExistenteModalVisible,setRecetaExistenteModalVisible] = useState(false)

  const handleSubmit = () =>{
    // verificar si tiene una receta que ya tiene ese nombre
    
    // si ya hay una receta con ese nombre
    //setRecetaExistenteModalVisible(true)

    // si no hay receta existente
    setPagina(pagina+1)
  }

  const handleModalClickReemplazar = () =>{
    // si quiere reemplazar hago un delete de la receta anterior¿? (creo) y setPagina+1
    setPagina(pagina+1)
  }

  const handleModalClickEditar = () =>{
    // si quiere editar hago un setNuevaReceta con los datos que me traigo y setPagina + 1
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
            value={nuevaReceta.nombre}
            onChange={(e)=>setNuevaReceta({...nuevaReceta,nombre:e.target.value})}
          />
        
          {/* Button */}
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