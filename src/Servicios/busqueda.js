import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const buscarRecetaPorCategoria = async(idCategoria)=>{
  const {data} = await axios.get(`${URL}/buscarCategoria/${idCategoria}`)
  console.log("Recetas encontradas: ",data)
  return data
}

const buscarRecetaPorNombre = async(nombreReceta)=>{
  console.log("LLEGUE! ",nombreReceta)
  const {data} = await axios.get(`${URL}/buscarReceta/${nombreReceta}`)
  console.log("Recetas encontradas: ",data)
  return data
}

{/* Obtener Categorias */}

const obtenerCategorias = async () =>{
  const {data} = await axios.get(`${URL}/getCategorias`)
  console.log("Categorias devueltas: ",data)
  return data
}

export default {buscarRecetaPorCategoria,buscarRecetaPorNombre,obtenerCategorias}