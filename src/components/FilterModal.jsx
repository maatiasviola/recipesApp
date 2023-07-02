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

const FilterModal=() =>{
  
  const [selectedFiltroEspecial,setSelectedFiltroEspecial] = useState("")
  const [selectedMasAntigua,setSelectedMasAntigua] = useState("")
  const [selectedOrdenAlfabetico,setSelectedOrdenAlfabetico] = useState("")

  const [ingredientesIncluidos,setIngredientesIncluidos] = useState([])
  const [ingredientesExcluidos,setIngredientesExcluidos] = useState([])

  // modales
  const [modalIncluirIngredientesVisible,setModalIncluirIngredientesVisible] = useState(false)
  const [modalExcluirIngredientesVisible,setModalExcluirIngredientesVisible] = useState(false)
  const [modalSeleccionarUsuario,setModalSeleccionarUsuario] = useState(false)

  // servicios
  const [ingredientes,setIngredientes] = useState([])
  const [usuarios,setUsuarios] = useState(null) 

  useEffect(()=>{
    ingredientesService.obtenerIngredientes()
      .then(response=>setIngredientes(response))
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

      {/* Modal Incluir Ingredientes */}
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

      {/* Filtros */}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal:SIZES.padding,
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
              flexWrap:'wrap'
            }}
          >
            {filtros.fechaCarga.map((item,index)=>{
              return(
                <TextButton
                  key={index}
                  value={item.label}
                  contentContainerStyle={{
                    height:45,
                    paddingHorizontal:SIZES.radius,
                    marginLeft:index % 3 == 0 ? 0 : SIZES.radius,
                    marginTop:SIZES.radius,
                    borderWidth:1,
                    borderRadius:SIZES.radius,
                    borderColor:COLORS.gray20,
                    backgroundColor:item?.id == selectedMasAntigua ? COLORS.lightGreen : COLORS.transparentGray
                  }}
                  labelStyle={{
                    color:item?.id == selectedMasAntigua ? COLORS.black : COLORS.white,
                    ...FONTS.body3
                  }}
                  onPress={()=>{
                    setSelectedMasAntigua(item.id)
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
              flexWrap:'wrap'
            }}
          >
            {filtros.ordenAlfabetico.map((item,index)=>{
              console.log(item)
              return(
                <TextButton
                  key={index}
                  value={item.label}
                  contentContainerStyle={{
                    height:45,
                    paddingHorizontal:SIZES.radius,
                    marginLeft:index % 3 == 0 ? 0 : SIZES.radius,
                    marginTop:SIZES.radius,
                    borderWidth:1,
                    borderRadius:SIZES.radius,
                    borderColor:COLORS.gray20,
                    backgroundColor:item?.id == selectedOrdenAlfabetico ? COLORS.lightGreen : COLORS.transparentGray
                  }}
                  labelStyle={{
                    color:item?.id == selectedOrdenAlfabetico ? COLORS.black : COLORS.white,
                    ...FONTS.body3
                  }}
                  onPress={()=>{
                    setSelectedOrdenAlfabetico(item.id)
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