import { useState } from "react"
import {View,StyleSheet,ScrollView} from 'react-native'
import DescripcionInfo from "../../components/Recipe/DescripcionInfo/DescripcionInfo"
import NombreInfo from "../../components/Recipe/NombreInfo/NombreInfo"
import IngredientesInfo from "../../components/Recipe/IngredientesInfo/IngredientesInfo"
import PasosInfo from "../../components/Recipe/PasosInfo/PasosInfo"
import { COLORS, SIZES } from "../../constants"

function CreacionReceta() {
  
  // Controlar que pagina estoy mostrando
  const [pagina,setPagina]=useState(0)

  // Datos nueva receta
  const [nuevaReceta,setNuevaReceta] = useState({
    nombre:"",
    descripcion:"",
    foto:"",
    porciones:"",
    cantidadPersonas:"",
    categoria:"",
    ingredientes:[],
    pasos:[]
  })
  
  const componentList=[
    <NombreInfo 
      pagina={pagina} setPagina={setPagina} 
      nuevaReceta={nuevaReceta} setNuevaReceta={setNuevaReceta}
    />,
    <DescripcionInfo
      pagina={pagina} setPagina={setPagina}
      nuevaReceta={nuevaReceta} setNuevaReceta={setNuevaReceta}
    />,
    <IngredientesInfo 
      pagina={pagina} setPagina={setPagina} 
      nuevaReceta={nuevaReceta} setNuevaReceta={setNuevaReceta}
    />,
    <PasosInfo
      pagina={pagina} setPagina={setPagina} 
      nuevaReceta={nuevaReceta} setNuevaReceta={setNuevaReceta} 
    />
  ]

  return (
      <ScrollView style={styles.container}>
        <View>
          {componentList[pagina]}
        </View>
      </ScrollView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.light,
    padding:SIZES.padding,
    textAlign:'center'
  },
  headerBar:{
    flexDirection:'row',
    top:SIZES.height > 800 ? 40 : 20,
    left:0,
    right:0,
    paddingHorizontal:SIZES.padding,
    zIndex:1
  },
  backButtonIconStyle:{
    width:25,
    height:25,
    tintColor:COLORS.black
  },
  backButtonContainerStyle:{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:COLORS.white
  },
})

export default CreacionReceta