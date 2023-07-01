import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const enviarCodigo = async(email)=>{
  const {data} = await axios.post(`${URL}/mandarCodigo?email=${email}`)
  return data
}

const validarCodigo = async(email,codigo) => {
  const {data} = await axios.post(`${URL}/validarCodigo?email=${email}&codigo=${codigo}`)
  return data
}

const cambiarContraseña = async(email,contraseña,codigo)=>{
  const {data} = await axios.post(`${URL}/recuperarCuenta?email=${email}&contrasena=${contraseña}&codigo=${codigo}`)
  return data
}

export default {enviarCodigo,validarCodigo,cambiarContraseña}