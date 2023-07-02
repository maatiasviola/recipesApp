import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const insertarComentario = async(idUsuario,idReceta,comentario)=>{
  const {data} = await axios.post(`${URL}/insertarCalificacionComentario?idUsuario=${idUsuario}&idReceta=${idReceta}&comentario=${comentario}`)
  console.log("Comentario creado: ",data)
  return data
}

export default {insertarComentario}