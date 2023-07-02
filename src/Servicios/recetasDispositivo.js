import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar receta
const guardarRecetaDispositivo = async (nuevaReceta) => {
  console.log("Receta que recibe servicio: ",nuevaReceta)
  try {
    // Obtener el arreglo existente de AsyncStorage
    const recetasModificadas = await AsyncStorage.getItem('recetasModificadas');
    let recetas = [];

    if (recetasModificadas !== null) {
      // Convertir la cadena de texto en un arreglo si existe
      recetas = JSON.parse(recetasModificadas);
    }

    // Agregar el nuevo objeto al arreglo
    recetas.push(nuevaReceta);

    // Guardar el arreglo actualizado en AsyncStorage
    await AsyncStorage.setItem('recetasModificadas', JSON.stringify(recetas));
  } catch (error) {
    console.log(error);
  }
};

// Recuperar recetas
const recuperarRecetasDispositivo = async () => {
  try {
    const recetasDispositivo = await AsyncStorage.getItem('recetasModificadas');
    if (recetasDispositivo !== null) {
      const recetas = JSON.parse(recetasDispositivo);
      return recetas;
    } else {
      return []; // Retorna un arreglo vacío si no se encuentra ningún valor en AsyncStorage
    }
  } catch (error) {
    console.log(error);
    return []; // Manejo de error, retorna un arreglo vacío
  }
};

const chequearRecetaExiste = async (idReceta) => {
  try {
    const recetasGuardadas = await AsyncStorage.getItem('recetasModificadas');
    if (recetasGuardadas) {
      const recipes = JSON.parse(recetasGuardadas);
      const recetaEncontrada = recipes.find((recipe) => recipe.idReceta === idReceta);
      return !!recetaEncontrada; // Devuelve true si se encontró la receta, de lo contrario, devuelve false
    }
  } catch (error) {
    console.log('Error al obtener las recetas del AsyncStorage:', error);
  }
  return false; // Devuelve false si ocurre un error o no se encuentra el arreglo de recetas
};

const eliminarReceta = async (idReceta) => {
  try {
    const recetasGuardadas = await AsyncStorage.getItem('recetasModificadas');
    if (recetasGuardadas) {
      let recipes = JSON.parse(recetasGuardadas);
      recipes = recipes.filter((recipe) => recipe.idReceta !== idReceta);
      await AsyncStorage.setItem('recetasModificadas', JSON.stringify(recipes));
      return true; // La receta se eliminó correctamente
    }
  } catch (error) {
    console.log('Error al eliminar la receta del AsyncStorage:', error);
  }
  return false; // Ocurrió un error al eliminar la receta
};


export default {
  guardarRecetaDispositivo,
  recuperarRecetasDispositivo,
  chequearRecetaExiste,
  eliminarReceta
}