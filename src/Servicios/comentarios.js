import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const insertarComentario = async(idUsuario,contraseña)=>{
  const {data} = await axios.post(`${URL}/insertarComentarios?idUsuario=${idUsuario}&contrasena=${contrasena}&comentario{comentario}&idUsuario={valoracion}`)
}