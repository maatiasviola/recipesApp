import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
const URL ="http://recetasfinal-master-production.up.railway.app/Recetas/Controller"

// Guardar receta
const guardarRecetaDispositivo = async (receta) => {
  try {
    const recetaJSON = JSON.stringify(receta);
    await AsyncStorage.setItem('receta', recetaJSON);
    console.log('Receta guardada correctamente');
  } catch (error) {
    console.log('Error al guardar la receta:', error);
  }
};

// Recuperar recetas
const recuperarRecetasDispositivo = async () => {
  try {
    const recetasJSON = await AsyncStorage.getItem('recetas');
    if (recetasJSON !== null) {
      const recetas = JSON.parse(recetasJSON);
      console.log('Recetas recuperadas:', recetas);
      return recetas;
    } else {
      console.log('No se encontraron recetas guardadas');
      return [];
    }
  } catch (error) {
    console.log('Error al recuperar las recetas:', error);
    return [];
  }
};

const obtenerTresUltimasRecetas = async()=>{
  const {data} = await axios.get(`${URL}/getAllUsuarios`)
  console.log("TRES RECETAS: ",data)
  return data
}

const obtenerRecetasIntentar = async(idUsuario) =>{
  const {data} = await axios.get(`/recetasIntentar/${idUsuario}`)
  return data
}

export default {
  guardarRecetaDispositivo,
  recuperarRecetasDispositivo,
  obtenerTresUltimasRecetas,
  obtenerRecetasIntentar
}