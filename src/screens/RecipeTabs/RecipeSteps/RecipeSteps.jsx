// CSS & Constants
import styles from './styles'
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants"

// Services
import recetasDispositivoService from '../../../Servicios/recetasDispositivo'

// Components
import { Image, Text, View } from "react-native"
import LineDivider from "../../../components/LineDivider"
import RecipeStepCard from "../../../components/RecipeStepCard"
import TextButton from "../../../components/TextButton"
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../../components/IconButton'
import ModalPopUp from '../../../components/ModalPopUp'
import CarouselImagenes from '../../../components/CarouselImagenes'

const RecipeSteps = ({selectedRecipe}) =>{
  const navigation = useNavigation();

  const [recetaGuardadaDispositivo,setRecetaGuardadaDispositivo] = useState(false)

  const [selectedStep,setSelectedStep] = useState(null)
  const [stepModalVisible,setStepModalVisible] = useState(false)

  useEffect(()=>{
    recetasDispositivoService.chequearRecetaExiste(selectedRecipe.idReceta)
      .then(response=>{
        //console.log(response)
        if(response==true){
          setRecetaGuardadaDispositivo(true)
        }else{
          setRecetaGuardadaDispositivo(false)
        }
      })
      .catch(error=>console.log(error))
  },[])

  const handleGuardarReceta = () =>{
    recetasDispositivoService.guardarRecetaDispositivo(selectedRecipe)
      .then(()=>{
        //console.log("Receta guardada con exito!")
        setRecetaGuardadaDispositivo(true)
      })
      .catch(error=>console.log(error))
  }

  const handleEliminarReceta = () =>{
    recetasDispositivoService.eliminarReceta(selectedRecipe.idReceta)
      .then(response=>{
        //console.log(response)
        setRecetaGuardadaDispositivo(false)
      })
      .catch(error=>console.log(error))
  }

  return(
    <>
      <View style={styles.container}>
      <ModalPopUp
        visible={stepModalVisible} 
        setVisible={setStepModalVisible}
        titulo={selectedStep?.texto}  
      >
        <CarouselImagenes images={selectedStep?.multimedias}/>
      </ModalPopUp>
        {/* Header */}
        <View style={styles.header}>
          
          {/*Title */}
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>
              {selectedRecipe?.descripcion}
            </Text>
            <IconButton
            icon={recetaGuardadaDispositivo ? icons.desguardar : icons.guardar}
            iconStyle={{tintColor:COLORS.black}}
            containerStyle={{
              width:50,
              height:50,
              alignItems:'center',
              justifyContent:'center'
            }}
            onPress={recetaGuardadaDispositivo ? handleEliminarReceta: handleGuardarReceta}
          />
          </View>
          {/* Info */}
          <View style={styles.headerInfo}>
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center'
              }}
            >
              <Image 
                source={icons.servings} 
                style={styles.headerInfoIcon}
              />
              <Text style={styles.headerInfoText}>
                {selectedRecipe?.porciones} Porciones
              </Text>
            </View>
            
            <View style={styles.headerInfoIconContainer}>
              <Image 
                source={icons.star_filled} 
                style={styles.headerInfoIcon}
              />
              <Text style={styles.headerInfoText}>
                {selectedRecipe?.valoracionGeneral}
              </Text>
            </View>
          </View>

          {/* Chef card */}
          <View style={styles.chefCardContainer}>
            <Image 
              source={selectedRecipe?.fotoUsuario || images.defaultUser}
              style={styles.chefPhoto}
            />

            {/* Nombre Autor */}
            <View style={styles.authorContainer}>
              <Text style={styles.authorName}>
                {selectedRecipe?.nombreUsuario}
              </Text>
            </View>
            <TextButton
              value="Follow +"
              labelStyle={{
                ...FONTS.h3
              }}
              contentContainerStyle={{
                width:80,
                height:35,
                borderRadius:20
              }}
            />
          </View>
        </View>

        {/* Line Divider */}
        <LineDivider 
          lineStyle={{
            marginVertical:SIZES.radius,
            height:1
          }}
        />

        {/* Steps */}
        <View>
          {selectedRecipe?.pasos
            .map((item,index)=><RecipeStepCard 
                                setSelectedStep={setSelectedStep} 
                                setStepModalVisible={setStepModalVisible}
                                step={item} 
                                key={index}/>)
          }
        </View>
      </View>
    </>
  )
}

export default RecipeSteps