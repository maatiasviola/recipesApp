import React, { useState } from 'react'

import { COLORS, FONTS, SIZES } from '../constants'
import { ScrollView,Text,View,Image,TouchableOpacity } from 'react-native'
import { useColorScheme } from 'react-native'
import { MultipleSelectList } from 'react-native-dropdown-select-list'

import filtros from '../constants/constants'
import ModalPopUp from './ModalPopUp'
import { StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { useEffect } from 'react'
import ingredientesService from '../Servicios/ingredientes'
import userService from '../Servicios/user'
import SelectDropdown from 'react-native-select-dropdown'

const ClassTypeOption = ({containerStyle,classType, isSelected,onPress})=>{
  return(
    <TouchableOpacity
      style={{
        flex:1,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius,
        backgroundColor:isSelected ? COLORS.primary3 : COLORS.additionalColor11,
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Image
        source={classType.icon}
        resizeMode="contain"
        style={{
          width:40,
          height:40,
          tintColor:isSelected ? useColorScheme.white : COLORS.gray80
        }}
      />
      <Text
        style={{
          marginTop:SIZES.base,
          color:isSelected ? COLORS.white : COLORS.gray80,
          ...FONTS.h3
        }}
      >
        {classType.label}
      </Text>


    </TouchableOpacity>
  )
}

const FilterModal=({
  selectedMasAntigua,
  setSelectedMasAntigua,
  selectedOrdenAlfabetico,
  setSelectedOrdenAlfabetico,
  ingredientesIncluidos,
  setIngredientesIncluidos,
  ingredientesExcluidos,
  setIngredientesExcluidos, 
  filtroAutor,
  setFiltroAutor,
}) =>{
  console.log(selectedOrdenAlfabetico)
  // modales
  const [modalIncluirIngredientesVisible,setModalIncluirIngredientesVisible] = useState(false)
  const [modalExcluirIngredientesVisible,setModalExcluirIngredientesVisible] = useState(false)
  const [modalSeleccionarUsuario,setModalSeleccionarUsuario] = useState(false)

  const [selectedFiltroEspecial,setSelectedFiltroEspecial] = useState("")

  // servicios
  const [ingredientes,setIngredientes] = useState([])
  const [usuarios,setUsuarios] = useState(null) 

  useEffect(()=>{
    ingredientesService.obtenerIngredientes()
      .then(response=>setIngredientes(response))
      .catch(error=>console.log(error))
    
    userService.obtenerUsuarios()
      .then(response=>{
        
        setUsuarios(response)
      })
      .catch(error=>console.log(error))
  },[])

  const handleChangeFiltroEspecial = (id) => {
    setSelectedFiltroEspecial(id);
  
    if (id === 0) {
      setModalIncluirIngredientesVisible(true);
    } else if (id === 1) {
      setModalExcluirIngredientesVisible(true);
    } else if (id === 2) {
      setModalSeleccionarUsuario(true);
    }
  };
  return (
    // Main Container
    <>
      {/* Modal Incluir Ingredientes */}
      <ModalPopUp 
        visible={modalIncluirIngredientesVisible} 
        setVisible={setModalIncluirIngredientesVisible}
        titulo="¿Que ingredientes queres incluir?"  
      >
        {/* Probando, debe ir dentro de un modal */}
        <View
          style={{
            flex:1,paddingHorizontal:20,paddingTop:20
          }}
        >
          <MultipleSelectList
            setSelected={(val) =>setIngredientesIncluidos(val)}
            data={ingredientes}
            label="Ingredientes"
            onSelect={()=>console.log(selected)}
            save="id" // id del objeto
            fontFamily='regular'
            notFoundText='No existe el ingrediente'
            labelStyles={{fontWeight:'900'}}
          />
        </View>

        {/* Button */}
        <TextButton
          value="Aplicar"
          containerStyle={styles.aplicarButton}
          onPress={()=>setModalIncluirIngredientesVisible(false)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />     
      </ModalPopUp>

      {/* Modal Excluir Ingredientes */}
      <ModalPopUp 
        visible={modalExcluirIngredientesVisible} 
        setVisible={setModalExcluirIngredientesVisible}
        titulo="¿Que ingredientes queres excluir?"  
      >
        {/* Probando, debe ir dentro de un modal */}
        <View
          style={{
            flex:1,paddingHorizontal:20,paddingTop:20
          }}
        >
          <MultipleSelectList
            setSelected={(val) =>setIngredientesExcluidos(val)}
            data={ingredientes}
            label="Ingredientes"
            onSelect={()=>console.log(selected)}
            save="id" // id del objeto
            fontFamily='regular'
            notFoundText='No existe el ingrediente'
            labelStyles={{fontWeight:'900'}}
          />
        </View>

        {/* Button */}
        <TextButton
          value="Aplicar"
          containerStyle={styles.aplicarButton}
          onPress={()=>setModalExcluirIngredientesVisible(false)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />     
      </ModalPopUp>

      {/* Modal Seleccionar Autor */}
      <ModalPopUp 
        visible={modalSeleccionarUsuario} 
        setVisible={setModalSeleccionarUsuario}
        titulo="¿Que chef estas buscando?"  
      >
        {/* Probando, debe ir dentro de un modal */}
        <View
          style={{
            flex:1,paddingHorizontal:20,paddingTop:20
          }}
        >
          <SelectDropdown
            data={usuarios}
            onSelect={(selectedItem, index) => {
              setUsuarios(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>

        {/* Button */}
        <TextButton
          value="Aplicar"
          containerStyle={styles.aplicarButton}
          onPress={()=>setModalExcluirIngredientesVisible(false)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />     
      </ModalPopUp>
      {/* Filtros */}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal:2,
          display:'flex',
          justifyContent:'space-between',
          gap:5
        }}
      >
        {/* Filtros Especiales */}
        <View
          style={{
            marginTop:SIZES.radius
          }}
        >
          <Text
          style={{
            ...FONTS.h3
          }}
          >
            Filtros Especiales
          </Text>

          <View
            style={{
              flexDirection:'row',
              marginTop:SIZES.radius,
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}
          >
            {filtros.filtrosEspeciales.map((item,index)=>{
              return(
                <ClassTypeOption
                  key={index}
                  classType={item}
                  isSelected={selectedFiltroEspecial == item?.id}
                  containerStyle={{
                    marginLeft: index == 0 ? 0 :SIZES.base
                  }}
                  onPress={()=>handleChangeFiltroEspecial(item.id)}
                />
              )
            })}
          </View>
        </View>
        
        {/* Fecha de carga */}
        <View
          style={{
            marginTop:SIZES.radius
          }}
        >
          <Text
            style={{
              ...FONTS.h3
            }}
          >
            Fecha de carga
          </Text>
          <View
            style={{
              flex:1,
              flexDirection:'row',
              flexWrap:'wrap',
              display:'flex',
              justifyContent:'space-between',
              gap:5,
              width:'100%'
            }}
          >
            {filtros.fechaCarga.map((item,index)=>{
              return(
                <TextButton
                  key={index}
                  value={item.label}
                  containerStyle={{
                    height:45,
                    flex:1,
                    paddingHorizontal:SIZES.radius,
                    marginLeft:index % 3 == 0 ? 0 : SIZES.radius,
                    marginTop:SIZES.radius,
                    borderWidth:1,
                    borderStyle:'solid',
                    borderRadius:SIZES.radius,
                    borderColor:COLORS.black,
                    backgroundColor:item?.label == selectedMasAntigua ? COLORS.black : COLORS.white
                  }}
                  labelStyle={{
                    color:item?.label == selectedMasAntigua ? COLORS.white : COLORS.black,
                    ...FONTS.body3
                  }}
                  onPress={()=>{
                    //console.log("Filtro antiguedad:",item)
                    setSelectedMasAntigua(item.label)
                  }}
                
                />
              )
            })}
          </View>
        </View>

        {/* Orden alfabetico */}
        <View
          style={{
            marginTop:SIZES.radius
          }}
        >
          <Text
            style={{
              ...FONTS.h3
            }}
          >
            Orden Alfabético
          </Text>
          <View
            style={{
              flex:1,
              flexDirection:'row',
              flexWrap:'wrap',
              display:'flex',
              justifyContent:'space-between',
              gap:5,
              width:'100%'
            }}
          >
            {filtros.ordenAlfabetico.map((item,index)=>{
              return(
                <TextButton
                  key={index}
                  value={item.label}
                  containerStyle={{
                    height:45,
                    flex:1,
                    paddingHorizontal:SIZES.radius,
                    marginLeft:index % 3 == 0 ? 0 : SIZES.radius,
                    marginTop:SIZES.radius,
                    borderWidth:1,
                    borderStyle:'solid',
                    borderRadius:SIZES.radius,
                    borderColor:COLORS.black,
                    backgroundColor:item?.label == selectedOrdenAlfabetico ? COLORS.black : COLORS.white
                  }}
                  labelStyle={{
                    color:item?.label == selectedOrdenAlfabetico ? COLORS.white : COLORS.black,
                    ...FONTS.body3
                  }}
                  onPress={()=>{
                    //console.log("Filtro alfabetico:",item)
                    setSelectedOrdenAlfabetico(item.label)
                  }}
                />
              )
            })}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default FilterModal

const styles = StyleSheet.create({
  aplicarButton:{
    height:55,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary,
    marginTop:20
  }
})