import { useState } from "react"
import {View,StyleSheet,ScrollView} from 'react-native'
import DescripcionInfo from "../../components/CreateRecipe/DescripcionInfo/DescripcionInfo"
import NombreInfo from "../../components/CreateRecipe/NombreInfo/NombreInfo"
import IngredientesInfo from "../../components/CreateRecipe/IngredientesInfo/IngredientesInfo"
import PasosInfo from "../../components/CreateRecipe/PasosInfo/PasosInfo"
import { COLORS, SIZES } from "../../constants"

function CreacionReceta() {
  
  // Controlar que pagina estoy mostrando
  const [pagina,setPagina]=useState(0)

  // Datos nueva receta
  const [nuevaRecetaNombre,setNuevaRecetaNombre] = useState("")
  const [nuevaRecetaDescripcion,setNuevaRecetaDescripcion] = useState("")
  const [nuevaRecetaFoto,setNuevaRecetaFoto] = useState(null)
  const [nuevaRecetaPorciones,setNuevaRecetaPorciones]=useState("")
  const [nuevaRecetaPersonas,setNuevaRecetaPersonas]=useState("")
  const [nuevaRecetaCategoria,setNuevaRecetaCategoria]=useState("")
  const [nuevaRecetaIngredientes,setNuevaRecetaIngredientes]=useState([])
  const [nuevaRecetaPasos,setNuevaRecetaPasos]=useState([])
  
  const componentList=[
    <NombreInfo 
      pagina={pagina} setPagina={setPagina} 
      nuevaRecetaNombre={nuevaRecetaNombre} setNuevaRecetaNombre={setNuevaRecetaNombre}
      nuevaRecetaDescripcion={nuevaRecetaDescripcion} setNuevaRecetaDescripcion={setNuevaRecetaDescripcion}
      nuevaRecetaFoto={nuevaRecetaFoto} setNuevaRecetaFoto={setNuevaRecetaFoto}
      nuevaRecetaPorciones={nuevaRecetaPorciones} setNuevaRecetaPorciones={setNuevaRecetaPorciones}
      nuevaRecetaPersonas={nuevaRecetaPersonas} setNuevaRecetaPersonas={setNuevaRecetaPersonas}
      nuevaRecetaCategoria={nuevaRecetaCategoria} setNuevaRecetaCategoria={setNuevaRecetaCategoria}
      nuevaRecetaIngredientes={nuevaRecetaIngredientes} setNuevaRecetaIngredientes={setNuevaRecetaIngredientes}
      nuevaRecetaPasos={nuevaRecetaPasos} setNuevaRecetaPasos={setNuevaRecetaPasos}
    />,
    <DescripcionInfo
      pagina={pagina} setPagina={setPagina}
      nuevaRecetaDescripcion={nuevaRecetaDescripcion} setNuevaRecetaDescripcion={setNuevaRecetaDescripcion}
      nuevaRecetaFoto={nuevaRecetaFoto} setNuevaRecetaFoto={setNuevaRecetaFoto}
      nuevaRecetaPorciones={nuevaRecetaPorciones} setNuevaRecetaPorciones={setNuevaRecetaPorciones}
      nuevaRecetaPersonas={nuevaRecetaPersonas} setNuevaRecetaPersonas={setNuevaRecetaPersonas}
      nuevaRecetaCategoria={nuevaRecetaCategoria} setNuevaRecetaCategoria={setNuevaRecetaCategoria}
    />,
    <IngredientesInfo 
      pagina={pagina} setPagina={setPagina} 
      nuevaRecetaIngredientes={nuevaRecetaIngredientes} setNuevaRecetaIngredientes={setNuevaRecetaIngredientes}
    />,
    <PasosInfo
      pagina={pagina} setPagina={setPagina} 
      nuevaRecetaNombre={nuevaRecetaNombre} setNuevaRecetaNombre={setNuevaRecetaNombre}
      nuevaRecetaDescripcion={nuevaRecetaDescripcion} setNuevaRecetaDescripcion={setNuevaRecetaDescripcion}
      nuevaRecetaFoto={nuevaRecetaFoto} setNuevaRecetaFoto={setNuevaRecetaFoto}
      nuevaRecetaPorciones={nuevaRecetaPorciones} setNuevaRecetaPorciones={setNuevaRecetaPorciones}
      nuevaRecetaPersonas={nuevaRecetaPersonas} setNuevaRecetaPersonas={setNuevaRecetaPersonas}
      nuevaRecetaCategoria={nuevaRecetaCategoria} setNuevaRecetaCategoria={setNuevaRecetaCategoria}
      nuevaRecetaIngredientes={nuevaRecetaIngredientes} setNuevaRecetaIngredientes={setNuevaRecetaIngredientes}
      nuevaRecetaPasos={nuevaRecetaPasos} setNuevaRecetaPasos={setNuevaRecetaPasos}
    />
  ]

  return (
      <ScrollView style={styles.container}>
          {componentList[pagina]}
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