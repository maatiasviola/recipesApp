import axios from 'axios'
const URL ="http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

const obtenerTresUltimasRecetas = async()=>{
  const {data} = await axios.get(`${URL}/ultimasTresRecetas`)
  return data
}

const valorarReceta = async(idUsuario,idReceta,valoracion) =>{
  console.log("VALORAR idUsuario: ",idUsuario," idReceta: ",idReceta," rating: ",valoracion)
  const {data} = await axios.post(`${URL}/insertarCalificacionValoracion?idUsuario=${idUsuario}&idReceta=${idReceta}&valoracion=${valoracion}`)
  console.log("SERVICIO DEVUELVE: ",data)
  return data
}

const validarNombreReceta  = async(nombreReceta,idUsuario)=>{
  console.log("Llega al servicio validacion receta:",nombreReceta)
  const {data} = await axios.get(`${URL}/validarNombre/${nombreReceta}/${idUsuario}`)
  console.log("Servicio devuelve:",data)
  return data
}

const multiplicarReceta = async(idReceta) =>{
  const {data} = await axios.get(`${URL}/modificarCantidadSimple/${idReceta}/1`)
  console.log("Servicio duplico: ",data)
  return data
}

const dividirReceta = async(idReceta) =>{
  const {data} = await axios.get(`${URL}/modificarCantidadSimple/${idReceta}/0`)
  console.log("Servicio dividió: ",data)
  return data
}

const obtenerValoracionRecetaUsuario = async(idUsuario,idReceta)=>{
  console.log("Llegan al servicio, idUsuario: ",idUsuario," y idReceta: ",idReceta)
  const {data} = await axios.get(`${URL}/getValoracionUsuarioReceta/${idUsuario}/${idReceta}`)
  console.log("Valoracion servicio: ",data)
  return data
}

const guardarEliminarReceta = async (idUsuario,idReceta) =>{
  const {data} = await axios.post(`${URL}/setUsuarioGuardoReceta/${idUsuario}/${idReceta}`)
  return data
}

const conocerRecetaGuardadaPorUsuario = async(idUsuario,idReceta)=>{
  const {data} = await axios.post(`${URL}/getUsuarioGuardoReceta/${idUsuario}/${idReceta}`)
  console.log("Servicio conocer si usuario guardo receta devuelve: ",data)
  console.log("TRES RECETAS: ",data)
  return data
}

const obtenerRecetasIntentar = async(idUsuario) =>{
  const {data} = await axios.get(`${URL}/getUsuarioGuardados/${idUsuario}`)
  console.log("Servicio recetas a intentar:",data)
  return data
}

const modificarRecetaCantidadPersonas = async(idReceta,cantidad) =>{
  const {data} = await axios.get(`${URL}/modificarCantidadPersonas/${idReceta}/${cantidad}`)
  console.log("Receta modificada personas: ",data)
  return data
}

const modificarRecetaCantidadPorciones = async(idReceta,cantidad) =>{
  const {data} = await axios.get(`${URL}/modificarCantidadPorciones/${idReceta}/${cantidad}`)
  console.log("Receta modificada porciones: ",data)
  return data
}

const modificarRecetaIngrediente = async(idReceta,idIngrediente,cantidad)=>{
  const {data} = await axios.get(`${URL}/modificarCantidadAvanzado/${idReceta}/${idIngrediente}/${cantidad}`)
  console.log("Receta modificada ingredientes:",data)
  return data
}

const eliminarReceta = async(idReceta)=>{
  const {data} = await axios.post(`${URL}/eliminarReceta/${idReceta}`)
  return data
}

export default {
  obtenerTresUltimasRecetas,
  obtenerRecetasIntentar,
  valorarReceta,
  validarNombreReceta,
  multiplicarReceta,
  dividirReceta,
  obtenerValoracionRecetaUsuario,
  guardarEliminarReceta,
  conocerRecetaGuardadaPorUsuario,
  modificarRecetaCantidadPersonas,
  modificarRecetaCantidadPorciones,
  modificarRecetaIngrediente,
  eliminarReceta
}