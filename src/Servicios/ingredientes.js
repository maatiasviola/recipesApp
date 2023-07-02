import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const obtenerIngredientes = async() =>{
  const {data} = await axios.get(`${URL}/getIngredientes`)
  console.log("Ingredientes servicio:",data)
  return data
}

export default {obtenerIngredientes}