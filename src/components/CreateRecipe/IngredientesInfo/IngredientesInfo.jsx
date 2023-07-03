import { Text, View } from 'react-native';
import TextButton from '../../TextButton';
import { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES } from '../../../constants';
import styles from './style';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import CardIngredienteSeleccionado from '../../CardIngredienteSeleccionado';
import ingredientesService from '../../../Servicios/ingredientes'

function IngredientesInfo({ 
  pagina, 
  setPagina, 
  nuevaRecetaIngredientes, 
  setNuevaRecetaIngredientes 
}) {
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
 
  const [unidades,setUnidades] = useState([])

  useEffect(()=>{
    const ingredientesMapped = ingredientesSeleccionados.map(ingrediente => {
      let ingredienteRecuperado = ingredientes.find(i=>i.key==ingrediente)
    
      return {
        ingrediente:{
          id: ingrediente,
          nombre:ingredienteRecuperado.value || ""
        },
        cantidad: 0,
        unidad: {},
      };
    });
    setNuevaRecetaIngredientes(ingredientesMapped)
    console.log("INGREDIENTES ACTUALIZADOS:",nuevaRecetaIngredientes)
  },[ingredientesSeleccionados])

  useEffect(() => {
    ingredientesService.obtenerIngredientes()
    .then(response => {
      const ingredientesMapped = response.map(item => ({
        key: item.id,
        value: item.nombre,
      }));
      setIngredientes(ingredientesMapped);
    })
    .catch(error => {
      console.error(error);
    });
    ingredientesService.obtenerUnidades()
      .then(response=>setUnidades(response))
      .catch(error=>console.log(error)) 
  }, []);

  const handleIngredientSelection = (values) => {
    setIngredientesSeleccionados(values);
  };

  const handleChangeIngrediente = (ingrediente, nuevaCantidad) => {
    console.log(ingrediente)
    const utilizadosActualizados = nuevaRecetaIngredientes.map((ingredienteExistente) => {
      if (ingredienteExistente.ingrediente.id === ingrediente.ingrediente.id) {
        return { ...ingredienteExistente, cantidad: nuevaCantidad };
      }
      return ingredienteExistente;
    });
    setNuevaRecetaIngredientes(utilizadosActualizados);
  }
 
    return (
    <>
      {/* Title */}
      <Text style={styles.containerTitle}>
        Crear Receta
      </Text>
      <View
        style={{
          flex: 1, paddingHorizontal: 20, paddingTop: 20
        }}
      >
        <MultipleSelectList
          setSelected={handleIngredientSelection}
          data={ingredientes}
          labelKey="value" // Mostrar la propiedad "value" como etiqueta en la lista
          save="key" // Guardar la propiedad "key"
          notFoundText="No existe el ingrediente"
          labelStyles={{ fontWeight: '900' }}
        />


      </View>
  
      {nuevaRecetaIngredientes?.map(ingrediente => {
        return (
          <CardIngredienteSeleccionado key={ingrediente.ingrediente.id}
            setNuevaRecetaIngredientes={setNuevaRecetaIngredientes}
            nuevaRecetaIngredientes={nuevaRecetaIngredientes}
            handleChangeIngrediente={handleChangeIngrediente}
            ingrediente={ingrediente}
            unidades={unidades} 
          />
        )
      })}
      {/* Botones */}
      <View style={styles.botonesContainer}>
        <TextButton
          value="Paso anterior"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20,
            flex:1
          }}
          onPress={()=>setPagina(pagina-1)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
        <TextButton
          value="Siguiente paso"
          containerStyle={{
            height:55,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            marginTop:20,
            flex:1
          }}
          onPress={()=>setPagina(pagina+1)}
          labelStyle={{
            ...FONTS.h3,
            color:COLORS.white
          }}
        />
      </View>
    </>
  )
}
export default IngredientesInfo;