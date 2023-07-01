import axios from 'axios'
const URL = "http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const validarRegistro = async (email,alias) =>{
    console.log("Llega al servicio email:",email," y alias:",alias)
    const {data} = await axios.post(`${URL}/signUp1?email=${email}&alias=${alias}`)
    console.log("Servicio devuelve: ",data)
    return data
}

{/*
const confirmarRegistro = async(idUsuario,nombre,contraseña,avatar)
    console.log("Llega al servicio: ")
    const {data} = await axios.post(`${URL}/signUp2?idUsuario={Id}&nombre={nombre}&contrasena={contrasena}`)
    return data
*/}

const cambiarContraseña = async(idUsuario,contrasenia)=>{
    const {data} = await axios.post(`${URL}/cambiarContrasena?idUsuario=${idUsuario}&contrasenaNueva=${contrasenia}`)
    return data
}

const recibirCodigoRecupero = async(email)=>{
    const {data} = await axios.post(`${URL}/mandarCodigo?email=${email}`)
    return data
}

const validarCodigo = async(email,codigo)=>{
    const {data} = await axios.post(`${URL}/validarCodigo?email=${email}&codigo=${codigo}`)
    return data
}

const login = async(email,password)=>{
    const {data} = await axios.get(`${URL}/login/${email}/${password}`)
    console.log("SERVICIO DEVUELVE: ",data)
    return data
}

export default {validarRegistro,cambiarContraseña,recibirCodigoRecupero,validarCodigo,login}